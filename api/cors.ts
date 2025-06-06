import Cors from "cors";
import type { NextApiRequest, NextApiResponse } from "next";

// Initialize the cors middleware
const cors = Cors({
  origin: process.env.CLIENT_ORIGIN, // or '*'
  methods: ["GET", "POST", "OPTIONS"],
});

// Helper method to wait for middleware to execute before continuing
function runCors(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  return new Promise((resolve, reject) => {
    cors(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve();
    });
  });
}

export default runCors;
