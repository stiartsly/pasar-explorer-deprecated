import React from 'react';
import Explorer from '../pages/Explorer';
import Seemore from '../pages/Seemore';

export const routes = [
  {
    title: 'Explorer',
    path: '/',
    exact: true,
    body: () => <Explorer />,
  },
  {
    title: '',
    path: '/seemore/:type',
    exact: true,
    body: () => <Seemore />,
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
