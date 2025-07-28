import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email'],
  },
  contribution: {
    type: Number,
    default: 0
  },
  lastOnlineTimeSeconds: {
    type: Number
  },
  friendOfCount: {
    type: Number,
    default: 0
  },
  titlePhoto: {
    type: String
  },
  handle: {
    type: String
  },
  avatar: {
    type: String
  },
  registrationTimeSeconds: {
    type: Number
  }
},{timestamps:true}
);

export const User = mongoose.model('User', userSchema);

