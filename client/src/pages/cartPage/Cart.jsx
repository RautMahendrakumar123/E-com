import React from 'react';
import watch from '../../assets/smartwatch.webp'

const Cart = () => {
    return (
        <div className="flex justify-center mt-10 p-2">
            <div className="w-4/6 pr-8">
                <h1 className="text-2xl font-bold mb-4 text-center">Your Cart</h1>
                <div className="flex items-center pb-4 mb-4 border-gray-300 border-2">
                    <div className="w-1/4">
                        <img src={watch} alt="Product" className="w-full" />
                    </div>
                    <div className="w-3/4 flex justify-around items-center">
                        <div>
                            <h2 className="text-lg font-semibold">Product Name</h2>
                            <p className="text-gray-600">$20.00</p>
                        </div>
                        <div className="flex items-center">
                            <button className="bg-gray-200 px-2 rounded-l" onClick={() => handleDecreaseQuantity(productId)}>-</button>
                            <input type="text" className="w-10 text-center border border-gray-300" value="1" readOnly />
                            <button className="bg-gray-200 px-2 rounded-r" onClick={() => handleIncreaseQuantity(productId)}>+</button>
                            <button className="ml-4 text-red-500" onClick={() => handleRemoveProduct(productId)}>
                                delete
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex items-center pb-4 mb-4 border-gray-300 border-2">
                    <div className="w-1/4">
                        <img src={watch} alt="Product" className="w-full" />
                    </div>
                    <div className="w-3/4 flex justify-around items-center">
                        <div>
                            <h2 className="text-lg font-semibold">Product Name</h2>
                            <p className="text-gray-600">$20.00</p>
                        </div>
                        <div className="flex items-center">
                            <button className="bg-gray-200 px-2 rounded-l" onClick={() => handleDecreaseQuantity(productId)}>-</button>
                            <input type="text" className="w-10 text-center border border-gray-300" value="1" readOnly />
                            <button className="bg-gray-200 px-2 rounded-r" onClick={() => handleIncreaseQuantity(productId)}>+</button>
                            <button className="ml-4 text-red-500" onClick={() => handleRemoveProduct(productId)}>
                                delete
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex items-center pb-4 mb-4 border-gray-300 border-2">
                    <div className="w-1/4">
                        <img src={watch} alt="Product" className="w-full" />
                    </div>
                    <div className="w-3/4 flex justify-around items-center">
                        <div>
                            <h2 className="text-lg font-semibold">Product Name</h2>
                            <p className="text-gray-600">$20.00</p>
                        </div>
                        <div className="flex items-center">
                            <button className="bg-gray-200 px-2 rounded-l" onClick={() => handleDecreaseQuantity(productId)}>-</button>
                            <input type="text" className="w-10 text-center border border-gray-300" value="1" readOnly />
                            <button className="bg-gray-200 px-2 rounded-r" onClick={() => handleIncreaseQuantity(productId)}>+</button>
                            <button className="ml-4 text-red-500" onClick={() => handleRemoveProduct(productId)}>
                                delete
                            </button>
                        </div>
                    </div>
                </div>
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
