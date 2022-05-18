import styled, { css } from 'styled-components';
import backgroundImage from './assest/backgroundImage.png';

const Wrapper = styled.div`
  background-image: url('${backgroundImage}');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #080a2c;
`;

export { Wrapper };
