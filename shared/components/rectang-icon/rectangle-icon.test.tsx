import { render } from '@testing-library/react';

import { RectangleIcon } from './rectangle-icon.component';

describe('RectangIcon', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RectangleIcon />);
    expect(baseElement).toBeTruthy();
  });
});
