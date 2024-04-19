import TableHeaderLeft from './TableHeaderLeft';
import TableHeaderRight from './TableHeaderRight';

function TableHeader() {
  return (
    <div className="dt-header">
      <TableHeaderLeft />
      <TableHeaderRight />
    </div>
  );
}

export default TableHeader;
