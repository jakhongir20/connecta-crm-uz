import Table from "../ui/Table";
import TableHeader from "../ui/TableHeader";

function Leads() {
  return (
    <div className="leads">
      <div>
        Leads header
        <TableHeader />
      </div>
      <div className="leads-table">
        <Table />
      </div>
    </div>

  );
}

export default Leads;
