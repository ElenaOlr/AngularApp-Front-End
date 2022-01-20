import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
})
export class CheckboxComponent implements OnInit {
  @Input() label: string = '';
  @Input() checked: boolean;

  @Output() onChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  ngOnInit(): void {}

  onChangeCheckbox() {
    this.checked = !this.checked;
    this.onChange.emit(this.checked);
  }
}
