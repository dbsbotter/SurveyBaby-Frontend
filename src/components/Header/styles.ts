import styled from 'styled-components';

export const Header = styled.header`
  padding: 10px 0;
  background: transparent;
  width: 100%;
  border-bottom: 2px solid #858585;
  margin-bottom: 1rem;
`;

export const HeaderContent = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  align-items: center;

  button {
    margin-left: auto;
    background: transparent;
    border: 0;

    svg {
      color: #999591;
      width: 20px;
      height: 20px;
    }
  }
`;
