import { Meta } from '@storybook/angular/types-6-0';
import { FoodCardComponent } from './food-card.component';
import appText from '../../../utils/AppText.json';

export default {
  title: 'Components/FoodCard',
  component: FoodCardComponent,
} as Meta;

export const FoodCard = () => ({
  moduleMetadata: {
    declarations: [FoodCardComponent],
  },
  props: {
    label: 'Card',
    title: appText.mainPageCards.title,
    description: appText.mainPageCards.description,
  },
});
