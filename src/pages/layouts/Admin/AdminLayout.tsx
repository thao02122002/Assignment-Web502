import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../../components/Header'
import Dashboard from './Dashboard'

type Props = {}

const AdminLayout = (props: Props) => {
  return (
   <div>
     <div className='grid grid-cols-12'>
     <div className='col-span-3'>
       </div>
       <div className='col-span-9'>ADMIN</div>
       <Outlet />
       
     </div>
   </div>
    
  )
}

export default AdminLayout