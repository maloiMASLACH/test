import { render } from '@testing-library/react';

import { PopularCreators } from './popular-creators.component';

describe('PopularCreators', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PopularCreators />);
    expect(baseElement).toBeTruthy();
  });
});
