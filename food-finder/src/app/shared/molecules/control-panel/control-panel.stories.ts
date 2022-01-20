import { Meta, Story } from '@storybook/angular/types-6-0';
import { ControlPanelComponent } from './control-panel.component';

export default {
  title: 'Components/ControlPanelComponent',
  component: ControlPanelComponent,
} as Meta;

const Template: Story<ControlPanelComponent> = (args: ControlPanelComponent) => ({ props: args });

export const PorkSteakAndPotatoes = Template.bind({});

PorkSteakAndPotatoes.args = {};
