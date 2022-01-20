import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputComponent } from './input.component';

describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the validateInput method on focusout event', () => {
    const spyComponent = spyOn(component, 'validateInput');
    const input = fixture.debugElement.nativeElement.querySelector('.container__input');
    input.dispatchEvent(new Event('focusout'));
    fixture.detectChanges();
    expect(spyComponent).toHaveBeenCalled();
  });
});
