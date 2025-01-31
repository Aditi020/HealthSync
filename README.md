## Healthsync ##

### **🩺 AI-Powered Symptom Checker & Health Journal**  
A **healthcare-focused MERN application** where users can:  
1. **Enter Symptoms** – Users input their symptoms, and the app suggests possible conditions using an AI API like OpenAI or a medical database.  
2. **Track Health** – Users maintain a **personal health journal** to log symptoms, medications, and doctor visits.  
3. **Doctor Recommendations** – Based on symptoms, the app suggests **nearby doctors or specialists** (using Google Maps API).  
4. **Medication Reminders** – Users can set reminders for medications, with push notifications.  
5. **Health Insights** – Charts and analytics to show trends in symptoms over time.  

### **Tech Stack**
- **Frontend:** React + Vite (for speed 🚀)  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB (stores user health data securely)  
- **Authentication:** JWT (for user logins & secure data access)  
- **APIs:** OpenAI/MedAPI for symptom analysis, Google Maps API for doctor recommendations  

## **🌟 Folder Structure Overview**
/MERN-Health-App
│── /client  (Frontend - React, Vite, Tailwind)
│   ├── /public
│   │   ├── favicon.ico
│   │   ├── index.html
│   │   ├── manifest.json
│   ├── /src
│   │   ├── /assets
│   │   │   ├── logo.png
│   │   │   ├── styles.css
│   │   ├── /components
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Button.jsx
│   │   │   ├── Loader.jsx
│   │   ├── /pages
│   │   │   ├── Home.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── SymptomChecker.jsx
│   │   │   ├── HealthJournal.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   ├── /context
│   │   │   ├── AuthContext.jsx
│   │   ├── /hooks
│   │   │   ├── useAuth.js
│   │   │   ├── useFetch.js
│   │   ├── /services
│   │   │   ├── api.js
│   │   ├── /store (Redux Toolkit)
│   │   │   ├── store.js
│   │   │   ├── authSlice.js
│   │   │   ├── journalSlice.js
│   │   ├── /routes
│   │   │   ├── AppRoutes.jsx
│   │   ├── /utils
│   │   │   ├── helpers.js
│   │   │   ├── constants.js
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   ├── index.css
│   ├── .env
│   ├── package.json
│   ├── tailwind.config.js
│   ├── vite.config.js
│── /server  (Backend - Node, Express, MongoDB)
│   ├── /config
│   │   ├── db.js
│   │   ├── dotenv.js
│   ├── /controllers
│   │   ├── authController.js
│   │   ├── symptomController.js
│   │   ├── journalController.js
│   ├── /models
│   │   ├── User.js
│   │   ├── JournalEntry.js
│   │   ├── Symptom.js
│   ├── /routes
│   │   ├── authRoutes.js
│   │   ├── symptomRoutes.js
│   │   ├── journalRoutes.js
│   ├── /middleware
│   │   ├── authMiddleware.js
│   │   ├── errorMiddleware.js
│   ├── /utils
│   │   ├── tokenUtils.js
│   ├── server.js
│   ├── .env
│   ├── package.json
│   ├── README.md
│── .gitignore


---

## **🖥️ Frontend (/client)**  
📌 **Uses: React, Vite, TailwindCSS, React Router, Redux Toolkit**  

### 🔹 src/assets/
Stores **images, icons, and global CSS styles**.  

### 🔹 src/components/
Re-usable UI components (e.g., Button.jsx, Loader.jsx, Header.jsx).  

### 🔹 src/pages/
Each React page (e.g., Home.jsx, SymptomChecker.jsx, HealthJournal.jsx).  

### 🔹 src/context/
Contains **context providers**, like AuthContext.jsx.  

### 🔹 src/hooks/
Custom React hooks (useAuth.js, useFetch.js).  

### 🔹 src/services/
Handles **API requests** (api.js).  

### 🔹 src/store/
State management with **Redux Toolkit** (authSlice.js, journalSlice.js).  

### 🔹 src/routes/
Manages **React Router paths** (AppRoutes.jsx).  

---



#### api.js (uses constants.js for API endpoints) ####
#### useAuth.js (uses helpers.js for localStorage and error handling) ####
#### useFetch.js (uses helpers.js for error handling) ####
#### Login.jsx (uses helpers.js for localStorage and error handling) ####
#### Header.jsx (uses constants.js for theme constants) ####




## **🖥️ Backend (/server)**  
📌 **Uses: Node.js, Express.js, MongoDB, JWT for authentication**  

### 🔹 config/db.js
MongoDB connection setup.  

### 🔹 controllers/
Handles **business logic** for authentication, symptom checking, and journal entries.  

### 🔹 models/
Defines **MongoDB schemas** (User.js, JournalEntry.js).  

### 🔹 routes/
Express routes (API endpoints) like /api/auth, /api/symptoms, /api/journal.  

### 🔹 middleware/
Middleware functions for authentication (authMiddleware.js) and error handling (errorMiddleware.js).  

### 🔹 utils/
Helper functions (tokenUtils.js for JWT handling).  

### 🔹 server.js
Main entry file for Express API.  

---

## **🚀 How to Run the Project**
### **1️⃣ Backend (Server)**
sh
cd server
npm install
npm start


### **2️⃣ Frontend (Client)**
sh
cd client
npm install
npm run dev

