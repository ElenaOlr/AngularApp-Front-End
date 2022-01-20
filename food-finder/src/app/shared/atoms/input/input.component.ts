import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import appText from '../../../utils/AppText.json';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit, OnChanges {
  @Input() type = 'text';
  @Input() placeholder: string;
  @Input() inputValue: string = '';
  @Input() errorIconMesage: string = appText.altMessages.errorIconMessage;
  @Input() set control(value: FormControl) {
    if (this.formControl !== value) {
      this.formControl = value;
    }
  }
  @Input() message: string;
  @Input() showErrorMessage: boolean = false;
  errorMessage: string;

  formControl: FormControl;

  ngOnInit(): void {}

  ngOnChanges() {
    if (this.showErrorMessage) {
      this.errorMessage = this.message;
      this.showErrorMessage = false;
    }
  }

  validateInput(): void {
    this.errorMessage = this.message;
  }
}
