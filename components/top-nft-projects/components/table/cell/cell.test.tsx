import { render } from '@testing-library/react';

import { Cell } from './cell.component';

describe('Cell', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Cell />);
    expect(baseElement).toBeTruthy();
  });
});
