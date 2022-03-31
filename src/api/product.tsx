import { ProductType } from "../types/Product";
import instance from './instance';

export const create = (product: ProductType) => {
  const url = `/products`;
  return instance.post(url, product);
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
  const url = `/products/${_id}`;
  return instance.delete(url);
}

export const update = (product: any) => {
  const url = `/products/${product._id}`;
  return instance.put(url, product);
}