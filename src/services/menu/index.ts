import { lazy } from 'react';

import firstImg from '../../../public/img/sidebar/01.svg';
import firstImgActive from '../../../public/img/sidebar/01_active.svg';
import secondImg from '../../../public/img/sidebar/02.svg';
import secondImgActive from '../../../public/img/sidebar/02_active.svg';
import thirdImg from '../../../public/img/sidebar/03.svg';
import thirdImgActive from '../../../public/img/sidebar/03_active.svg';
import fifthImg from '../../../public/img/sidebar/05.svg';
import fifthImgActive from '../../../public/img/sidebar/05_active.svg';
import sixthImg from '../../../public/img/sidebar/06.svg';
import sixthImgActive from '../../../public/img/sidebar/06_active.svg';
import ninthImg from '../../../public/img/sidebar/09.svg';
import ninthImgActive from '../../../public/img/sidebar/09_active.svg';

const lazyload = (name: string) => lazy(() => import(`../../pages/${name}`));
const lazyloadInner = (name: string) =>
  lazy(() => import(`../../pages/settingPages/${name}`));

export type MenuItem = {
  title: string;
  key: string;
  path: string;
  icon: string;
  icon_active: string;
  component: React.FC<unknown>;
  roles: string[];
  elements?: { path: string; el: React.FC<unknown> }[];
};

const elements = [
  { path: '/setting/users', el: lazyloadInner('Users') },
  { path: '/setting/teams', el: lazyloadInner('Teams') },
  { path: '/setting/roles', el: lazyloadInner('AccessRoles') },
  { path: '/setting/providers', el: lazyloadInner('Providers') },
  { path: '/setting/distribution', el: lazyloadInner('Distribution') },
  { path: '/setting/lead-parsing', el: lazyloadInner('LeadParsing') },
  { path: '/setting/ground', el: lazyloadInner('Ground') },
  { path: '/setting/regions', el: lazyloadInner('HawaiiAndAlaska') },
  { path: '/setting/international', el: lazyloadInner('International') },
  { path: '/setting/name', el: lazyloadInner('CompanyName') },
  { path: '/setting/merchant', el: lazyloadInner('Merchant') },
  { path: '/setting/payment', el: lazyloadInner('PaymentApps') },
  { path: '/setting/voip', el: lazyloadInner('VoIP') },
  { path: '/setting/templates', el: lazyloadInner('Templates') },
];

type MenuData = MenuItem[];

export const getMenuData: MenuData = [
  {
    title: 'Leads',
    key: '__leads',
    path: '/leads',
    icon: firstImg,
    icon_active: firstImgActive,
    component: lazyload('Leads'),
    roles: ['admin', 'user'],
  },
  {
    title: 'Quotes',
    key: '__quotes',
    path: '/quotes',
    icon: secondImg,
    icon_active: secondImgActive,
    component: lazyload('Quotes'),
    roles: ['admin', 'user'],
  },
  {
    title: 'Orders',
    key: '__orders',
    path: '/orders',
    icon: thirdImg,
    icon_active: thirdImgActive,
    component: lazyload('Orders'),
    roles: ['admin', 'user'],
  },
  {
    title: 'Task',
    key: '__task',
    path: '/task',
    icon: fifthImg,
    icon_active: fifthImgActive,
    component: lazyload('Task'),
    roles: ['admin', 'user'],
  },
  {
    title: 'Contact',
    key: '__contact',
    path: '/contact',
    icon: sixthImg,
    icon_active: sixthImgActive,
    component: lazyload('Contact'),
    roles: ['admin', 'user'],
  },
  {
    title: 'Setting',
    key: '__setting',
    path: '/setting',
    icon: ninthImg,
    icon_active: ninthImgActive,
    component: lazyload('Settings'),
    roles: ['admin', 'user'],
    elements,
  },
];
