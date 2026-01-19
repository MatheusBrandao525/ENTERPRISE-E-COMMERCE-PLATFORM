<script setup>
import { RouterLink, useRoute } from 'vue-router';
import { 
  LayoutDashboard, 
  Package, 
  ShoppingCart, 
  Users, 
  Settings, 
  LogOut 
} from 'lucide-vue-next';
import { useAuthStore } from '../../stores/auth';
import BrandLogo from '../common/BrandLogo.vue';

const route = useRoute();
const auth = useAuthStore();

const isActive = (path) => route.path === path;
</script>

<template>
  <aside class="sidebar">
    <div class="logo-area">
      <BrandLogo />
    </div>

    <nav class="nav-menu">
      <RouterLink to="/" class="nav-item" :class="{ active: isActive('/') }">
        <LayoutDashboard :size="20" />
        <span>Dashboard</span>
      </RouterLink>
      
      <RouterLink to="/products" class="nav-item" :class="{ active: isActive('/products') }">
        <Package :size="20" />
        <span>Products</span>
      </RouterLink>

      <RouterLink to="/orders" class="nav-item" :class="{ active: isActive('/orders') }">
        <ShoppingCart :size="20" />
        <span>Orders</span>
      </RouterLink>

      <RouterLink to="/vendors" class="nav-item" :class="{ active: isActive('/vendors') }">
        <Users :size="20" />
        <span>Vendors</span>
      </RouterLink>
    </nav>

    <div class="bottom-menu">
      <button @click="auth.logout()" class="nav-item logout">
        <LogOut :size="20" />
        <span>Logout</span>
      </button>
    </div>
  </aside>
</template>

<style scoped>
.sidebar {
  width: 260px;
  background: var(--bg-dark-800);
  border-right: 1px solid var(--bg-dark-700);
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  position: fixed;
  left: 0;
  top: 0;
}

.logo-area {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 3rem;
  padding: 0 0.5rem;
}

.logo-icon {
  width: 32px;
  height: 32px;
  background: linear-gradient(135deg, var(--primary-600), var(--primary-500));
  border-radius: 6px;
}

.logo-text {
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: -0.03em;
}

.highlight {
  color: var(--primary-500);
}

.nav-menu {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  border-radius: var(--radius-md);
  color: var(--text-muted);
  text-decoration: none;
  transition: all 0.2s;
  font-weight: 500;
}

.nav-item:hover {
  background: rgba(255, 255, 255, 0.03);
  color: var(--text-main);
}

.nav-item.active {
  background: rgba(59, 130, 246, 0.1); /* Primary/10 */
  color: var(--primary-500);
}

.bottom-menu {
  border-top: 1px solid var(--bg-dark-700);
  padding-top: 1rem;
}

.logout:hover {
  color: var(--danger);
  background: rgba(239, 68, 68, 0.1);
}
</style>
