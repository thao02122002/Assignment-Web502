import { CategoryType } from "../types/Category";
import instance from "./instance";

import { isAuthenticate } from "../utils/localStorage";
const user = isAuthenticate()

//thêm sp
export const Add = (category: CategoryType) => {
  const url = `/category/${user?.user._id}`;
  return instance.post(url, category, {
    headers : {
      "Authorization": `Bearer ${user?.token}`
    }
  })
}

// danh sách
export const List = () => {
  const url = `/category`
  return instance.get(url)
}

// lấy ra 1 sp
export const Read = (_id: string) => {
  const url = `/category/${_id}`
  return instance.get(url)
}
export const ReadCate = (_id: string) => {
  const url = `/categories/${_id}`
  return instance.get(url)
}

// update
export const Update = (category: any) => {
  const url = `/category/${user?.user._id}/${category._id}`
  return instance.put(url, category, {
    headers : {
      "Authorization": `Bearer ${user?.token}`
    }
  })
}
export const Remove = (_id: number) => {
  const url = `/category/${user?.user._id}/${_id}`;
  return instance.delete(url, {
    headers: {
      "Authorization": `Bearer ${user?.token}`
    }
  });
}
