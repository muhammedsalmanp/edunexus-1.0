import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";


interface AuthRequest extends Request {
  userId?: string;
}

export const authMiddleware = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log("entered middleware");

    const authHeader = req.headers.authorization;
    console.log("AUTH HEADER:", req.headers);

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "No token provided" });
    }

    const token = authHeader.split(" ")[1];
    console.log(token)
    const decoded = jwt.verify(
      token,
      process.env.JWT_ACCESS_SECRET!
    ) as { id: string };

    req.userId = decoded.id;

    next();
  } catch (error) {
    console.error("JWT ERROR:", error);
    return res.status(401).json({ message: "Invalid token" });
  }
};