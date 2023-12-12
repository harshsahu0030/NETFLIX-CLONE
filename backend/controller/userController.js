import UserModel from "../models/userModel.js";

export const isRegisteredUser = async (req, res) => {
  try {
    const { email } = req.body;

    let user = await UserModel.findOne({ email });

    if (user) {
      res.status(200).json({
        success: true,
        message: "User already exists",
        registered: "registered",
      });
    }

    res.status(200).json({
      success: true,
      message: "SignUp to continue",
      registered: "not-registered",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const registerUser = async (req, res, next) => {
  try {
    const { name, username, email, password } = req.body;

    let user = await UserModel.findOne({ email });

    if (user) {
      res.status(404).json({
        success: false,
        message: "User already exists",
      });
    }

    let checkUsername = await UserModel.findOne({ username });

    if (checkUsername) {
      res.status(404).json({
        success: false,
        message: "Username already exists",
        user,
      });
    }

    user = await UserModel.create({
      avatar: {
        public_id: "sample_id",
        url: "sample url",
      },
      name,
      username,
      email,
      password,
    });

    const token = await user.generateToken();

    const options = {
      expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
      httpOnly: true,
    };

    res.status(201).cookie("token", token, options).json({
      success: true,
      message: "User registered successfully",
      user,
      token,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email }).select("+password");

    if (!user) {
      res.status(404).json({
        success: false,
        message: "User doestn't exists",
      });
    }

    const isMatch = await user.matchPassword(password);

    if (!isMatch) {
      res.status(404).json({
        success: false,
        message: "Invalid User",
      });
    }

    const token = await user.generateToken();

    const options = {
      expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
      httpOnly: true,
    };

    res.status(201).cookie("token", token, options).json({
      success: true,
      message: "User logged in successfully",
      user,
      token,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const logoutUser = async (req, res, next) => {
  try {
    const options = {
      expires: new Date(Date.now()),
      httpOnly: true,
    };

    res.status(200).cookie("token", null, options).json({
      success: true,
      message: "User logged out successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

//update profile
export const updateProfile = async (req, res) => {
  try {
    console.log(req.user);
    const user = await UserModel.findById(req.user._id);

    const { name, email, username } = req.body;

    if (name) {
      user.name = name;
    }
    if (email) {
      user.email = email;
    }
    if (username) {
      user.username = username;
    }

    await user.save();

    return res.status(200).json({
      success: true,
      message: "Profile Updated Successfully",
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

//update password
export const updatePassword = async (req, res) => {
  try {
    const user = await UserModel.findById(req.user._id).select("+password");

    const { oldPassword, newPassword } = req.body;

    if (!oldPassword || !newPassword) {
      return res.status(404).json({
        success: false,
        message: "Please provide old-password and new-password",
      });
    }

    const isMatch = await user.matchPassword(oldPassword);

    if (!isMatch) {
      return res.status(404).json({
        success: false,
        message: "Incorrect password",
      });
    }

    user.password = newPassword;
    await user.save();

    return res.status(200).json({
      success: true,
      message: "Password Updated Successfully",
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
