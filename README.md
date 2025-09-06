# 💬 Pulse Chat App

A modern, real-time chat application I built from scratch using the MERN stack (MongoDB, Express.js, React, Node.js). This project showcases my full-stack development skills with real-time messaging, secure authentication, and a polished user interface.

![Pulse Chat App](frontend/public/screenshot-for-readme.png)

## ✨ Features

- **Real-time Messaging**: Instant message delivery using Socket.io
- **User Authentication**: Secure JWT-based authentication with bcrypt password hashing
- **User Management**: User registration, login, and profile management
- **Online Status**: Real-time online/offline user indicators
- **Image Sharing**: Upload and share images in chat conversations
- **Responsive Design**: Mobile-first design with Tailwind CSS and DaisyUI
- **Theme Support**: Dark/light theme toggle
- **Modern UI**: Clean, intuitive interface with loading skeletons
- **Cloud Storage**: Image uploads handled by Cloudinary
- **Production Ready**: Deployed on Render with health checks

## 🚀 Live Demo

[View Live Application](https://pulse-chat-app.onrender.com)

*Experience the real-time chat functionality I've implemented!*

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **DaisyUI** - Component library for Tailwind
- **Socket.io Client** - Real-time communication
- **Zustand** - State management
- **React Router** - Client-side routing
- **Axios** - HTTP client
- **Lucide React** - Icon library
- **React Hot Toast** - Toast notifications

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **Socket.io** - Real-time bidirectional communication
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Token authentication
- **bcryptjs** - Password hashing
- **Cloudinary** - Image storage and management
- **CORS** - Cross-origin resource sharing
- **Cookie Parser** - Cookie handling

## 📁 Project Structure

```
pulse-chat-app/
├── frontend/                 # React frontend
│   ├── src/
│   │   ├── components/       # Reusable UI components
│   │   ├── pages/           # Page components
│   │   ├── store/           # Zustand state management
│   │   ├── lib/             # Utility functions
│   │   └── constants/       # App constants
│   └── public/              # Static assets
├── backend/                 # Node.js backend
│   ├── src/
│   │   ├── controllers/     # Route controllers
│   │   ├── models/          # Database models
│   │   ├── routes/          # API routes
│   │   ├── middleware/      # Custom middleware
│   │   ├── lib/             # Database and utility configs
│   │   └── seeds/           # Database seeders
│   └── package.json
├── render.yaml              # Render deployment config
└── package.json             # Root package.json
```

## 🚀 Getting Started

This is my original full-stack chat application built with modern technologies and industry best practices.

### Prerequisites

- Node.js (v16 or higher)
- MongoDB (local or cloud instance)
- Cloudinary account (for image uploads)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/pulse-chat-app.git
   cd pulse-chat-app
   ```

2. **Install dependencies**
   ```bash
   npm run install-all
   ```

3. **Environment Setup**
   
   Create a `.env` file in the backend directory:
   ```env
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   NODE_ENV=development
   ```

4. **Run the application**
   
   For development (runs both frontend and backend):
   ```bash
   npm run dev
   ```
   
   Or run them separately:
   ```bash
   # Backend only
   npm run dev --prefix backend
   
   # Frontend only
   npm run dev --prefix frontend
   ```

5. **Access the application**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:5000

## 📱 Usage

1. **Sign Up**: Create a new account with email and password
2. **Login**: Sign in with your credentials
3. **Start Chatting**: Select a user from the sidebar to start a conversation
4. **Send Messages**: Type messages and press Enter to send
5. **Share Images**: Click the image icon to upload and share images
6. **View Online Status**: See which users are currently online
7. **Theme Toggle**: Switch between light and dark themes in settings

## 🔧 API Endpoints

### Authentication
- `POST /api/auth/signup` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `GET /api/auth/me` - Get current user

### Messages
- `GET /api/messages/:id` - Get messages with a specific user
- `POST /api/messages/send` - Send a new message

### Socket Events
- `connect` - User connects
- `disconnect` - User disconnects
- `newMessage` - New message received
- `typing` - User typing indicator
- `stopTyping` - User stops typing

## 🚀 Deployment

I've configured this application for seamless deployment on Render.com:

1. **Connect your repository** to Render
2. **Set environment variables** in Render dashboard
3. **Deploy** - Render will automatically build and deploy

The `render.yaml` file contains my custom deployment configuration for production.

## 🤝 Contributing

While this is my personal project, I welcome contributions and suggestions:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Yash** - Full Stack Developer

This is my original project - a complete real-time chat application I designed and built from scratch. Every line of code, every feature, and every design decision was made by me to demonstrate my full-stack development capabilities.

### What I Built:
- **Backend Architecture**: RESTful API with Express.js and Socket.io
- **Database Design**: MongoDB schemas with Mongoose ODM
- **Authentication System**: JWT-based security with bcrypt password hashing
- **Real-time Features**: Socket.io implementation for instant messaging
- **Frontend Development**: React with modern hooks and state management
- **UI/UX Design**: Responsive design with Tailwind CSS and DaisyUI
- **Cloud Integration**: Cloudinary for image storage and management
- **Production Deployment**: Configured for Render.com with health checks

## 🙏 Acknowledgments

- Socket.io for enabling real-time communication
- Tailwind CSS and DaisyUI for providing excellent styling frameworks
- Cloudinary for reliable image storage services
- Render for seamless deployment platform
- The React and Node.js communities for continuous innovation
