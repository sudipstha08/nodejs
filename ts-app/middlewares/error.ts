import { ErrorRequestHandler } from "express";
import { Request, Response, NextFunction } from "express";

export const errorHandler: ErrorRequestHandler = (
	error: any,
	req: Request,
	res: Response,
	next: NextFunction
) => {
	console.log("Error middleware: ", error.name, error.message);
};
