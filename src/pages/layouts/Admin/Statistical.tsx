import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

const Statistical = (props: Props) => {
  return (
    <div className='px-12'>
       <div className='grid grid-cols-12  gap-4'>
      <div className='col-span-4  text-pink-400  '>
        <div className='border-2 border-pink-400 shadow-xl h-40 rounded-lg'>
          <p className='text-xl'>
            <Link className='no-underline text-pink-400' to='/admin/category' >DANH MỤC</Link>
            </p>
          <div className='grid grid-cols-4 '>
            <div className='col-span-1 pl-8'>
              <img src=' https://cdn-icons-gif.flaticon.com/6172/6172540.gif' />
           
            </div>
            <div className='col-span-3  text-7xl'> 8</div>
          </div>
          </div>
         
      </div>
      <div className='col-span-4  text-pink-400  '>
        <div className='border-2 border-pink-400 shadow-xl h-40 rounded-lg'>
          <p className='text-xl'><Link className='no-underline text-pink-400' to='/admin/product' >SẢN PHẨM</Link></p>
          <div className='grid grid-cols-4 '>
            <div className='col-span-1 pl-8'>
              <img src=' https://cdn-icons-gif.flaticon.com/6454/6454149.gif' />
           
            </div>
            <div className='col-span-3  text-7xl'> 8</div>
          </div>
          </div>
         
      </div>
      <div className='col-span-4  text-pink-400  '>
        <div className='border-2 border-pink-400 shadow-xl h-40 rounded-lg'>
          <p className='text-xl'><Link className='no-underline text-pink-400' to='/admin/user' >TÀI KHOẢN</Link></p>
          <div className='grid grid-cols-4 '>
            <div className='col-span-1 pl-8'>
              <img src=' https://cdn-icons-gif.flaticon.com/7211/7211842.gif' />
           
            </div>
            <div className='col-span-3  text-7xl'> 8</div>
          </div>
          </div>
         
      </div>

      

      


    </div>
    <div className='grid grid-cols-12 gap-4 pt-4'>
      <div className='col-span-2'></div>
      <div className='col-span-4  text-pink-400  '>
        <div className='border-2 border-pink-400 shadow-xl h-40 rounded-lg'>
          <p className='text-xl'><Link className='no-underline text-pink-400' to='/admin/new' >BÀI VIẾT</Link></p>
          <div className='grid grid-cols-4 '>
            <div className='col-span-1 pl-8'>
              <img src=' https://cdn-icons-gif.flaticon.com/6172/6172541.gif' />
           
            </div>
            <div className='col-span-3  text-7xl'> 8</div>
          </div>
          </div>
         
      </div>
      

      <div className='col-span-4  text-pink-400  '>
        <div className='border-2 border-pink-400 shadow-xl h-40 rounded-lg'>
          <p className='text-xl'><Link className='no-underline text-pink-400' to='/admin/cart' >ĐƠN HÀNG</Link></p>
          <div className='grid grid-cols-4 '>
            <div className='col-span-1 pl-8'>
              <img src='https://cdn-icons-gif.flaticon.com/6416/6416387.gif' />
           
            </div>
            <div className='col-span-3  text-7xl'> 8</div>
          </div>
          </div>
         
      </div>
      <div className='col-span-2'></div>
    </div>

    
    </div>
   
  )
}

export default Statistical