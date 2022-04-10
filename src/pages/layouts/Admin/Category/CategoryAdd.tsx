import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { useState, useEffect } from 'react'
import { CategoryType } from '../../../../types/Category'
import { List } from '../../../../api/category'

type Inputs = {
  name: string,
  price: number,
  quantity: number,
  description: string,
  descriptionDetail: string,
  category: object
}
type CategoryAddProps = {
  onAddCate: (product: Inputs) => void
}

const CategoryAdd = (props: CategoryAddProps) => {
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>()
  const navigate = useNavigate()
  const onSubmit: SubmitHandler<Inputs> = data => {
    props.onAddCate(data)
    console.log(data);

    navigate("/admin/category")
  }
  return (

    //     <form onSubmit={handleSubmit(onSubmit)}>
    //       <div className=' hover:border-pink-400'><input className='border border-black py-1 px-2' type='text' {...register('name')} placeholder='Tên sản phẩm' /><br /></div>

    //   <input type='number' {...register('price')} placeholder='Giá sản phẩm' /><br />
    //   <input type='number' {...register('quantity')} placeholder='Số lượng sản phẩm' /><br />
    //   <input type='text' {...register('description')} placeholder='Mô tả sản phẩm' /><br />
    //   <input type='text' {...register('descriptionDetail')} placeholder='Mô tả chi tiết sản phẩm' /><br />
    //   <button className='border px-4 py-2 border-pink-400  text-pink-400 hover:bg-pink-400 hover:text-white rounded-full'>Thêm</button>

    // </form>



    <div>
      <h1 className="text-center hover:text-pink-400">PRODUCTADD</h1>
      <div>
        <div className="md:grid md:grid-cols-3 md:gap-6 text-left ">
          <div className="mt-5 md:mt-0 md:col-span-3">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="shadow sm:rounded-md sm:overflow-hidden">
                <div className="px-4 py-5 bg-white space-y-6 sm:p-6">


                  <div>
                    <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                      NAME
                    </label>
                    <div className="mt-1">
                      <input type="text" {...register('name')} className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" />
                    </div>
                  </div>
                 
                 

                  <div className="px-4 py-3 text-right sm:px-6">
                    <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-pink-400 hover:bg-pink-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 ">
                      Add
                    </button>
                  </div>
                </div>
              </div></form>
          </div>
        </div>
      </div></div>





  )
}

export default CategoryAdd