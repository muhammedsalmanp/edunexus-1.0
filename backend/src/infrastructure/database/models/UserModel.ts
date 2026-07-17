import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    name: String,
    email: {
      type: String,
      unique: true
    },
    password: String,
    role: {
      type: String,
      enum: ["student", "teacher", "admin"],
      default: "student",
    },
    isVerified: {
      type: Boolean,
      default: false
    },
    status: {
      type: String,
      default: "active"
    },
    refreshToken: {
      type: String
    }
  },
  { timestamps: true }
);

export const UserModel = mongoose.model("User", userSchema);
