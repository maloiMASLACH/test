import React from 'react';
import { Wrapper } from './announcement-bar.styles';
import { AnnouncementBarProps } from './announcement-bar.model';
import { Container } from '../container';

export const AnnouncementBar: React.FC<AnnouncementBarProps> = React.memo(
  ({ children, textContent, ...attributes }) => (
    <Wrapper {...attributes}>
      <Container>
        <span>{textContent}</span>
        {children}
      </Container>
    </Wrapper>
  )
);
