import { IUserRepository } from "../../domain/repositories/IUserRepository";
import { hashPassword } from "../../shared/utils/hashPassword";
import { generateAccessToken, generateRefreshToken } from "../../shared/utils/generateTokens";
import { RegisterUserInputDTO } from "./dtos/RegisterUserInputDTO";
import { RegisterUserResponseDTO } from "./dtos/RegisterUserResponseDTO";

export class RegisterUser {
  
  constructor(private userRepository: IUserRepository) {}

  async execute(data: RegisterUserInputDTO): Promise<RegisterUserResponseDTO> {

    const existingUser = await this.userRepository.findByEmail(data.email);

    if (existingUser) {
      throw new Error("User already exists");
    }

    const hashedPassword = await hashPassword(data.password);

    const user = await this.userRepository.create({
      name: data.name,
      email: data.email,
      password: hashedPassword,
      role: data.role || "student",
      isApproved: data.role === "teacher" ? false : true,
      status: "active"
    });

    const accessToken = generateAccessToken(user.id!);
    const refreshToken = generateRefreshToken(user.id!);

    return {
      id: user.id!,
      name: user.name,
      email: user.email,
      role: user.role,
      accessToken,
      refreshToken
    };
  }
}