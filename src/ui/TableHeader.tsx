import TableHeaderLeft from './TableHeaderLeft';
import TableHeaderRight from './TableHeaderRight';

function TableHeader({pageName}:{pageName:string}) {
  return (
    <div className="dt-header">
      <TableHeaderLeft pageName={pageName} />
      <TableHeaderRight />
    </div>
  );
}

export default TableHeader;
