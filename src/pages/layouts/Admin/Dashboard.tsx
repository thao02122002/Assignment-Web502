import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

const Dashboard = (props: Props) => {
  return (
    <div className='bg-pink-400 h-screen'>
      <div>
        <Link to='/admin'><img src='https://theme.hstatic.net/200000066044/1000820067/14/logo.png?v=100' width='300px' /></Link>
        
      </div>
      <nav>
        <ul className='inline  '>
          <li className='grid grid-cols-4 pt-8 '>
            <div className='col-span-1 pl-12 pt-2'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white " fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div className='col-span-3 text-left'>
              <Link className='no-underline text-white text-3xl' to="/admin/category">
                Danh mục
              </Link>
            </div>


          </li>


          <li className='grid grid-cols-4 py-4'>
            <div  className='col-span-1 pl-12 pt-2'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
            </svg>
            </div>
            <div className='col-span-3 text-left'>
              <Link className='no-underline text-white text-3xl' to="/admin/product">Sản phẩm</Link>
              </div>
          </li>

          <li className='grid grid-cols-4'>
            <div className='col-span-1 pl-12 pt-2'><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg></div>
            <div className='col-span-3 text-left'><Link className='no-underline text-white text-3xl' to="/admin/new">Bài viết</Link></div>

          </li>

          <li className='grid grid-cols-4 py-4'>
            <div className='col-span-1 pl-12 pt-2'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div className='col-span-3 text-left'>
              <Link className='no-underline text-white text-3xl' to="/admin/user">Tài khoản</Link>
            </div>

          </li>

          <li className='grid grid-cols-4'>
            <div className='col-span-1 pl-12 pt-2'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div className='col-span-3 text-left'>
              <Link className='no-underline text-white text-3xl' to="/admin/cart">Đơn hàng</Link>
            </div>

          </li>
        </ul>

      </nav>



    </div>
  )
}

export default Dashboard