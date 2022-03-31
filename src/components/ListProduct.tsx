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

    <div className='py-4'>
      <h1 className='text-left hover:text-pink-400'>THƯƠNG HIỆU NỔI BẬT</h1>
      <div className='grid grid-cols-10 gap-2'>
        <div className='col-span-2'>
          <img src='https://theme.hstatic.net/200000066044/1000820067/14/brand_1.jpg?v=98' width='300px'/>
        </div>
        <div className='col-span-2 pt-8'>
          <img src='https://theme.hstatic.net/200000066044/1000820067/14/brand_4.jpg?v=98' width='300px'/>
        </div>
        <div className='col-span-2'>
          <img src='https://theme.hstatic.net/200000066044/1000820067/14/brand_7.jpg?v=98' width='300px'/>
        </div>
        <div className='col-span-2'>
          <img src='https://theme.hstatic.net/200000066044/1000820067/14/brand_2.jpg?v=98' width='300px'/>
        </div>
        <div className='col-span-2'>
          <img src='https://theme.hstatic.net/200000066044/1000820067/14/brand_6.jpg?v=98' width='300px'/>
        </div>
      </div>

    </div>

    <div>
      <img src='https://theme.hstatic.net/200000066044/1000820067/14/section_hot_banner.png?v=98' width='100%' />
    </div>

    <div className='py-4 '>
      <h1 className='text-left hover:text-pink-400'>TIN TỨC</h1>
      <div className='grid grid-cols-12 gap-3 pt-4'>
        <div className='col-span-3'>
          <div className='pl-9'>
            <img   src='https://file.hstatic.net/200000066044/article/z2407320796082_b3dfecc6b8ef8ea74209aefc20127c54_de296ac8b0fa42fa86aab2b61ae46fae.jpg' width='300px'/>
          </div>
          <div className='text-left pt-2'>
            
            <h3 className='hover:text-pink-400'>TƯNG BƯNG SINH NHẬT LÊN 2 - NEW SKIN NHÂN ĐÔI ƯU ĐÃI</h3>
            <h6 className='text-gray-400'>hdeide</h6>
            <p>Thỏa mãn hơn cơn khát mua sắm với chương trình hoành tráng nhất năm của New Skin. Trong đó ngày siêu sale đỉnh nhất cùng hàng trăm...</p>

          </div>

        </div>
        <div></div>
        <div></div>
        <div></div>
        

      </div>
    </div>
    </div>
    
  )
}

export default ListProduct