import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URLs } from 'src/app/utils/URLs';
import { Observable, Subject } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Details } from '../../interface/details';
import { AuthService } from './auth.service';

@Injectable()
export class FavoritesService {
  favorites = new Subject<Details>();
  favorites$ = this.favorites.asObservable();
  foodList: any = [];
  token = '';

  constructor(private http: HttpClient, public authService: AuthService) {}

  getFavFoodsUser(): Observable<any> {
    if (this.authService.hasGoogleCookie()) {
      this.authService.getOpenIDToken().subscribe((res) => {
        this.token = res;
      });
      if (this.token) {
        return this.http.get(`${URLs.getFavFoodsSoc}/${this.token}`).pipe(
          map((res: any) => {
            this.foodList = res.foodList;
            return this.foodList;
          }),
        );
      }
    }
    return this.http.get(URLs.getFavFoodsUser, { withCredentials: true }).pipe(
      map((res: any) => {
        this.foodList = res.foodList;
        return this.foodList;
      }),
    );
  }

  addToFavorites(card: any): Observable<any> {
    if (this.authService.hasGoogleCookie() && this.token) {
      return this.http.post(`${URLs.addToFavoritesSocial}/` + `${card._id}`, { token: this.token });
    }
    return this.http.post(`${URLs.addToFavoritesUser}/${card._id}`, {}, { withCredentials: true });
  }

  deleteFromFavorites(id: string) {
    if (this.authService.hasGoogleCookie() && this.token) {
      this.authService.getOpenIDToken().subscribe((res) => (this.token = res));
      this.http
        .request('DELETE', `${URLs.deleteFavFoodsSoc}/${id}`, { body: { token: this.token } })
        .pipe(
          catchError((err) => {
            console.error('Could not delete from favorites');
            throw err;
          }),
        )
        .subscribe();
      return;
    }
    this.http
      .delete(`${URLs.deleteFavFoodsUser}/${id}`, { withCredentials: true })
      .pipe(
        catchError((err) => {
          console.log('Could not delete from favorites');
          throw err;
        }),
      )
      .subscribe();
  }
}
