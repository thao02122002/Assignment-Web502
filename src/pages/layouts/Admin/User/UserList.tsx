import React from 'react'
import { Link } from 'react-router-dom'
import {UserType} from "../../../../types/user"


type UserListProps = {
  users: UserType[];
  // onRemove: (id: number) => void
  
}

const UserList = (props: UserListProps) => {
  return (

    <div className="flex flex-col">
      <h1 className='text-center hover:text-pink-400 pb-4'>UserList</h1>
  <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
      <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3  text-xs font-medium text-gray-500 uppercase tracking-wider">
                ID
              </th>
              <th scope="col" className="px-6 py-3  text-xs font-medium text-gray-500 uppercase tracking-wider">
                USERNAME
              </th>
              <th scope="col" className="px-6 py-3  text-xs font-medium text-gray-500 uppercase tracking-wider">
                EMAIL
              </th>
              <th scope="col" className="px-6 py-3  text-xs font-medium text-gray-500 uppercase tracking-wider">
                ROLE
              </th>
              
              <th scope="col" className="relative px-6 py-3  text-xs font-medium text-gray-500 uppercase tracking-wider">ACTION
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
          {props.users.map((item, index) => {
            return <tr>
            <td className="px-6 py-4 whitespace-nowrap">
            {index +1}
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
              {item.name}
              </span>
            </td>
            
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {item.email}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {item.role}
            </td>
            
            <td className="px-6 py-4 whitespace-nowrap  text-sm font-medium">
              <Link to={`/admin/user/${item._id}/edit`} className=""><button className='border border-green-400 bg-green-400 text-white p-2 rounded-full'>Edit</button></Link>/<Link to="" className=""><button className="border border-red-600 bg-red-600 text-white rounded-full p-2">Dele</button></Link>
            </td>
          </tr>
          })}
            
            </tbody>
        </table>
      </div>
      
    </div>
  </div>

</div>
  )
}

export default UserList