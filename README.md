# Pulse Chat App

Pulse Chat App is a full-stack chat application built with a Node.js backend and a modern frontend. It supports real-time messaging, user authentication, and media uploads.

## Features

- Real-time chat between users
- User authentication (JWT-based)
- Media uploads via Cloudinary
- Responsive frontend
- MongoDB database

## Tech Stack

- **Frontend:** React (in `/frontend`)
- **Backend:** Node.js, Express (in `/backend`)
- **Database:** MongoDB
- **Cloud Storage:** Cloudinary
- **Deployment:** Render

## Getting Started

### Prerequisites

- Node.js (v16+)
- npm
- MongoDB database (local or Atlas)
- Cloudinary account

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Yashchaudhary-7105/Pulse-chat-app
   cd pulse-chat-app
   ```

2. **Install dependencies:**
   ```bash
   npm ci
   npm --prefix frontend ci --include=dev
   npm --prefix backend ci
   ```

3. **Set up environment variables:**

   Create a `.env` file in the `backend` directory with the following:

   ```
   NODE_ENV=production
   MONGODB_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   ```

4. **Build the frontend:**
   ```bash
   npm --prefix frontend run build
   ```

5. **Start the backend server:**
   ```bash
   npm run start --prefix backend
   ```

6. **Access the app:**
   Open your browser and go to `http://localhost:5173/` (or the port specified in your backend config).

## Deployment

This app is configured for deployment on [Render](https://render.com/). See `render.yaml` for service configuration.

## Health Check

A health check endpoint is available at `/health`.

## License

MIT

## Acknowledgements

- [Render](https://render.com/)
- [Cloudinary](https://cloudinary.com/)
- [MongoDB](https://www.mongodb.com/)
