import { NextFunction, Request, Response } from "express";

export async function httpsignup(
	req: Request,
	res: Response,
	next: NextFunction
) {
	next(new Error("Error signing up"));
}
