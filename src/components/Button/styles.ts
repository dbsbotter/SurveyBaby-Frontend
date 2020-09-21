import { shade } from 'polished';
import styled, { css } from 'styled-components';

interface ButtonsProps {
  typeClass?: 'success' | 'error' | 'default';
}

const buttonTypeVariations = {
  default: css`
    background: #858585;

    &:hover {
      background: ${shade(0.2, '#858585')};
    }
  `,

  success: css`
    background: #28a745;

    &:hover {
      background: ${shade(0.2, '#28a745')};
    }
  `,

  error: css`
    background: #c53030;

    &:hover {
      background: ${shade(0.2, '#c53030')};
    }
  `,
};

export const Container = styled.button<ButtonsProps>`
  height: 56px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  color: #ededed;
  width: 100%;
  font-weight: 500;
  margin-top: 16px;
  transition: background 0.2s;

  ${(props) => buttonTypeVariations[props.typeClass || 'default']};
`;
