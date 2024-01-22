import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';

const signup = async (req, res)=>{
    const { username, email, password } = req.body;

    if( !username || !email || !password || username =='' || email == '' || password == '' ){
            return res.status(400).json({message: {username}});
    }

    const hashedPass = bcryptjs.hashSync(password, 10);

    const newUser = new User ({
        username,
        email,
        password: hashedPass,
    });

    try{
        await newUser.save();
        res.json("Signup Successful!");
    }catch(e){
        res.status(500).json({message: e.message});
    }
};

export default signup;