import React from 'react';
import Explorer from '../pages/Explorer';

export const routes = [
  {
    title: 'Explorer',
    path: '/',
    exact: true,
    body: () => <Explorer />,
  },
  {
    title: 'Marketplace',
    path: '/marketplace',
    body: () => <div>Roadmap</div>,
  },
  {
    title: 'Create',
    path: '/create',
    body: () => <div>Faqs</div>,
  },
];
