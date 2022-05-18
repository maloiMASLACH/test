import { render } from '@testing-library/react';
import { Banner } from './banner.component';

describe('Header', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Banner />);
    expect(baseElement).toBeTruthy();
  });
});
