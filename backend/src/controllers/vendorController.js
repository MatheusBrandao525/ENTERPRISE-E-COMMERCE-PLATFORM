const MOCK_VENDORS = [
    {
        id: 'vnd_1',
        name: 'Dell EMC',
        category: 'Hardware',
        rating: 4.8,
        activeProducts: 45,
        totalSales: 1250000
    },
    {
        id: 'vnd_2',
        name: 'AWS Reseller',
        category: 'Services',
        rating: 4.9,
        activeProducts: 12,
        totalSales: 540000
    },
    {
        id: 'vnd_3',
        name: 'Siemens',
        category: 'Industrial',
        rating: 4.6,
        activeProducts: 120,
        totalSales: 890000
    },
    {
        id: 'vnd_4',
        name: 'NVIDIA',
        category: 'Hardware',
        rating: 5.0,
        activeProducts: 8,
        totalSales: 3200000
    }
];

exports.getVendors = (req, res) => {
    setTimeout(() => {
        res.json(MOCK_VENDORS);
    }, 200);
};
