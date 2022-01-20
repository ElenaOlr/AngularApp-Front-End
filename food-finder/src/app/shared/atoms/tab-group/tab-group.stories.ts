import { Meta, Story } from '@storybook/angular';
import { TabGroupComponent } from './tab-group.component';
import { TabComponent } from '../tab/tab.component';

export default {
  title: 'Components/TabGroup',
  component: TabGroupComponent,
  subcomponents: { TabComponent },
} as Meta;

const Template: Story<TabComponent> = (args) => ({
  props: args,
  moduleMetadata: {
    declarations: [TabGroupComponent, TabComponent],
  },
  template: `
  <app-tab-group>
    <app-tab label = "First">Content 1</app-tab>
    <app-tab label = "Second">Content 2</app-tab>
    <app-tab label = "Third">Content 3</app-tab>
  </app-tab-group>
  `,
});

export const TabGroup = Template.bind({});
