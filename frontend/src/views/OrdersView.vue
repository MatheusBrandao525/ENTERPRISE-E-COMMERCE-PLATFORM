<script setup>
import { ref, onMounted } from 'vue';
import { Search, ChevronDown, Eye } from 'lucide-vue-next';

const orders = ref([]);
const loading = ref(true);

const loadOrders = async () => {
  await new Promise(r => setTimeout(r, 700));
  orders.value = [
    { id: 'ORD-8821', customer: 'Acme Corp', date: 'Oct 24, 2025', total: 15400.00, status: 'Shipped', payment: 'Paid' },
    { id: 'ORD-8822', customer: 'Globex Inc', date: 'Oct 25, 2025', total: 4999.00, status: 'Processing', payment: 'Paid' },
    { id: 'ORD-8823', customer: 'Soylent Corp', date: 'Oct 26, 2025', total: 850.00, status: 'Pending', payment: 'Unpaid' },
    { id: 'ORD-8824', customer: 'Umbrella Corp', date: 'Oct 26, 2025', total: 25000.00, status: 'Cancelled', payment: 'Refunded' },
    { id: 'ORD-8825', customer: 'Cyberdyne Sys', date: 'Oct 27, 2025', total: 102400.00, status: 'Shipped', payment: 'Paid' }
  ];
  loading.value = false;
};

onMounted(loadOrders);

const formatCurrency = (val) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(val);

const getStatusClass = (status) => {
  if (status === 'Shipped') return 'badge-success';
  if (status === 'Processing') return 'badge-warning';
  if (status === 'Cancelled') return 'badge-danger';
  return 'badge-neutral';
};

const getPaymentClass = (status) => {
  if (status === 'Paid') return 'text-success';
  if (status === 'Unpaid') return 'text-warning';
  return 'text-muted';
};
</script>

<template>
  <div class="page-container">
    <header class="page-header">
      <div>
        <h1>Orders Management</h1>
        <p class="text-muted">Track and process global transactions</p>
      </div>
    </header>

    <div class="ent-card">
      <div class="table-toolbar">
         <div class="search-box">
          <Search :size="18" class="search-icon" />
          <input type="text" placeholder="Search orders..." class="input-field with-icon" />
        </div>
      </div>

      <table class="ent-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Date</th>
            <th>Total</th>
            <th>Payment</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
           <tr v-if="loading">
            <td colspan="7" class="text-center">Loading orders...</td>
          </tr>
          <tr v-else v-for="order in orders" :key="order.id">
            <td class="font-mono">{{ order.id }}</td>
            <td class="font-medium">{{ order.customer }}</td>
            <td>{{ order.date }}</td>
            <td>{{ formatCurrency(order.total) }}</td>
            <td :class="getPaymentClass(order.payment)">{{ order.payment }}</td>
            <td>
              <span class="badge" :class="getStatusClass(order.status)">{{ order.status }}</span>
            </td>
            <td>
               <button class="btn-icon"><Eye :size="16" /></button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.page-container { display: flex; flex-direction: column; gap: 2rem; }
.page-header { margin-bottom: 2rem; }
.table-toolbar { padding: 1rem; border-bottom: 1px solid var(--bg-dark-700); }
.search-box { position: relative; width: 300px; }
.search-icon { position: absolute; left: 0.75rem; top: 50%; transform: translateY(-50%); color: var(--text-muted); }
.with-icon { padding-left: 2.5rem; }
.font-mono { font-family: monospace; color: var(--text-muted); }
.font-medium { font-weight: 500; }
.text-center { text-align: center; padding: 2rem; color: var(--text-muted); }
.text-success { color: var(--success); }
.text-warning { color: var(--warning); }
.text-muted { color: var(--text-muted); }
.btn-icon { background: none; border: none; color: var(--text-muted); cursor: pointer; }
.btn-icon:hover { color: var(--primary-500); }
</style>
