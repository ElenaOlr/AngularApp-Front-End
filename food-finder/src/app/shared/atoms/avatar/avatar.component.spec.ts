import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AvatarComponent } from './avatar.component';

describe('AvatarComponent', () => {
  let component: AvatarComponent;
  let fixture: ComponentFixture<AvatarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvatarComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvatarComponent);
    component = fixture.componentInstance;
    component.fullName = 'Maria Pop';
    fixture.detectChanges();
  });

  it('Should click the avatar component', fakeAsync(() => {
    const buttonElement = fixture.debugElement.query(By.css('.avatar'));
    spyOn(component, 'handleClick');
    buttonElement.triggerEventHandler('click', null);

    tick();
    expect(component.handleClick).toHaveBeenCalled();
  }));
});
