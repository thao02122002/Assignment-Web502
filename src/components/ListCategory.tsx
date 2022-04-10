import React from 'react'
import { Link } from 'react-router-dom'
import {CategoryType} from "../types/Category"
import { useEffect, useState } from 'react'
import {List} from '../api/category'

type CategoryListProps = {
  categories : CategoryType[],
}

const ListCategory = ({ categories}: CategoryListProps) => {
  const [category, setCategories] = useState<CategoryType[]>([])
  useEffect(() => {
    const getCategory = async () => {
      const {data} = await List();
      setCategories(data)
    }
    getCategory();
 },[])
  return  (
    <div className='text-left'>
    <h2>DANH MỤC</h2>
    <ul className='inline  '>
      {categories.map(category => {
        return <li><Link className='no-underline text-black' to="">{category.name}</Link> </li>
      })}
      
      {/* <li><Link className='no-underline text-black' to="">dnknhugf</Link> </li>
      <li><Link className='no-underline text-black' to="">dnknhugf</Link> </li>
      <li><Link className='no-underline text-black' to="">dnknhugf</Link> </li> */}
    </ul>
   
    
  </div>
  )
  
}

export default ListCategory