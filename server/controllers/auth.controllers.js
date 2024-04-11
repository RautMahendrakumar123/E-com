import usermodel from '../models/user.model.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

export const registerController = async (req, res) => {
    try {

        if (!req.file) {
            console.log('file problem')
            return res.status(400).json({ message: 'No file uploaded' });
        }

        const { name, email, contact, password, cpassword, image } = req.body;

        if (!name || !email || !contact || !password || !cpassword) {
            return res.status(400).json({ error: 'Please fill in all the details' });
        }

        if (password !== cpassword) {
            return res.status(400).json({ error: 'Password and confirm password do not match' });
        }

        const existingUser = await usermodel.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ error: 'User already exists' });
        }

        const hashpass = await IncryptPassword(password);

        const user = new usermodel({
            name,
            email,
            contact,
            password: hashpass,
            image: req.file ? req.file.filename : null,
        });

        await user.save();
        res.status(200).json({
            message: 'User registered',
            user
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Something went wrong');
    }
};

export const adminRegisterController = async (req, res) => {
    try {
        const { name, email, contact, password, cpassword, question, image } = req.body;

        if (!name || !email || !contact || !password || !cpassword || !question) {
            return res.status(400).json({ error: 'Please fill in all the details' });
        }

        if (question !== process.env.secretSTR) {
            return res.status(400).json({ error: 'Wrong key' });
        }

        if (password !== cpassword) {
            return res.status(400).json({ error: 'Password and confirm password do not match' });
        }

        const existingUser = await usermodel.find({ email });
        if (existingUser.length > 0) {
            return res.status(400).json({ error: 'User already exists' });
        }

        const hashpass = await IncryptPassword(password);
        const user = new usermodel({
            name,
            email,
            contact,
            password: hashpass,
            role: 1,
            image: null
        });

        await user.save();

        res.status(200).json({
            message: 'User registered',
            user,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
};

export const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ error: 'Please provide email and password' })
        }
        const existingUser = await usermodel.findOne({ email })
        if (!existingUser) {
            return res.status(404).json({ error: 'User does not exist. Please register.' });
        }

        let matchPass = await bcrypt.compare(password, existingUser.password)
        if (!matchPass) {
            return res.status(403).json({ error: 'Incorrect password' });
        }
        const token = jwt.sign({ userId: existingUser._id }, process.env.secretSTR)
        res.status(200).json({
            user: {
                name: existingUser.name,
                email: existingUser.email,
                contact: existingUser.contact,
                image: existingUser.image,
                id: existingUser._id
            },
            token
        })



    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Something went wrong' });
    }

}


export const privateRoute = (req, res) => {
    res.status(200).json({ ok: true })
}

