import { render } from '@testing-library/react';

import { InputWithButton } from './input-with-button.component';

describe('InputWithButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<InputWithButton />);
    expect(baseElement).toBeTruthy();
  });
});
