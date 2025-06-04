import Cors from "cors";

// Initialize the cors middleware
const cors = Cors({
  origin: "http://localhost:5173", // or '*'
  methods: ["GET", "POST", "OPTIONS"],
});

// Helper method to wait for middleware to execute before continuing
function runCors(req, res): Promise<void> {
  return new Promise((resolve, reject) => {
    cors(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve();
    });
  });
}

export default runCors;
