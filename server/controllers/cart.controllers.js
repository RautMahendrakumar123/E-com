import cartModel from "../models/cart.model.js";
import productModel from "../models/product.model.js";


export const AddToCartController = async (req, res) => {
    try {
        const { productId, quantity } = req.body;
        const userId = req.userid;

        const product = await productModel.findById(productId)

        if (!product) {
            return res.status(404).json({ error: 'Product not found' })
        }

        let cart = await cartModel.findOne({ userId })

        if (!cart) {
            cart = new cartModel({ userId, items: [] })
        }

        const existingItem = cart.items.find(item => item.product.equals(product._id))

        if (existingItem) {
            existingItem.quantity += quantity || 1
        } else {
            cart.items.push({ product: product._id, quantity: quantity || 1 })
        }

        await cart.save()

        return res.json({ success: true, cart });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

export const GetCartProductController = async (req, res) => {
    try {
        const userId = req.userid;
        const cart = await cartModel.findOne({ userId }).populate('items.product')

        if (!cart) {
            return res.status(404).json({ error: 'Cart not found' });
        }
        //   const

        res.json({ success: true, cart });

    } catch (error) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
}


export const removeProductFromCart = async (req, res) => {
    try {

        const userId = req.userid;
        const { productId } = req.params;

        const cart = await cartModel.findOne({ userId });
        if (!cart) {
            return res.status(404).json({ message: 'Cart not found for this user' });
        }
        const productIndex = cart.items.findIndex(item => item._id.toString() === productId);

        if (productIndex === -1) {
            return res.status(404).json({ message: 'Product not found in the cart' });
        }

        cart.items.splice(productIndex, 1);
        await cart.save();

        return res.json({ message: 'Product removed from cart successfully' });
    } catch (error) {
        console.error('Error removing product from cart:', error);
        return res.status(500).json({ error: 'An error occurred while removing the product from cart' });
    }
};

export const increaseProductQuantityController = async(req,res)=>{

    try {
        const userId = req.userid;
        const {productId} = req.params

        const cart = await cartModel.findOne({userId})

        if (!cart) {
            return res.status(404).json({ message: 'Cart not found for this user' });
        }

        const productIndex = cart.items.findIndex(item => item._id.toString() === productId);

        if (productIndex === -1) {
            return res.status(404).json({ message: 'Product not found in the cart' });
        }

        cart.items[productIndex].quantity++;
        await cart.save()
        return res.json({ message: 'Quantity increased successfully' });
    } catch (error) {
        console.error('Error increasing product quantity:', error);
        return res.status(500).json({ error: 'An error occurred while increasing the product quantity' });
    }
}


export const decreaseProductQuantityController = async (req, res) => {
    try {
        const userId = req.userid;
        const { productId } = req.params;

        const cart = await cartModel.findOne({ userId });

        if (!cart) {
            return res.status(404).json({ message: 'Cart not found for this user' });
        }

        const productIndex = cart.items.findIndex(item => item._id.toString() === productId);

        if (productIndex === -1) {
            return res.status(404).json({ message: 'Product not found in the cart' });
        }

        if (cart.items[productIndex].quantity <= 1) {
            return res.status(400).json({ message: 'Product quantity cannot be less than 0' });
        }

        cart.items[productIndex].quantity--;
        await cart.save();
        return res.json({ message: 'Quantity decreased successfully' });
    } catch (error) {
        console.error('Error decreasing product quantity:', error);
        return res.status(500).json({ error: 'An error occurred while decreasing the product quantity' });
    }
};

