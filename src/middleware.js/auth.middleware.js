import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
const JWT_SECRET = process.env.JWT_SECRET;

const validation = (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({
            message:"email and password are required'
        });
    }
    const existingUser = users.find(user => user.email === email);

    if (existingUser) {
        return res.status(409).json({
            message: 'User already exists'
        });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = {
        id: users.id,
        firstName:users.name,
        email,
        password: hashedPassword
    };
    users.push(user);

  } catch (err) {
    console.log("error in validation", err);
  }
};
