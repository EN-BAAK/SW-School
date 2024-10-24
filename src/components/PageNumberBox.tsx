import React from 'react'
import { useAppDispatch } from '../app/hooks'
import { setPage } from '../features/posts/postsSlice'

interface Props {
  number: number,
  currentPage: number
}

const PageNumberBox = ({ number, currentPage }: Props): React.ReactNode => {
  const dispatch = useAppDispatch()

  return (
    <button
      onClick={() => dispatch(setPage(number))}
      className={`
    rounded-[8px] w-[40px] h-[40px] text-[14px] my-4
    flex items-center justify-center font-medium text-[#667085]
    ${number === currentPage && "bg-[#F9F5FF] text-[#7F56D9]"}
    `}>
      {number}
    </button>
  )
}

export default PageNumberBox
