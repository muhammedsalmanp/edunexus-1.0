import { IUserRepository } from "../../domain/repositories/IUserRepository";
import { User } from "../../domain/entities/User";
import { UserModel } from "../database/models/UserModel";

export class UserRepository implements IUserRepository {

  private mapToDomain(userDoc: any): User {
    return {
      id: userDoc._id.toString(),
      name: userDoc.name,
      email: userDoc.email,
      password: userDoc.password,
      role: userDoc.role,
      isVerified: userDoc.isVerified,
      status: userDoc.status
    };
  }

  async findByEmail(email: string): Promise<User | null> {
    const userDoc = await UserModel.findOne({ email });

    if (!userDoc) return null;

    return this.mapToDomain(userDoc);
  }

  async findById(id: string): Promise<User | null> {
    const userDoc = await UserModel.findById(id);

    if (!userDoc) return null;

    return this.mapToDomain(userDoc);
  }

  async create(user: User): Promise<User> {
    const newUser = await UserModel.create(user);
    return this.mapToDomain(newUser);
  }

  async updateRefreshToken(userId: string, token: string): Promise<void> {
    await UserModel.updateOne(
      { _id: userId },
      { refreshToken: token }
    );
  }

  async updateVerification(userId: string): Promise<void> {
    await UserModel.updateOne(
      {_id:userId},
      {isVerified:true}
    );
  }

}


