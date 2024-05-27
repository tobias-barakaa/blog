import User from "../model/user.model.js";
import { errorHandler } from "../utils/error.js";
import bcryptjs from 'bcryptjs';


export const updateUser = async (req, res, next) => {
    if (req.user.id !== req.params.userId) {
        return next(errorHandler('you are not allowed to update this user', 401));
    }
    if(req.body.password) {
        if(req.body.password.length < 6) {
            return next(errorHandler('Password must be at least 6 characters long', 400));
        } 
        // alumni
    }
    req.body.password = bcryptjs.hashSync(req.body.password, 10);
    if (req.body.username) {
        if(req.body.username.length < 7 || req.body.username.length > 20) {
            return next(errorHandler('Username must be between 7 and 20 characters long', 400));
        }
        if(req.body.username.includes(' ')) {
            return next(errorHandler('Username must not contain spaces', 400));
        }
        if(req.body.username !== req.body.username.toLowerCase()) {
            return next(errorHandler('Username must be in lowercase', 400));
        }
        if(!req.body.username.match(/^[a-zA-Z0-9]+$/)) {
            return next(errorHandler('username can only contain letters and numbers', 401));
        }
        try {
        const updatedUser = await User.findByIdAndUpdate(req.params.userId, 
            { $set: { username: req.body.username, email: req.body.email, profilePicture: req.body.profilePicture, password: req.body.password } }, { new: true });
            const {password, ...rest} = updatedUser._doc;
        } catch (error) {
            next(error)
        }
    }
}