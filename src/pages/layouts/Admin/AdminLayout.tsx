import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../../components/Header'
import Dashboard from './Dashboard'

type Props = {}

const AdminLayout = (props: Props) => {
  return (
   <div>
     <div className='grid grid-cols-12'>
     <div className='col-span-2'>
       <Dashboard />
       </div>
       <div className='col-span-10 grid grid-cols-10'>
         <div className='col-span-5'></div>
         <div className='col-span-5'></div>

         </div>
       <Outlet />
       
     </div>
   </div>
    
  )
}

export default AdminLayout