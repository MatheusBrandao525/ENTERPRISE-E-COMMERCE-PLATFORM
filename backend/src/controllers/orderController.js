const MOCK_ORDERS = [
    {
        id: 'ord_1001',
        customer: 'Acme Corp',
        date: '2025-10-24',
        total: 15400.00,
        status: 'Shipped',
        paymentStatus: 'Paid',
        items: 2,
        paymentMethod: 'Stripe (Credit Card)'
    },
    {
        id: 'ord_1002',
        customer: 'Globex Inc',
        date: '2025-10-25',
        total: 4999.00,
        status: 'Processing',
        paymentStatus: 'Paid',
        items: 1,
        paymentMethod: 'Stripe (Credit Card)'
    },
    {
        id: 'ord_1003',
        customer: 'Soylent Corp',
        date: '2025-10-26',
        total: 850.00,
        status: 'Pending',
        paymentStatus: 'Unpaid',
        items: 5,
        paymentMethod: 'Stripe (Invoice)'
    },
    {
        id: 'ord_1004',
        customer: 'Umbrella Corp',
        date: '2025-10-26',
        total: 25000.00,
        status: 'Cancelled',
        paymentStatus: 'Refunded',
        items: 1,
        paymentMethod: 'Stripe (Credit Card)'
    },
    {
        id: 'ord_1005',
        customer: 'Cyberdyne Systems',
        date: '2025-10-27',
        total: 102400.00,
        status: 'Shipped',
        paymentStatus: 'Paid',
        items: 10,
        paymentMethod: 'Stripe (Enterpise Wire)'
    }
];

exports.getOrders = (req, res) => {
    setTimeout(() => {
        res.json(MOCK_ORDERS);
    }, 200);
};

exports.getOrderById = (req, res) => {
    const order = MOCK_ORDERS.find(o => o.id === req.params.id);
    if (order) return res.json(order);
    res.status(404).json({ message: 'Order not found' });
};
