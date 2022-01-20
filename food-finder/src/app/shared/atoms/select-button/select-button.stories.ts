import { Meta, Story } from '@storybook/angular/types-6-0';
import { SelectButton } from '../interface/select-button';
import { SelectButtonSize } from '../interface/select-button-size';
import { SelectButtonComponent } from './select-button.component';

export default {
  title: 'Components/Selected Button',
  component: SelectButtonComponent,
} as Meta;

const mockData: SelectButton = { name: 'Breakfest', isSelected: false };
const Template: Story<SelectButtonComponent> = (args: SelectButtonComponent) => ({ props: args });

export const Disable = Template.bind({});
export const Small = Template.bind({});
export const Large = Template.bind({});
Disable.args = {
  selectedButton: mockData,
  disabled: true,
};

Small.args = {
  selectedButton: mockData,
  size: SelectButtonSize.small,
};

Large.args = {
  selectedButton: mockData,
  size: SelectButtonSize.large,
};
