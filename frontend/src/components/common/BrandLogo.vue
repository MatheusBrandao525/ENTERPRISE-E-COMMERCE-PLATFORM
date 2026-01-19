<script setup>
import { Hexagon, Layers, Cpu } from 'lucide-vue-next';
</script>

<template>
  <div class="brand-logo">
    <div class="logo-icon-wrapper">
      <!-- Enterprise Abstract Icon: Layers/Cpu Concept -->
      <Layers class="logo-icon" :size="28" stroke-width="2.5" />
      <div class="logo-backdrop"></div>
    </div>
    <div class="logo-text-group">
      <span class="logo-main">NEXUS</span>
      <span class="logo-sub">ERP</span>
    </div>
  </div>
</template>

<style scoped>
.brand-logo {
  display: flex;
  align-items: center;
  gap: 0.875rem;
  user-select: none;
}

.logo-icon-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  color: white;
}

.logo-icon {
  z-index: 2;
  position: relative;
}

.logo-backdrop {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, var(--primary-600), var(--primary-500));
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
  transform: rotate(45deg); /* Diamond shape background */
  z-index: 1;
}

.logo-text-group {
  display: flex;
  flex-direction: column;
  line-height: 1;
}

.logo-main {
  font-family: 'Inter', sans-serif;
  font-size: 1.25rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  color: var(--text-main);
}

.logo-sub {
  font-size: 0.65rem;
  font-weight: 700;
  color: var(--primary-500);
  letter-spacing: 0.2em;
  text-transform: uppercase;
  margin-top: 2px;
}
</style>
