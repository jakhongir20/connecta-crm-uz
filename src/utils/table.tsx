import TableDropdown from "../ui/TableDropdown";
export const LeadTableColumns = [
    {
        title: 'Id',
        dataIndex: 'id',
        render: (text: string) => <a>{text}</a>,

    },
    {
        title: 'Received	',
        dataIndex: 'received',
    },
    {
        title: 'Note	',
        dataIndex: 'node',
        render: (text: string) => <TableDropdown text={text} />
    },
    {
        title: <div style={{ textAlign: "center" }}>User</div>,
        dataIndex: 'user',
        render: () => <div className="table__img__container"><img src="./img/dt_table/default_user_image.png" alt="" className="table__user__img" /></div>
    },
    {
        title: 'Customer',
        dataIndex: 'customer',
    },
    {
        title: 'Phone',
        dataIndex: 'phone',
        render: (text: string) => <div className="table__phone"><img src="./img/dt_table/call.svg" alt="" /><span>{text}</span></div>
    },
    {
        title: 'Vehicle',
        dataIndex: 'vehicle',
        render: () => <div className="table__vehicle"><div className="table__vehicle__imgs" ><img src="./img/dt_table/engine.svg" alt="engine" /><img src="./img/dt_table/trailer.svg" alt="trailer" /></div><div className="table__vehicle__text">2022 Toyota Sienna</div></div>
    },
    {
        title: 'Origin',
        dataIndex: 'origin',
    },
    {
        title: 'Destination',
        dataIndex: 'destination',
    },
    {
        title: 'Est. Ship',
        dataIndex: 'ship',
    },

];
export const LeadTableData = [
    {
        key: '1',
        id: '600009',
        received: "03/25/2024 03:00 PM",
        node: 4,
        user: "03/25/2024 03:00 PM",
        customer: "Ali Brian",
        phone: "(999) 999-9999",
        vehicle: "2022 Toyota Sienna",
        origin: "California, CA 91101",
        destination: "Maine, ME 04735	",
        ship: '2024-03-26',
    },
    {
        key: '2',
        id: '600009',
        received: "03/25/2024 03:00 PM",
        node: 0,
        user: "03/25/2024 03:00 PM",
        customer: "Ali Brian",
        phone: "(999) 999-9999",
        vehicle: "2022 Toyota Sienna",
        origin: "California, CA 91101",
        destination: "Maine, ME 04735	",
        ship: '2024-03-26',
    },
    {
        key: '3',
        id: '600009',
        received: "03/25/2024 03:00 PM",
        node: 0,
        user: "03/25/2024 03:00 PM",
        customer: "Ali Brian",
        phone: "(999) 999-9999",
        vehicle: "2022 Toyota Sienna",
        origin: "California, CA 91101",
        destination: "Maine, ME 04735	",
        ship: '2024-03-26',
    },
    {
        key: '4',
        id: '600009',
        received: "03/25/2024 03:00 PM",
        node: 2,
        user: "03/25/2024 03:00 PM",
        customer: "Ali Brian",
        phone: "(999) 999-9999",
        vehicle: "2022 Toyota Sienna",
        origin: "California, CA 91101",
        destination: "Maine, ME 04735	",
        ship: '2024-03-26',
    }
];