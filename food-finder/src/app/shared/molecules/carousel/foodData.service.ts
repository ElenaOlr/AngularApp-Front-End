import { Injectable, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { URLs } from '../../../utils/URLs';
import CardData from '../interface/cardData';
import { Details } from '../interface/details';
import { FiltersService } from '../services/filters.service';

@Injectable()
export class FoodDataService {
  constructor(private httpClient: HttpClient, private filtersService: FiltersService) {}

  foodSubject = new Subject<CardData[]>();

  likedCard = new Subject<Details>();
  foodList: Details[] = [];

  getFoods(size: number): Observable<any> {
    return this.httpClient.get(URLs.randomFood + size).pipe(
      catchError(() => {
        console.error("Couldn't get food data");
        return [];
      }),
      map((result: any) => result.data),
    );
  }

  addFoods(size: number) {
    this.getFoods(size).subscribe((result) => {
      this.foodSubject.next(result);
    });
  }

  newAddFoods(el: any, page: number) {
    this.filtersService.getFood(el, page).subscribe((result) => {
      this.foodSubject.next(result);
    });
  }

  setLikedCard(card: any) {
    card.id = card._id;
    this.likedCard.next(card);
  }
}
