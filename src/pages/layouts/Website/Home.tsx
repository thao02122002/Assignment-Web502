import React from 'react'
import { Outlet } from 'react-router-dom'
import Banner from '../../../components/Banner'
import ListProduct from '../../../components/ListProduct'
import { ProductType } from '../../../types/Product'
import New from './New'

type HomeProps = {
  products: ProductType[]
}

const Home = (props: HomeProps) => {
  return (
    <div>
      <Banner />
      <ListProduct products={props.products} />
      <New />
    </div>
  )
}

export default Home