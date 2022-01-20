import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss'],
})
export class IconButtonComponent implements OnInit {
  @Input() icon: string;
  @Input() customClass: string;
  @Output() onClickEvent = new EventEmitter<EventTarget | null>();

  ngOnInit(): void {}

  handleClick(event: Event) {
    this.onClickEvent.emit(event.target);
  }
}
