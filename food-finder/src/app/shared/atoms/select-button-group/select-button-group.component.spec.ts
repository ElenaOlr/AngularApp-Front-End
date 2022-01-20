import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectButtonGroupComponent } from './select-button-group.component';

describe('SelectButtonGroupComponent', () => {
  let component: SelectButtonGroupComponent;
  let fixture: ComponentFixture<SelectButtonGroupComponent>;
  const testSelectButtonGroup = [
    { name: 'Breakfest', isSelected: false },
    { name: 'Dinner', isSelected: false },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectButtonGroupComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectButtonGroupComponent);
    component = fixture.componentInstance;
    component.selectButtonGroup = testSelectButtonGroup;
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should properly initialize the select button Group', () => {
    component.selectButtonGroup.forEach((e) => {
      expect(e.name).toBeInstanceOf(String);
      expect(e.isSelected).toBeInstanceOf(Boolean);
    });
  });

  it('Should be able to change the isSelected of a single element', () => {
    const value = true;

    component.onPress(value, component.selectButtonGroup[0]);

    expect(component.selectButtonGroup[0].isSelected).toBe(true);
    expect(component.selectButtonGroup[1].isSelected).toBe(false);
  });
});
