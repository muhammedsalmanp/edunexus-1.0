import { redis } from "../../infrastructure/database/redisClient";
import { generateOtp } from "../../shared/utils/generateOtp";
import { sendEmail } from "../../shared/utils/sendEmail";
import { IUserRepository } from "../../domain/repositories/IUserRepository";

export class SendOtp {

    constructor (private userRepository : IUserRepository){};

    async execute(userId: string) {

    const  user = await this.userRepository.findById(userId);
    if(!user){
      throw new Error("User not found!!!");
    }

    const otp = generateOtp();

    await redis.set(
      `otp:${userId}`,
      otp,
      "EX",
      300 
    );
    
    await sendEmail(user.email,otp);

    return {
      message: "OTP sent successfully"
    };
  }
}