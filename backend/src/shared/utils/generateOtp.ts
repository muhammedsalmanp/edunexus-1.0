export const generateOtp = (): string => {
  let otp = "";

  do {
    otp = Math.floor(100000 + Math.random() * 900000).toString();
  } while (otp.length !== 6);

  return otp;
};