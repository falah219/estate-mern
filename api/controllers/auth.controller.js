import User from '../models/user.model.js'
import bcrypt from 'bcryptjs'

export const signup  = async (req, res, next) => {
    // console.log(req.body);
    const { username, email, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10)
    const newUser = new User({username, email, password: hashedPassword});
    try {
        await newUser.save();
        res.status(200).json("Add new user successfully");
    } 
    catch (err) {
        next(err);
    }
    
};

