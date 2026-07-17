import jwt from "jsonwebtoken";
import { generateAccessToken } from "../../shared/utils/generateTokens";
import { IUserRepository } from "../../domain/repositories/IUserRepository";

export class RefreshToken {
  constructor(private userRepository: IUserRepository) { }

  async execute(refreshToken: string) {

    if (!refreshToken) {
      throw new Error("Refresh token required");
    }

    const decoded: any = jwt.verify(
      refreshToken,
      process.env.JWT_REFRESH_SECRET!
    );

    const user = await this.userRepository.findById(decoded.id);

    if (!user) {
      throw new Error("User not found");
    }

    const newAccessToken = generateAccessToken(user.id!);

    return { accessToken: newAccessToken };
  }
}
