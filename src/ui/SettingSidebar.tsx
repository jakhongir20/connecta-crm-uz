
import React from 'react';
import { Collapse } from 'antd'
import { NavLink } from 'react-router-dom';
const text = `
  A dog is a type
`;

export default function SettingSidebar() {
  return (
    <div className='setting__sidebar'>
    <Collapse
      size="large"
      items={[{ key: '1', label: 'User Management', children: <NavLink to="/setting/users">users</NavLink> }]}
    />
     <Collapse
      size="large"
      items={[{ key: '1', label: 'Lead Management', children: <p>{text}</p> }]}
    />
     <Collapse
      size="large"
      items={[{ key: '1', label: 'Contract', children: <p>{text}</p> }]}
    />
     <Collapse
      size="large"
      items={[{ key: '1', label: 'Company Management', children: <p>{text}</p> }]}
    />
    </div>
  )
}
