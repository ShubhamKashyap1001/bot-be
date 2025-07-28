import {User} from '../models/user.model.js';
import { ApiError } from '../utils/ApiError.js';
import { asyncHandler } from '../utils/AsyncHandler.js';

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

    res
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