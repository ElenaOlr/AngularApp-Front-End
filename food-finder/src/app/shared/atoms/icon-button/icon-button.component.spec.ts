import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { IconButtonComponent } from './icon-button.component';

describe('IconButtonComponent', () => {
  let component: IconButtonComponent;
  let fixture: ComponentFixture<IconButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IconButtonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should have a defined component', () => {
    expect(component).toBeDefined();
  });

  it('Should handle Icon Button click ', fakeAsync(() => {
    const buttonElement = fixture.debugElement.query(By.css('.button'));
    spyOn(component, 'handleClick');
    buttonElement.triggerEventHandler('click', null);
    tick();
    expect(component.handleClick).toHaveBeenCalled();
  }));
});
