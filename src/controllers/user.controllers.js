import {User} from '../models/user.model.js';
import { ApiError } from '../utils/ApiError.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { asyncHandler } from '../utils/AsyncHandler.js';
import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken"

export const createUser = asyncHandler(async (req, res) => {
  try {
    const {
      email,
      contribution,
      lastOnlineTimeSeconds,
      friendOfCount,
      titlePhoto,
      handle,
      avatar,
      registrationTimeSeconds
    } = req.body;

    const newUser = new User({
      email,
      contribution,
      lastOnlineTimeSeconds,
      friendOfCount,
      titlePhoto,
      handle,
      avatar,
      registrationTimeSeconds
    });

    await newUser.save();

    console.log('New User Saved:', newUser);

    return res
    .status(201)
    .json(
      { message: 'User saved', user: newUser }
    );

    
  } catch (err) {
    console.error(' Error:', err.message); 
    res
    .status(400)
    .json({ error: err.message });
    }
  }
);

export const userRegister = asyncHandler(async(req,res) => {
  const {username , email ,password} = req.body

  if(
        [email, username, password].some((field) => 
            field?.trim() === "")
    ){
        console.log("field :",field);
        throw new ApiError(400,"All fields are required")
    }

  const existeUser = await User.findOne({email})
  if(existeUser){
    throw new ApiError(400,"User already existed")

  }

  const user =await User.create({username,email,password})

  return res
  .status(200)
  .json(
    new ApiResponse(200,{
      username:  user.username,
      email: user.email,
    },"User registration successfully")
  )
})

//login
export const userLogin = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email })
  if (!user) {
    return next(new ApiError(401, "Invalid email or password"));
  }

  const isMatch = await user.matchPassword(password);
  if (!isMatch) {
    return next(new ApiError(401, "Invalid email or password"));
  }


  return res
  .status(200)
  .json(
    new ApiResponse(200,{
      success: true,
      message: "Login successful",
    },
    "User registration successfully")
  )
});