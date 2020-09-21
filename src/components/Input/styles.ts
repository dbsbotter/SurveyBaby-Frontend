import { shade } from 'polished';
import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isMasculino: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: ${(props) =>
    shade(0.1, props.isMasculino ? '#e0ffff' : '#ffe0ea')};
  border-radius: 10px;
  padding: 16px;
  width: 100%;

  border: 2px solid ${(props) => (props.isMasculino ? '#e0ffff' : '#ffe0ea')};
  color: #666666;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #312e38;

    &::placeholder {
      color: #666666;
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
