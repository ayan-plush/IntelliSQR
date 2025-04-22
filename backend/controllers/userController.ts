// bring in prisma and cookie
import { Request, Response, NextFunction } from "express";
import { prisma } from "../prisma/index";
import { cookieToken } from "../utils/cookieToken";
import bcrypt from "bcryptjs";


// User signup controller
export const signup = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {

    const { email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    // Validate required fields
    if (!email || !password) {
      res.status(400).json({ error: "Please provide all fields" });
      return;
    }

    const user = await prisma.user.create({
      data: {
        email: email,
        password: hashedPassword, // Ideally, hash this before saving
      },
    });

    // Send cookie and response
    cookieToken(user, res);
  } catch (error) {
    console.error("Signup Error:", error);
    res.status(500).json({ error: "Something went wrong" });
  }
};


export const login = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
        res.status(400).json({ error: "Please provide email and password" });
        return;
    }

    // Check if user exists
    const user = await prisma.user.findUnique({
        where: { email },
    });

    if (!user) {
        res.status(401).json({ error: "Invalid email or password" });
        return;
    }

    // Compare password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        res.status(401).json({ error: "Invalid email or password" });
        return;
    }

    // Login successful - send token in cookie
    cookieToken(user, res);
    } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ error: "Something went wrong" });
    }
};
  
