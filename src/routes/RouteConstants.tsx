import React from 'react';

import Dashboard from '../pages/Dashboard';
import Subscription from '../pages/Subscription';

const RouteConstants = {
  REDIRECTOR: '/',
  LOGIN: '/login',
};

export const routes = {
  REDIRECTOR: {
    pathname: '/',
    title: 'Landing Page',
    isPublic: true,
    element: <Dashboard />,
  },
  DASHBOARD: {
    pathname: '/Dashboard',
    title: 'Dashboard',
    isPublic: true,
    element: <Dashboard />,
  },
  SUBSCRIPTION: {
    pathname: '/Subscription',
    title: 'Subscription',
    isPublic: true,
    element: <Subscription />,
  },
};

export const routeKey = Object.assign(
  {},
  // eslint-disable-next-line @typescript-eslint/no-shadow
  ...Object.keys(routes).map((routeKey) => ({
    [routes[routeKey].pathname]: routeKey,
  }))
);

export const pageDetails = routes[routeKey[window.location.pathname]];

export default RouteConstants;
