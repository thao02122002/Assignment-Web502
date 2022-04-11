import React, { useEffect } from 'react'
import {useForm, SubmitHandler} from "react-hook-form"
import {useNavigate, useParams} from "react-router-dom"
import { Read, ReadCate } from '../../../../api/category'
import { CategoryType } from '../../../../types/Category'


type FormInputCate = {
  name: string
}

type CategoryEditProps = {
  onUpdateCate: (category: CategoryType) => void

}

const CategoryEdit = (props: CategoryEditProps) => {
  const {register,handleSubmit, formState: {errors}, reset} =useForm<FormInputCate>()  
  const {id} = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    const getCategory = async (id: any) => {
      const { data} = await ReadCate(id)
    reset(data)
    }
    getCategory(id)
  }, [])
  const onSubmit: SubmitHandler<FormInputCate> = data => {
    props.onUpdateCate(data)
    console.log(data)
    navigate("/admin/category")
  }

  return (
    // <form onSubmit={handleSubmit(onSubmit)}>
    //   <input type='text' {...register('name', {required: true})}  />
    //   <input type='number' {...register('price')}  />
    //   <input type='number' {...register('quantity')}  />
    //   <input type='text' {...register('description')}  />
    //   <input type='text' {...register('descriptionDetail')}  />
    //   <button>Cập nhật</button>

    // </form>

    <div>
      <h1 className="text-center hover:text-pink-400">CATEGORYEDIT</h1>
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
                      <input id="desc-post" {...register('name', {required: true})} name="about" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" defaultValue={""} />
                    </div>
                  </div>
                

                  <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-pink-400 hover:bg-pink-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2">
                      Update
                    </button>
                  </div>
                </div>
              </div></form>
          </div>
        </div>
      </div></div>

  )
}

export default CategoryEdit