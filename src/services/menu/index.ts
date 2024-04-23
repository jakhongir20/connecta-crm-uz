import { lazy } from 'react';
const lazyload = (name: string) => lazy(() => import(`../../pages/${name}`));
const lazyloadInner = (name: string) => lazy(() => import(`../../pages/settingPages/${name}`));

export type MenuItem = {
  title: string;
  key: string;
  path: string;
  icon: string;
  icon_active: string;
  component: React.FC<unknown>;
  roles: string[];
  elements?:{path:string,el:React.FC<unknown>}[]
};

type MenuData = MenuItem[];

export const getMenuData: MenuData = [
  {
    title: 'Leads',
    key: '__leads',
    path: '/leads',
    icon: '01',
    icon_active: '01_active',
    component: lazyload('Leads'),
    roles: ['admin', 'user'],
  },
  {
    title: 'Quotes',
    key: '__quotes',
    path: '/quotes',
    icon: '02',
    icon_active: '02_active',
    component: lazyload('Quotes'),
    roles: ['admin', 'user'],
  },
  {
    title: 'Orders',
    key: '__orders',
    path: '/orders',
    icon: '03',
    icon_active: '03_active',
    component: lazyload('Orders'),
    roles: ['admin', 'user'],
  },
   {
    title: 'Task',
    key: '__task',
    path: '/task',
    icon: '05',
    icon_active: '05_active',
    component: lazyload('Task'),
    roles: ['admin', 'user'],
  },
  {
    title: 'Contact',
    key: '__contact',
    path: '/contact',
    icon: '06',
    icon_active: '06_active',
    component: lazyload('Contact'),
    roles: ['admin', 'user'],
  },
  {
    title: 'Setting',
    key: '__setting',
    path: '/setting',
    icon: '09',
    icon_active: '09_active',
    component: lazyload('Settings'),
    roles: ['admin', 'user'],
    elements:[{path:"/setting/users",el:lazyloadInner("Users")}]
  },
 
];
