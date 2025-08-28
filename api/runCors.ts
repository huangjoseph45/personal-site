import Cors from "cors";
import type { Request, Response } from "express";

const allowedOrigins = [
  process.env.CLIENT_ORIGIN,
  process.env.NEW_CLIENT_ORIGIN,
].filter(Boolean) as string[]; // remove undefined

const cors = Cors({
  origin: allowedOrigins, // array is supported by `cors`
  methods: ["GET", "POST", "OPTIONS"],
  credentials: true, // if you use cookies/Authorization
  allowedHeaders: ["Content-Type", "Authorization"],
  optionsSuccessStatus: 204, // for legacy browsers
});

function runCors(req: Request, res: Response): Promise<void> {
  return new Promise((resolve, reject) => {
    cors(req, res, (result) =>
      result instanceof Error ? reject(result) : resolve()
    );
  });
}

export default runCors;
