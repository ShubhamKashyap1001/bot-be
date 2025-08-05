import express from "express"
import { Router } from "express";
import {createUser} from '../controllers/user.controllers.js'
import { userRegister,userLogin } from "../controllers/user.controllers.js";

const router = Router();

router.post('/', createUser);
router.post('/signup',userRegister)
router.post('/signin',userLogin)

export default router
