"use client"
import { useRouter, useSearchParams } from 'next/navigation'
import React from 'react'
import ReactPaginate from 'react-paginate'

function Paginate() {
  
      const router = useRouter()
      const searchParams = useSearchParams()

  const handlePageClick = (e: { selected: number }) => {
    const page = e.selected + 1

    const currentSearchParams =  new URLSearchParams(searchParams.toString())
    currentSearchParams.set("page" , page.toString())
    currentSearchParams.set("limit" , "5")
    router.push(`/store?${currentSearchParams.toString()}`)
  }

  return (
    <>
      <div className="flex justify-center my-6">
        <ReactPaginate
          breakLabel="..."
          nextLabel="بعدی >"
          previousLabel="< قبلی"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={6}
          renderOnZeroPageCount={null}
          containerClassName="flex items-center space-x-2 rtl:space-x-reverse"
          pageClassName="px-3 py-1 border border-gray-300 rounded hover:bg-gray-100 cursor-pointer"
          activeClassName="bg-blue-500 text-white border-blue-500"
          previousClassName="px-3 py-1 border border-gray-300 rounded hover:bg-gray-100 cursor-pointer"
          nextClassName="px-3 py-1 border border-gray-300 rounded hover:bg-gray-100 cursor-pointer"
          breakClassName="px-3 py-1"
        />
      </div>
    </>
  )
}

export default Paginate
