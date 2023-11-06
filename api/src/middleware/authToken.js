import jwt from "jsonwebtoken";
import { parse } from "cookie";
const SECRET_KEY = process.env.SECRET_KEY;

const authToken = (req, res, next) => {
  const cookie = parse(req.headers.cookie || "");
  const token = cookie.token;
  if (!token) {
    return res.status(401).json({ error: "Authentication failed." });
  }
  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(403).json({ error: "Token is not valid." });
      req.user = user;
    }
    next();
  });
};

export default authToken;
