import React from 'react'


 const Drop = ({DropChange}) => {

  return (
   <>
   <select className='filter' onChange={(e) => DropChange(e.target.value)}>
   <option value="">Filter by region</option>
   <option value="Africa">Africa</option>
   <option value="Asia">Asia</option>
   <option value="America">America</option>
   <option value="Europe">Europe</option>
   </select>
   </>
  )
}
export default Drop
