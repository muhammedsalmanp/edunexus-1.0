import mongoose, { Schema, Document } from "mongoose";


export interface OTPDocument extends Document {
  userId: string;
  otp: string;
  expiresAt: Date;
}

const otpSchema = new Schema<OTPDocument>({
  userId: {
    type: String
  },
  otp: {
    type: String
  },
  expiresAt: {
    type: Date
  }

});

otpSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });

export const OTPModel = mongoose.model<OTPDocument>("OTP", otpSchema);