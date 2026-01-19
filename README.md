# Nexus Enterprise E-Commerce Platform

![Vue.js](https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2AE?style=for-the-badge&logo=docker&logoColor=white)
![Kubernetes](https://img.shields.io/badge/Kubernetes-326CE5?style=for-the-badge&logo=kubernetes&logoColor=white)

## 🚀 Project Overview

**Nexus Enterprise** is a high-performance, scalable e-commerce administration platform designed to demonstrate modern full-stack architecture. Built with **Vue 3 (Composition API)** and **Node.js**, it simulates a complex enterprise environment with microservices-ready structure, Docker containerization, and Kubernetes deployment manifests.

This project serves as a technical portfolio piece showcasing:
- **Clean Architecture Principles**
- **Modern UI/UX Design** with Glassmorphism and specialized Data Visualization
- **Infrastructure as Code** (Docker & Kubernetes)
- **State Management** pattern implementation

## 🏗️ Architecture

The system follows a decoupled split-stack architecture:

### Frontend (Client)
- **Framework**: Vue 3 + Vite
- **State**: Pinia Store
- **Routing**: Vue Router (Lazy Loaded)
- **Styling**: Custom Enterprise CSS System (Variables-based, Dark Mode native)
- **Visuals**: Lucide Icons, Custom Chart Components

### Backend (API)
- **Runtime**: Node.js + Express
- **Structure**: MVC Pattern (Routes -> Controllers -> Services)
- **Database (Simulated)**: PostgreSQL interface simulation
- **Cache (Simulated)**: Redis connection simulation
- **Security**: JWT Authentication flow (Mocked)

## 🛠️ Features

- **🔐 Enterprise Authentication**: Secure login flow with JWT token handling simulation.
- **📊 Executive Dashboard**: Real-time equivalent KPI monitoring, simulating live data streams.
- **🛍️ Inventory Management**: Complex data tables with status logic and CRUD simulations.
- **💳 Order Processing**: Order lifecycle tracking from "Pending" to "Shipped" via Stripe-like status codes.
- **🧠 AI Recommendations**: Simulated Machine Learning insights for inventory alerts (Demonstration of AI integration patterns).
- **🐳 Container Ready**: Full `docker-compose` setup for one-command orchestration.

## 💻 How to Run

### Local Simulation (Recommended)

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/nexus-enterprise.git
   cd nexus-enterprise
   ```

2. **Run with Docker Compose**
   ```bash
   docker-compose up --build
   ```
   *This starts the Frontend (port 8080), Backend (port 3000), simulated Postgres, and Redis.*

### Manual Development Setup

**Frontend:**
```bash
cd frontend
npm install
npm run dev
```

**Backend:**
```bash
cd backend
npm install
npm start
```

## 📂 Project Structure

```
├── backend/            # Express API Service
│   ├── src/
│   │   ├── controllers/
│   │   ├── routes/
│   │   └── config/
│   └── Dockerfile
├── frontend/           # Vue 3 Application
│   ├── src/
│   │   ├── assets/     # Enterprise CSS System
│   │   ├── components/ # Reusable UI Components
│   │   ├── views/      # Page Logic
│   │   └── stores/     # Pinia State
│   └── Dockerfile
├── k8s/                # Kubernetes Manifests
└── docker-compose.yml  # Local Orchestration
```

## ⚠️ Note on Simulation
This project is designed for **demonstration purposes**. Certain backend features (Database persistence, Stripe API calls) are simulated with timeouts and mock data to ensure the application runs smoothly in a portable enviornment for review without requiring external API keys.

---
*Architected by Matheus Brandao*
