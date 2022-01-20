import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URLs } from 'src/app/utils/URLs';
import { map } from 'rxjs/operators';

import { SelectButtonGroupService } from '../../atoms/select-button-group/select-button-group.service';

@Injectable({
  providedIn: 'root',
})
export class FiltersService {
  filterNames: string[];
  constructor(private http: HttpClient, private selectButtonGroupService: SelectButtonGroupService) {
    this.selectButtonGroupService.filtersValue.subscribe((filtersValue) => {
      this.filterNames = [];
      filtersValue.forEach((value) => {
        if (value.isSelected === true) {
          this.filterNames.push(value.name);
        }
      });
      this.selectButtonGroupService.selectedFilterNames.next(this.filterNames);
    });
  }

  getFood(value: any, page: number = 1, limit: number = 10) {
    let searchParams = new HttpParams();
    searchParams = searchParams.append('category', value);
    searchParams = searchParams.append('page', `${page}`);
    searchParams = searchParams.append('limit', `${limit}`);

    return this.http
      .get<any>(URLs.filters, {
      params: searchParams,
    })
      .pipe(map((response) => response.data));
  }
}
