import React from 'react'
import Banner from '../../../components/Banner'
import ListProduct from '../../../components/ListProduct'
import { ProductType } from '../../../types/Product'

type HomeProps = {
  products: ProductType[]
}

const Home = (props: HomeProps) => {
  return (
    <div>
      <Banner />
      <ListProduct products={props.products} />
    </div>
  )
}

export default Home