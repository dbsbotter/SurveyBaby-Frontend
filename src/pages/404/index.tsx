import React from 'react';
import { FiInfo } from 'react-icons/fi';

import { Container } from './styles';

const Error404: React.FC = () => {
  return (
    <Container>
      <FiInfo size={60} />
      <h1>Página não encontrada</h1>
    </Container>
  );
};

export default Error404;
