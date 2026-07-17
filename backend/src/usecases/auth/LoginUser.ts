import bcrypt from "bcrypt";
import { IUserRepository } from "../../domain/repositories/IUserRepository";
import { generateAccessToken, generateRefreshToken } from "../../shared/utils/generateTokens";
import { LoginUserInputDTO } from "./dtos/LoginUserInputDTO";
import { LoginUserResponseDTO } from "./dtos/LoginUserResponseDTO";

export class LoginUser {

  constructor(private userRepository: IUserRepository) {}

  async execute(data: LoginUserInputDTO): Promise<LoginUserResponseDTO> {

    const user = await this.userRepository.findByEmail(data.email);

    if (!user) {
      throw new Error("Invalid email or password");
    }

    const isMatch = await bcrypt.compare(data.password, user.password);

    if (!isMatch) {
      throw new Error("Invalid email or password");
    }

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