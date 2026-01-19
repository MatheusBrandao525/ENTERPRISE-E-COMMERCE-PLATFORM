<script setup>
import { Hexagon } from 'lucide-vue-next';
</script>

<template>
  <div class="brand-logo">
    <div class="logo-icon-wrapper">
      <Hexagon class="logo-icon" fill="currentColor" :size="24" />
      <div class="logo-pulse"></div>
    </div>
    <span class="logo-text">NEXUS<span class="highlight">ERP</span></span>
  </div>
</template>

<style scoped>
.brand-logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  user-select: none;
}

.logo-icon-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary-500);
}

.logo-icon {
  z-index: 2;
  stroke-width: 2.5;
}

.logo-pulse {
  position: absolute;
  width: 100%;
  height: 100%;
  background: var(--primary-500);
  border-radius: 50%;
  opacity: 0.2;
  filter: blur(8px);
  z-index: 1;
}

.logo-text {
  font-family: 'Inter', sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: -0.03em;
  color: var(--text-main);
}

.highlight {
  color: var(--primary-500);
}
</style>
