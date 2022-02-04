import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { get } from 'lodash';

import * as actions from './actions';
import * as types from '../types';
import axios from '../../../services/axios';

function* loginRequest({ payload }) {
  const data = { email: payload.email, password: payload.password };

  try {
    const response = yield call(axios.post, '/tokens', data);

    yield put(actions.loginSuccess({ ...response.data }));

    toast.success('Login realizado');

    axios.defaults.headers.Authorization = `Bearer ${response.data.token}`;

    payload.navigate('/');
  } catch (error) {
    toast.error('Usuário ou senha inváidos');

    yield put(actions.loginFailure());
  }
}

function persistRehydrate({ payload }) {
  const token = get(payload, 'auth.token', '');

  if (!token) return;

  axios.defaults.headers.Authorization = `Bearer ${token}`;
}

export default all([
  takeLatest(types.LOGIN_REQUEST, loginRequest),
  takeLatest(types.PERSIST_REHYDRATE, persistRehydrate),
]);
