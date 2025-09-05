import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import path from "path";

import { connectDB } from "./lib/db.js";

import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { app, server } from "./lib/socket.js";

dotenv.config();

const PORT = process.env.PORT;

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

if (process.env.NODE_ENV === "production") {
  // Use process.cwd() which should be the project root on Render
  const frontendPath = path.join(process.cwd(), "frontend/dist");
  
  console.log("Project root:", process.cwd());
  console.log("Frontend path:", frontendPath);
  
  // Serve static files from the frontend dist directory
  app.use(express.static(frontendPath));

  // Handle React routing - return index.html for all non-API routes
  app.get("*", (req, res) => {
    // Skip API routes
    if (req.path.startsWith("/api/")) {
      return res.status(404).json({ message: "API route not found" });
    }
    res.sendFile(path.join(frontendPath, "index.html"));
  });
}

server.listen(PORT, () => {
  console.log("server is running on PORT:" + PORT);
  connectDB();
});