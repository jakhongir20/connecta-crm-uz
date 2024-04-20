import TableHeader from "../ui/TableHeader"
import { Table } from 'antd';
import { OrderTableColumns, OrderTableData } from '../utils/table';
const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: (record: DataType) => ({
      disabled: record.name === 'Disabled User', // Column configuration not to be checked
      name: record.name,
    }),
  };

function Order() {
    return (
        <div className="orders">
            <TableHeader pageName="order" />
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

export default Order