import express from "express";
import {
  createContact,
  testEmailSending,
} from "../controllers/contact.controller.js";

const router = express.Router();

router.post("/", createContact);
router.get("/", testEmailSending);

export default router;
