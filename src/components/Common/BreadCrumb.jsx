import React from 'react'
import { Link } from 'react-router-dom'

const BreadCrumb = ({pagePathName , pageName}) => {
  return (
    <section  id='bradcrumb' className='py-3 bg-gray-100'>
        <div className="container">
            <div className='flex gap-5'>
                <Link  to={'/'} className='text-[16px] font-normal font-poppins text-primary' >Home</Link>
                <p className='text-[16px] font-normal font-poppins text-primary' >/</p>
                <Link  to={pagePathName} className='text-[16px] font-normal font-poppins text-primary' >{pageName}</Link>
            </div>
        </div>

    </section>
  )
}

export default BreadCrumb