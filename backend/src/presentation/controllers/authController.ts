import { Request, Response } from "express";
import { RegisterUser } from "../../usecases/auth/RegisterUser";
import { UserRepository } from "../../infrastructure/repositories/UserRepository";
import { LoginUser } from "../../usecases/auth/LoginUser";
import { LoginUserInputDTO } from "../../usecases/auth/dtos/LoginUserInputDTO";
import { RefreshToken } from "../../usecases/auth/RefreshToken";
import { SendOtp } from "../../usecases/auth/SendOtp";
import { VerifyOtp } from "../../usecases/auth/VerifyOtp";
import { VerifyOtpInputDTO } from "../../usecases/auth/dtos/VerifyOtpInputDTO";
import { ResendOtp } from "../../usecases/auth/ResendOtp";
//=======================Student, Teacher, Admin Registration======================

export const register = async (req: Request, res: Response) => {
  try {
    const userRepository = new UserRepository();
    const registerUser = new RegisterUser(userRepository);

    const result = await registerUser.execute(req.body);

    res.cookie("refreshToken", result.refreshToken, {
      httpOnly: true,
      secure: false,
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000
    });

    res.status(200).json({
      success: true,
      id: result.id,
      name: result.name,
      email: result.email,
      role: result.role,
      accessToken: result.accessToken
    });
     console.log(result.refreshToken);
     
  } catch (error: any) {
    res.status(400).json({ message: error.message });

  }
};

//=======================Student, Teacher, Admin Login======================

export const Login = async (req: Request<{}, {}, LoginUserInputDTO>, res: Response) => {

  try {

    const userRepository = new UserRepository();
    const loginUser = new LoginUser(userRepository);

    const result = await loginUser.execute(req.body);

    res.cookie("refreshToken", result.refreshToken, {
      httpOnly: true,
      secure: false,
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000
    });

    res.status(200).json({
      success: true,
      id: result.id,
      name: result.name,
      email: result.email,
      role: result.role,
      accessToken: result.accessToken
    });

  } catch (error: any) {

    res.status(400).json({
      success: false,
      message: error.message
    });

  }

};

//=================tokan=====================================================

export const refresh = async (req: Request, res: Response) => {
  try {

    const refreshToken = req.cookies.refreshToken;

    const userRepository = new UserRepository();
    const refreshUseCase = new RefreshToken(userRepository);

    const result = await refreshUseCase.execute(refreshToken);

    res.status(200).json({
      success: true,
      accessToken: result.accessToken
    });

  } catch (error: any) {

    res.status(401).json({
      success: false,
      message: error.message
    });

  }
};

//=======================Student, Teacher, Admin Login======================

export const logout = (req: Request, res: Response) => {

  res.clearCookie("refreshToken", {
    httpOnly: true,
    secure: false,
    sameSite: "strict"
  });

  res.status(200).json({
    success: true,
    message: "Logged out successfully"
  });
};

//======================= OTP Validation======================

export const sendOtp = async (req: any, res: Response) => {
  try {

    const userRepository = new UserRepository();
    const sendOtpUseCase = new SendOtp(userRepository);

    const result = await sendOtpUseCase.execute(req.userId);

    res.json({ success: true, ...result });

  } catch (error: any) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export const verifyOtp = async (
  req: Request<{}, {}, VerifyOtpInputDTO>,
  res: Response
) => {
  try {

    const userRepository = new UserRepository();
    const verifyOtpUseCase = new VerifyOtp(userRepository);
     
    const UserId = req.userId ?? "";
    const result = await verifyOtpUseCase.execute(UserId, req.body.otp);

    res.json({ success: true, ...result });

  } catch (error: any) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export const resendOtp = async (req: any, res: Response) => {
  try {

    const userRepository = new UserRepository();
    const resendOtpUseCase = new ResendOtp(userRepository);

    const result = await resendOtpUseCase.execute(req.userId);

    res.json({ success: true, ...result });

  } catch (error: any) {
    res.status(400).json({ success: false, message: error.message });
  }
};