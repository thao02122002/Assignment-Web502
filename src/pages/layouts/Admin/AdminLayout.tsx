import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../../components/Header'
import { isAuthenticate } from '../../../utils/localStorage'
import Dashboard from './Dashboard'
const user = isAuthenticate()


type Props = {}

const AdminLayout = (props: Props) => {
  
  return (
    <div>
      <div className='grid grid-cols-12'>
        <div className='col-span-2'>
          <Dashboard />
        </div>
        
        <div className='col-span-10 '>
          <div className='grid grid-cols-10 pt-4'>
          <div className='col-span-5'>
            <form>
              <div className='grid grid-cols-5'>
                <div className='col-span-1 pl-20'>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <div className='col-span-4 text-left'> <input className='border border-gray-300 py-1 px-2' type='text' placeholder='Tìm kiếm' /></div>
              </div>



            </form>
          </div>
          <div className='col-span-5'>
            <h2>Xin chào</h2><span>{user?.user.name}</span>
            
          </div>
          </div>
          <div className="h-0.5 bg-pink-400 w-full my-5"> </div>
          
          
          

          <div className='pt-4 px-4'>
            <Outlet /></div>
        </div>
       
        
      </div>
      
    </div>

  )
}

export default AdminLayout