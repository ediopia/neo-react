"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = [
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
exports.menuRoutes = [
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
//# sourceMappingURL=routes.js.map