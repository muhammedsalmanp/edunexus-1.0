export interface SendOtpDTO {
  userId: string;
}

export interface VerifyOtpDTO {
  userId: string;
  otp: string;
}