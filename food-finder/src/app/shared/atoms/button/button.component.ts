import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() label: string;
  @Input() modifier: string = 'default';
  @Input() image?: string;

  @Output() onButtonClick: EventEmitter<void> = new EventEmitter<void>();

  ngOnInit(): void {
    if (this.image) {
      this.modifier += ' text-image';
    }
  }

  handleButtonClick() {
    this.onButtonClick.emit();
  }

  getButtonClass() {
    let buttonClass = 'button ';
    const modifierList = this.modifier.split(' ');

    modifierList.forEach((modifier) => {
      buttonClass += `button--${modifier} `;
    });

    return buttonClass;
  }
}
