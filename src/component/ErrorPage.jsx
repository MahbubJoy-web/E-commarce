import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <section className="py-[50px]">
    <div className="py-8 px-4 mx-auto">
        <div className="mx-auto text-center">
            <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">404</h1>
            <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">Something's missing.</p>
            <p className="mb-14 text-xl font-medium text-gray-500 dark:text-gray-400">Sorry, we can't find that page. You'll find lots to explore on the home page. </p>
            <Link to={'/'} className='px-[72px] py-[25px] bg-[#B88E2F] sm:text-[16px] font-poppins font-bold text-[#fff] mt-[25px] sm:mt-[45px]'>Back to Homepage</Link>
        </div>   
    </div>
</section>
  )
}

export default ErrorPage
