import { render } from '@testing-library/react';

import { BurgerButton } from './burger-button.component';

describe('BurgerButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BurgerButton />);
    expect(baseElement).toBeTruthy();
  });
});
