import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../../components/Header'

type Props = {}

const AdminLayout = (props: Props) => {
  return (
   <div>
     <div className='grid grid-cols-12'>
     <div className='col-span-3'>
         <Outlet />
       </div>
       <div className='col-span-9'>ADMIN</div>
       
     </div>
   </div>
    
  )
}

export default AdminLayout