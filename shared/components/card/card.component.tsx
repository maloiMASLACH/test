import { SocialIcon } from '../social-icon';
import { SocialIconExternalProps } from '../social-icon/social-icon.model';
import { CardProps } from './card.model';
import {
  Wrapper,
  Content,
  Img,
  Title,
  Line,
  Description,
  CardButton,
  ContactLinksContainer,
  CardDecoration
} from './card.styles';

export const Card: React.FC<CardProps> = ({
  variant,
  title,
  description,
  imagePath,
  socialLinks
}) => (
  <Wrapper margin="0 8px">
    <Content>
      <Img src={imagePath} alt="Card image" />
      <Title>{title}</Title>
      {variant === 'secondary' && (
        <>
          {' '}
          <Line />
          <Description>{description}</Description>
          <CardButton variant="dark">Show Profile</CardButton>
        </>
      )}
      {variant === 'primary' && (
        <>
          <Description>{description}</Description>
          <CardButton variant="dark">Show more</CardButton>
        </>
      )}
      {variant === 'light' && (
        <ContactLinksContainer>
          {socialLinks?.map(({ link, variant }) => (
            <SocialIcon variant={variant} href={link} />
          ))}
        </ContactLinksContainer>
      )}
    </Content>
    <CardDecoration />
  </Wrapper>
);

export default Card;
