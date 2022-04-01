import React from 'react'
import { Link } from 'react-router-dom'

import Nav from './Nav'
import Search from './Search'

type Props = {}

const Header = (props: Props) => {
  return (
    <div className='py-4 px-4'>
      <header>
        <div className="grid grid-cols-12 ">
          <div className='col-span-8'>
            <img src='https://theme.hstatic.net/200000066044/1000820067/14/logo.png?v=98/90/50' alt='' width='400px' />
          </div>
          <div className='col-span-4 grid grid-cols-6 m-auto pl-16' >

            

            {/* <div className='col-span-2 grid grid-cols-4'>
              <div className='col-span-1 '>
                <svg xmlns="http://www.w3.org/8000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <div className='col-span-3 text-left my-auto'>
                <ul className='inline  '>
                  <Link className='no-underline' to="/profile"><p className=' hover:text-pink-400'>Tài khoản</p></Link>

                  
                </ul>



              </div>
            </div> */}


            <div className='col-span-2 grid grid-cols-4'>
              <div className='col-span-1'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <div className='col-span-3 text-left'>
                <p className='hover:text-pink-400'>Tài khoản</p>

              </div>
            </div>


            <div className='col-span-2 grid grid-cols-4'>
              <div className='col-span-1'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className='col-span-3 text-left'>
                <p className='hover:text-pink-400'>Giỏ hàng</p>

              </div>
            </div>
          </div>
        </div>

        <nav className="navbar navbar-expand-lg navbar-light bg-pink-400">
          <div className="container-fluid">

            <div className="collapse navbar-collapse py-3" id="navbarSupportedContent">
              <Nav />
              < Search />
            </div>
          </div>
        </nav>




      </header>




    </div>
  )
}

export default Header