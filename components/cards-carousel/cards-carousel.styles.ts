import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  ${({ theme }) => {
    const { fontFamily } = theme.typography;
    const { background } = theme.palette;

    return css`
      max-width: 100%;
      margin: 0 auto;
      display: flex;
      align-items: center;
      flex-direction: column;
      font-family: ${fontFamily};
      background-color: ${background.third};
      padding: 50px 0;
    `;
  }}
`;

const CardsWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export { Wrapper, CardsWrapper };
