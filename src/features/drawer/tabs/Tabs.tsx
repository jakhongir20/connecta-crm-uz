import type { TabsProps } from 'antd';
import { Tabs, theme } from 'antd';
import StickyBox from 'react-sticky-box';

const tabData = [
  {
    key: '1',
    label: 'Notes',
    value: 'notes',
    icon: (
      <>
        <img
          className="tab-icon default-icon"
          src="./img/drawer/tab/notes.svg"
          alt=""
        />
        <img
          className="tab-icon active-icon"
          src="./img/drawer/tab/notes_a.svg"
          alt=""
        />
      </>
    ),
    children: <p>tab content</p>,
  },
  {
    key: '2',
    label: 'Task',
    value: 'task',
    icon: (
      <>
        <img
          className="tab-icon default-icon"
          src="./img/drawer/tab/task.svg"
          alt=""
        />
        <img
          className="tab-icon active-icon"
          src="./img/drawer/tab/task_a.svg"
          alt=""
        />
      </>
    ),
    children: <p>tab content 2</p>,
  },
  {
    key: '3',
    label: 'Phone',
    value: 'phone',
    icon: (
      <>
        <img
          className="tab-icon default-icon"
          src="./img/drawer/tab/phone.svg"
          alt=""
        />
        <img
          className="tab-icon active-icon"
          src="./img/drawer/tab/phone_a.svg"
          alt=""
        />
      </>
    ),
    children: <p>tab content 3</p>,
  },
];

const items = tabData.map(({ key, label, value, icon, children }) => {
  console.log(value);
  return {
    label,
    key,
    children,
    // style: i === 0 ? { height: 200 } : undefined,
    icon,
  };
});

function TabsApp() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const renderTabBar: TabsProps['renderTabBar'] = (props, DefaultTabBar) => (
    <StickyBox offsetBottom={20} style={{ zIndex: 1 }}>
      <DefaultTabBar {...props} style={{ background: colorBgContainer }} />
    </StickyBox>
  );
  return (
    <div className="tabs">
      <Tabs
        defaultActiveKey="1"
        type="card"
        renderTabBar={renderTabBar}
        items={items}
      />
    </div>
  );
}

export default TabsApp;
