import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { TabComponent } from '../tab/tab.component';
import { TabGroupComponent } from './tab-group.component';

@Component({
  selector: 'app-mock-tab',
  template: ` <app-tab-group (onTabClick)="selectedTab = $event">
    <app-tab label="first"> Content 1</app-tab>
    <app-tab label="second"> Content 2</app-tab>
    <app-tab label="third"> Content 3</app-tab>
  </app-tab-group>`,
})
export class MockTabComponent {
  selectedTab: TabComponent;
}

describe('TabGroupComponent', () => {
  let component: MockTabComponent;
  let fixture: ComponentFixture<MockTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TabGroupComponent, TabComponent, MockTabComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MockTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set the first tab child as active after content initialization', () => {
    const tabDebugElement = fixture.debugElement.query(By.directive(TabComponent));

    expect(tabDebugElement.nativeElement.firstChild.classList).toMatch('tab--active');
  });

  it('should only have one active tab', () => {
    const tabDebugElements = fixture.debugElement.queryAll(By.directive(TabComponent));

    const activeTabs = tabDebugElements.filter((element) => element.nativeElement.firstChild.classList.contains('tab--active'));

    expect(activeTabs.length).toBe(1);
  });

  it('should handle header click', () => {
    const testComponent = fixture.debugElement.componentInstance;
    const navBar = fixture.debugElement.nativeElement.querySelector('.tab-group__navbar');
    const tabs = fixture.debugElement.queryAll(By.directive(TabComponent));

    navBar.firstChild.click();
    fixture.detectChanges();
    expect(tabs[0].nativeElement.firstChild.classList).toMatch('tab--active');
    expect(testComponent.selectedTab.label).toMatch('first');

    navBar.children[1].click();
    fixture.detectChanges();
    expect(tabs[1].nativeElement.firstChild.classList).toMatch('tab--active');
    expect(tabs[0].nativeElement.firstChild.classList).not.toMatch('tab--active');
    expect(testComponent.selectedTab.label).toMatch('second');
  });
});
