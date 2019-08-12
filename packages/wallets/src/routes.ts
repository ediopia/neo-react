export const routes = [
  {
    exact: true,
    path: '/',
    component: './scenes/wallet-menu',
  },
  {
    path: '/plugins/:plugin',
    component: './scenes/plugins',
  },
  {
    path: '/imports',
    component: './scenes/local-wallet',
  },
];

export const menuRoutes = [
  {
    label: 'Connect with O3',
    path: '/plugins/O3',
  },
  {
    label: 'Connect with NOS',
    path: '/plugins/NOS',
  },
  {
    label: 'Import using keys',
    path: '/imports',
  },
];
