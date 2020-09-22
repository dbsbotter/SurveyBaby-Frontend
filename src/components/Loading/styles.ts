import styled, { keyframes } from 'styled-components';

const spinner = keyframes`
  to {
    -webkit-transform:rotate(360deg);
    transform:rotate(360deg);
  }
`;

export const Container = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 99999;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.35);
  color: #ededed;
`;

export const Content = styled.div`
  display: inline-block;
  width: 2rem;
  height: 2rem;
  vertical-align: text-bottom;
  border: 0.25em solid currentColor;
  border-right-color: transparent;
  border-radius: 50%;
  animation: ${spinner} 0.75s linear infinite;
`;
