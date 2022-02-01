import React from 'react';
import { Routes, Route } from 'react-router-dom';

import PrivateRoute from './MyRoute';
import Aluno from '../pages/Aluno';
import Alunos from '../pages/Alunos';
import Register from '../pages/Register';
import Fotos from '../pages/Fotos';
import Login from '../pages/Login';
import Page404 from '../pages/Page404';

export default function RoutesApp() {
  return (
    <Routes>
      <Route exact path="/" element={<PrivateRoute />}>
        <Route exact path="/" element={<Alunos />} />
      </Route>
      <Route exact path="/aluno/:id/edit" element={<PrivateRoute isClosed />}>
        <Route exact path="/aluno/:id/edit" element={<Aluno />} />
      </Route>
      <Route exact path="/aluno/" element={<PrivateRoute isClosed />}>
        <Route exact path="/aluno/" element={<Aluno />} />
      </Route>
      <Route exact path="/fotos/:id" element={<PrivateRoute isClosed />}>
        <Route exact path="/fotos/:id" element={<Fotos />} />
      </Route>
      <Route exact path="/login/" element={<PrivateRoute />}>
        <Route exact path="/login/" element={<Login />} />
      </Route>
      <Route exact path="/register/" element={<PrivateRoute />}>
        <Route exact path="/register/" element={<Register />} />
      </Route>
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}
