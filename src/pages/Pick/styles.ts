import { shade } from 'polished';
import styled, { keyframes } from 'styled-components';
import Button from '../../components/Button';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  place-content: center;

  width: 100%;
  text-align: center;

  animation: ${appearFromLeft} 1s;

  svg {
    margin-bottom: 40px;
  }

  h1 {
    margin-bottom: 40px;
  }

  h3 {
    margin-bottom: 32px;
  }

  @media (max-width: 600px) {
    padding: 0 30px;
  }
`;

export const ContentButtons = styled.div`
  display: flex;
  width: 100%;
  max-width: 600px;
  text-align: center;

  button {
    color: #666666;
  }

  button:nth-child(2) {
    margin-left: 1rem;
  }

  @media (max-width: 600px) {
    flex-direction: column;

    button:nth-child(2) {
      margin-left: 0;
    }
  }
`;

export const ButtonBoy = styled(Button)`
  background: #c9e5e5;
  border: 2px solid #e0ffff;

  &:hover {
    background: ${shade(0.2, '#e0ffff')};
  }
`;

export const ButtonGirl = styled(Button)`
  background: #e5c9d2;
  border: 2px solid #ffe0ea;

  &:hover {
    background: ${shade(0.2, '#ffe0ea')};
  }
`;

const shake = keyframes`
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
`;

export const ContentError = styled.div`
  animation: ${shake} 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
`;
