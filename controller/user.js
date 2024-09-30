import User from "../model/user.js";
import jwt from 'jsonwebtoken'
const { sign } = jwt
import bcrypt from "bcrypt";
export const register = async(req, res)=>{
try {
    const {name, email, password} = req.body;
    const hashedPassword = await bcrypt.hash(password, 10)
const  detail = await User.create({name, email, password:hashedPassword})
res.status(200).json({
    message: "user created successfully",
    data: detail
})
} catch (error) {
 res.status(500).json({
    message: error.message,
    data: null
 })   
}
}
export const login = async(req, res)=>{
    try {
       const {email, password} = req.body;
       if(!email){
        return res.status(400).json({
            message: "email is required"
        })
       }
       if(!password){
        return res.status(400).json({
            message: "password is required"
        })
       }
        const User = await User.findOne({email:email})
        if(!User){
            return res.status(400).json({
                message: "user not found"
            })
        }
        const isMatch = await bcrypt.compare(password, authUser.password)
        if(!isMatch){
            return res.status(400).json({
                message: "invalid password"
            })
        }
        const token = sign({_id: authUser._id}, process.env.JWT_SECRET, {
            expiresIn: "1d"
        })
        res.status(200).json({
            message: "user logged in successfully",
            token: token
        })
    } catch (error) {
        res.status(500).json({
            message: error.message,
            data: null
        })
    }
}

export const deleteUser = async(req,res)=>{
    try {
       await Auth.findByIdAndDelete(req.params.id)
        res.status(200).json({
            message: "user deleted successfully"
        })
    } catch (error) {
        res.status(500).json({
            message: error.message,
            data: null
        })
    }
}

export const updateUser = async(req,res)=>{
    try {
       const {name, email, password} = req.body;
       const hashedPassword = await bcrypt.hash(password, 10)
       await Auth.findByIdAndUpdate(req.params.id, {name, email, password:hashedPassword})
        res.status(200).json({
            message: "user updated successfully"
        })
    } catch (error) {
        res.status(500).json({
            message: error.message,
            data: null
        })
    }
}

export const getUser = async(req,res)=>{
    try {
     let user = await Auth.findById(req.params.id)
     res.status(200).json({
         message: "user fetched successfully",
         data: user
     })
    } catch (error) {
        res.status(500).json({
            message: error.message,
            data: null
        })
    }
}

export const getUsers = async(req,res)=>{
    try {
     let users = await Auth.find()
     res.status(200).json({
         message: "users fetched successfully",
         data: users
     })
    } catch (error) {
        res.status(500).json({
            message: error.message,
            data: null
        })
    }
}