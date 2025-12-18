# Demo Node.js App for CI/CD

This is a demo Node.js application designed to showcase CI/CD automation.

## Autopilot Configuration
Build Command: "npm run build"
Test Command: "npm test"
Deploy Target: "azure-webapp"

## Features
- **Docker Integration**: Pushes Docker images to Azure Container Registry (ACR) using secrets `ACR_LOGIN_SERVER`, `ACR_USERNAME`, and `ACR_PASSWORD`.
- **Azure Deployment**: Deploys via Azure Web App Publish Profile to the `production` slot.
- **Server**: A simple Express server running on port 3000, serving a JSON response on `GET /`.

## Running Locally
1. Install dependencies: `npm install`
2. Start the server: `npm start`
