import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Container } from '../../styles/GlobalStyles';

export default function Page404() {
  const navigate = useNavigate();

  navigate('/');

  return (
    <Container>
      <h1>Esta página não existe</h1>
    </Container>
  );
}
