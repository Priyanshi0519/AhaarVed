// // import jwt from "jsonwebtoken";

// // const authenticateUser = (req, res, next) => {
// //     const token = req.headers.authorization?.split(" ")[1];
// //     if (!token) return res.status(401).json({ message: "Unauthorized" });

// //     try {
// //     const decoded = jwt.verify(token, process.env.JWT_SECRET);
// //     req.userId = decoded.id;
// //     next();
// //     } catch (err) {
// //     return res.status(401).json({ message: "Token invalid or expired" });
// //     }
// // };

// // export default authenticateUser;

// import jwt from "jsonwebtoken";
// import User from "../models/userModel.js";

// const authenticateUser = async (req, res, next) => {
//   const token = req.headers.authorization?.split(" ")[1];
//   if (!token) return res.status(401).json({ message: "Unauthorized" });

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);

//     const user = await User.findById(decoded.id).select("-password");
//     if (!user) return res.status(404).json({ message: "User not found" });

//     req.user = user;
//     next();
//   } catch (err) {
//     return res.status(401).json({ message: "Token invalid or expired" });
//   }
// };

// export default authenticateUser;

import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';


const authenticateUser = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  console.log("Authorization Header:", authHeader);

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Unauthorized: No token" });
  }

  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });

    req.user = user;
    next();
  } catch (err) {
    console.log("JWT error:", err.message);
    return res.status(401).json({ message: "Token invalid or expired" });
  }
};

export default authenticateUser;
