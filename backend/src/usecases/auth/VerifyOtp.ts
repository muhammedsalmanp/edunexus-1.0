import { redis } from "../../infrastructure/database/redisClient";
import { IUserRepository } from "../../domain/repositories/IUserRepository";


export class VerifyOtp {

    constructor (private userRepository: IUserRepository){}

    async execute(userId : string, otp:string){
       const storedOtp = await redis.get(`otp:${userId}`);
       
       if(!storedOtp){
         throw new Error ("OTP expired!!!");
       }

       if(storedOtp !== otp){
        throw new  Error ("invalid OTP!!!")
       }

       await this.userRepository.updateVerification(userId);
       await redis.del(`otp:${otp}`);

       return {
        message:"verified Successfully!!"
       };
    };
}