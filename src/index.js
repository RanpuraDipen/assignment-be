import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import router from "./routes";

dotenv.config();

const app = express();

// CORS configuration
const origins = process.env.MIDDLEWARE_ALLOWED_ORIGINS
  ? process.env.MIDDLEWARE_ALLOWED_ORIGINS.split(",")
  : ["http://localhost:3000"];

const corsOptions = {
  origin: origins, // Adjusted to allow specific origins
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

// Apply the cors options
app.use(cors(corsOptions));

app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(cookieParser());

// API Routes
app.use("/api", router);

// Port and listening address
const port = process.env.PORT || 3001;
const listenAddress = process.env.LISTEN_ADDRESS || "0.0.0.0";

try {
  app.listen(port, listenAddress, () => {
    console.info(`API server listening on port ${port}`);
  });
} catch (err) {
  console.error(err);
}

export default app;
