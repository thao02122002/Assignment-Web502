import React from 'react'
import { ProductType } from '../types/Product'

type ProductListProps = {
  products: ProductType[];
}

const ListProduct = ({ products }: ProductListProps) => {
  return (
    <div className='p-4' >
      <div className='py-8 '>
      <div className='border border-pink-400 bg-pink-400'>
        <div className='py-2 px-8'>
          <div className='border border-white bg-white  rounded-lg'>
            <p className='text-xl text-left hover:text-pink-400 font-bold'><strong>ƯU ĐÃI HOT, ĐỪNG BỎ LỠ!!</strong></p>
            <p className='text-lg text-left text-gray-500'>Nhanh tay đặt ngay kẻo lỡ</p>
            <div className='grid grid-cols-10 gap-2'>
            {products.map(product => {
              return <div className='col-span-2 p-4 hover:border-pink-400'>
                  <div>
                    <img src='https://product.hstatic.net/200000066044/product/biotin-collagen-conditioner-thick-_-full-1_427ebeb1be224865a31095c86ae59022_large.jpg' width='200px' />
                  </div>
                  <div className='text-left'>
                    <p className='text-gray-500'>{product.name}</p>
                    <p className='hover:text-pink-400'>{product.description}</p>
                    <p className='text-red-600 text-xl font-semibold'>{product.price}đ</p>
                   <a className='border border-pink-400 text-white bg-pink-400 px-8 py-2 rounded-full' href={`/product/${product._id}`}><button className=''>Mua hàng</button></a> 
                  </div>
                </div>
              
            })}
            </div>

           

            <div className='text-center py-2'>
            <button className='border px-4 py-2 border-pink-400  text-pink-400 hover:bg-pink-400 hover:text-white rounded-full'>Xem tất cả </button>
            </div>
            
          </div>
         
        </div>
      </div>

    </div>

   
    </div>
    
  )
}

export default ListProduct