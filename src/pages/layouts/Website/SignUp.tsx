import React from 'react'
import {useForm, SubmitHandler} from "react-hook-form"
import {useNavigate} from "react-router-dom"
import { signup } from '../../../api/user'


type FormInputs = {
  name: string,
  email: string,
  password: string
}

const SignUp = () => {
  const { register, handleSubmit, formState: {errors}} = useForm<FormInputs>();
  const navigate = useNavigate()
  const onSubmit: SubmitHandler<FormInputs> = data => {
    signup(data)
    navigate("/signin");
  }
  return (
    <div>
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img className="mx-auto h-12 w-auto" src="https://theme.hstatic.net/200000066044/1000820067/14/logo.png?v=98" alt="Workflow" />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Đăng kí tài khoản</h2>
            
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              

              <div>
                <label htmlFor="username" className="sr-only">Username</label>
                <input id="username"  type="text" {...register('name')} autoComplete="username" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Username" />
              </div>

              <div className='py-2'>
                <label htmlFor="email-address" className="sr-only">Email address</label>
                <input id="email-address"  type="email" {...register('email')} autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" />
              </div>

              <div>
                <label htmlFor="password" className="sr-only">Password</label>
                <input id="password"  type="password" {...register('password')} autoComplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900"> Remember me </label>
              </div>
              <div className="text-sm">
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500"> Forgot your password? </a>
              </div>
            </div>
            <div>
              <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-lg font-medium rounded-md text-pink-400  bg-yellow-500  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                
                  <svg className="h-5 w-5 group-hover:text-black  " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                </span>
                Đăng kí
              </button>
            </div>
          </form>
        </div>
      </div>


    </div>
  )
}

export default SignUp