import React from 'react';
import { BlockTitleProps } from './block-title.model';
import { Title, Span } from './block-title.styles';

export const BlockTitle: React.FC<BlockTitleProps> = ({ text = '', variant = 'main' }) => {
  const middlePoint = Math.floor(text?.split(' ').length / 2);
  return (
    <>
      {variant === 'main' && (
        <Title text={text}>
          {text?.split(' ').splice(0, middlePoint).join(' ')}{' '}
          <Span>{text?.split(' ').splice(middlePoint).join(' ')}</Span>
        </Title>
      )}
      {variant === 'secondary' && (
        <Title text={text}>
          <Span>{text?.split(' ').splice(0, middlePoint).join(' ')}</Span>{' '}
          {text?.split(' ').splice(middlePoint).join(' ')}
        </Title>
      )}
    </>
  );
};
