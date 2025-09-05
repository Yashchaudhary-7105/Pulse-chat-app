import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import { connectDB } from "./lib/db.js";

import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { app, server } from "./lib/socket.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: process.env.NODE_ENV === "production" 
      ? ["https://pulse-chat-app.onrender.com", "https://www.pulse-chat-app.onrender.com"]
      : "http://localhost:5173",
    credentials: true,
  })
);

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

// Health check endpoint
app.get("/health", (req, res) => {
  res.json({ 
    status: "OK", 
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV,
    port: PORT
  });
});

if (process.env.NODE_ENV === "production") {
  // Serve the frontend build (for Vite use 'dist', for CRA use 'build')
  const clientBuildPath = path.join(__dirname, '..', 'frontend', 'dist');
  
  console.log("Attempting to serve frontend from:", clientBuildPath);
  console.log("Frontend path exists:", fs.existsSync(clientBuildPath));
  
  if (fs.existsSync(clientBuildPath)) {
    app.use(express.static(clientBuildPath));
    console.log("Serving static files from:", clientBuildPath);
    
    // List files in the dist directory for debugging
    try {
      const distFiles = fs.readdirSync(clientBuildPath);
      console.log("Files in dist directory:", distFiles);
    } catch (err) {
      console.log("Error reading dist directory:", err.message);
    }
  } else {
    console.log("Frontend dist directory not found at:", clientBuildPath);
  }

  // SPA fallback (after API routes)
  app.get('*', (req, res) => {
    if (req.path.startsWith('/api')) return res.status(404).send('Not found');
    
    const indexPath = path.join(clientBuildPath, 'index.html');
    if (fs.existsSync(indexPath)) {
      res.sendFile(indexPath);
    } else {
      res.status(404).send('Frontend not found');
    }
  });
}

// Add error handling middleware
app.use((err, req, res, next) => {
  console.error("Error:", err);
  res.status(500).json({ message: "Internal server error" });
});

server.listen(PORT, () => {
  console.log("server is running on PORT:" + PORT);
  connectDB();
});