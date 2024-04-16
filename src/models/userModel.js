import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: string,
        required: [true, "Please provide a username"],
        unique: [true, "username should be unique"]
    },
    email: {
        type: string,
        required: [true, "Please provide an email"],
        unique: true
    },
    password: {
        type: string,
        required: [true, "Please provide a password"],
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date
})