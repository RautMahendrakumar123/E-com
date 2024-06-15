import usermodel from '../models/user.model.js';

export const getUsersController = async (req, res) => {
    try {
        const users = await usermodel.find({}, '-password');
        if (!users || users.length === 0) {
            return res.status(404).json({ error: 'No users found' });
        }
        return res.status(200).json(users)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: 'Internal server error' });
    }
}

export const getUsersByIdController = async (req, res) => {
    try {
        const userId = req.userid
        const user = await usermodel.findById(userId,'-password')
        if(!user){
            return res.status(404).json({error:'something went wrong'})
        }
        return res.status(200).json(user)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: 'Internal server error' });
    }
}

export const deleteUserController = async (req, res) => {
    try {
        const userId = req.params.userId;
        if (!userId) {
            return res.status(400).json({ error: 'Invalid userId' });
        }

        const user = await usermodel.findById(userId);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        const deletedUser = await usermodel.findByIdAndDelete(userId);
        if (!deletedUser) {
            return res.status(500).json({ error: 'Failed to delete user' });
        }

        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};


