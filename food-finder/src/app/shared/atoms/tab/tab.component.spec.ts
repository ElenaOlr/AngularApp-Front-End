import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabComponent } from './tab.component';

describe('TabComponent', () => {
  let component: TabComponent;
  let fixture: ComponentFixture<TabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TabComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be hidden if active input value is false', () => {
    const testComponent = fixture.debugElement.componentInstance;
    testComponent.active = false;
    fixture.detectChanges();
    const tabDebugElement = fixture.debugElement.nativeElement.querySelector('div.tab--hidden');
    expect(tabDebugElement.classList).toMatch('tab--hidden');
  });

  it('should be visible if active input value is true', () => {
    const testComponent = fixture.debugElement.componentInstance;
    testComponent.active = true;
    fixture.detectChanges();
    const tabDebugElement = fixture.debugElement.nativeElement.querySelector('div.tab--active');
    expect(tabDebugElement.classList).toMatch('tab--active');
  });
});
