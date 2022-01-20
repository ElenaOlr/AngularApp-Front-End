import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { FoodDataService } from '../carousel/foodData.service';
import { Details } from '../interface/details';
import { FavoritesService } from '../services/auth/favorites.service';
import appText from '../../../utils/AppText.json';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.scss'],
})
export class ControlPanelComponent implements OnInit, OnDestroy {
  favoritesGroup: Details[];
  @Input() likedGroup: Details[] = [];
  cards: Details[];
  subscribers: Subscription[] = [];
  appText = appText;
  @Output() handleFavoritesGroup = new EventEmitter<Details[]>();

  constructor(private foodData: FoodDataService, private favoritesService: FavoritesService) {}

  ngOnInit() {
    let liked = sessionStorage.getItem('likedGroup');
    if (liked) {
      this.likedGroup = JSON.parse(liked);
    }
    this.subscribers.push(
      this.foodData.likedCard.subscribe((data) => {
        this.likedGroup.push(data);
        this.foodData.foodList.push(data);

        sessionStorage.setItem('likedGroup', JSON.stringify(this.likedGroup));
        sessionStorage.getItem('likedGroup');
      }),
    );
    this.subscribers.push(
      this.favoritesService.getFavFoodsUser().subscribe((res: any) => {
        this.favoritesGroup = res;
        this.handleFavoritesGroup.emit(this.favoritesGroup);
      }),
    );
    this.subscribers.push(
      this.favoritesService.favorites$.subscribe((res: any) => {
        this.favoritesGroup = this.favoritesService.foodList;
        this.favoritesGroup.push(res);
        this.handleFavoritesGroup.emit(this.favoritesGroup);
      }),
    );
  }

  ngOnDestroy() {
    if (this.subscribers) {
      this.subscribers.forEach((subscriber) => subscriber.unsubscribe());
    }
  }
}
