import React from 'react'
import { Link } from 'react-router-dom'
import {useForm, SubmitHandler} from "react-hook-form"
import {useNavigate} from "react-router-dom"
import { search } from '../api/product'


type Inputs = {
  name: string
}


const Search = () => {
  const {register, handleSubmit, formState: {errors}} = useForm<Inputs>()
  const navigate = useNavigate()
  const onSubmit: SubmitHandler<Inputs> = data => {
    search(data)
    navigate("/product")
  }
  return (
    <div className="d-flex">
      <form action='' onSubmit={handleSubmit(onSubmit)} className="d-flex">
    <input {...register('name')} className="form-control me-2 rounded-lg" type="search" placeholder="Search" aria-label="Search" />
    <button className="p-2 border border-yellow-500 bg-yellow-500 rounded-lg hover:bg-yellow-300" type="submit">Search</button>
  </form>
  <div className='my-auto'>
    <Link className='no-underline pl-2' to="/signup"><button className='p-2 border border-yellow-500 bg-yellow-500 rounded-lg hover:bg-yellow-300 text-black'>Đăng kí</button></Link>
     <Link className='no-underline pl-2' to="/signin"><button className='p-2 border border-yellow-500 bg-yellow-500 rounded-lg hover:bg-yellow-300 text-black'>Đăng nhập</button></Link></div>
  </div>
    
   
  
  )
}

export default Search