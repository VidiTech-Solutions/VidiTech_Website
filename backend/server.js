import dotenv from "dotenv";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import connectDB from "./config/db.config.js";
import app from "./app.js";

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load env variables with explicit path
dotenv.config({ path: join(__dirname, ".env") });

// Log the API key being used (first few characters only for security)
const apiKey = process.env.RESEND_API_KEY;
console.log(
  "RESEND_API_KEY:",
  apiKey ? `${apiKey.substring(0, 10)}...` : "not found"
);

connectDB()
  .then(() => {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((error) => {
    console.error("Failed to start server:", error);
    process.exit(1);
  });
