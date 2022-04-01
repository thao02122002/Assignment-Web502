import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

const Search = (props: Props) => {
  return (
    <div className="d-flex">
      <form className="d-flex">
    <input className="form-control me-2 rounded-lg" type="search" placeholder="Search" aria-label="Search" />
    <button className="p-2 border border-yellow-500 bg-yellow-500 rounded-lg hover:bg-yellow-300" type="submit">Search</button>
  </form>
  <div className='my-auto'>
    <Link className='no-underline pl-2' to="/signup"><button className='p-2 border border-yellow-500 bg-yellow-500 rounded-lg hover:bg-yellow-300 text-black'>Đăng kí</button></Link>
     <Link className='no-underline pl-2' to="/signin"><button className='p-2 border border-yellow-500 bg-yellow-500 rounded-lg hover:bg-yellow-300 text-black'>Đăng nhập</button></Link></div>
  </div>
    
   
  
  )
}

export default Search