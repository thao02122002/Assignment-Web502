import {useEffect} from 'react'
import {useForm, SubmitHandler} from 'react-hook-form'
import {useNavigate, useParams} from 'react-router-dom'
import {UserType} from '../../../../types/user'
import {ReadUser} from '../../../../api/user'

type Form = {
  role: string,
  name: string,
  email: string,
  password: string
  
}

type UserEditProps = {
  onUpdateUser : (user: UserType) => void
}

const UserEdit = (props: UserEditProps) => {
  const {register,handleSubmit, formState: {errors}, reset} =useForm<Form>()  
  const {id} = useParams()
  const navigate = useNavigate()
  useEffect(() => {
    const getUser = async () => {
      const { data} = await ReadUser(id)
      reset(data)
  }
  getUser()
},[])
const onSubmit: SubmitHandler<Form> = data => {
  props.onUpdateUser(data)
  navigate("/admin/user")
}
  return (
    <div>
      <h1 className="text-center hover:text-pink-400">PRODUCTEDIT</h1>
      <div>
        <div className="md:grid md:grid-cols-3 md:gap-6 text-left ">
          <div className="mt-5 md:mt-0 md:col-span-3">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="shadow sm:rounded-md sm:overflow-hidden">
                <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                <div>
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="country" className="block text-sm font-medium text-gray-700">ROLE</label>
                      <select {...register('role')} id="country" autoComplete="country-name" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                      
                        <option >0</option>
                        <option>1</option>
                        
                      </select>
                      {/* <input {...register('role')} /> */}
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

export default UserEdit