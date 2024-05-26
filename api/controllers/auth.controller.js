import User from "../model/user.model.js";
import bcrypt from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from 'jsonwebtoken';

export const signup = async (req, res, next) => { 
    const { username, email, password } = req.body;

    // Validate input
    if (!username || !email || !password || username === "" || email === "" || password === "") {
        return next(errorHandler(400, "All fields are required"));
    }

    // Hash the password
    const hashedPassword = bcrypt.hashSync(password, 10);

    // Create new user with hashed password
    const newUser = new User({
        username,
        email,
        password: hashedPassword  // Save the hashed password
    });

    try {
        await newUser.save();
        res.json({ message: "Signup success" });
    } catch (error) {
        next(error);
    }
};


export const signin = async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password || email === "" || password === "") {
        return next(errorHandler(400, "All fields are required"));
    }

    try {
        const validUser = await User.findOne({ email });
        if (!validUser) {
            return next(errorHandler(400, "User Not found"));
        }


        const validPassword = bcrypt.compareSync(password, validUser.password);
        if (!validPassword) {
            return next(errorHandler(400, "Invalid details"));
        }

        const token = jwt.sign({ id: validUser._id },
            process.env.JWT_SECRET, { expiresIn: "1d" });
        const { password: userPassword, ...user } = validUser._doc;

        res.status(200)
        .cookie('access_token', token, {
            httpOnly: true,
            // maxAge: 24 * 60 * 60 * 1000, // 24 hours
        }).json(user);

    } catch (error) {
        next(error);
    }
}


export const googleAuth = async (req, res, next) => {
   const { name, email, googlePhotoUrl } = req.body;
   console.log(req.body)
   try {
    const user = await User.findOne({ email });
    if (user) {
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        const {password, ...rest} = user._doc;
        res.status(200).cookie('access_token', token, {
            httpOnly: true,

        }).json(rest)

    } else {
        const generatedPassword = Math.random().toString(36).slice(-8) + Math.random().toString
        (36).slice(-8);
        const newUser = new User({
            username: name.toLowerCase().split(' ').join('') + Math.random().toString(9).slice(-5) ,
            email,
            password: generatedPassword,
            profilePicture: googlePhotoUrl,
        });
        await newUser.save();
        const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);
        const {password, ...rest} = newUser._doc;
        res.status(200).cookie('access_token', token, {
            httpOnly: true,
        }).json(rest)
    }
    
   } catch (error) {
    next(error)
   }
}
