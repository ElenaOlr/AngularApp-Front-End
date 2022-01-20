import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectButtonComponent } from './select-button.component';

describe('SelectButtonComponent', () => {
  let component: SelectButtonComponent;
  let fixture: ComponentFixture<SelectButtonComponent>;
  const testSelectedButton = {
    name: 'Breakfest',
    isSelected: false,
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectButtonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectButtonComponent);
    component = fixture.componentInstance;
    component.selectedButton = testSelectedButton;
    fixture.detectChanges();
  });

  it('Should create component', () => {
    expect(component).toBeTruthy();
  });

  it('Should properly initialize the select button', () => {
    expect(component.selectedButton.name).toBe('Breakfest');
    expect(component.selectedButton.isSelected).toBe(false);
    expect(component.size).toBe('medium');
    expect(component.disabled).toBe(false);
  });
});
