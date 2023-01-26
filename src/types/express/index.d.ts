import type { Request, Response, NextFunction } from "express";

export type Middleware = (
	req: Request,
	res: Response,
	next: NextFunction
) => void;

export type Controller = {
	[key: string]: Middleware;
};

export type AuthController = Controller & {
	signup: Middleware;
};
