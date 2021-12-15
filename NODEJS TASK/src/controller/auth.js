import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { User } from '../model/auth.js';

dotenv.config();

const AuthController ={
    login: async (req, res) => {
        const { email, password } = req.body;
    
        if (!email || !password) {
          return res
            .status(400)
            .json({ status: 'fail', message: 'Please fill all fields' });
        }
    
        //password hash
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
    
        if (hash) {
          const newUser = new User({ email, password: hash });
          const savedUser = await newUser.save();
    
          if (savedUser) {
            jwt.sign(
              { id: savedUser._id },
              process.env.SECRET,
              { expiresIn: 3600 },
              (err, token) => {
                if (err) {
                  throw err;
                }
    
                res.status(200).json({
                  status: 'success',
                  data: {
                    token: "Bearer " + token,
                    id: savedUser._id,
                    email: savedUser.email,
                  },
                  message: 'successful',
                });
              }
            );
          }
        }
      },
    };
    export default AuthController;