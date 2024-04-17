import React from 'react'
import Category from '../../components/category/Category'
import Card from '../../components/card/Card'
import Products from '../../components/getProducts/Products'
import CarouselComp from '../../components/carouselcomp/CarouselComp'

const Home = () => {
  return (
    <div>
      <Category />
      <CarouselComp />
      <Products />
    </div>
  )
}

export default Home
