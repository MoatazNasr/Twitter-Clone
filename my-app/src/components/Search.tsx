import React from 'react'
import {MagnifyingGlassIcon}from "@heroicons/react/24/outline";
function Search() {
  return (
    <div className="flex bg-[#2F3336] w-full outline-none placeholder:text-[#5e656a] w-[300px] rounded-[2rem] py-[0.6rem] px-3"
    >
    <MagnifyingGlassIcon width={25} className="text-[#565c63]"/>
    <input
    className='bg-transparent outline-none placeholder:text-[#565c63] ml-2'
    placeholder="Search Twitter"
  />
    </div>

  )
}

export default Search