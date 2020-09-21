import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  width: 800px;
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
`;
