```markdown
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
```
