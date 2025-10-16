// import Login from "../models/Login";
import User from "../models/User";
import { loginValid, userValid } from "../validates/user";
import bcryptjs, { hash } from "bcryptjs";
import jwt from "jsonwebtoken";

export const signUp = async (req, res) => {
  try {
    // validate
    const { error } = userValid.validate(req.body, { abortEarly: false });
    if (error) {
      const errors = error.details.map((err) => err.message);
      return res.status(400).json({
        message: errors,
      });
    }
    // Kiem tra email
    const userExists = await User.findOne({ email: req.body.email });
    if (userExists) {
      return res.status(400).json({
        message: "Email nay da duoc dki!",
      });
    }
    // ma hoa pass
    const hashedPassword = await bcryptjs.hash(req.body.password, 10);

    // khoi tao user trong db
    const user = await User.create({
      ...req.body,
      password: hashedPassword,
    });
    // Thong bao dki thanh cong
    // xoa mk di
    user.password = undefined;
    return res.status(200).json({
      message: "Dki thanh cong!",
      user,
    });
  } catch (error) {
    return res.status(500).json({
      name: error.name,
      message: error.message,
    });
  }
};

export const signIn = async (req, res) => {
  const { error } = loginValid.validate(req.body, { abortEarly: false });
  if (error) {
    const errors = error.details.map((err) => err.message);
    return res.status(400).json({
      message: errors,
    });
  }
  try {
    const user = await User.findOne({ email: req.body.email }).select(
      "+password"
    );
    if (!user) {
      return res.status(401).json({ message: "Sai tài khoản" });
    }

    const isMatch = await bcryptjs.compare(req.body.password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Sai mật khẩu" });
    }

    const token = jwt.sign({ id: user.id }, "123456", { expiresIn: "1h" });

    user.password = undefined;
    return res.status(200).json({
      message: "Đăng nhập thành công",
      token,
    //   data: user,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getProfileUser = (req,res) => {
  console.log(req.userId);
  res.json({userId: req.userId})
}
