import React from 'react'
import { ProductType } from '../types/Product'

type ProductListProps = {
  products: ProductType[];
}

const ListProduct = ({ products }: ProductListProps) => {
  return (
    
    <div className='py-8 px-4'>
      <div className='border border-pink-400 bg-pink-400'>
        <div className='py-2 px-8'>
          <div className='border border-white bg-white grid grid-cols-10 gap-2 rounded-lg'>

            {products.map(product => {
              return <div className='col-span-2 p-4 hover:border-pink-400'>
                  <div>
                    <img src='https://product.hstatic.net/200000066044/product/biotin-collagen-conditioner-thick-_-full-1_427ebeb1be224865a31095c86ae59022_large.jpg' width='150px' />
                  </div>
                  <div className='text-left'>
                    <p>COCOON</p>
                    <p>Cà phê Đắk Lắk làm sạch da chết COCOON Dak lak coffee body polish</p>
                    <p>98.000đ</p>
                    <button className='border border-pink-400 bg-pink-400 p-2'>Mua hàng</button>
                  </div>
                </div>
              
            })}
          </div>
        </div>
      </div>

    </div>
  )
}

export default ListProduct