import Table from "../ui/Table";
import TableHeader from "../ui/TableHeader";

function Quotes() {
  return (
    <div className="leads">
      <div>
        <TableHeader />
      </div>
      <div className="quotes-table">
        <Table />
      </div>
    </div>

  );
}

export default Quotes;
