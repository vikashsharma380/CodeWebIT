import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const authenticate = async (req, res, next) => {
  try {
    const header = req.headers.authorization;
    if (!header)
      return res.status(401).json({ message: "Authorization header missing" });

    const token = header.split(" ")[1];
    if (!token)
      return res.status(401).json({ message: "Token missing" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id).select("-password");

    if (!user)
      return res.status(401).json({ message: "Invalid token user not found" });

    req.user = user;
    next();
  } catch (err) {
    console.log(err);
    return res.status(401).json({ message: "Invalid token" });
  }
};

export const requireRole = (...roles) => (req, res, next) => {
  if (!req.user || !roles.includes(req.user.role)) {
    return res.status(403).json({ message: "You are not allowed" });
  }
  next();
};
