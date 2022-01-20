import { Meta } from '@storybook/angular/types-6-0';
import { CardsComponent } from './cards.component';
import appText from '../../../utils/AppText.json';

export default {
  title: 'Components/Cards',
  component: CardsComponent,
} as Meta;

export const Card1 = () => ({
  props: {
    label: 'Card1',
    title: appText.landingPageCards.title1,
    description: appText.landingPageCards.description1,
  },
});

export const Card2 = () => ({
  props: {
    label: 'Card2',
    title: appText.landingPageCards.title2,
    description: appText.landingPageCards.description2,
  },
});

export const Card3 = () => ({
  props: {
    label: 'Card3',
    title: appText.landingPageCards.title3,
    description: appText.landingPageCards.description3,
  },
});
