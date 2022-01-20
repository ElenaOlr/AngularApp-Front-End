import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsGroupComponent } from './details-group.component';

describe('DetailsGroupComponent', () => {
  let component: DetailsGroupComponent;
  let fixture: ComponentFixture<DetailsGroupComponent>;
  const detailsGroup = [
    {
      name: 'Pork steak and potatoes',
      quantity: 420,
      type: 'Dinner',
      resturant: 'Mac',
      price: 69.99,
      img: '../../../../assets/img/IMG_4257.jpg',
    },
    {
      name: 'Pork steak and potatoes2',
      quantity: 69,
      type: 'Breakfest',
      resturant: 'Mac2',
      price: 169.99,
      img: '../../../../assets/img/IMG_4257.jpg',
    },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailsGroupComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsGroupComponent);
    component = fixture.componentInstance;
    component.detailsGroup = detailsGroup;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
