<script setup>
import { ref } from 'vue';
import { useAuthStore } from '../stores/auth';
import { useRouter } from 'vue-router';
import { Lock, Mail, ArrowRight } from 'lucide-vue-next';
import BrandLogo from '../components/common/BrandLogo.vue';

const email = ref('admin@nexus.com');
const password = ref('password');
const auth = useAuthStore();
const router = useRouter();
const loading = ref(false);

const handleLogin = async () => {
  loading.value = true;
  await new Promise(r => setTimeout(r, 1000));
  const success = await auth.login(email.value, password.value);
  if (success) {
    router.push('/');
  }
  loading.value = false;
};
</script>

<template>
  <div class="login-wrapper">
    <div class="login-container">
      <!-- Login Card -->
      <div class="login-card">
        <div class="card-header">
           <div class="brand-centered">
             <BrandLogo class="scale-110" />
           </div>
           <p class="subtitle">Enterprise Administration Portal</p>
        </div>

        <form @submit.prevent="handleLogin" class="login-form">
          <div class="form-group">
            <label>Work Email</label>
            <div class="input-wrapper">
              <Mail class="input-icon" :size="20" />
              <input 
                type="email" 
                v-model="email" 
                class="input-field" 
                placeholder="name@company.com" 
                required 
              />
            </div>
          </div>

          <div class="form-group">
            <div class="label-row">
              <label>Password</label>
              <a href="#" class="forgot-link">Forgot password?</a>
            </div>
            <div class="input-wrapper">
              <Lock class="input-icon" :size="20" />
              <input 
                type="password" 
                v-model="password" 
                class="input-field" 
                placeholder="••••••••" 
                required 
              />
            </div>
          </div>

          <button type="submit" class="btn-submit" :disabled="loading">
            <span v-if="!loading">Sign In</span>
            <span v-else>Authenticating...</span>
            <ArrowRight v-if="!loading" :size="20" />
          </button>
        </form>
      </div>

      <!-- Footer Info -->
      <div class="login-footer">
        <p>&copy; 2026 Nexus Systems Inc. <span class="divider">|</span> <a href="#">System Status</a></p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.login-wrapper {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(circle at center, #1e293b 0%, #0f172a 100%);
  padding: 1rem;
}

.login-container {
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.login-card {
  background: rgba(30, 41, 59, 0.7);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 2.5rem;
  border-radius: 16px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
}

.card-header {
  text-align: center;
  margin-bottom: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.brand-centered {
  transform: scale(1.2);
}

.subtitle {
  color: var(--text-muted);
  font-size: 0.875rem;
  font-weight: 500;
}

.form-group {
  margin-bottom: 1.5rem;
}

.label-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}

label {
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--text-main);
  margin-bottom: 0.5rem;
}

.input-wrapper {
  position: relative;
  transition: all 0.2s;
}

.input-icon {
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--text-muted);
  pointer-events: none;
}

.input-field {
  width: 100%;
  background: rgba(15, 23, 42, 0.6);
  border: 1px solid var(--bg-dark-700);
  padding: 0.75rem 1rem 0.75rem 3rem;
  border-radius: 8px;
  color: white;
  font-size: 0.95rem;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.input-field:focus {
  border-color: var(--primary-500);
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.1);
}

.forgot-link {
  font-size: 0.875rem;
  color: var(--primary-500);
  text-decoration: none;
}

.forgot-link:hover {
  text-decoration: underline;
}

.btn-submit {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.875rem;
  background: var(--primary-600);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.btn-submit:hover {
  background: var(--primary-500);
  transform: translateY(-1px);
}

.btn-submit:active {
  transform: translateY(0);
}

.btn-submit:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.login-footer {
  text-align: center;
  font-size: 0.875rem;
  color: var(--text-muted);
}

.login-footer a {
  color: var(--text-muted);
  text-decoration: none;
}

.login-footer a:hover {
  color: white;
}

.divider {
  margin: 0 0.5rem;
  opacity: 0.5;
}
</style>
