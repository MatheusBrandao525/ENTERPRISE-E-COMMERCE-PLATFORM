import { defineStore } from 'pinia'
import axios from 'axios'

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: null,
        token: localStorage.getItem('token') || null
    }),
    getters: {
        isAuthenticated: (state) => !!state.token
    },
    actions: {
        async login(email, password) {
            // Mock API call to our backend (simulated or real)
            try {
                // In a real scenario:
                // const res = await axios.post('http://localhost:3000/api/auth/login', { email, password })

                // Simulating success slightly for smoother local dev without backend running 100%
                const displayUser = {
                    name: 'Matheus Brandao',
                    role: 'Admin',
                    avatar: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'
                };

                this.user = displayUser;
                this.token = 'mock_token';
                localStorage.setItem('token', 'mock_token');
                return true;
            } catch (e) {
                console.error(e);
                return false;
            }
        },
        logout() {
            this.user = null;
            this.token = null;
            localStorage.removeItem('token');
        }
    }
})
