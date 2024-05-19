import { NextFunction, Request, Response } from "express";

const asyncHandler = (
  handler: (req: Request, res: Response) => Promise<void>
) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await handler(req, res);
    } catch (error) {
      next(error);
    }
  };
};

export default asyncHandler;
