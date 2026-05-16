import { Request, Response } from "express";
import Student from "../models/Student";
import { encryptData, decryptData } from "../utils/crypto";

export const createStudent = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const {
            fullName, email, phone, dob, gender, address, course, password } = req.body;
        if (!fullName || !email || !phone || !dob || !gender || !address || !course || !password) {
            res.status(400).json({
                success: false,
                message: "All fields are required"
            });

            return;
        }

        const student = await Student.create({
            fullName: encryptData(fullName),
            email: encryptData(email),
            phone: encryptData(phone),
            dob: encryptData(dob),
            gender: encryptData(gender),
            address: encryptData(address),
            course: encryptData(course),
            password: encryptData(password),
        });

        res.status(201).json({
            success: true,
            message: "Student registered successfully",
            student
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            success: false,
            message: "Server Error"
        });
    }
};

export const getStudents = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {

        const students = await Student.find();

        const decryptedStudents = students.map((student: any) => ({
            _id: student._id,
            fullName: decryptData(student.fullName),
            email: decryptData(student.email),
            phone: decryptData(student.phone),
            dob: decryptData(student.dob),
            gender: decryptData(student.gender),
            address: decryptData(student.address),
            course: decryptData(student.course),
            password: decryptData(student.password),
        }));

        res.status(200).json({
            success: true,
            students: decryptedStudents
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            success: false,
            message: "Server Error"
        });
    }
};

export const updateStudent = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {

        const { id } = req.params;

        const {
            fullName,
            email,
            phone,
            dob,
            gender,
            address,
            course,
            password
        } = req.body;

        const updatedStudent = await Student.findByIdAndUpdate(
            id,
            {
                fullName: encryptData(fullName),
                email: encryptData(email),
                phone: encryptData(phone),
                dob: encryptData(dob),
                gender: encryptData(gender),
                address: encryptData(address),
                course: encryptData(course),
                password: encryptData(password),
            },
            { new: true }
        );

        res.status(200).json({
            success: true,
            message: "Student updated successfully",
            updatedStudent
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            success: false,
            message: "Server Error"
        });
    }
};

export const deleteStudent = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {

        const { id } = req.params;

        await Student.findByIdAndDelete(id);

        res.status(200).json({
            success: true,
            message: "Student deleted successfully"
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            success: false,
            message: "Server Error"
        });
    }
};

export const loginStudent = async (
    req: Request,
    res: Response
): Promise<void> => {

    try {

        const { email, password } = req.body;

        const students = await Student.find();

        const student = students.find((item: any) => {

            return (
                decryptData(item.email || "") === email &&
                decryptData(item.password || "") === password
            );
        });

        if (!student) {

            res.status(400).json({
                success: false,
                message: "Invalid credentials"
            });

            return;
        }

        res.status(200).json({
            success: true,
            message: "Login successful",
            student: {
                _id: student._id,
                fullName: decryptData(student.fullName || ""),
                email: decryptData(student.email || ""),
            }
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            success: false,
            message: "Server Error"
        });
    }
};