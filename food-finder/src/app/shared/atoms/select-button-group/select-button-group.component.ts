import { Component, OnInit } from '@angular/core';
import { SelectButton } from '../interface/select-button';
import { SelectButtonGroupService } from './select-button-group.service';

@Component({
  selector: 'app-select-button-group',
  templateUrl: './select-button-group.component.html',
  styleUrls: ['./select-button-group.component.scss'],
})
export class SelectButtonGroupComponent implements OnInit {
  selectButtonGroup: SelectButton[] = [];

  constructor(private selectButtonGroupService: SelectButtonGroupService) {
    this.selectButtonGroupService.clickedFilter.subscribe((status: SelectButton) => {
      this.selectButtonGroup.find((v) => v.name === status.name)!.isSelected = status.isSelected;
      this.selectButtonGroupService.filtersValue.next(this.selectButtonGroup);
    });
  }

  ngOnInit(): void {
    this.selectButtonGroup = this.selectButtonGroupService.filters;
  }
}
