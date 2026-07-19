# Harness Node.js CI/CD Demo

This is a simple Node.js application created to demonstrate a complete CI/CD pipeline using:

- Node.js
- Docker
- GitHub
- Harness CI
- Google Kubernetes Engine (GKE)

## Project Structure

```
.
├── app.js
├── package.json
├── Dockerfile
├── .dockerignore
├── .gitignore
└── README.md
```

## Run with Docker

```bash
docker build -t nodejs-cicd-demo .
docker run -p 3000:3000 nodejs-cicd-demo
```

## CI/CD Flow

1. Push code to GitHub
2. Harness detects the change
3. Build Docker image
4. Push image to registry
5. Deploy to GKE