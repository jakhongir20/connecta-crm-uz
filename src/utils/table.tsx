


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
        render: (text: number) => <div className="table__node">
            <div className="table__node__data">
                <img src="./img/dt_table/nodeimg.png" alt="" />
                <div className="table__node__count">
                    <span>{text}</span>
                    <div className="table__node__modal">
                        <div className="table__node__content">
                            <textarea cols={40} rows={4} className="table__node__textarea"></textarea>
                            <div className="table__node__footer">
                                <button type="button" className="table__node__info">Cancel</button>
                                <button type="button" className="table__node__primary">Save</button>
                            </div>
                        </div>
                        {/* <div className="table__node__content">
                                <div className="node__date">01/21/2024 09:01 AM Ali Brian</div>
                                <p className="node__description">
                                    Customer wants to talk to customer
                                </p>
                            </div> */}
                    </div>
                </div>
            </div>
        </div>
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