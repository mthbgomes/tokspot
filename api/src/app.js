import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import db from "./config/database.js";

import deal from "./routes/dealRoute.js";
import kanbanColumn from "./routes/kanbanColumnRoute.js";
import user from "./routes/userRoute.js";
import auth from "./routes/authRoute.js";

db.connect();
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/user", user);
app.use("/api/auth", auth);
app.use("/api/deal", deal);
app.use("/api/kanbancolumn", kanbanColumn);

export default app;
