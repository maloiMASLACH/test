import { render } from '@testing-library/react';
import { TopNftProjects } from './top-nft-projects.component';

describe('TopNftProjects', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TopNftProjects />);
    expect(baseElement).toBeTruthy();
  });
});
