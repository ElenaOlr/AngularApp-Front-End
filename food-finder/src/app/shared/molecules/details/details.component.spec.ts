import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsComponent } from './details.component';

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;
  const details = {
    name: 'Pork steak and potatoes',
    quantity: 420,
    type: 'Dinner',
    resturant: 'Mac',
    price: 69.99,
    img: '../../../../assets/img/IMG_4257.jpg',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    component.details = details;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Should properly initialize the details', () => {
    expect(component.details.name).toBe(details.name);
    expect(component.details.quantity).toBe(details.quantity);
    expect(component.details.type).toBe(details.type);
    expect(component.details.resturant).toBe(details.resturant);
    expect(component.details.price).toBe(details.price);
    expect(component.details.img).toBe(details.img);
  });
});
