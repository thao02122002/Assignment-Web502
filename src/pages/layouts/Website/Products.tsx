import React from 'react'
import ListProduct from '../../../components/ListProduct'
import { ProductType } from '../../../types/Product'

type ProductsProps = {
  products: ProductType[]
}

const Products = (props: ProductsProps) => {
  return (
    <div>
      <div className='grid grid-cols-12 gap-2'>
        <div className='col-span-4 pl-8 pt-12'>
          <div className='text-left'>
            <h2>DANH MỤC</h2>
           <a className='decoration-none' href="">dnknhugf</a> 
            <a href="">dnknhugf</a>
            <a href="">dnknhugf</a>
            <a href="">dnknhugf</a>
          </div>
          <div className='text-left py-4'>
          <h2>MỨC GIÁ</h2>
          <p>Dưới 100 000đ</p>
          <p>100 000đ - 300 000đ</p>
          <p>300 000đ - 500 000đ</p>
          <p>500 000đ -900 000đ</p>
          <p>Trên 1 000 000đ</p>
        </div>
        </div>

        


        <div className='col-span-8'>
        <ListProduct products={props.products} />
        </div>

      
      </div>
      
    </div>
  )
}

export default Products