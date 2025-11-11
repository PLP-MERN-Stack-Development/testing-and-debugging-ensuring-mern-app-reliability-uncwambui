# MERN Testing and Debugging Assignment

## 📚 Overview
This project focuses on implementing comprehensive testing strategies for a MERN stack application, including **unit testing**, **integration testing**, and **end-to-end testing**, along with debugging techniques. The goal is to ensure reliability, maintainability, and stability of a full-stack MERN application.

## 🏗️ Project Structure
```text
mern-testing/
├── client/                 # React front-end
│   ├── src/                
│   │   ├── components/     # React components
│   │   ├── tests/          
│   │   │   ├── unit/       # Unit tests for React
│   │   │   └── integration/ # Integration tests for React
│   │   └── App.jsx         
│   └── cypress/            # End-to-end tests
├── server/                 # Express.js back-end
│   ├── src/                
│   │   ├── controllers/    
│   │   ├── models/         
│   │   ├── routes/         
│   │   └── middleware/     
│   └── tests/              
│       ├── unit/           
│       └── integration/    
├── jest.config.js          # Jest configuration
├── package.json            
└── README.md               # Project documentation
```

## ⚡ Getting Started

1. **Clone the Repository**
```bash
git clone <your-repo-url>
cd mern-testing
```

2. **Install Dependencies**
```bash
npm install
```

3. **Set up Environment Variables**
Create a `.env` file in both `client` and `server` if needed:
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/testdb
```

4. **Start the Development Server**
```bash
# Server
npm run start

# Client
npm run dev
```

## 🧪 Testing Setup

### 1️⃣ Unit Tests
- **Client:** Tests React components using React Testing Library.
- **Server:** Tests server functions and middleware using Jest.

Run unit tests:
```bash
npm run test:unit
```

### 2️⃣ Integration Tests
- Tests API endpoints using Supertest.
- Validates database interactions and React components that interact with APIs.

Run integration tests:
```bash
npm run test:integration
```

### 3️⃣ End-to-End (E2E) Tests
- Tests full user flows in the browser using Cypress.
- Covers critical functionality like login, registration, CRUD operations, and navigation.

Run end-to-end tests:
```bash
npm run test:e2e
```

### 4️⃣ Code Coverage
- Aim for at least **70% code coverage** for unit tests.
```bash
npm run test -- --coverage
```

## 🛠️ Debugging Techniques
- **Server-side:** Logging, global error handling, and performance monitoring.
- **Client-side:** Error boundaries, React DevTools, and browser debugging tools.
- **Database:** Using test databases to avoid corrupting production data.

## 🔧 Technologies Used
- **Front-end:** React, React Router DOM
- **Back-end:** Node.js, Express.js
- **Database:** MongoDB
- **Testing:** Jest, React Testing Library, Supertest, Cypress
- **Other Tools:** Babel, Vite

## ✅ Assignment Completion Checklist
- [x] Unit tests for client and server
- [x] Integration tests for API and React components
- [x] End-to-end tests with Cypress
- [x] Test coverage reports
- [x] Debugging techniques implemented
- [x] README documentation

## 📂 Notes
- Keep the `.env` file **untracked** in `.gitignore`.
- Run **server tests** separately from client tests.
- Document any errors or challenges encountered during testing in comments or notes.

