import jwt from "jsonwebtoken";

const authenticateUser = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ message: "Unauthorized" });

    try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id;
    next();
    } catch (err) {
    return res.status(401).json({ message: "Token invalid or expired" });
    }
};

export default authenticateUser;
