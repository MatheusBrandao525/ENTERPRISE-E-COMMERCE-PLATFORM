<script setup>
import { ref, onMounted } from 'vue';
import { Search, Filter, Plus, MoreVertical } from 'lucide-vue-next';

const products = ref([]);
const loading = ref(true);

const loadProducts = async () => {
  // Simulate API fetch
  await new Promise(r => setTimeout(r, 600));
  products.value = [
    { id: 'PRD-001', name: 'Enterprise Server Rack X1', category: 'Hardware', price: 12500.00, stock: 5, status: 'Low Stock' },
    { id: 'PRD-002', name: 'Cloud Compute License (1Y)', category: 'Software', price: 4999.00, stock: 999, status: 'Active' },
    { id: 'PRD-003', name: 'Industrial IoT Sensor', category: 'IoT', price: 850.00, stock: 42, status: 'In Stock' },
    { id: 'PRD-004', name: 'Quantum Encryption Mod', category: 'Security', price: 25000.00, stock: 0, status: 'Out of Stock' },
    { id: 'PRD-005', name: 'GPU Node A100', category: 'Hardware', price: 8900.00, stock: 12, status: 'In Stock' }
  ];
  loading.value = false;
};

onMounted(loadProducts);

const formatCurrency = (val) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(val);

const getStatusClass = (status) => {
  if (status === 'In Stock' || status === 'Active') return 'badge-success';
  if (status === 'Low Stock') return 'badge-warning';
  return 'badge-danger';
};
</script>

<template>
  <div class="page-container">
    <header class="page-header">
      <div>
        <h1>Products Management</h1>
        <p class="text-muted">Manage global inventory and digital assets</p>
      </div>
      <button class="btn btn-primary">
        <Plus :size="18" /> Add Product
      </button>
    </header>

    <div class="ent-card">
      <!-- Toolbar -->
      <div class="table-toolbar">
        <div class="search-box">
          <Search :size="18" class="search-icon" />
          <input type="text" placeholder="Search products..." class="input-field with-icon" />
        </div>
        <div class="actions">
          <button class="btn btn-ghost"><Filter :size="18" /> Filter</button>
        </div>
      </div>

      <!-- Table -->
      <table class="ent-table">
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Stock Level</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="loading">
            <td colspan="7" class="text-center">Loading inventory data...</td>
          </tr>
          <tr v-else v-for="product in products" :key="product.id">
            <td class="font-mono text-muted">{{ product.id }}</td>
            <td class="font-medium">{{ product.name }}</td>
            <td>{{ product.category }}</td>
            <td>{{ formatCurrency(product.price) }}</td>
            <td>{{ product.stock }}</td>
            <td>
              <span class="badge" :class="getStatusClass(product.status)">{{ product.status }}</span>
            </td>
            <td>
              <button class="btn-icon"><MoreVertical :size="16" /></button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.page-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.table-toolbar {
  display: flex;
  justify-content: space-between;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid var(--bg-dark-700);
  margin-bottom: 1rem;
}

.search-box {
  position: relative;
  width: 300px;
}

.search-icon {
  position: absolute;
  left: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--text-muted);
}

.with-icon {
  padding-left: 2.5rem;
}

.font-mono { font-family: monospace; }
.font-medium { font-weight: 500; }
.text-center { text-align: center; padding: 2rem; color: var(--text-muted); }

.btn-icon {
  background: none;
  border: none;
  color: var(--text-muted);
  cursor: pointer;
  padding: 0.25rem;
}

.btn-icon:hover { color: var(--text-main); }
</style>
