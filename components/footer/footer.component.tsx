import {
  InputWithButton,
  NavLink,
  Container,
  SocialIcon,
  RectangleIcon,
  images
} from '../../shared';
import { FooterProps } from './footer.model';
import { Wrapper } from './footer.styles';

export const Footer: React.FC<FooterProps> = ({
  textContent,
  secondColumnTitle,
  thirdColumnTitle,
  secondColumnLinks,
  phones,
  emails,
  address,
  copyrightText,
  socialNetworks
}) => (
  <Wrapper>
    <Container>
      <div className="footer-top">
        <div className="footer-col footer-col-1">
          {textContent && <span>{textContent}</span>}
          <InputWithButton className="input" placeholder="Subscribe newsletter" type="text" />
        </div>
        <div className="footer-col footer-col-2">
          {secondColumnTitle && <h3>{secondColumnTitle}</h3>}
          {secondColumnLinks &&
            secondColumnLinks.map(({ link, title }) => <NavLink href={link}>{title}</NavLink>)}
        </div>
        <div className="footer-col footer-col-3">
          {thirdColumnTitle && <h3>{thirdColumnTitle}</h3>}
          {phones?.length && (
            <div className="contacts-link mb-l-1">
              <RectangleIcon className="rectang-icon" src={images.phoneWhiteIcon} alt="mail" />
              <div>
                {phones.map((phone) => (
                  <NavLink href={`tel:${phone}`}>{phone}</NavLink>
                ))}
              </div>
            </div>
          )}

          {emails?.length && (
            <div className="contacts-link mb-l-1">
              <RectangleIcon className="rectang-icon" src={images.mailWhiteIcon} alt="mail" />
              <div>
                {emails.map((email) => (
                  <NavLink href={`mailto:${email}`}>{email}</NavLink>
                ))}
              </div>
            </div>
          )}

          {address && (
            <div className="contacts-link mb-l-2">
              <RectangleIcon className="rectang-icon" src={images.geoWhiteIcon} alt="geo" />
              <NavLink href={address.link}>{address.title}</NavLink>
            </div>
          )}

          {socialNetworks?.length && (
            <div className="footer-social">
              {socialNetworks.map(({ link, variant }) => (
                <SocialIcon href={link} variant={variant} />
              ))}
            </div>
          )}
        </div>
      </div>
      {copyrightText && (
        <>
          <div className="footer-divider" />
          <span className="footer-down">{copyrightText}</span>
        </>
      )}
    </Container>
  </Wrapper>
);
