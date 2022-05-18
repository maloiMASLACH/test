import { BlockTitleProps } from './block-title.model';
import { Span, Title } from './block-title.styles';

export const BlockTitle: React.FC<BlockTitleProps> = ({ text = '' }) => {
  const middlePoint = Math.floor(text?.split(' ').length / 2) + 1;
  return (
    <Title>
      {text?.split(' ').splice(0, middlePoint).join(' ')}{' '}
      <Span>{text?.split(' ').splice(middlePoint).join(' ')}</Span>
    </Title>
  );
};
