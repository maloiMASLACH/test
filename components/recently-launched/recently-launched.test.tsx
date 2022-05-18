import { render } from '@testing-library/react';

import { RecentlyLaunched } from './recently-launched.component';

describe('RecentlyLaunched', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RecentlyLaunched />);
    expect(baseElement).toBeTruthy();
  });
});
