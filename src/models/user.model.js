import mongoose from "mongoose";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

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
  },
  username: {
    type : String,
    required : false,
  },

  password:{
    type : String,
    required : false,

  }

},{timestamps:true});

//to ecrypt the password
userSchema.pre("save",async function(next) {
    if(!this.isModified("password") || !this.password) return next();

    this.password = await bcrypt.hash(this.password,10);
    next();
})


// to match the password and encrypt password
userSchema.methods.matchPassword = async function (password) {
  if (!this.password) {
    throw new Error("Password not matched");
  }
  return await bcrypt.compare(password, this.password);
};



export const User = mongoose.model('User', userSchema);

