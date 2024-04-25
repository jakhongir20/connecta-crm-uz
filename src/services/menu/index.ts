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

type FilterByType = {
  id: number;
  value: string;
  title: string;
};

export type MenuItem = {
  title: string;
  key: string;
  path: string;
  icon: string;
  iconActive: string;
  component: React.FC<unknown>;
  roles: string[];
  filterBy?: FilterByType[];
  elements?: { path: string; el: React.FC<unknown> }[];
};

const elements = [
  {
    title: 'Users',
    path: '/setting/',
    el: lazyloadInner('ReplaceCurreentPage'),
  },
  { title: 'Users', path: '/setting/users', el: lazyloadInner('Users') },
  { title: 'Teams', path: '/setting/teams', el: lazyloadInner('Teams') },
  { title: 'Roles', path: '/setting/roles', el: lazyloadInner('AccessRoles') },
  {
    title: 'Providers',
    path: '/setting/providers',
    el: lazyloadInner('Providers'),
  },
  {
    title: 'Distribution',
    path: '/setting/distribution',
    el: lazyloadInner('Distribution'),
  },
  {
    title: 'Lead Parsing',
    path: '/setting/lead-parsing',
    el: lazyloadInner('LeadParsing'),
  },
  { title: 'Ground', path: '/setting/ground', el: lazyloadInner('Ground') },
  {
    title: 'Regions',
    path: '/setting/regions',
    el: lazyloadInner('HawaiiAndAlaska'),
  },
  {
    title: 'International',
    path: '/setting/international',
    el: lazyloadInner('International'),
  },
  { title: 'Name', path: '/setting/name', el: lazyloadInner('CompanyName') },
  {
    title: 'Merchant',
    path: '/setting/merchant',
    el: lazyloadInner('Merchant'),
  },
  {
    title: 'Payment',
    path: '/setting/payment',
    el: lazyloadInner('PaymentApps'),
  },
  { title: 'Voip', path: '/setting/voip', el: lazyloadInner('VoIP') },
  {
    title: 'Templates',
    path: '/setting/templates',
    el: lazyloadInner('Templates'),
  },
];

type MenuData = MenuItem[];

export const getMenuData: MenuData = [
  {
    title: 'Leads',
    key: '__leads',
    path: '/leads',
    icon: firstImg,
    iconActive: firstImgActive,
    component: lazyload('Leads'),
    roles: ['admin', 'user'],
    filterBy: [
      //!? /leads?filter_by=query -> www.meta.uz/leads?filter_by=quotes
      { id: 1, value: 'leads', title: 'Leads' },
      { id: 2, value: 'archived', title: 'Archived' },
    ],
  },
  {
    title: 'Quotes',
    key: '__quotes',
    path: '/quotes',
    icon: secondImg,
    iconActive: secondImgActive,
    component: lazyload('Quotes'),
    roles: ['admin', 'user'],
    filterBy: [
      { id: 3, value: 'quotes', title: 'Quotes' },
      { id: 4, value: 'follow_up', title: 'Follow up' },
      { id: 5, value: 'warm', title: 'Warm' },
      { id: 6, value: 'ongoing', title: 'Ongoing' },
      { id: 7, value: 'upcoming', title: 'Upcoming' },
      { id: 8, value: 'on_hold', title: 'On hold' },
      { id: 9, value: 'not_now', title: 'Not now' },
      { id: 10, value: 'archived', title: 'Archived' },
    ],
  },
  {
    title: 'Orders',
    key: '__orders',
    path: '/orders',
    icon: thirdImg,
    iconActive: thirdImgActive,
    component: lazyload('Orders'),
    roles: ['admin', 'user'],
    filterBy: [
      { id: 11, value: 'orders', title: 'Orders' },
      { id: 12, value: 'booked', title: 'Booked' },
      { id: 13, value: 'posted', title: 'Posted' },
      { id: 14, value: 'not_signed', title: 'Not-Signed' },
      { id: 15, value: 'dispatched', title: 'Dispatched' },
      { id: 16, value: 'issue', title: 'Issue' },
      { id: 17, value: 'picked_up', title: ' Picked up' },
      { id: 18, value: 'completed', title: 'Completed' },
      { id: 19, value: 'on_hold', title: 'On hold' },
      { id: 20, value: 'archived', title: 'Archived' },
    ],
  },
  {
    title: 'Task',
    key: '__task',
    path: '/task',
    icon: fifthImg,
    iconActive: fifthImgActive,
    component: lazyload('Task'),
    roles: ['admin', 'user'],
    filterBy: [
      { id: 21, value: 'archived', title: 'Task list' },
      { id: 22, value: 'archived', title: 'Support' },
      { id: 23, value: 'archived', title: 'Completed' },
      { id: 24, value: 'archived', title: 'Archived' },
    ],
  },
  {
    title: 'Contact',
    key: '__contact',
    path: '/contact',
    icon: sixthImg,
    iconActive: sixthImgActive,
    component: lazyload('Contact'),
    roles: ['admin', 'user'],
    filterBy: [
      { id: 25, value: 'archived', title: 'All customers' },
      { id: 26, value: 'archived', title: 'Active' },
      { id: 27, value: 'archived', title: 'Inactive' },
    ],
  },
  {
    title: 'Settings',
    key: '__setting',
    path: '/setting',
    icon: ninthImg,
    iconActive: ninthImgActive,
    component: lazyload('Settings'),
    roles: ['admin', 'user'],
    elements,
  },
];
