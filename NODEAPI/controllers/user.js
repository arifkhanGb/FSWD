import { User } from "../models/user.js";


export const getAllUsers =  async(req, res) => {

    const users = await User.find({});
    console.log(req.query.keyword);
     
    res.json({
      success: true,
      users,
    }); 
  }

  export const register =  async(req, res) => {


    const {name, email, password} = req.body;
  
    await User.create({
      name,
      email, 
      password,
    });
     
    res.status(201).json({
      success: true,
      message: "sent successfully",
    }); 
  }

  export const getUserById = async(req,res) => {
    const {id} = req.body;
    // const user = await User.findById(id);
     
    console.log(req.params);

    res.json({
      success: true,
      user: {},
    })
} 

export const getUserDetails = async(req,res) => {
  const {id} = req.params;
  const user = await User.findById(id);

  res.json({
    success: true,
    user,
  })
}

export const updateUser = async(req,res) => {
    const {id} = req.params;
    const user = await User.findById(id);
     
    res.json({
      success: true,
      message: "user Updated"
    })
} 

export const deleteUser = async(req,res) => {
    const {id} = req.params;
    const user = await User.findById(id);
     
    user.remove();

    res.json({
      success: true,
      message: "user deleted"
    })
}