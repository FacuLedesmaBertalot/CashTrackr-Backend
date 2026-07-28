# CashTrackr API 💰 - Backend

This repository contains the backend for **CashTrackr**, a robust application for personal expense management. The API is built with a focus on **clean and scalable code architecture** and provides a **secure authentication** system.

## 🚀 Technologies Used

The server is developed using strong static typing to ensure data integrity.

* **[Node.js](https://nodejs.org/)** - Runtime environment.
* **[Express](https://expressjs.com/)** - Framework for building the REST API.
* **[Sequelize](https://sequelize.org/)** - ORM for relational database interaction.
* **TypeScript** - Static typing on the server.
* **JWT (JSON Web Tokens) & Bcrypt** - Authentication, authorization, and password encryption.

## ✨ API Features

* **Secure Authentication:** Protected endpoints, password encryption, and JWT token issuance.
* **Budget CRUD:** Routes to manage the user's different budgets.
* **Expense Management:** Dedicated controllers to record and manage expenses linked to each budget.
* **Data Validation:** Sanitization and validation of incoming requests.
* **Scalable Architecture:** Separation of concerns through Controllers, Services, Models, and Middlewares.

## 🛠️ Local Installation and Setup

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/cashtrackr-backend.git
cd cashtrackr-backend
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Variables
Create a `.env` file in the root of the project based on a `.env.example` file:

```env
PORT=4000
DB_NAME=cashtrackr_db
DB_USER=your_username
DB_PASSWORD=your_password
DB_HOST=localhost
DB_DIALECT=mysql
JWT_SECRET=your_super_secure_secret
```

### 4. Run the Server
Run the Sequelize migrations (if configured) and start the development environment:
```bash
npm run dev
```
*The API will be available at `http://localhost:4000`*

## 👨‍💻 Author

**Facundo Ledesma**
* Role: Backend / Full-Stack Developer
