import { getAllUsers, register, getUserById, updateUser } from "../controllers/user.js";
import { User } from "../models/user.js ";
import express from "express";
 
const router = express.Router();

router.get("/all", getAllUsers);

router.post("/new",register);

//dynamic routing 
router.get("/userid/:id", getUserById);

router.get("/userid/:id", getUserDetails);

router.put("/userid/:id", updateUser);

router.delete("/userid/:id", deleteUser);


export default router;