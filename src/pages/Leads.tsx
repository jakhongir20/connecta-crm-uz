import TableHeader from "../ui/TableHeader";
import { Table } from 'antd';
import { LeadTableColumns, LeadTableData } from '../utils/table';



const rowSelection = {
  onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: (record: DataType) => ({
    disabled: record.name === 'Disabled User', // Column configuration not to be checked
    name: record.name,
  }),
};

function Leads() {


  return (
    <div className="leads">
      <div>
        <TableHeader />
      </div>
      <div className="leads-table">

        <div className='table__container'>
          <Table
            rowSelection={{
              // type: selectionType,
              ...rowSelection,
            }}
            columns={LeadTableColumns}
            dataSource={LeadTableData}
          />
        </div>

      </div>
    </div>

  );
}

export default Leads;
