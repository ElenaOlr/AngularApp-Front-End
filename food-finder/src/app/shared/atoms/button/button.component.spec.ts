import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should be created with modifier default if no modifier attribute is specified', () => {
    expect(component.modifier).toBe('default');
  });

  it('Should emit event when clicked', () => {
    const testComponent = fixture.debugElement.componentInstance;
    const buttonDebugElement = fixture.debugElement.query(By.css('button'));

    const onButtonClickSpy = spyOn(testComponent.onButtonClick, 'emit');
    buttonDebugElement.nativeElement.click();
    expect(onButtonClickSpy).toHaveBeenCalledWith();
  });

  it('Should not handle click if disabled', () => {
    const testComponent = fixture.debugElement.componentInstance;
    const buttonDebugElement = fixture.debugElement.query(By.css('button'));

    buttonDebugElement.nativeElement.setAttribute('disabled', true);
    fixture.detectChanges();

    spyOn(testComponent, 'handleButtonClick');
    buttonDebugElement.nativeElement.click();
    expect(testComponent.handleButtonClick).not.toHaveBeenCalledWith();
  });

  // List of all button modifiers
  // Will loop through them in the following tests
  const modifiersToTest = [
    'default',
    'gradient',
    'wide',
    'tall',
    'square',
    'round',
    'rounder',
    'dashed',
    'light',
    'regular',
    'semibold',
    'image-right',
    'text-image',
    'disabled',
  ];

  it('Should change class based on modifier attribute changes', () => {
    modifiersToTest.forEach((modifier) => {
      const testComponent = fixture.debugElement.componentInstance;
      testComponent.modifier = modifier;
      fixture.detectChanges();

      const buttonDebugElement = fixture.debugElement.query(By.css('button'));
      expect(buttonDebugElement.nativeElement.classList).toMatch(`button--${modifier}`);
    });
  });

  it('Should not clear previously defined classes when a new class is added', () => {
    modifiersToTest.forEach((modifier) => {
      const testComponent = fixture.debugElement.componentInstance;
      testComponent.modifier = modifier;
      fixture.detectChanges();

      const buttonDebugElement = fixture.debugElement.query(By.css('button'));
      buttonDebugElement.nativeElement.classList.add('custom-class');

      fixture.detectChanges();
      expect(buttonDebugElement.nativeElement.classList).toMatch(`button--${modifier}`);
    });
  });
});
