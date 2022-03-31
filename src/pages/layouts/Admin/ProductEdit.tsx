import React, { useEffect } from 'react'
import {useForm, SubmitHandler} from "react-hook-form"
import {useNavigate, useParams} from "react-router-dom"
import { read } from '../../../api/product'
import { ProductType } from '../../../types/Product'


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
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type='text' {...register('name', {required: true})}  />
      <input type='number' {...register('price')}  />
      <input type='number' {...register('quantity')}  />
      <input type='text' {...register('description')}  />
      <input type='text' {...register('descriptionDetail')}  />
      <button>Cập nhật</button>

    </form>
  )
}

export default ProductEdit