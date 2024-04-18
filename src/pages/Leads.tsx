import PageDetails from "../ui/PageDetails";
import Table from "../ui/Table";
import TableHeader from "../ui/TableHeader";

function Leads() {
  return (
    <div className="leads">
      <PageDetails/>
      <div>
        <TableHeader />
      </div>
      <div className="leads-table">
        <Table />
      </div>
    </div>

  );
}

export default Leads;
