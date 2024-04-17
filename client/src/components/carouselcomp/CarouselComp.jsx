import React, { useEffect, useState } from 'react'
import Card from '../card/Card'
import axios from 'axios'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CarouselComp = () => {

    const [specialProducts, setSpecialProducts] = useState([])

  useEffect(() => {
    const FetchSpecialProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/v1/products/special/true`)
        setSpecialProducts(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    FetchSpecialProduct()
  }, [])
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1350 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 1350, min: 1145 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1145, min: 896 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 896, min: 600 },
      items: 2
    },
    smallmobile:{
        breakpoint: { max: 600, min: 0 },
        items: 1,
        centerMode:true
    }
  };


  return (
<div className='w-full m-auto mb-3 item-center'>
      {
        specialProducts.length > 0 ? <>
          <Carousel responsive={responsive}
            swipeable={false}
            draggable={false}
            infinite={true}
          >

              {
                specialProducts.map((product) => {
                  return <Card product={product} key={product._id} />
                })
              }
          </Carousel>
        </> : <>
          Loading...
        </>
      }

    </div>
  )
}

export default CarouselComp
