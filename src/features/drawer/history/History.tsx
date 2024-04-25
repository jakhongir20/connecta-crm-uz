import type { TabsProps } from 'antd';
import { Tabs } from 'antd';
import HistoryCard from './HistoryCard';

const onChange = (key: string) => {
  console.log(key);
};

const data = {
  desc: 'Driver Prime Auto Transport PU today DEL tom (929) 929-2929',
  date: '12.31.2024 at 3:45 pm',
  users: [{ name: 'Ali Brain' }, { name: 'Daniel Anderson' }],
};

const items: TabsProps['items'] = [
  {
    key: '1',
    label: 'All',
    children: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11, 12, 13, 14, 15].map((item) => (
      <HistoryCard key={item} type={'notes'} data={data} />
    )),
  },
  {
    key: '2',
    label: 'Notes (0)',
    children: <HistoryCard type={'note'} data={data} />,
  },
  {
    key: '3',
    label: 'Tasks (1)',
    children: <HistoryCard type={'task'} data={data} />,
  },
];
function History() {
  return (
    <div className="history">
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </div>
  );
}

export default History;
