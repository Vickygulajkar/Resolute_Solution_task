import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
    {
        fullName: String,
        email: String,
        phone: String,
        dob: String,
        gender: String,
        address: String,
        course: String,
        password: String
    },
    {
        timestamps: true
    }
);

export default mongoose.model("Student", studentSchema);