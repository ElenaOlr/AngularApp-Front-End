import { Meta, Story } from '@storybook/angular/types-6-0';
import { DetailsComponent } from './details.component';

export default {
  title: 'Components/Details',
  component: DetailsComponent,
} as Meta;

const details = {
  name: 'Pork steak and potatoes',
  quantity: 420,
  type: 'Dinner',
  restaurant: 'Mac',
  price: 69.99,
  img: '../../../../assets/img/IMG_4257.jpg',
};

const Template: Story<DetailsComponent> = (args: DetailsComponent) => ({ props: args });

export const PorkSteakAndPotatoes = Template.bind({});

PorkSteakAndPotatoes.args = {
  details,
};
