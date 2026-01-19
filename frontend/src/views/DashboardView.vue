<script setup>
import { ref, onMounted } from 'vue';
import { 
  DollarSign, 
  ShoppingBag, 
  Users, 
  Activity, 
  TrendingUp,
  BrainCircuit,
  ArrowRight
} from 'lucide-vue-next';

const stats = ref([
  { title: 'Total Revenue', value: '$124,500', change: '+12.5%', icon: DollarSign, trend: 'up' },
  { title: 'Active Orders', value: '1,240', change: '+3.2%', icon: ShoppingBag, trend: 'up' },
  { title: 'Total Vendors', value: '48', change: '-1.2%', icon: Users, trend: 'down' },
  { title: 'System Health', value: '99.9%', change: 'Stable', icon: Activity, trend: 'neutral' }
]);

const aiRecommendations = ref([
  { id: 1, text: 'Stock level for "Server Rack X1" is critical. Reorder suggested.', confidence: 98 },
  { id: 2, text: 'Vendor "Dell EMC" shows 15% increase in lead times.', confidence: 85 },
  { id: 3, text: 'Trending: "Quantum Encryption" demand up 200%.', confidence: 92 }
]);

</script>

<template>
  <div class="dashboard-container">
    <header class="page-header">
      <div class="header-content">
        <h1>Dashboard Overview</h1>
        <p class="text-muted">Real-time enterprise metrics & insights</p>
      </div>
      <div class="actions">
        <button class="btn btn-primary">
          <TrendingUp :size="18" /> Generate Report
        </button>
      </div>
    </header>

    <!-- KPI Grid -->
    <section class="grid-kpi">
      <div v-for="stat in stats" :key="stat.title" class="ent-card stat-card">
        <div class="stat-top">
          <div class="icon-box">
            <component :is="stat.icon" :size="22" />
          </div>
          <span :class="['trend-badge', stat.trend]">
            {{ stat.change }}
          </span>
        </div>
        <div class="stat-bottom">
          <div class="stat-value">{{ stat.value }}</div>
          <div class="stat-label">{{ stat.title }}</div>
        </div>
      </div>
    </section>

    <!-- Main Content Split -->
    <section class="dashboard-grid-main">
      <!-- AI Insights Panel -->
      <div class="ent-card ai-section">
        <div class="card-header">
          <div class="header-title">
            <div class="ai-icon-pulse">
              <BrainCircuit :size="20" class="text-primary" />
            </div>
            <h3>Nexus AI Insights</h3>
          </div>
          <span class="badge badge-neutral">Beta v0.9</span>
        </div>
        
        <div class="ai-content-list">
          <div v-for="rec in aiRecommendations" :key="rec.id" class="ai-card">
            <div class="ai-meta">
              <span class="confidence-score" :style="{ opacity: rec.confidence / 100 }">
                {{ rec.confidence }}% MATCH
              </span>
            </div>
            <p class="ai-text">{{ rec.text }}</p>
            <button class="btn-action">
              Apply <ArrowRight :size="14" />
            </button>
          </div>
        </div>
      </div>

      <!-- Analytics Chart Panel -->
      <div class="ent-card chart-section">
        <div class="card-header">
          <h3>Revenue Analytics</h3>
          <div class="chart-actions">
            <span class="period-selector active">Weekly</span>
            <span class="period-selector">Monthly</span>
          </div>
        </div>
        
        <div class="chart-visual">
          <!-- CSS Bar Chart Simulation -->
          <div class="bars-container">
            <div class="bar-group">
              <div class="bar" style="height: 40%"></div>
              <span class="label">Mon</span>
            </div>
             <div class="bar-group">
              <div class="bar" style="height: 60%"></div>
              <span class="label">Tue</span>
            </div>
             <div class="bar-group">
              <div class="bar" style="height: 45%"></div>
              <span class="label">Wed</span>
            </div>
             <div class="bar-group">
              <div class="bar" style="height: 70%"></div>
              <span class="label">Thu</span>
            </div>
             <div class="bar-group">
              <div class="bar" style="height: 85%"></div>
              <span class="label">Fri</span>
            </div>
             <div class="bar-group">
              <div class="bar active" style="height: 65%"></div>
              <span class="label">Sat</span>
            </div>
             <div class="bar-group">
              <div class="bar" style="height: 75%"></div>
              <span class="label">Sun</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.dashboard-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 1600px;
  margin: 0 auto;
}

/* Header */
.page-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  border-bottom: 1px solid var(--bg-dark-700);
  padding-bottom: 1.5rem;
}

.text-muted { color: var(--text-muted); }
.text-primary { color: var(--primary-500); }

/* KPI Grid */
.grid-kpi {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
}

@media (max-width: 1200px) {
  .grid-kpi { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 768px) {
  .grid-kpi { grid-template-columns: 1fr; }
}

.stat-card {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  transition: transform 0.2s, border-color 0.2s;
}

.stat-card:hover {
  transform: translateY(-2px);
  border-color: var(--primary-500);
}

.stat-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.icon-box {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-dark-900);
  border: 1px solid var(--bg-dark-700);
  border-radius: 8px;
  color: var(--text-muted);
}

.stat-card:hover .icon-box {
  color: var(--primary-500);
  border-color: var(--primary-500);
}

.trend-badge {
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.25rem 0.75rem;
  border-radius: 99px;
}
.trend-badge.up { color: var(--success); background: rgba(16, 185, 129, 0.15); }
.trend-badge.down { color: var(--danger); background: rgba(239, 68, 68, 0.15); }
.trend-badge.neutral { color: var(--text-muted); background: var(--bg-dark-700); }

.stat-value {
  font-size: 1.75rem;
  font-weight: 700;
  line-height: 1.2;
  color: var(--text-main);
}

.stat-label {
  color: var(--text-muted);
  font-size: 0.875rem;
  margin-top: 0.25rem;
}

/* Main Grid Split */
.dashboard-grid-main {
  display: grid;
  grid-template-columns: 1.2fr 1.8fr;
  gap: 1.5rem;
  align-items: start;
}

@media (max-width: 1024px) {
  .dashboard-grid-main { grid-template-columns: 1fr; }
}

/* Common Section Styles */
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--bg-dark-700);
}

.card-header h3 {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--text-main);
  margin: 0;
}

/* AI Section */
.header-title {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.ai-icon-pulse {
  position: relative;
  display: flex;
}

.ai-icon-pulse::after {
  content: '';
  position: absolute;
  top: -2px; left: -2px; right: -2px; bottom: -2px;
  border-radius: 50%;
  border: 1px solid var(--primary-500);
  opacity: 0.5;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% { transform: scale(1); opacity: 0.5; }
  100% { transform: scale(1.5); opacity: 0; }
}

.ai-content-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.ai-card {
  background: linear-gradient(145deg, rgba(59, 130, 246, 0.05) 0%, rgba(30, 41, 59, 0.4) 100%);
  border: 1px solid rgba(59, 130, 246, 0.2);
  padding: 1.25rem;
  border-radius: var(--radius-md);
  position: relative;
  transition: all 0.2s;
}

.ai-card:hover {
  background: rgba(59, 130, 246, 0.08);
  border-color: var(--primary-500);
}

.ai-meta {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}

.confidence-score {
  font-size: 0.7rem;
  font-weight: 700;
  color: var(--primary-500);
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.ai-text {
  font-size: 0.925rem;
  color: var(--text-main);
  line-height: 1.5;
  margin-bottom: 1rem;
}

.btn-action {
  font-size: 0.75rem;
  color: var(--text-muted);
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0;
  transition: color 0.2s;
}

.btn-action:hover {
  color: var(--primary-500);
}

/* Chart Section */
.period-selector {
  font-size: 0.8rem;
  color: var(--text-muted);
  cursor: pointer;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
}

.period-selector.active {
  background: var(--bg-dark-700);
  color: var(--text-main);
  font-weight: 600;
}

.chart-visual {
  height: 250px;
  display: flex;
  align-items: flex-end;
}

.bars-container {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding-top: 1rem;
}

.bar-group {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  flex: 1;
  gap: 0.75rem;
  height: 100%;
}

.bar {
  width: 30%;
  min-width: 8px;
  max-width: 40px;
  background: var(--bg-dark-700);
  border-radius: 6px 6px 0 0;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.bar::after {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: linear-gradient(to bottom, rgba(255,255,255,0.1), transparent);
}

.bar:hover, .bar.active {
  background: var(--primary-500);
  box-shadow: 0 0 15px rgba(59, 130, 246, 0.3);
  width: 35%;
}

.label {
  font-size: 0.75rem;
  color: var(--text-muted);
  font-weight: 500;
}
</style>
