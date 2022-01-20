import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { SelectButton } from '../interface/select-button';

@Injectable({
  providedIn: 'root',
})
export class SelectButtonGroupService {
  filters: SelectButton[] = [
    { name: 'breakfast', isSelected: false },
    { name: 'lunch', isSelected: false },
    { name: 'dinner', isSelected: false },
    { name: 'pasta', isSelected: false },
    { name: 'seafood', isSelected: false },
    { name: 'chicken', isSelected: false },
    { name: 'dessert', isSelected: false },
    { name: 'mexican', isSelected: false },
    { name: 'garnish', isSelected: false },
    { name: 'pizza', isSelected: false },
    { name: 'soup', isSelected: false },
    { name: 'beef', isSelected: false },
    { name: 'turkey', isSelected: false },
    { name: 'burger', isSelected: false },
    { name: 'salad', isSelected: false },
  ];

  clickedFilter: Subject<SelectButton> = new Subject<SelectButton>();
  filtersValue: Subject<SelectButton[]> = new Subject<SelectButton[]>();
  selectedFilterNames: Subject<String[]> = new Subject<String[]>();

  constructor() {}
}
