import React from 'react'
import { AUTH_PREFIX_PATH, APP_PREFIX_PATH } from 'configs/AppConfig'

export const publicRoutes = [
    {
        key: 'login',
        path: `${AUTH_PREFIX_PATH}/login`,
        component: React.lazy(() => import('views/auth-views/authentication/login')),
    },
    {
        key: 'register',
        path: `${AUTH_PREFIX_PATH}/register`,
        component: React.lazy(() => import('views/auth-views/authentication/register')),
    },
    {
        key: 'forgot-password',
        path: `${AUTH_PREFIX_PATH}/forgot-password`,
        component: React.lazy(() => import('views/auth-views/authentication/forgot-password')),
    }
]

export const protectedRoutes = [
    {
        key: 'dashboard.default',
        path: `${APP_PREFIX_PATH}/dashboards/default`,
        component: React.lazy(() => import('views/app-views/main/dashboards/default')),
    },
    {
        key: 'catalog.default',
        path: `${APP_PREFIX_PATH}/catalog`,
        component: React.lazy(() => import('views/app-views/main/catalog/index')),
    },
    {
        key: 'catalog.goods',
        path: `${APP_PREFIX_PATH}/catalog/goods`,
        component: React.lazy(() => import('views/app-views/main/catalog/Goods')),
    },
    {
        key: 'catalog.categories',
        path: `${APP_PREFIX_PATH}/catalog/categories`,
        component: React.lazy(() => import('views/app-views/main/catalog/Categories')),
    },
    {
        key: 'catalog.collections',
        path: `${APP_PREFIX_PATH}/catalog/collections`,
        component: React.lazy(() => import('views/app-views/main/catalog/Collections')),
    },
    {
        key: 'catalog.combo',
        path: `${APP_PREFIX_PATH}/catalog/combo`,
        component: React.lazy(() => import('views/app-views/main/catalog/Combo')),
    },
    {
        key: 'orders.default',
        path: `${APP_PREFIX_PATH}/orders`,
        component: React.lazy(() => import('views/app-views/main/orders/default')),
    },
    {
        key: 'customers.list',
        path: `${APP_PREFIX_PATH}/customers/list`,
        component: React.lazy(() => import('views/app-views/main/customers/CustomersFetch')),
    },
    {
        key: 'customers.list.id',
        path: `${APP_PREFIX_PATH}/customers/list/:id`,
        component: React.lazy(() => import('views/app-views/main/customers/EditCustomer')),
    },
    {
        key: 'customers.group',
        path: `${APP_PREFIX_PATH}/customers/group`,
        component: React.lazy(() => import('views/app-views/main/customers/CustomerGroup')),
    },
    {
        key: 'banners.default',
        path: `${APP_PREFIX_PATH}/banners`,
        component: React.lazy(() => import('views/app-views/main/banners/index')),
    },
    {
        key: 'coupons.default',
        path: `${APP_PREFIX_PATH}/coupons`,
        component: React.lazy(() => import('views/app-views/main/coupons/index')),
    },
    {
        key: 'selling.points.address',
        path: `${APP_PREFIX_PATH}/selling-points/address`,
        component: React.lazy(() => import('views/app-views/main/selling-points/Adress')),
    },
    {
        key: 'selling.points.geofence',
        path: `${APP_PREFIX_PATH}/selling-points/geofence`,
        component: React.lazy(() => import('views/app-views/main/selling-points/Geofence')),
    },
    {
        key: 'staff.default',
        path: `${APP_PREFIX_PATH}/staff`,
        component: React.lazy(() => import('views/app-views/main/staff/index')),
    },
    {
        key: 'distribution.default',
        path: `${APP_PREFIX_PATH}/distribution`,
        component: React.lazy(() => import('views/app-views/main/distribution/Distribution')),
    },
    {
        key: 'settings.default',
        path: `${APP_PREFIX_PATH}/settings`,
        component: React.lazy(() => import('views/app-views/system/settings/Settings')),
    },
    {
        key: 'logs.default',
        path: `${APP_PREFIX_PATH}/logs`,
        component: React.lazy(() => import('views/app-views/system/logs/Logs')),
    },
    {
        key: 'mobile-app.default',
        path: `${APP_PREFIX_PATH}/mobile-app`,
        component: React.lazy(() => import('views/app-views/system/mobile-app/MobileApp')),
    }
]