import React from 'react'
import BreadCrumb from '../components/Common/BreadCrumb'
import ProductFilterSidenav from '../components/ProductFilterSidenav'
import AllProductCards from '../components/AllProductCards'

const AllProducts = () => {
  return (
    <>
    <section className='pt-[80px]'>
        <BreadCrumb pagePathName={'/allProduct'}  pageName={'All Products'} />
        <div className='flex  gap-[50px]'>
            <ProductFilterSidenav />
            <AllProductCards />
        </div>
    </section>
    
    </>
  )
}

export default AllProducts