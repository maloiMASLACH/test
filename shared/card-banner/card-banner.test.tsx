import { render } from '@testing-library/react';
import CardBanner from './card-banner.component';

describe('Card', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CardBanner />);
    expect(baseElement).toBeTruthy();
  });
});
