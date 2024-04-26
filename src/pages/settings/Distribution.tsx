import { Table } from 'antd';
import { DistributionTableColumns, DistributionTableData } from '../../utils/table';
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
export default function Distribution() {
  return (
    <div className="distribution">
      <TableHeader pageName='distribution'/>
    <div className='table__container'>
        <Table
          rowSelection={{
            ...rowSelection,
          }}
          columns={DistributionTableColumns}
          dataSource={DistributionTableData}
        />
      </div>
    </div>
  )
}
