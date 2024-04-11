import jwt from 'jsonwebtoken'
import userModel from '../models/user.model.js';

const isAdmin = async(req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(401).json({
            message: 'You Must Be Logged In First'
        })
    }

    
    const token = req.headers.authorization;
    const decodedToken = jwt.verify(token, process.env.secretSTR);

    const userId = decodedToken?.userId;

    const user = await userModel.findById(userId);
    if (!user) {
        return res.status(404).json({
            message: 'User not found'
        });
    }

    if (user.role !== 1) {
        return res.status(403).json({
            message: 'Forbidden: You Must Be an Admin'
        });
    }

    req.userId = userId;
    
    next();


}

export default isAdmin;