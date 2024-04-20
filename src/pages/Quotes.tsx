// import Table from "../ui/Table";
import TableHeader from "../ui/TableHeader";
import { Table } from 'antd';
import { QuotesTableColumns, QuotesTableData } from '../utils/table';




const rowSelection = {
  onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: (record: DataType) => ({
    disabled: record.name === 'Disabled User', // Column configuration not to be checked
    name: record.name,
  }),
};

function Quotes() {
  return (
    <div className="leads">
      <div>
        <TableHeader />
      </div>
      <div className="quotes-table">
        <div className='table__container'>
          <Table
            rowSelection={{
              // type: selectionType,
              ...rowSelection,
            }}
            columns={QuotesTableColumns}
            dataSource={QuotesTableData}
          />
        </div>
      </div>
    </div>

  );
}

export default Quotes;
