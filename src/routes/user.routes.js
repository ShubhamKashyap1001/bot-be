import express from "express"
import { Router } from "express";
import {createUser} from '../controllers/user.controllers.js'
import { userRegister,userLogin } from "../controllers/user.controllers.js";

const router = Router();

router.post('/', createUser);
router.post('/Signup',userRegister)
router.post('/Signin',userLogin)

export default router
