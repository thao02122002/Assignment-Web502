import React from 'react'
import {useForm, SubmitHandler} from "react-hook-form"
import {useNavigate} from "react-router-dom"

type Inputs = {
  name: string,
  price: number,
  quantity: number,
  description: string,
  descriptionDetail: string
}
type ProductAddProps = {
  onAdd: (product: Inputs) => void
}

const ProductAdd = (props: ProductAddProps) => {
  const {register, handleSubmit, formState: {errors}} = useForm<Inputs>()
  const navigate = useNavigate()
  const onSubmit: SubmitHandler<Inputs> = data => {
    props.onAdd(data)
    navigate("/admin/product")
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type='text' {...register('name')} placeholder='Tên sản phẩm' />
      <input type='number' {...register('price')} placeholder='Giá sản phẩm' />
      <input type='number' {...register('quantity')} placeholder='Số lượng sản phẩm' />
      <input type='text' {...register('description')} placeholder='Mô tả sản phẩm' />
      <input type='text' {...register('descriptionDetail')} placeholder='Mô tả chi tiết sản phẩm' />
      <button>Thêm</button>

    </form>
  )
}

export default ProductAdd