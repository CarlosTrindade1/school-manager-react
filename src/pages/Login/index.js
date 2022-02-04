import React, { useState } from 'react';
import { isEmail } from 'validator';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Container } from '../../styles/GlobalStyles';
import { Form } from './styled';
import Loading from '../../components/Loading';
import * as actions from '../../store/modules/auth/actions';

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.auth.isLoading);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    let formErrors = false;

    if (!isEmail(email)) {
      formErrors = true;

      toast.error('E-mail inválido.');
    }

    if (password.length < 6 || password.length > 50) {
      formErrors = true;

      toast.error('Senha precisa ter entre 6 e 50 caracteres');
    }

    if (formErrors) return;

    dispatch(actions.loginRequest({ email, password, navigate }));
  }

  return (
    <Container>
      <Loading isLoading={isLoading} />

      <h1>Login</h1>
      {/* eslint-disable-next-line */}
      <Form onSubmit={handleSubmit}>
        E-mail:
        <input
          type="text"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Digite seu e-mail..."
        />
        Senha:
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Digite sua senha..."
        />
        <button type="submit">Entrar</button>
      </Form>
    </Container>
  );
}
