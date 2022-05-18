import { render } from '@testing-library/react';

import { ComingSoon } from './coming-soon.component';

describe('RecentlyLaunched', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ComingSoon />);
    expect(baseElement).toBeTruthy();
  });
});
