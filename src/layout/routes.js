import React from 'react';
import Explorer from '../pages/Explorer';
import Seemore from '../pages/Seemore';
import CollectionDetail from '../pages/CollectionDetail';
import TransactionDetail from '../pages/TransactionDetail';
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
    path: '/seemore/:type',
    exact: true,
    body: () => <Seemore />,
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
    body: () => <CollectionDetail />,
  },
  {
    title: '',
    path: '/seemore/Latest Transactions/:address',
    exact: true,
    body: () => <TransactionDetail />,
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
