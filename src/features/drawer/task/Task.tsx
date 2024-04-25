import HistoryCard from '../history/HistoryCard';

const data = {
  desc: 'Driver Prime Auto Transport PU today DEL tom (929) 929-2929',
  date: '12.31.2024 at 3:45 pm',
  users: [{ name: 'Ali Brain' }, { name: 'Daniel Anderson' }],
};
function Task() {
  return <HistoryCard type="task" data={data} />;
}

export default Task;
