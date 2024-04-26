import { Table } from 'antd';
import { UsersTableColumns, UsersTableData } from '../../utils/table';
import TableHeader from '../../ui/TableHeader';
const rowSelection = {
  onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: (record: DataType) => ({
    disabled: record.name === 'Disabled User', // Column configuration not to be checked
    name: record.name,
  }),
};
export default function International() {
  return (
    <div className="international">
      <TableHeader pageName='international'/>
         <div className='table__container'>
        <Table
          rowSelection={{
            // type: selectionType,
            ...rowSelection,
          }}
          columns={UsersTableColumns}
          dataSource={UsersTableData}
        />
      </div>
    </div>
  )
}
