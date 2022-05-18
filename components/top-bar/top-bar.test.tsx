import { render } from '@testing-library/react';

import { TopBar } from './top-bar.component';

describe('Header', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TopBar />);
    expect(baseElement).toBeTruthy();
  });
});
