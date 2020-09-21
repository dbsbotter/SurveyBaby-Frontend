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
`;

export const ContentTop = styled.div`
  display: flex;
  justify-content: flex-end;

  button {
    margin: 0;
    margin-bottom: 1rem;
  }
`;
