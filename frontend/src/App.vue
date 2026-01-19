<script setup>
import { RouterView, useRoute } from 'vue-router';
import Sidebar from './components/layout/Sidebar.vue';
import { useAuthStore } from './stores/auth';
import { computed } from 'vue';

const route = useRoute();
const auth = useAuthStore();

const isLoginPage = computed(() => route.name === 'login');
const showLayout = computed(() => auth.isAuthenticated && !isLoginPage.value);
</script>

<template>
  <div class="app-container">
    <Sidebar v-if="showLayout" />
    
    <main :class="{ 'main-content': showLayout, 'full-width': !showLayout }">
      <RouterView v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </RouterView>
    </main>
  </div>
</template>

<style>
/* Global Layout */
.app-container {
  min-height: 100vh;
  display: flex;
}

.main-content {
  margin-left: 260px; /* Sidebar width */
  flex: 1;
  padding: 2rem;
  background: var(--bg-dark-900);
  min-height: 100vh;
}

.full-width {
  width: 100%;
}

/* Transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
