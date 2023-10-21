import express from "express";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";
import hotelRoutes from "./routes/hotelRoutes.js";
import roomRoutes from "./routes/roomRoutes.js";
import reservationRoutes from "./routes/reservationRoutes.js";
import resendEmail from "./routes/resendEmail.js";
import authRoutes from "./routes/authRoutes.js";

const app = express();
// app.use(cors());
// const corsOptions = {
//   origin: "https://front-travel-agency.azurewebsites.net",
//   methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//   credentials: true, // Enable cookies in the CORS requests
//   optionsSuccessStatus: 204, // Some browsers return 204
// };
//app.use(cors());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api", hotelRoutes);
app.use("/api", roomRoutes);
app.use("/api", reservationRoutes);
app.use("/api", resendEmail);

export default app;
