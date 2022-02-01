import React from 'react';
import { Routes, Route } from 'react-router-dom';

import PrivateRoute from './MyRoute';
import Login from '../pages/Login';
import Page404 from '../pages/Page404';

export default function RoutesApp() {
  return (
    <Routes>
      <Route exact path="/" element={<PrivateRoute />}>
        <Route exact path="/" element={<Login />} />
      </Route>
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}
