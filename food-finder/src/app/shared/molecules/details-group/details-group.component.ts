import { Component, Input, OnInit } from '@angular/core';
import { FoodDataService } from '../carousel/foodData.service';
import { FavoritesService } from '../services/auth/favorites.service';
import { Details } from '../interface/details';

@Component({
  selector: 'app-details-group',
  templateUrl: './details-group.component.html',
  styleUrls: ['./details-group.component.scss'],
})
export class DetailsGroupComponent implements OnInit {
  @Input() detailsGroup: Details[];

  constructor(private favoritesService: FavoritesService, private foodDataService: FoodDataService) {}

  ngOnInit(): void {}

  deleteFood(event: any) {
    const food = this.detailsGroup.find((item) => item.id === event.details.id);

    this.detailsGroup = this.detailsGroup.filter((item) => {
      return item.id !== event.details.id;
    });

    if (food?.hasOwnProperty('foodId')) {
      this.favoritesService.deleteFromFavorites(event.details.id);
      this.favoritesService.foodList = this.detailsGroup;
    } else {
      this.foodDataService.foodList = this.detailsGroup;
      let deleteLocal = JSON.parse(sessionStorage.getItem('likedGroup')!);
      for (let index of deleteLocal.keys()) {
        if (deleteLocal[index]._id == event.details.id) deleteLocal.splice(index, 1);
      }
      sessionStorage.setItem('likedGroup', JSON.stringify(deleteLocal));
    }
  }
}
