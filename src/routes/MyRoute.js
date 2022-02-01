import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function PrivateRoute({ isClosed }) {
  const isLoggedIn = false;

  if (isClosed && !isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
}

PrivateRoute.defaultProps = {
  isClosed: false,
};

PrivateRoute.propTypes = {
  isClosed: PropTypes.bool,
};
