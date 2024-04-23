import TableDropdown from "../ui/TableDropdown";
// =======Lead===========
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
        title: 'User',
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
        received: '03/25/2024 03:00 PM',
        user: '03/25/2024 03:00 PM',
        customer: 'Ali Brian',
        phone: '(999) 999-9999',
        vehicle: '2022 Toyota Sienna',
        origin: 'California, CA 91101',
        destination: 'Maine, ME 04735	',
        ship: '2024-03-26',
    },
    {
        key: '2',
        id: '600009',
        received: '03/25/2024 03:00 PM',
        node: 0,
        user: '03/25/2024 03:00 PM',
        customer: 'Ali Brian',
        phone: '(999) 999-9999',
        vehicle: '2022 Toyota Sienna',
        origin: 'California, CA 91101',
        destination: 'Maine, ME 04735	',
        ship: '2024-03-26',
    },
    {
        key: '3',
        id: '600009',
        received: '03/25/2024 03:00 PM',
        node: 0,
        user: '03/25/2024 03:00 PM',
        customer: 'Ali Brian',
        phone: '(999) 999-9999',
        vehicle: '2022 Toyota Sienna',
        origin: 'California, CA 91101',
        destination: 'Maine, ME 04735	',
        ship: '2024-03-26',
    },
    {
        key: '4',
        id: '600009',
        received: '03/25/2024 03:00 PM',
        node: 2,
        user: '03/25/2024 03:00 PM',
        customer: 'Ali Brian',
        phone: '(999) 999-9999',
        vehicle: '2022 Toyota Sienna',
        origin: 'California, CA 91101',
        destination: 'Maine, ME 04735	',
        ship: '2024-03-26',
    },
];
// =======quotes==========

export const QuotesTableColumns = [
    {
        title: 'Id',
        dataIndex: 'id',
        render: (text: string) => <a>{text}</a>,

    },
    {
        title: 'Quotes	',
        dataIndex: 'quotes',
    },
    {
        title: 'Note	',
        dataIndex: 'node',
        render: (text: string) => <TableDropdown text={text} />
    },
    {
        title: 'User',
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
        title: 'Price',
        dataIndex: 'price',
        render: (price: number) => <div><span className="table__price">$</span>{price}</div>
    },
    {
        title: 'Est. Ship',
        dataIndex: 'ship',
    },

];


export const QuotesTableData = [
    {
        key: '1',
        id: '600009',
        quotes: '03/25/2024 03:00 PM',
        node: 4,
        user: '03/25/2024 03:00 PM',
        customer: 'Ali Brian',
        phone: '(999) 999-9999',
        vehicle: '2022 Toyota Sienna',
        origin: 'California, CA 91101',
        destination: 'Maine, ME 04735	',
        price: "1,200",
        ship: '2024-03-26',
    },
    {
        key: '2',
        id: '600009',
        quotes: '03/25/2024 03:00 PM',
        node: 0,
        user: '03/25/2024 03:00 PM',
        customer: 'Ali Brian',
        phone: '(999) 999-9999',
        vehicle: '2022 Toyota Sienna',
        origin: 'California, CA 91101',
        destination: 'Maine, ME 04735	',
        price: "1,200",
        ship: '2024-03-26',
    },
    {
        key: '3',
        id: '600009',
        quotes: '03/25/2024 03:00 PM',
        node: 0,
        user: '03/25/2024 03:00 PM',
        customer: 'Ali Brian',
        phone: '(999) 999-9999',
        vehicle: '2022 Toyota Sienna',
        origin: 'California, CA 91101',
        destination: 'Maine, ME 04735	',
        price: "1,200",
        ship: '2024-03-26',
    },
    {
        key: '4',
        id: '600009',
        quotes: '03/25/2024 03:00 PM',
        node: 2,
        user: '03/25/2024 03:00 PM',
        customer: 'Ali Brian',
        phone: '(999) 999-9999',
        vehicle: '2022 Toyota Sienna',
        origin: 'California, CA 91101',
        destination: 'Maine, ME 04735	',
        price: "1,200",
        ship: '2024-03-26',
    },
];


// =======orders==========

export const OrderTableColumns = [
    {
        title: 'Id',
        dataIndex: 'id',
        render: (text: string) => <a>{text}</a>,

    },
    {
        title: 'Las edited on',
        dataIndex: 'las',
    },
    {
        title: 'Note	',
        dataIndex: 'node',
        render: (text: string) => <TableDropdown text={text} />
    },
    {
        title: 'User',
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
        title: 'Price',
        dataIndex: 'price',
        render: (price: number) => <div><span className="table__price">$</span>{price}</div>
    },
    {
        title: 'Est. Ship',
        dataIndex: 'ship',
    },

];


export const OrderTableData = [
    {
        key: '1',
        id: '600009',
        las: '03/25/2024 03:00 PM',
        node: 4,
        user: '03/25/2024 03:00 PM',
        customer: 'Ali Brian',
        phone: '(999) 999-9999',
        vehicle: '2022 Toyota Sienna',
        origin: 'California, CA 91101',
        destination: 'Maine, ME 04735	',
        price: "1,200",
        ship: '2024-03-26',
    },
    {
        key: '2',
        id: '600009',
        las: '03/25/2024 03:00 PM',
        node: 0,
        user: '03/25/2024 03:00 PM',
        customer: 'Ali Brian',
        phone: '(999) 999-9999',
        vehicle: '2022 Toyota Sienna',
        origin: 'California, CA 91101',
        destination: 'Maine, ME 04735	',
        price: "1,200",
        ship: '2024-03-26',
    },
    {
        key: '3',
        id: '600009',
        las: '03/25/2024 03:00 PM',
        node: 0,
        user: '03/25/2024 03:00 PM',
        customer: 'Ali Brian',
        phone: '(999) 999-9999',
        vehicle: '2022 Toyota Sienna',
        origin: 'California, CA 91101',
        destination: 'Maine, ME 04735	',
        price: "1,200",
        ship: '2024-03-26',
    },
    {
        key: '4',
        id: '600009',
        las: '03/25/2024 03:00 PM',
        node: 2,
        user: '03/25/2024 03:00 PM',
        customer: 'Ali Brian',
        phone: '(999) 999-9999',
        vehicle: '2022 Toyota Sienna',
        origin: 'California, CA 91101',
        destination: 'Maine, ME 04735	',
        price: "1,200",
        ship: '2024-03-26',
    },
];

//   contact

export const ContactTableColumns = [

    {
        title: 'Customer',
        dataIndex: 'customer',
        render: (item: string) => <a>{item}</a>
    },
    {
        title: 'Phone',
        dataIndex: 'phone',
        render: (text: string) => <div className="table__phone"><img src="./img/dt_table/call.svg" alt="" /><span>{text}</span></div>
    },
    {
        title: 'Email',
        dataIndex: 'email',
    },
    {
        title: 'Billing',
        dataIndex: 'billing',
    },
    {
        title: 'Completed	',
        dataIndex: 'completed',
    },
    {
        title: 'Ongoing',
        dataIndex: 'ongoing',
    },


    {
        title: 'Stage',
        dataIndex: 'stage'
    },
    {
        title: 'Source',
        dataIndex: 'source',
    },
    {
        title: 'Added',
        dataIndex: 'added',
    },

];



export const ContactTableData = [
    {
        key: '1',
        customer: 'Ali Brian',
        phone: '(999) 999-9999',
        email: "yourname@gmail.com",
        billing: '65-34 Myrtle Ave #2f, Queens, NY 11385',
        completed: '20',
        ongoing: '20',
        stage: 'Quote',
        source: 'Referral',
        added: '01/21/2024 09:02 AM',
    },
    {
        key: '2',
        customer: 'Ali Brian',
        phone: '(999) 999-9999',
        email: "yourname@gmail.com",
        billing: '65-34 Myrtle Ave #2f, Queens, NY 11385',
        completed: '20',
        ongoing: '20',
        stage: 'Quote',
        source: 'Referral',
        added: '01/21/2024 09:02 AM',
    },
    {
        key: '3',
        customer: 'Ali Brian',
        phone: '(999) 999-9999',
        email: "yourname@gmail.com",
        billing: '65-34 Myrtle Ave #2f, Queens, NY 11385',
        completed: '20',
        ongoing: '20',
        stage: 'Quote',
        source: 'Referral',
        added: '01/21/2024 09:02 AM',
    },
    {
        key: '4',
        customer: 'Ali Brian',
        phone: '(999) 999-9999',
        email: "yourname@gmail.com",
        billing: '65-34 Myrtle Ave #2f, Queens, NY 11385',
        completed: '20',
        ongoing: '20',
        stage: 'Quote',
        source: 'Referral',
        added: '01/21/2024 09:02 AM',
    }
];
