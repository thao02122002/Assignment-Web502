import React, { useEffect } from 'react'
import {useForm, SubmitHandler} from "react-hook-form"
import {useNavigate, useParams} from "react-router-dom"
import { read } from '../../../../api/product'
import { ProductType } from '../../../../types/Product'


type FormInput = {
  name: string,
  price: number,
  quantity: number,
  description: string,
  descriptionDetail: string
}

type ProductEditProps = {
  onUpdate: (product: ProductType) => void

}

const ProductEdit = (props: ProductEditProps) => {
  const {register,handleSubmit, formState: {errors}, reset} =useForm<FormInput>()  
  const {id} = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    const getProduct = async () => {
      const { data} = await read(id)
      reset(data)
    }
    getProduct()
  }, [])
  const onSubmit: SubmitHandler<FormInput> = data => {
    props.onUpdate(data)
    navigate("/admin/product")
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
      <h1 className="text-center hover:text-pink-400">PRODUCTEDIT</h1>
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
                  <div>
                    <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                      PRICE
                    </label>
                    <div className="mt-1">
                      <input id="desc-post"  {...register('price')} className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" defaultValue={""} />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                      QUANTITY
                    </label>
                    <div className="mt-1">
                      <input id="desc-post"  {...register('quantity')} className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" defaultValue={""} />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                      DESCRIPTION
                    </label>
                    <div className="mt-1">
                      <input id="desc-post"  {...register('description')} className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" defaultValue={""} />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                      DESCRIPTIONDETAIL
                    </label>
                    <div className="mt-1">
                      <input id="desc-post" {...register('descriptionDetail')} className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" defaultValue={""} />
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

export default ProductEdit