import { getJwtToken } from "./getJwtToken";
import { Response } from "express";

interface User {
    id: string;
    password?: string;
  }
  

export const cookieToken = (user: User, res: Response): void => {

    const token = getJwtToken(user.id);

    const options = {
        expires : new Date(
            Date.now() + 3*24*60*60*1000
        ),
        httpOnly: true //server only cookie
    }

    user.password = undefined; // Ensure password is removed

    res.status(200).cookie('token',token,options).json({
        success: true,
        token,
        user,
    });
};