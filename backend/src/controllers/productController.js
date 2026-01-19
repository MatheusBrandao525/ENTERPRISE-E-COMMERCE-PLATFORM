const MOCK_PRODUCTS = [
    {
        id: 'prod_8821',
        name: 'Enterprise Server Rack X1',
        category: 'Hardware',
        price: 12500.00,
        stock: 5,
        status: 'Low Stock',
        image: 'https://images.unsplash.com/photo-1558494949-ef526b01201b?auto=format&fit=crop&q=80&w=200',
        vendor: 'Dell EMC'
    },
    {
        id: 'prod_9922',
        name: 'Cloud Compute License (1 Year)',
        category: 'Software',
        price: 4999.00,
        stock: 999,
        status: 'In Stock',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=200',
        vendor: 'AWS Reseller'
    },
    {
        id: 'prod_7733',
        name: 'Industrial IoT Sensor Gateway',
        category: 'IoT',
        price: 850.00,
        stock: 42,
        status: 'In Stock',
        image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=200',
        vendor: 'Siemens'
    },
    {
        id: 'prod_5511',
        name: 'Quantum Encryption Module',
        category: 'Security',
        price: 25000.00,
        stock: 0,
        status: 'Out of Stock',
        image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=200',
        vendor: 'IBM'
    },
    {
        id: 'prod_4422',
        name: 'High-Performance GPU Nodes',
        category: 'Hardware',
        price: 8900.00,
        stock: 12,
        status: 'In Stock',
        image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&q=80&w=200',
        vendor: 'NVIDIA'
    }
];

exports.getProducts = (req, res) => {
    // Simulated delay for realism
    setTimeout(() => {
        res.json(MOCK_PRODUCTS);
    }, 300);
};

exports.getProductById = (req, res) => {
    const product = MOCK_PRODUCTS.find(p => p.id === req.params.id);
    if (product) return res.json(product);
    res.status(404).json({ message: 'Product not found' });
};

exports.createProduct = (req, res) => {
    const newProduct = { id: `prod_${Math.floor(Math.random() * 10000)}`, ...req.body };
    // In a real app we would push to DB. Here we just echo it back.
    res.status(201).json(newProduct);
};
