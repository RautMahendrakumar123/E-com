import React, { useEffect, useState } from 'react';
import watch from '../../assets/smartwatch.webp'
import axios from 'axios';
import toast from 'react-hot-toast';

const Cart = () => {
    const [cartproduct,setCartproduct]=useState([])

    const token = localStorage.getItem('token')
    console.log(cartproduct);

    useEffect(()=>{
        const fetchProduct = async()=>{
            const response = await axios.get('http://localhost:5000/api/v1/get-cart-product',{
                headers:{
                    Authorization:token
                }
            })
            if(response){
                setCartproduct(response.data.cart.items)
            }
        }
        fetchProduct()
    },[])

    const handleRemoveProduct = async (productId) => {
        try {
            const response = await axios.delete(`http://localhost:5000/api/v1/remove-cart/${productId}`, {
                headers: {
                    Authorization: token
                }
            }); 
            if (response.status === 200) {
                setCartproduct(cartproduct.filter(item => item._id !== productId));
                toast.success('Product removed successfully');
            } else {
                toast.error('Something went wrong');
            }
        } catch (error) {
            console.error('Error removing product:', error);
            toast.error('An error occurred while removing the product');
        }
    }
    
const handleIncreaseQuantity = async(productId)=>{
    try {
        const response = await axios.put(`http://localhost:5000/api/v1/increase-quantity/${productId}`, null,{
            headers: {
                Authorization: token
            }
        }); 
        if (response.status === 200) {
            const updatedCart = cartproduct.map(item => {
                if (item._id === productId) {
                    return {
                        ...item,
                        quantity: item.quantity + 1 // Increase quantity by 1
                    };
                }
                return item;
            });
            setCartproduct(updatedCart);
            toast.success('Product quantity successfully increase');
        } else {
            toast.error('Something went wrong');
        }
    } catch (error) {
        console.error('Error increasing product quantity:', error);
        toast.error('An error occurred while increasing the product quantity');
    }
}

const handleDecreaseQuantity = async(productId)=>{
    try {
        const response = await axios.put(`http://localhost:5000/api/v1/decrease-quantity/${productId}`, null,{
            headers: {
                Authorization: token
            }
        }); 
        if (response.status === 200) {
            const updatedCart = cartproduct.map(item => {
                if (item._id === productId) {
                    return {
                        ...item,
                        quantity: item.quantity - 1 // Increase quantity by 1
                    };
                }
                return item;
            });
            setCartproduct(updatedCart);
            toast.success('Product quantity successfully increase');
        } else {
            toast.error('Something went wrong');
        }
    } catch (error) {
        console.error('Error increasing product quantity:', error);
        toast.error('An error occurred while increasing the product quantity');
    }
}

    return (
        <div className="flex justify-center mt-10 p-2">
            <div className="w-4/6 pr-8">
                <h1 className="text-2xl font-bold mb-4 text-center">Your Cart</h1>
                {cartproduct.length>0 ?
              cartproduct.map((item)=>{
                    const {product, quantity,_id:productId}=item;
                    const {productname,image,price}=product;
                    return <div className="flex items-center pb-4 mb-4 border-gray-300 border-2">
                    <div className="w-1/4">
                        <img src={`http://localhost:5000/images/${image}`} alt="Product" className="w-full" />
                    </div>
                    <div className="w-3/4 flex justify-around items-center">
                        <div>
                            <h2 className="text-lg font-semibold">{productname}</h2>
                            <p className="text-gray-600">Rs. {price}</p>
                        </div>
                        <div className="flex items-center">
                             <button className="bg-gray-200 px-2 rounded-l" onClick={() => handleDecreaseQuantity(productId)}>-</button> 
                             <input type="text" className="w-10 text-center border border-gray-300" value={quantity} readOnly /> 
                             <button className="bg-gray-200 px-2 rounded-r" onClick={() => handleIncreaseQuantity(productId)}>+</button> 
                            <button className="ml-4 text-red-500 py-1 px-2 border-2 border-red-500 rounded-lg" onClick={() => handleRemoveProduct(productId)}>
                                delete
                            </button>
                        </div>
                    </div>
                </div>
                })
                :
                <div>
                    <img src='https://www.pngfind.com/pngs/m/272-2727925_continue-shopping-empty-cart-png-transparent-png.png' alt='empty cart'/>
                </div>
            }
            
            </div>

            <div className="w-2/6 mt-14">
                <div className="bg-gray-100 p-4">
                    <h2 className="text-xl font-semibold mb-4">Total: $100.00</h2>
                    <button className="w-full bg-blue-500 text-white py-2 rounded">Checkout</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
