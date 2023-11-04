import { StatusCodes } from "http-status-codes";
import Admin from "../models/admin.js";
import bcrypt from 'bcryptjs'
import { BadRequestError, NotFoundError, UnauthorizedError } from "../error/customError.js";
import jwt from 'jsonwebtoken'

export const registerAdmin = async (req, res, next) => {
    const {email, password} = req.body
    try {
        const hashedPwd = await bcrypt.hash(password, 10)
        const admin = await Admin.create({email, password:hashedPwd})
        res.status(StatusCodes.CREATED).json({message:"Admin are created"})
    } catch (error) {
         next(error)
    }
}

export const loginAdmin = async (req, res, next) => {
    const {email, password} = req.body  
    try {
        
        if(!email || !password) {
            throw new BadRequestError("Please Provide all Values")
        }
        
        const admin = await Admin.findOne({email})
        
        if(!admin){
            throw new NotFoundError("Wrong Credentials")
        }
        const isPwdMatch = await bcrypt.compare(password, admin.password)
        if(!isPwdMatch){
            throw new UnauthorizedError("Wrong Credentials")
        }
        const token = jwt.sign({_id: admin._id},process.env.JWT_SECRET)
        res.status(StatusCodes.OK).cookie('admin_token', token ,{
            httpOnly: true,
            maxAge: 1000 * 60 * 15
        }).json({messgae:"Admin Login Successfully", user: admin.email})

    } catch (error) {
       next(error)
    }

    
}


export const logoutAdmin = async(req, res, next) =>{
    res.clearCookie('admin_token').json({message:"Admin Logout Successfully"})
}