import React from 'react'

type Props = {}

const Dashboard = (props: Props) => {
  return (
    <div>
      <a href="/admin/category">Danh mục</a>
      <a href="/admin/product">Sản phẩm</a>
      <a href="/admin/new">Bài viết</a>
      <a href="/admin/user">Tài khoản</a>


    </div>
  )
}

export default Dashboard