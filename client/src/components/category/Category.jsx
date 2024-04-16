import React from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'

const FilterList = [

    { url: 'https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100', text: 'Groceries' },
    { url: 'https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100', text: 'Mobile' },
    { url: 'https://rukminim1.flixcart.com/flap/128/128/image/82b3ca5fb2301045.png?q=100', text: 'Fashion' },
    { url: 'https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100', text: 'Laptop' },
    { url: 'https://rukminim1.flixcart.com/flap/128/128/image/ee162bad964c46ae.png?q=100', text: 'Home' },
    { url: 'https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100', text: 'Beauty and Toy' }
];

const Category = () => {

    const setCategory = async(categoryName)=>{
        try {
            const response = await axios.get(`http://localhost:5000/api/v1/products/${categoryName}`);
            // navigate('/filter-result');
        } catch (error) {
            if (error.response && error.response.status === 404) {
                console.log('No products found for category:', categoryName);
                toast.error('No matching product')
            } else {
                console.error('Error fetching products:', error);
                toast.error('Something went wrong')
            }
        }
    }
  
  return (
    <div className='flex item-center justify-around py-3'>
        <div></div>
            {
                FilterList.map((item) => (
                    <div className='flex flex-col items-center w-16 cursor-pointer' key={item.url} onClick={()=>{setCategory(item.text)}}>
                        <div>
                        <img src={item.url} className='img' />
                        </div>
                        <div>
                        {item.text}
                        </div>
                    </div>
                ))
            }
        <div></div>

    </div>
  )
}

export default Category
