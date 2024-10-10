import { Response } from "express";

export const handleError = (res: Response, error: any) => {
    const statusCode = error.status || 500;
    const message = error.message || "Internal Server Error";
    res.status(statusCode).json({ message });
};