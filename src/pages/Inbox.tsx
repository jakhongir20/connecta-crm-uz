import TableHeader from "../ui/TableHeader"
import { Table } from 'antd';
import { OrderTableColumns, OrderTableData } from '../utils/table';
import InboxHeader from "../ui/InboxHeader";
const rowSelection = {
  onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: (record: DataType) => ({
    disabled: record.name === 'Disabled User', // Column configuration not to be checked
    name: record.name,
  }),
};


function Inbox() {
  return (
    <div className="inbox">
      <TableHeader pageName="inbox" />
      <InboxHeader />
      <div className="quotes-table">
        <div className='table__container'>
          <Table
            rowSelection={{
              ...rowSelection,

            }}
            columns={OrderTableColumns}
            dataSource={OrderTableData}
          />
        </div>
      </div>
    </div>
  )
}
export default Inbox