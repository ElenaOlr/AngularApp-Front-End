import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { KeyValue } from '@angular/common';
import appText from '../../../utils/AppText.json';
import { FoodDataService } from '../carousel/foodData.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  appText = appText;
  @Input() customClass: string;
  @Input() details: any;
  @Input() mime: string = 'data:image/jpeg;base64';
  @Output() handleDeleteButtonClick: EventEmitter<any> = new EventEmitter<any>();

  constructor(private FoodData: FoodDataService) {}

  ngOnInit(): void {}

  public keepOriginalOrder = (a: KeyValue<string, any>, b: KeyValue<string, any>): number => 0;

  shouldDisplayField(value: string) {
    const fieldToDisplay = ['quantity', 'restaurant', 'price'];
    return fieldToDisplay.indexOf(value) !== -1;
  }

  getUnit(key: string) {
    if (key === 'quantity') {
      return this.appText.details.units.quantity;
    }
    if (key === 'price') {
      return this.appText.details.units.price;
    }
    return false;
  }

  onDeleteButtonClick(details: any) {
    this.handleDeleteButtonClick.emit({ event: 'click', details });
  }
}
