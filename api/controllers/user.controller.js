import User from "../model/user.model.js";
import { errorHandler } from "../utils/error.js";
import bcryptjs from 'bcryptjs';

export const updateUser = async (req, res, next) => {
    if (req.user.id !== req.params.userId) {
        return next(errorHandler('You are not allowed to update this user', 401));
    }

    try {
        const updateData = {};

        // Check and hash password if provided
        if (req.body.password) {
            if (req.body.password.length < 6) {
                return next(errorHandler('Password must be at least 6 characters long', 400));
            }
            updateData.password = bcryptjs.hashSync(req.body.password, 10);
        }

        // Check and validate username if provided
        if (req.body.username) {
            if (req.body.username.length < 7 || req.body.username.length > 20) {
                return next(errorHandler('Username must be between 7 and 20 characters long', 400));
            }
            if (req.body.username.includes(' ')) {
                return next(errorHandler('Username must not contain spaces', 400));
            }
            if (req.body.username !== req.body.username.toLowerCase()) {
                return next(errorHandler('Username must be in lowercase', 400));
            }
            if (!req.body.username.match(/^[a-zA-Z0-9]+$/)) {
                return next(errorHandler('Username can only contain letters and numbers', 400));
            }
            updateData.username = req.body.username;
        }

        // Update email and profile picture if provided
        if (req.body.email) {
            updateData.email = req.body.email;
        }

        if (req.body.profilePicture) {
            updateData.profilePicture = req.body.profilePicture;
        }

        // Update the user
        const updatedUser = await User.findByIdAndUpdate(
            req.params.userId,
            { $set: updateData },
            { new: true }
        );

        if (!updatedUser) {
            return next(errorHandler('User not found', 404));
        }

        const { password, ...rest } = updatedUser._doc;
        res.status(200).json(rest);
    } catch (error) {
        next(error);
    }
};

export const deleteUser = async (req, res, next) => {
    if (req.user.id !== req.params.userId) {
        return next(errorHandler('You are not allowed to delete this user', 401));
    }
    try {
        const user = await User.findById(req.params.userId);
        if (!user) {
            return next(errorHandler('User not found', 404));
        }
        
        await User.findByIdAndDelete(req.params.userId);
        res.status(200).json({ message: 'User has been deleted' });
    } catch (error) {
        next(error);
    }
};

export const signout = (req, res, next) => {
    try {
        res.clearCookie('access_token').status(200).json("User has been signout our")
    } catch (error) {
        next(error);
        
    }
}





















// import User from "../model/user.model.js";
// import { errorHandler } from "../utils/error.js";
// import bcryptjs from 'bcryptjs';


// export const updateUser = async (req, res, next) => {
//     if (req.user.id !== req.params.userId) {
//         return next(errorHandler('you are not allowed to update this user', 401));
//     }
//     if(req.body.password) {
//         if(req.body.password.length < 6) {
//             return next(errorHandler('Password must be at least 6 characters long', 400));
//         } 
//         // alumni
//     }
//     req.body.password = bcryptjs.hashSync(req.body.password, 10);
//     if (req.body.username) {
//         if(req.body.username.length < 7 || req.body.username.length > 20) {
//             return next(errorHandler('Username must be between 7 and 20 characters long', 400));
//         }
//         if(req.body.username.includes(' ')) {
//             return next(errorHandler('Username must not contain spaces', 400));
//         }
//         if(req.body.username !== req.body.username.toLowerCase()) {
//             return next(errorHandler('Username must be in lowercase', 400));
//         }
//         if(!req.body.username.match(/^[a-zA-Z0-9]+$/)) {
//             return next(errorHandler('username can only contain letters and numbers', 401));
//         }
//         try {
//         const updatedUser = await User.findByIdAndUpdate(req.params.userId, 
//             { $set: { username: req.body.username, email: req.body.email, profilePicture: req.body.profilePicture, password: req.body.password } }, { new: true });
//             const {password, ...rest} = updatedUser._doc;
//         } catch (error) {
//             next(error)
//         }
//     }
// }