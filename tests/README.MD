# Kubernetes + Playwright Learning Project

## Overview
This is a learning project designed to understand the fundamentals of **Kubernetes**, **Docker**, and **automation testing**. It demonstrates running Playwright tests in a Kubernetes environment using containerization.



## Project Details
- **Testing Framework**: [Playwright](https://playwright.dev/)
- **Test Target**: [Todo MVC Demo Application](https://demo.playwright.dev/todomvc)
- **Container Orchestration**: Kubernetes
- **Container Runtime**: Docker

## Prerequisites
- Docker
- Kubernetes cluster (or minikube for local development)
- kubectl CLI
- Node.js and npm

## Project Structure
- `demo-todo-app.spec.ts` - Playwright test suite for the Todo MVC application
- `dockerfile` - Docker image configuration for running tests
- `jobs.yml` / `job.yaml` - Kubernetes Job manifest
- `playwright.config.ts` - Playwright configuration
- `package.json` - Project dependencies

## Setup & Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Build Docker image** (if needed):
   ```bash
   docker build -t <image-name>:<tag> .
   ```

## Running Tests

### Locally
```bash
npm run test
```

### In Kubernetes
1. **Deploy the job**:
   ```bash
   kubectl apply -f jobs.yml
   ```

2. **Verify pod is running**:
   ```bash
   kubectl get pods
   ```

3. **View test logs**:
   ```bash
   kubectl logs <pod-name>
   ```

4. **Cleanup**:
   ```bash
   kubectl delete -f jobs.yml
   ```

## Learning Goals
- Containerize Playwright tests with Docker
- Deploy and run tests in Kubernetes
- Understand Kubernetes Jobs and Pod lifecycle
- Practice SDET (Software Development Engineer in Test) fundamentals