import { ProductType } from "../types/Product";
import instance from './instance';
import { isAuthenticate } from "../utils/localStorage";
const user = isAuthenticate();

export const create = (product: ProductType) => {
  const url = `/products/${user?.user._id}`;
  return instance.post(url, product, {
    headers: {
      "Authorization": `Bearer ${user?.token}`
    }
  });
}

export const list = () => {
  const url = '/products';
  return instance.get(url);
}

export const read = (id: string) => {
  const url = `/products/${id}`;
  return instance.get(url);
}

export const remove = (_id: number) => {
  const url = `/products/${user?.user._id}/${_id}`;
  return instance.delete(url, {
    headers: {
      "Authorization": `Bearer ${user?.token}`
    }
  });
}

export const update = (product: any) => {
  const url = `/products/${user?.user._id}/${product._id}`;
  return instance.put(url, product,{
    headers: {
      "Authorization": `Bearer ${user?.token}`
    }
  });
}

export const search = (product:ProductType) => {
    const url = `/search`;
    return instance.post(url,product)
}