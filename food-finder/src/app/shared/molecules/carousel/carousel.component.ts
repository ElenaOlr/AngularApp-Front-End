import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
  ViewEncapsulation,
  OnInit,
  NgZone,
  Input,
} from '@angular/core';
import { SwiperComponent } from 'swiper/angular';
import SwiperCore, { Keyboard, EffectCoverflow, Swiper } from 'swiper';
import { take } from 'rxjs/operators';
import { FoodDataService } from './foodData.service';
import CardData from '../interface/cardData';
import { FavoritesService } from '../services/auth/favorites.service';
import { Details } from '../interface/details';
import { SelectButtonGroupService } from '../../atoms/select-button-group/select-button-group.service';
import { FiltersService } from '../services/filters.service';

SwiperCore.use([Keyboard, EffectCoverflow]);

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CarouselComponent implements AfterViewInit, OnInit {
  @ViewChild(SwiperComponent, { read: ElementRef }) swiper: ElementRef;
  @Input() cardsToFetch = 10;
  @Input() maxPrevCards = 1;
  @Input() page = 1;
  @Input() favoriteList: Details[];
  filtering: boolean = false;
  cards: CardData[];
  dislikeList: String[] = [];
  isFetching = false;
  isLoading = false;
  filterNames: string[];
  canSlidePrev = true;

  constructor(
    private foodData: FoodDataService,
    private ngZone: NgZone,
    private favoritesService: FavoritesService,
    private selectButtonGroupService: SelectButtonGroupService,
    private filtersService: FiltersService,
  ) {}

  ngOnInit() {
    this.isLoading = true;

    this.foodData.getFoods(this.cardsToFetch).subscribe((data) => {
      this.isLoading = false;
      this.cards = data;
    });

    this.selectButtonGroupService.selectedFilterNames.subscribe((el: any) => {
      this.filterNames = el;
      this.filtersService.getFood(el).subscribe((data: any) => {
        this.filtering = true;
        this.page = 1;

        if (data.length === 0) {
          this.filtering = false;
          this.foodData.getFoods(this.cardsToFetch).subscribe((data) => {
            this.isLoading = false;
            this.cards = data;
          });
        } else {
          this.cards = data;
          this.isLoading = false;
        }
      });
    });
  }

  ngAfterViewInit(): void {
    this.waitForTransition();
  }

  // Debounce transition and load aditional cards;
  waitForTransition() {
    const { swiper } = this.swiper.nativeElement;
    swiper.on('slideChangeTransitionStart', () => {
      this.allowSlide(swiper, false);
    });

    swiper.on('slideChangeTransitionEnd', () => {
      this.allowSlide(swiper, true);
      if (swiper.progress > 0.33) {
        this.addCards();
      }
      if (swiper.previousIndex < swiper.activeIndex) {
        this.ngZone.run(() => {
          if (swiper.activeIndex > this.maxPrevCards) {
            this.cards.shift();
            swiper.activeIndex = swiper.previousIndex;
          }
        });
      }
    });
  }

  skip() {
    const { swiper } = this.swiper.nativeElement;
    swiper.slideNext();
  }

  addCards() {
    if (!this.isFetching) {
      this.isFetching = true;
      this.foodData.foodSubject.pipe(take(1)).subscribe((data: CardData[]) => {
        this.dislikeList.forEach((dislikeEl) => {
          data = data.filter((el) => el.name !== dislikeEl);
        });
        this.ngZone.run(() => {
          this.cards.push(...data);
          this.isFetching = false;
        });
      });
      if (this.filtering === false) {
        this.foodData.addFoods(this.cardsToFetch);
      } else {
        this.page += 1;
        this.foodData.newAddFoods(this.filterNames, this.page);
      }
    }
  }

  allowSlide(swiper: Swiper, allow: boolean) {
    swiper.allowSlideNext = allow;
    swiper.allowTouchMove = allow;
    swiper.allowSlidePrev = allow;
  }

  setSlideVisibility(index: number) {
    const { activeIndex } = this.swiper.nativeElement.swiper;
    if (activeIndex > 0 && index > activeIndex + 1) {
      return '0';
    }
    return '1';
  }

  like(card: number) {
    const { swiper } = this.swiper.nativeElement;
    this.foodData.setLikedCard(this.cards[card]);
    swiper.slideNext();
  }

  dislike(index: number) {
    const { swiper } = this.swiper.nativeElement;
    this.dislikeList.push(this.cards[index].name);
    this.cards.forEach((card) => {
      if (card.name === this.cards[index].name) {
        const cardElement = swiper.slides[index] as HTMLElement;
        const disabledClass = 'card--disabled';
        if (!cardElement.classList.contains(disabledClass)) {
          cardElement.classList.add(disabledClass);
          this.dislikeList = this.dislikeList.filter((el) => el !== card.name);
        } else cardElement.classList.remove(disabledClass);
      }
    });
    swiper.slideNext();
  }

  addToFavorites(card: any) {
    const { swiper } = this.swiper.nativeElement;

    this.favoritesService.addToFavorites(card).subscribe((res: any) => {
      const foodItem: Details = {
        id: res.item._id,
        foodId: card._id,
        name: card.name,
        price: card.price,
        quantity: card.quantity,
        restaurant: card.restaurant,
        img: card.img,
        category: card.category,
        link: card.link,
      };
      this.favoritesService.favorites.next(foodItem);
    });

    swiper.slideNext();
  }
}
