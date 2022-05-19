import { render } from '@testing-library/react';

import { AnnouncementBar } from './announcement-bar.component';

describe('AnnouncementBar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AnnouncementBar />);
    expect(baseElement).toBeTruthy();
  });
});
