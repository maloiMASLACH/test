import { render } from '@testing-library/react';

import StandardUi from './standard-ui';

describe('StandardUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<StandardUi />);
    expect(baseElement).toBeTruthy();
  });
});
