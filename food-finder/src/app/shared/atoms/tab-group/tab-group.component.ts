import { AfterContentInit,
  Component,
  ContentChildren,
  QueryList,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tab-group',
  templateUrl: './tab-group.component.html',
  styleUrls: ['./tab-group.component.scss'],
})
export class TabGroupComponent implements AfterContentInit {
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;

  @Output() onTabClick: EventEmitter<TabComponent> = new EventEmitter<TabComponent>();

  @ViewChild('inkBar') inkBar: ElementRef;

  ngAfterContentInit() {
    if (this.tabs.length > 0) {
      const activeTabs = this.tabs.filter((tab) => tab.active);
      if (activeTabs.length === 0) {
        this.selectTab(this.tabs.first);
      }
    }
  }

  selectTab(tab: TabComponent) {
    this.tabs.toArray().forEach((tabEl) => {
      tabEl.active = false;
    });
    tab.active = true;
    this.onTabClick.emit(tab);
  }

  moveInkBar(elementIndex: number) {
    this.inkBar.nativeElement.setAttribute('style', `left:${100 * elementIndex}%`);
  }
}
