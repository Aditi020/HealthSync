# HealthSync - Personal Health Management System 🏥

HealthSync is a **full-stack MERN (MongoDB, Express.js, React, Node.js)** application designed to help users manage their health effectively. It combines **AI-powered symptom analysis**, **health tracking**, **medication management**, and **data visualization** into a single platform.

![HealthSync Dashboard](./client/src/Hero.svg)

---

## ✨ Features

### **Frontend (Client)**
- **📊 Interactive Dashboard**: Quick overview of daily health metrics, medication reminders, and recent health logs.
- **💊 Medication Management**: Track medications, set reminders, and monitor adherence.
- **📝 Health Journal**: Log symptoms, medications, and doctor visits.
- **🔍 Symptom Checker**: Analyze symptoms using AI and get condition suggestions.
- **📈 Health Insights**: Visualize health trends and patterns over time.
- **⚙️ Customizable Settings**: Dark/Light mode, notification preferences, and profile management.

### **Backend (Server)**
- **🔐 Secure Authentication**: JWT-based login, registration, and session management.
- **📊 Health Metrics Tracking**: Log and retrieve health data (e.g., temperature, heart rate).
- **💊 Medication Tracking**: Add, update, and track medications with reminders.
- **🔍 Symptom Analysis**: Analyze symptoms using OpenAI API.
- **📝 Health Journal**: Log and retrieve journal entries.
- **📤 Data Export**: Export health data in CSV or PDF format.
- **🔔 Notifications**: Schedule and send medication reminders via email.

---

## 🛠️ Technologies Used

### **Frontend**
- **React 18**: For building the user interface.
- **TypeScript**: For type safety and better code quality.
- **Tailwind CSS**: For responsive and customizable styling.
- **Lucide Icons**: For icons.
- **Recharts**: For data visualization (charts and graphs).
- **React Router DOM**: For client-side routing.
- **Zustand**: For state management.

### **Backend**
- **Node.js**: For server-side logic.
- **Express.js**: For building RESTful APIs.
- **MongoDB**: For storing user data, health metrics, medications, and journal entries.
- **JWT (JSON Web Tokens)**: For secure user authentication.
- **OpenAI API**: For symptom analysis and condition suggestions.
- **Nodemailer**: For sending email notifications.
- **Agenda**: For scheduling medication reminders.
- **Winston/Morgan**: For logging requests and errors.

---

## 🚀 Getting Started

### **Prerequisites**
- Node.js (v18 or higher)
- MongoDB Atlas (or local MongoDB instance)
- OpenAI API key

### **Installation**

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/healthsync.git
   cd healthsync
   ```

2. **Set up the backend**:
   ```bash
   cd server
   npm install
   ```

3. **Set up the frontend**:
   ```bash
   cd ../client
   npm install
   ```

4. **Configure environment variables**:
   - Create a `.env` file in the `server/` folder:
     ```env
     MONGO_URI=mongodb+srv://username:password@cluster0.mongodb.net/healthsync
     JWT_SECRET=your_jwt_secret
     OPENAI_KEY=your_openai_key
     PORT=5000
     ```

5. **Start the backend server**:
   ```bash
   cd ../server
   npm start
   ```

6. **Start the frontend development server**:
   ```bash
   cd ../client
   npm run dev
   ```

7. **Open your browser** and navigate to `http://localhost:5173`.

---


## 🔒 Security

- **JWT Authentication**: Secure user authentication with access and refresh tokens.
- **Environment Variables**: Sensitive data (e.g., API keys, database URIs) is stored in `.env`.
- **Input Validation**: Ensures user inputs are sanitized and validated.
- **Rate Limiting**: Prevents abuse of APIs.

---

## 🤝 Contributing

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👥 Authors

- **Aditi Kumar** - *Initial work* - [YourGitHub](https://github.com/Aditi020)

---

## 🙏 Acknowledgments

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)
- [Recharts](https://recharts.org/)
- [OpenAI](https://openai.com/)
```

---

### **How to Use**
1. Copy the above code.
2. Paste it into a new `README.md` file in the **root of your GitHub repository**.
3. Update the placeholders (e.g., `yourusername`, `your_openai_key`) with your actual information.
4. Commit and push the changes to GitHub.

This `README.md` will provide a **professional and detailed overview** of your project for anyone visiting your repository. Let me know if you need further customization! 🚀

<!-- ```markdown```
# HealthSync 🩺

**AI-Powered Health Tracking & Symptom Analysis Platform**

[![MERN Stack](https://img.shields.io/badge/MERN-Full%20Stack-blue)](https://www.mongodb.com/mern-stack)
[![React](https://img.shields.io/badge/React-18.2.0-blue)](https://react.dev/)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

A modern healthcare web application that helps users track symptoms, manage medications, and get AI-powered health insights.

![HealthSync Dashboard Preview](client/public/assets/images/illustrations/dashboard-preview.jpg)

## Features ✨

### Core Functionalities
- **🤖 AI Symptom Checker** - Get potential condition analysis using OpenAI
- **📅 Health Journal** - Track daily symptoms & doctor visits
- **💊 Medication Tracker** - Set reminders with push notifications
- **📊 Health Insights** - Visualize health trends with interactive charts
- **👨⚕️ Doctor Finder** - Locate nearby specialists using Google Maps

### Technical Highlights
- **🔐 JWT Authentication** - Secure user sessions
- **⚡ Zustand State Management** - Optimized global state
- **🎨 Shadcn/ui Components** - Consistent UI/UX
- **📱 Responsive Design** - Mobile-first approach
- **🔒 Security** - Helmet.js protection & input validation

## Installation 🛠️

### Prerequisites
- Node.js v16+
- MongoDB Atlas account
- OpenAI API key

### Backend Setup
```bash
cd server
cp .env.example .env
# Fill in environment variables
npm install
npm start
```

### Frontend Setup
```bash
cd client
cp .env.example .env
npm install
npm run dev
```

### Environment Variables
```env
# Server
MONGO_URI=mongodb+srv://<user>:<password>@cluster.mongodb.net/healthsync
JWT_SECRET=your_jwt_secret
OPENAI_KEY=sk-your-openai-key

# Client
VITE_API_URL=http://localhost:5000
```

## Usage 🚀

### Key Pages
1. **Dashboard** - Health overview & quick actions
2. **Symptom Checker** - AI-powered analysis interface
3. **Health Journal** - Timeline view of medical entries
4. **Medication Tracker** - Dosage schedules & reminders
5. **Doctor Finder** - Map-based specialist search

### Example Workflow
1. Register new account
2. Log symptoms in Health Journal
3. Get AI analysis in Symptom Checker
4. Set medication reminders
5. Review weekly insights

## API Documentation 📚

### Key Endpoints
| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/auth/register` | POST | User registration |
| `/api/ai/analyze` | POST | Symptom analysis |
| `/api/journal` | GET | Get health entries |
| `/api/medications` | POST | Add medication |

**Sample Request:**
```bash
curl -X POST 'http://localhost:5000/api/ai/analyze' \
-H 'Authorization: Bearer <token>' \
-H 'Content-Type: application/json' \
-d '{"symptoms": "headache, fever"}'
```

## Tech Stack 💻

### Frontend
- **React** + **Vite** - Core framework
- **Tailwind CSS** - Styling
- **Zustand** - State management
- **React Router** - Navigation
- **React Hot Toast** - Notifications

### Backend
- **Node.js** - Runtime
- **Express** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **JWT** - Authentication
- **OpenAI API** - AI integration

## Contributing 🤝

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## License 📄
This project is licensed under the MIT License - see [LICENSE](LICENSE) file for details.

---

**Disclaimer**: This application provides health suggestions but is not a substitute for professional medical advice.
``` -->
