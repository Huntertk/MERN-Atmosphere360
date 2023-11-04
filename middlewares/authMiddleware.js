import jwt from 'jsonwebtoken'
import { UnauthenticatedError } from '../error/customError.js';

export const authAdmin = (req, res, next) => {
    const {admin_token}  = req.cookies
    try {
        if(!admin_token){
            throw new UnauthenticatedError("Please Login")
        }
        next()
    } catch (error) {
        next(error)
    }
}