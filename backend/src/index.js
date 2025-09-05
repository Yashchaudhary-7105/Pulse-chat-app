import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import fs from "fs";
import path from "path";

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
  // Try multiple possible paths for the frontend dist directory
  const possiblePaths = [
    path.join(process.cwd(), "frontend/dist"),
    path.join(process.cwd(), "../frontend/dist"),
    path.join(__dirname, "../../frontend/dist"),
    path.join(__dirname, "../../../frontend/dist"),
    path.join(process.cwd(), "dist"),
    path.join(__dirname, "../dist")
  ];
  
  let frontendPath = null;
  
  // Find the first path that exists
  for (const testPath of possiblePaths) {
    if (fs.existsSync(testPath)) {
      frontendPath = testPath;
      console.log("Found frontend dist at:", frontendPath);
      break;
    }
  }
  
  if (frontendPath) {
    // Serve static files from the frontend dist directory
    app.use(express.static(frontendPath));
    console.log("Serving static files from:", frontendPath);

    // Handle React routing - return index.html for all non-API routes
    app.get("*", (req, res) => {
      // Skip API routes
      if (req.path.startsWith("/api/")) {
        return res.status(404).json({ message: "API route not found" });
      }
      
      const indexPath = path.join(frontendPath, "index.html");
      if (fs.existsSync(indexPath)) {
        console.log("Serving index.html for route:", req.path);
        res.sendFile(indexPath);
      } else {
        console.log("index.html not found at:", indexPath);
        res.status(404).send("Frontend not found");
      }
    });
  } else {
    console.log("Frontend dist directory not found. Available paths checked:");
    possiblePaths.forEach((p, i) => {
      console.log(`${i + 1}. ${p} - exists: ${fs.existsSync(p)}`);
    });
    
    // Fallback route for when frontend is not found
    app.get("*", (req, res) => {
      res.status(404).json({ 
        message: "Frontend not built or not found",
        pathsChecked: possiblePaths,
        currentWorkingDir: process.cwd(),
        __dirname: __dirname
      });
    });
  }
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