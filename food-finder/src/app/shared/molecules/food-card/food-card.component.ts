import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
  SimpleChanges,
} from '@angular/core';
import appText from '../../../utils/AppText.json';
import { Details } from '../interface/details';

@Component({
  selector: 'app-food-card',
  templateUrl: './food-card.component.html',
  styleUrls: ['./food-card.component.scss'],
})
export class FoodCardComponent implements OnInit {
  @Input() id: string;
  @Input() title: string;
  @Input() image: string;
  @Input() mime: string = 'data:image/jpeg;base64';
  @Input() price: number;
  @Input() quantity: number;
  @Input() description: string;
  @Input() favoriteList: Details[];
  @Output() handleButtonClick = new EventEmitter();
  @Output() handleLikeButtonClick = new EventEmitter();
  @Output() handleFavoriteButtonClick = new EventEmitter();
  @Output() handleDislikeClick = new EventEmitter();
  clicked: boolean = false;
  @Input() clickedFavorite: boolean = false;
  appText = appText;

  @ViewChild('card') card: ElementRef;

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
    if (!this.favoriteList || !changes.favoriteList) {
      return;
    }

    changes.favoriteList.currentValue.find((value: any) => {
      return this.description === value.name
        ? (this.clickedFavorite = true)
        : (this.clickedFavorite = false);
    });
  }

  onButtonClick() {
    this.handleButtonClick.emit('click');
  }

  onLikeButtonClick() {
    this.removeDislikeClass();
    this.handleLikeButtonClick.emit('click');
    if (this.clicked === true) return;
    this.clicked = !this.clicked;
  }

  onFavoriteButtonClick() {
    this.removeDislikeClass();
    this.handleFavoriteButtonClick.emit('click');
    if (this.clickedFavorite) return;
    this.clickedFavorite = !this.clickedFavorite;
  }

  onDislikeButtonClick() {
    this.handleDislikeClick.emit('click');
  }

  removeDislikeClass(dislikedClass: string = 'card--disabled') {
    const cardSlide = this.card.nativeElement.parentNode.parentNode;
    if (<HTMLElement>cardSlide.classList.contains(dislikedClass)) {
      cardSlide.classList.remove(dislikedClass);
      console.log('here');
    }
  }
}
