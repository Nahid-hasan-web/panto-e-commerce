import React from 'react'

const CommonHead = ({commonHeadp , commonHeadh2}) => {
  return (
      <>
          
          <p className= ' text-lg font-normal font-abel text-[#E58411] tracking-[3px]'>{ commonHeadp}</p>
          <h2 className=' text-[35px] lg:text-[42px] font-poppins font-medium text-[#1E1E1E] capitalize'>{commonHeadh2}</h2>
      </>

  )
}

export default CommonHead