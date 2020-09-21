import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.main`
  width: 100%;
  max-width: 800px;

  display: flex;
  flex-direction: column;

  button {
    margin: 0;
  }
`;

export const ButtonsSubmit = styled.div`
  display: flex;
  justify-content: space-between;

  a {
    width: 100%;
  }

  button:nth-child(2) {
    margin-left: 1rem;
  }

  @media (max-width: 600px) {
    flex-direction: column;

    button:nth-child(2) {
      margin-left: 0;
      margin-top: 1rem;
    }
  }
`;
