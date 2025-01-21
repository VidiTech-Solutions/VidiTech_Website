import dotenv from "dotenv";
import connectDB from "./config/db.config.js";
import app from "./app.js";

dotenv.config();

connectDB()
  .then(() => {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((error) => {
    console.error("Failed to start server:", error);
    process.exit(1);
  });
