import React from 'react'
import { Link } from 'react-router-dom'
import {ProductType} from "../../../types/Product"


type ProductListProps = {
  products: ProductType[];
  onRemove: (id: number) => void
  
}

const ProductList = (props: ProductListProps) => {
  return (
    <div>
      <table>
        <tbody>
          {props.products.map((item, index) => {
            return <tr>
              <td>{index +1}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.quantity}</td> 
              <td>{item.description}</td>
              <td>{item.descriptionDetail}</td>
              <td>
                <Link to={`/admin/product/${item._id}/edit`}>Edit</Link>
                <button onClick={() => props.onRemove(item._id)}>Remove</button>
              </td>

            </tr>
          })}
        </tbody>
      </table>
    </div>
  )
}

export default ProductList