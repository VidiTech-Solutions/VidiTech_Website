import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import contactRoutes from "./routes/contact.route.js";

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Example route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// API Routes can be added here
app.use("/api/contacts", contactRoutes);

export default app;
