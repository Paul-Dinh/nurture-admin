import React from 'react';
import { Navigate } from 'react-router-dom';
import RouteMenu from './RouteMenu';

interface PrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const token = localStorage.getItem('accessToken');
  return token ? (
    <>
      <RouteMenu />
      {children}
    </>
  ) : (
    <Navigate to='/login' />
  );
};

export default PrivateRoute;
