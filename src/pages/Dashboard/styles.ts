import { shade } from 'polished';
import styled from 'styled-components';

interface PropResult {
  width: string;
}

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

export const ContentResult = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height: 30px;
  margin-bottom: 1rem;
  border: 2px solid #858585;
`;

export const ResultBoy = styled.div<PropResult>`
  width: ${(props) => props.width};
  /* background-image: linear-gradient(to left, ${shade(
    0.2,
    '#e0ffff',
  )}, #e0ffff); */
  background-color: #82d0dd;
`;

export const ResultGirl = styled.div<PropResult>`
  width: ${(props) => props.width};
  /* background-image: linear-gradient(to left, #ffe0ea, ${shade(
    0.2,
    '#ffe0ea',
  )}); */
  background-color: #e3a9c7;
`;

export const DescriptionResult = styled.p`
  text-align: center;
`;
