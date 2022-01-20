import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CheckboxComponent } from './checkbox.component';

describe('CheckboxComponent', () => {
  let component: CheckboxComponent;
  let fixture: ComponentFixture<CheckboxComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [CheckboxComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should click change value on checkbox ', () => {
    const checkBox = fixture.debugElement.query(By.css('input')).nativeElement as HTMLInputElement;

    expect(checkBox.checked).toBeFalse();
    checkBox.click();
    expect(checkBox.checked).toBeTruthy();
  });

  it('Should emit event when clicked', () => {
    const checkbox = fixture.debugElement.query(By.css('input')).nativeElement as HTMLInputElement;
    const emitSpy = spyOn(component.onChange, 'emit');
    checkbox.checked = true;

    checkbox.click();
    expect(emitSpy).toHaveBeenCalledWith(true);
  });
});
