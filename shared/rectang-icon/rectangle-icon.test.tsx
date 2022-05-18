import { render } from '@testing-library/react';

import { RectangIcon } from './rectangle-icon.component';

describe('RectangIcon', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RectangIcon />);
    expect(baseElement).toBeTruthy();
  });
});
