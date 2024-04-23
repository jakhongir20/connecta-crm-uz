import { Collapse } from 'antd'
import { NavLink } from 'react-router-dom';

export default function SettingSidebar() {


  return (
    <div className='setting__sidebar'>
      <Collapse
        size="large"
        defaultActiveKey={["1"]}
        items={
          [{
            key: '1', label: 'User Management',
            children:
              <ul className='setting__sidebar__menu'>
                <li> <NavLink  to="/setting/users">Users</NavLink></li>
                <li> <NavLink to="/setting/teams">Teams</NavLink></li>
                <li> <NavLink to="/setting/roles">Access roles</NavLink></li>
              </ul>
          }]}
      />
      <Collapse
        size="large"
        items={[{
          key: '1', label: 'Lead Management',
          children:
            <ul className='setting__sidebar__menu'>
              <li> <NavLink to="/setting/providers">Providers</NavLink></li>
              <li> <NavLink to="/setting/distribution">Distribution</NavLink></li>
              <li> <NavLink to="/setting/lead-parsing">Lead Parsing</NavLink></li>
            </ul>
        }]}
      />
      <Collapse
        size="large"
        items={[{
          key: '1', label: 'Contract',
          children:
            <ul className='setting__sidebar__menu'>
              <li> <NavLink to="/setting/ground">Ground</NavLink></li>
              <li> <NavLink to="/setting/regions">Hawaii and Alaska</NavLink></li>
              <li> <NavLink to="/setting/international">International</NavLink></li>
            </ul>
        }]}
      />
      <Collapse
        size="large"
        items={[{
          key: '1', label: 'Company Management',
          children:
            <ul className='setting__sidebar__menu'>
              <li> <NavLink to="/setting/name">Company Name</NavLink></li>
              <li> <NavLink to="/setting/merchant">Merchant</NavLink></li>
              <li> <NavLink to="/setting/payment">Payment apps</NavLink></li>
              <li> <NavLink to="/setting/voip">VoIP</NavLink></li>
              <li> <NavLink to="/setting/templates">Templates</NavLink></li>
            </ul>
        }
        ]}
      />
    </div>
  )
}
