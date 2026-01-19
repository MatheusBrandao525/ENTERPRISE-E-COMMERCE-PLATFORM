<script setup>
import { ref } from 'vue';
import { useAuthStore } from '../stores/auth';
import { useRouter } from 'vue-router';
import { Lock, Mail } from 'lucide-vue-next';
import BrandLogo from '../components/common/BrandLogo.vue';

const email = ref('admin@nexus.com');
const password = ref('password');
const auth = useAuthStore();
const router = useRouter();
const loading = ref(false);

const handleLogin = async () => {
  loading.value = true;
  await new Promise(r => setTimeout(r, 1000)); // Fake network delay
  const success = await auth.login(email.value, password.value);
  if (success) {
    router.push('/');
  }
  loading.value = false;
};
</script>

<template>
  <div class="login-wrapper">
    <div class="login-card">
      <div class="brand-header">
        <BrandLogo class="justify-center scale-150" />
        <p class="subtitle mt-4">Enterprise Administration</p>
      </div>

      <form @submit.prevent="handleLogin" class="login-form">
        <div class="form-group">
          <label>Email Address</label>
          <div class="input-icon-wrapper">
            <Mail class="input-icon" :size="18" />
            <input type="email" v-model="email" class="input-field with-icon" required />
          </div>
        </div>

        <div class="form-group">
          <label>Password</label>
          <div class="input-icon-wrapper">
            <Lock class="input-icon" :size="18" />
            <input type="password" v-model="password" class="input-field with-icon" required />
          </div>
        </div>

        <button type="submit" class="btn btn-primary btn-block" :disabled="loading">
          <span v-if="!loading">Sign In to Dashboard</span>
          <span v-else>Authenticating...</span>
        </button>
      </form>
      
      <div class="footer-links">
        <a href="#">Forgot password?</a>
        <span class="divider">•</span>
        <a href="#">System Status</a>
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
  background: radial-gradient(circle at top right, var(--bg-dark-800) 0%, var(--bg-dark-900) 100%);
}

.login-card {
  width: 100%;
  max-width: 420px;
  background: var(--bg-dark-800);
  padding: 2.5rem;
  border-radius: var(--radius-lg);
  border: 1px solid var(--bg-dark-700);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
}

.brand-header {
  text-align: center;
  margin-bottom: 2.5rem;
}

.logo-box {
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, var(--primary-600), var(--primary-500));
  border-radius: 12px;
  margin: 0 auto 1rem;
}

h1 {
  font-size: 1.75rem;
  margin-bottom: 0.25rem;
}

.highlight { color: var(--primary-500); }

.subtitle {
  color: var(--text-muted);
  font-size: 0.875rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: var(--text-muted);
}

.input-icon-wrapper {
  position: relative;
}

.input-icon {
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--text-muted);
}

.with-icon {
  padding-left: 2.75rem;
}

.btn-block {
  width: 100%;
  padding: 0.875rem;
  font-size: 1rem;
  margin-top: 0.5rem;
}

.footer-links {
  margin-top: 2rem;
  text-align: center;
  font-size: 0.875rem;
}

.footer-links a {
  color: var(--text-muted);
  text-decoration: none;
  transition: color 0.2s;
}

.footer-links a:hover {
  color: var(--primary-500);
}

.divider {
  margin: 0 0.5rem;
  color: var(--bg-dark-700);
}
</style>
