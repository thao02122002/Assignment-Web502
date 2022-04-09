import React, { useEffect, useState } from 'react'
import {Link, useParams } from 'react-router-dom'
import { List, Read} from '../../../api/category'
import { CategoryType } from '../../../types/Category';
import { ProductType } from '../../../types/Product';



const CategoryDetail = () => {
  const {id} = useParams();
  const [products, setProducts] = useState<ProductType[]>([])
  useEffect(() => {
    const getCategory = async (id: any) => {
      const {data} = await Read(id);
      // console.log(data.products);
      
      setProducts(data.products);

    }
    getCategory(id);
  }, [])
  return (
    // <div>{products.map(product => (
    //   <p>{product.name}</p>
    // ))}</div>

    <div className='grid grid-cols-10 gap-3'>
    {products.map(product => (
       <div className='col-span-2 p-4 hover:border hover:border-gray-200 hover:shadow-xl rounded-lg '>
          <div className='overflow-hidden'>
            <img className='transition-transform duration-500 transform hover:scale-75 ' src='https://product.hstatic.net/200000066044/product/biotin-collagen-conditioner-thick-_-full-1_427ebeb1be224865a31095c86ae59022_large.jpg' width='300px' />
          </div>
          <div className='text-left'>
            <p className='text-gray-500'>{product.name}</p>
            <p className='hover:text-pink-400'>{product.description}</p>
            <p className='text-red-600 text-xl font-semibold'>{product.price}đ</p>
           <Link className='border border-pink-400 text-white bg-pink-400 px-8 py-2 rounded-full' to={`/product/${product._id}`}><button className=''>Mua hàng</button></Link> 
          </div>
        </div>
      
  ))}
    </div>
    
    // <div className='px-4'>
    //   <div className='grid grid-cols-12 gap-2'>
    //     <div className='col-span-6 overflow-hidden'>
    //       <img className='transition-transform duration-500 transform hover:scale-75 ' src='https://product.hstatic.net/200000066044/product/biotin-collagen-conditioner-thick-_-full-1_427ebeb1be224865a31095c86ae59022_large.jpg' width='500px' />
    //     </div>
    //     <div className='col-span-6 text-left my-auto'>
    //       {products.map(product => {
    //         <div><h1 className='text-gray-500'>{product?.name}</h1>
    //         <h1 className='text-gray-500'>{product?.category}</h1>
    //         <p className='text-red-600 text-4xl font-semibold'>{product?.price}đ</p>
    //         <form>
    //           Số lượng: <input className='border border-gray-300 rounded-full' type='text' placeholder='-' /> 1 <input type='text' placeholder='+' />
    //         </form>
    //         <p className='hover:text-pink-400 text-3xl'>{product?.description}</p>
    //         <p className=''>{product?.descriptionDetail}</p></div>
              
    //       })}
          
    //       <button className='border px-4 py-2 border-pink-400  text-pink-400 hover:bg-pink-400 hover:text-white rounded-full text-xl'>Thêm vào giỏ hàng </button>

          

    //     </div>

    //   </div>
    //   <div className='pt-4 pb-8'>
    //     <h1 className='text-left'>SẢN PHẨM CÙNG LOẠI</h1>
    //     <div className='grid grid-cols-12 gap-2'>
    //     <div className='col-span-2 p-4 hover:border-pink-400'>
    //               <div className='overflow-hidden'>
    //                 <img className='transition-transform duration-500 transform hover:scale-75 ' src='https://product.hstatic.net/200000066044/product/biotin-collagen-conditioner-thick-_-full-1_427ebeb1be224865a31095c86ae59022_large.jpg' width='300px' />
    //               </div>
    //               <div className='text-left'>
    //                 <p className='text-gray-500'>iwjslmdasw</p>
    //                 <p className='hover:text-pink-400'>vưdhowmsmijwslwndbdjjkdmwkhiwjks</p>
    //                 <p className='text-red-600 text-xl font-semibold'>82392000đ</p>
    //                <a className='border border-pink-400 text-white bg-pink-400 px-8 py-2 rounded-full' href=''><button className=''>Mua hàng</button></a> 
    //               </div>
    //             </div>
    //     </div>
    //   </div>
    // </div>
  )
}

export default CategoryDetail