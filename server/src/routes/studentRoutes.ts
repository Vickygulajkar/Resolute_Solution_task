import express from "express";
import { createStudent, deleteStudent, getStudents, loginStudent, updateStudent } from "../controllers/studentController";

const router = express.Router();

router.post("/register", createStudent);
router.get("/students", getStudents);
router.put("/student/:id", updateStudent);
router.delete("/student/:id", deleteStudent);
router.post("/login", loginStudent);

export default router;