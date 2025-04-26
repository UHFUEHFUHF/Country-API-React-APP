import React from 'react'

 const Search = ({Search}) => {
  return (
   <>
   <div className='search'>
    <input type="text" placeholder='search by country name' className='search-input' onChange={(e)=>Search(e.target.value)}/>
   </div>
   </>
  )
}
export default Search
