import { redis } from "../../infrastructure/database/redisClient";
import { generateOtp } from "../../shared/utils/generateOtp";
import { sendEmail } from "../../shared/utils/sendEmail";
import { IUserRepository } from "../../domain/repositories/IUserRepository";

export class ResendOtp {
    constructor (private userRepository : IUserRepository){};

    async execute(userId :string){

        const user = await this.userRepository.findById(userId);

        if (!user){
            throw new Error ("User not Found!!!")
        }

        const otp = generateOtp();
        
  
        await redis.set(`otp${otp}`, otp, "EX", 300);
        await sendEmail(user.email , otp);
        return {
            message:"chek your  Email and Validate the account"
        };         
    };
};