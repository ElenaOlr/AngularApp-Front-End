import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SelectButton } from '../interface/select-button';
import { SelectButtonSize } from '../interface/select-button-size';
import { SelectButtonGroupService } from '../select-button-group/select-button-group.service';

@Component({
  selector: 'app-select-button',
  templateUrl: './select-button.component.html',
  styleUrls: ['./select-button.component.scss'],
})
export class SelectButtonComponent implements OnInit {
  @Input() size: SelectButtonSize = SelectButtonSize.medium;
  @Input() selectedButton: SelectButton;
  @Input() disabled: boolean = false;

  constructor(private selectButtonGroupService: SelectButtonGroupService) {}

  ngOnInit(): void {}

  onCheckboxChange() {
    this.selectedButton.isSelected = !this.selectedButton.isSelected;
    this.selectButtonGroupService.clickedFilter.next(this.selectedButton);
  }

  public get class() {
    const primary = this.selectedButton.isSelected ? 'select-button--checked' : '';
    const disabled = this.disabled ? 'select-button--disabled' : '';
    return ['select-button', `select-button--${this.size}`, primary, disabled];
  }
}
