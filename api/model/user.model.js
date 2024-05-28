import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true,

    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },
    profilePicture: {
        type: String,
        default: "https://www.google.com/imgres?q=profile%20image&imgurl=https%3A%2F%2Fimages.ctfassets.net%2Fh6goo9gw1hh6%2F2sNZtFAWOdP1lmQ33VwRN3%2F24e953b920a9cd0ff2e1d587742a2472%2F1-intro-photo-final.jpg%3Fw%3D1200%26h%3D992%26fl%3Dprogressive%26q%3D70%26fm%3Djpg&imgrefurl=https%3A%2F%2Fwww.picmonkey.com%2Fblog%2Fcreate-the-best-profile-pic&docid=R6YihD6FdgssrM&tbnid=gIgCQ-hjxb6uFM&vet=12ahUKEwjNpbaRjKuGAxWBzQIHHcztBqQQM3oECBgQAA..i&w=1200&h=992&hcb=2&ved=2ahUKEwjNpbaRjKuGAxWBzQIHHcztBqQQM3oECBgQAA"
        
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;

