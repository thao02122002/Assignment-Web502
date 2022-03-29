import React from 'react'
import ListProduct from '../../../components/ListProduct'
import { ProductType } from '../../../types/Product'

type ProductsProps = {
  products: ProductType[]
}

const Products = (props: ProductsProps) => {
  return (
    <div>
      <ListProduct products={props.products} />
    </div>
  )
}

export default Products