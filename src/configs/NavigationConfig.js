import {
  DashboardOutlined,
  SettingOutlined,
  TabletOutlined,
  FileTextOutlined,
  ShopOutlined,
  GiftOutlined,
  MailOutlined,
  UserOutlined,
  TeamOutlined,
  ShoppingOutlined,
  PictureOutlined,
  ShoppingCartOutlined
} from '@ant-design/icons';
import {APP_PREFIX_PATH} from 'configs/AppConfig'


const dashBoardNavTree = [{
  key: 'dashboards',
  path: `${APP_PREFIX_PATH}/dashboards`,
  title: 'Основные',
  icon: DashboardOutlined,
  breadcrumb: false,
  isGroupTitle: true,
  submenu: [
    {
      key: 'dashboards-default',
      path: `${APP_PREFIX_PATH}/dashboards/default`,
      title: 'Дашборд',
      icon: DashboardOutlined,
      breadcrumb: false,
      submenu: []
    }, {
      key: 'catalog-default',
      path: `${APP_PREFIX_PATH}/catalog`,
      title: 'Каталог',
      icon: ShoppingCartOutlined,
      breadcrumb: false,
      submenu: [{
        key: 'catalog-goods',
        path: `${APP_PREFIX_PATH}/catalog/goods`,
        title: 'Товары',
        breadcrumb: true,
        submenu: []
      }, {
        key: 'catalog-categories',
        path: `${APP_PREFIX_PATH}/catalog/categories`,
        title: 'Категории',
        breadcrumb: true,
        submenu: []
      }, {
        key: 'catalog-collections',
        path: `${APP_PREFIX_PATH}/catalog/collections`,
        title: 'Коллекции',
        breadcrumb: true,
        submenu: []
      }, {
        key: 'catalog-combo',
        path: `${APP_PREFIX_PATH}/catalog/combo`,
        title: 'Комбо',
        breadcrumb: true,
        submenu: []
      }]
    }, {
      key: 'orders-default',
      path: `${APP_PREFIX_PATH}/orders`,
      title: 'Заказы',
      icon: ShoppingOutlined,
      breadcrumb: false,
      submenu: []
    },{
      key: 'customers-default',
      path: `${APP_PREFIX_PATH}/customers`,
      title: 'Клиенты',
      icon: UserOutlined,
      breadcrumb: false,
      submenu: [{
        key: 'customers-list',
        path: `${APP_PREFIX_PATH}/customers/list`,
        title: 'Список клиентов',
        breadcrumb: false,
        submenu: []
      }, {
        key: 'customers-group',
        path: `${APP_PREFIX_PATH}/customers/group`,
        title: 'Группы клиентов',
        breadcrumb: false,
        submenu: []
      }]
    }, {
      key: 'banners-default',
      path: `${APP_PREFIX_PATH}/banners`,
      title: 'Баннеры',
      icon: PictureOutlined,
      breadcrumb: false,
      submenu: []
    }, {
      key: 'coupons-default',
      path: `${APP_PREFIX_PATH}/coupons`,
      title: 'Промокоды',
      icon: GiftOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'selling-points-default',
      path: `${APP_PREFIX_PATH}/selling-points`,
      title: 'Оффлайн точки',
      icon: ShopOutlined,
      breadcrumb: false,
      submenu: [
        {
          key: 'selling-points-address',
          path: `${APP_PREFIX_PATH}/selling-points/address`,
          title: 'Адреса',
          breadcrumb: true,
          submenu: []
        },
        {
          key: 'selling-points-geofence',
          path: `${APP_PREFIX_PATH}/selling-points/geofence`,
          title: 'Геозоны',
          breadcrumb: true,
          submenu: []
        },
      ]
    },
    {
      key: 'staff-default',
      path: `${APP_PREFIX_PATH}/staff`,
      title: 'Сотрудники',
      icon: TeamOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'distribution-default',
      path: `${APP_PREFIX_PATH}/distribution`,
      title: 'Рассылки',
      icon: MailOutlined,
      breadcrumb: false,
      submenu: []
    },
  ]
}, {
  key: 'settings',
  path: `${APP_PREFIX_PATH}/settings`,
  title: 'Системные',
  breadcrumb: false,
  isGroupTitle: true,
  submenu: [
    {
      key: 'settings-default',
      path: `${APP_PREFIX_PATH}/settings`,
      title: 'Настройки',
      icon: SettingOutlined,
      breadcrumb: false,
      submenu: []
    }, {
      key: 'mobile-app-default',
      path: `${APP_PREFIX_PATH}/mobile-app`,
      title: 'Мобильное приложение',
      icon: TabletOutlined,
      breadcrumb: false,
      submenu: []
    }, {
      key: 'logs-default',
      path: `${APP_PREFIX_PATH}/logs`,
      title: 'Логи',
      icon: FileTextOutlined,
      breadcrumb: false,
      submenu: []
    }
  ]
},

]

const navigationConfig = [
  ...dashBoardNavTree
]

export default navigationConfig;
