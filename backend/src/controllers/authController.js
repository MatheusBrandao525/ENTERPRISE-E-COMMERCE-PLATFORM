exports.login = (req, res) => {
    const { email, password } = req.body;

    // Simulation: accept any valid-looking login or specific admin
    if (email && password) {
        // Return mock admin user
        return res.json({
            token: 'eyJhGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.mock_token_signature_enterprise_lvl',
            user: {
                id: 'usr_001',
                name: 'Matheus Brandao',
                email: email,
                role: 'Administrator',
                permissions: ['manage_products', 'manage_orders', 'manage_vendors', 'view_analytics'],
                avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d'
            }
        });
    }

    res.status(401).json({ message: 'Invalid credentials provided.' });
};

exports.register = (req, res) => {
    res.json({ message: 'Registration simulated successfully' });
};
