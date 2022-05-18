import { render } from '@testing-library/react';
import { Row } from './row.component';

describe('Row', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Row />);
    expect(baseElement).toBeTruthy();
  });
});
