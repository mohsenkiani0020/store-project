"use client"
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useState } from 'react'

function Search() {

    const [search, setSearch] = useState("")
    const router = useRouter()
    const searchParams = useSearchParams()

    const handleSearch = () => {
        const currentSearchParams =  new URLSearchParams(searchParams.toString())
        currentSearchParams.set("title" , search)
        router.push(`/store?${currentSearchParams.toString()}`)
        // router.push(`/store?${searchParams.toString()}title=${search}`)
    }

  return (
    <div className='flex flex-col gap-4'>
        <input className='border p-2' value={search} onChange={(e)=>{setSearch(e.target.value)}} type="text" />
        <button className='bg-green-600 py-2 px-7 text-white' onClick={handleSearch}>جستوجو</button>
    </div>
  )
}

export default Search