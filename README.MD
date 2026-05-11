# Playwright Kubernetes Test Execution Framework

## Overview

This project demonstrates containerized browser automation execution using Playwright, Docker, and Kubernetes. The framework packages Playwright tests into Docker images and executes them as Kubernetes Jobs, showcasing scalable and reproducible automation workflows commonly used in modern CI/CD systems.

The project was built as a hands-on learning initiative to understand:
- Containerized test execution
- Kubernetes Job orchestration
- Pod lifecycle and debugging
- Docker image workflows
- CI/CD-ready automation infrastructure

---

## Architecture

```text
Playwright Tests
      ↓
Docker Image
      ↓
Docker Hub
      ↓
Kubernetes Job
      ↓
Pod Execution
      ↓
Test Logs & Results
```

---

## Tech Stack

- Testing Framework: Playwright
- Container Platform: Docker
- Container Orchestration: Kubernetes
- CI/CD: GitHub Actions
- Test Target: TodoMVC Demo Application

---

## Project Structure

```text
playwright-kubernetes-framework/
│
├── .github/
│   └── workflows/
│       └── playwright.yml
│
├── tests/
│   └── demo-todo-app.spec.ts
│
├── Dockerfile
├── job.yaml
├── playwright.config.ts
├── package.json
├── README.md
└── .gitignore
```

---

## Key Concepts Demonstrated

- Containerized browser automation using Playwright and Docker
- Kubernetes Job-based test execution
- Pod lifecycle and log inspection
- Local-to-cluster container execution workflow
- CI/CD-ready automation infrastructure
- Scalable and reproducible test execution

---

## Docker Image

Docker image published to Docker Hub:

https://hub.docker.com/r/ishuu10/playwright-demo-todo

---

## Prerequisites

Install the following tools before running the project:

- Docker Desktop
- Kubernetes enabled in Docker Desktop
- kubectl CLI
- Node.js
- npm

---

## Setup & Installation

### Clone Repository

```bash
git clone <your-repository-url>
cd playwright-kubernetes-framework
```

---

### Install Dependencies

```bash
npm install
```

---

## Running Tests Locally

```bash
npm run test
```

---

## Build Docker Image

```bash
docker build -t ishuu10/playwright-demo-todo:v1 .
```

---

## Running Tests in Kubernetes

### Deploy Kubernetes Job

```bash
kubectl apply -f job.yaml
```

---

### Verify Pod Status

```bash
kubectl get pods
```

Expected Output:

```text
playwright-job-xxxxx   Running
playwright-job-xxxxx   Completed
```

---

### View Test Logs

```bash
kubectl logs <pod-name>
```

Example:

```text
Running 24 tests using 3 workers

24 passed (3.6s)
```

---

### Cleanup Resources

```bash
kubectl delete -f job.yaml
```

---

## Sample Kubernetes Job Configuration

```yaml
apiVersion: batch/v1
kind: Job

metadata:
  name: playwright-job

spec:
  template:
    spec:
      containers:
      - name: playwright
        image: ishuu10/playwright-demo-todo:v1
        imagePullPolicy: Always

      restartPolicy: Never
```

---

## CI/CD

GitHub Actions workflow automatically executes Playwright tests on every push to the repository using GitHub-hosted runners.

Workflow location:

```text
.github/workflows/playwright.yml
```

---

## Learning Outcomes

Through this project, the following concepts were explored:

- Docker image creation and container execution
- Kubernetes Jobs and Pod orchestration
- Container debugging using kubectl logs
- Automation execution inside Kubernetes clusters
- Infrastructure-aware SDET workflows
- Reproducible test execution environments

---

## Future Improvements

- Parallel Kubernetes test execution
- HTML report generation and artifact storage
- Kubernetes ConfigMaps and Secrets integration
- Multi-environment test execution
- Helm-based deployment templates
- Full CI/CD integration with Kubernetes deployment workflows

---

## References

- Playwright Documentation: https://playwright.dev/
- Kubernetes Documentation: https://kubernetes.io/docs/
- Docker Documentation: https://docs.docker.com/

---