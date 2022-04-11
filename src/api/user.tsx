import { UserType } from "../types/user";
import instance from "./instance";

export const signup = (user: UserType) => {
  const url = `/signup`;
  return instance.post(url,user);
}
export const signin = (user: UserType) => {
  const url = `/signin`;
  return instance.post(url,user);
}
export const ListUser = () => {
  const url = `/users`
  return instance.get(url)
}
export const UpdateUser = (user: UserType) => {
  const url = `/user/${user._id}`
  return instance.patch(url,user)
}
export const ReadUser = (id:any) =>{
  const url = `/user/${id}`
  return instance.get(url)
}