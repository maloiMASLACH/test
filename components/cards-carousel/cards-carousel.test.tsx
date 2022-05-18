import { render } from '@testing-library/react';
import { creators } from '../popular-creators/mock-data/data';
import { projects } from '../recently-launched/mock-data/data';

import { CardsCarousel } from './cards-carousel.component';

describe('resently launched', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CardsCarousel cardType="primary" cardData={projects} />);
    expect(baseElement).toBeTruthy();
  });
});
describe('popular creator', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CardsCarousel cardType="primary" cardData={creators} />);
    expect(baseElement).toBeTruthy();
  });
});
