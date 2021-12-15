import React from 'react';
import Explorer from '../pages/Explorer';
import CollectibleDetail from '../pages/CollectibleDetail';
import StickersList from '../pages/StickersList';

export const routes = [
  {
    title: 'Explorer',
    path: '/',
    exact: true,
    body: () => <Explorer />,
  },
  {
    title: '',
    path: '/explorer/collectibles',
    exact: true,
    body: () => <StickersList />,
  },
  {
    title: '',
    path: '/explorer/collectibles/:collection',
    exact: true,
    body: () => <CollectibleDetail />,
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
