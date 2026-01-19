<script setup>
import { ref, onMounted } from 'vue';
import { Star, Package, TrendingUp } from 'lucide-vue-next';

const vendors = ref([]);

const loadVendors = async () => {
    await new Promise(r => setTimeout(r, 500));
    vendors.value = [
        { id: 1, name: 'Dell EMC', category: 'Hardware', rating: 4.8, products: 45, sales: '$1.2M' },
        { id: 2, name: 'AWS Reseller', category: 'Services', rating: 4.9, products: 12, sales: '$540k' },
        { id: 3, name: 'Siemens', category: 'Industrial', rating: 4.6, products: 120, sales: '$890k' },
        { id: 4, name: 'NVIDIA', category: 'Chipset', rating: 5.0, products: 8, sales: '$3.2M' }
    ];
};

onMounted(loadVendors);
</script>

<template>
  <div class="page-container">
     <header class="page-header">
      <div>
        <h1>Vendor Network</h1>
        <p class="text-muted">Managed strategic partnerships</p>
      </div>
    </header>

    <div class="grid-vendors">
        <div v-for="vendor in vendors" :key="vendor.id" class="ent-card vendor-card">
            <div class="vendor-header">
                <div class="vendor-icon">{{ vendor.name.substring(0,2).toUpperCase() }}</div>
                <div class="vendor-info">
                    <h3>{{ vendor.name }}</h3>
                    <span class="category">{{ vendor.category }}</span>
                </div>
                <div class="rating">
                    <Star size="14" fill="currentColor" class="star" /> {{ vendor.rating }}
                </div>
            </div>
            
            <div class="vendor-stats">
                <div class="v-stat">
                    <Package size="16" class="text-muted" />
                    <span>{{ vendor.products }} Items</span>
                </div>
                 <div class="v-stat">
                    <TrendingUp size="16" class="text-muted" />
                    <span>{{ vendor.sales }} Sales</span>
                </div>
            </div>

            <button class="btn btn-ghost full-btn">View Profile</button>
        </div>
    </div>
  </div>
</template>

<style scoped>
.page-container { display: flex; flex-direction: column; gap: 2rem; }
.grid-vendors { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 1.5rem; }

.vendor-card { padding: 1.5rem; display: flex; flex-direction: column; gap: 1.5rem; }

.vendor-header { display: flex; align-items: flex-start; gap: 1rem; }

.vendor-icon {
    width: 48px; height: 48px;
    background: linear-gradient(135deg, var(--bg-dark-700), var(--bg-dark-600));
    border-radius: 8px;
    display: flex; align-items: center; justify-content: center;
    font-weight: 700; color: var(--text-main);
}

.vendor-info { flex: 1; }
.vendor-info h3 { font-size: 1.125rem; margin-bottom: 0.25rem; }
.category { font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-muted); }

.rating { 
    display: flex; align-items: center; gap: 0.25rem;
    background: rgba(245, 158, 11, 0.1); color: var(--warning);
    padding: 0.25rem 0.5rem; border-radius: 99px; font-size: 0.75rem; font-weight: 600;
}

.vendor-stats {
    display: flex; justify-content: space-between;
    padding: 1rem 0;
    border-top: 1px solid var(--bg-dark-700);
    border-bottom: 1px solid var(--bg-dark-700);
}

.v-stat { display: flex; align-items: center; gap: 0.5rem; font-size: 0.875rem; }

.full-btn { width: 100%; margin-top: auto; }
</style>
