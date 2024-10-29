import React from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { setPage } from '../features/posts/postsSlice'

interface Props {
  number: number,
  currentPage: number
}

const PageNumberBox = ({ number, currentPage }: Props): React.ReactNode => {
  const dispatch = useAppDispatch()
  const theme = useAppSelector(state => state.theme.theme)

  return (
    <button
      onClick={() => dispatch(setPage(number))}
      className={`
    rounded-[8px] w-[40px] h-[40px] text-[14px] my-4
    flex items-center justify-center font-medium
      ${theme === "light" ? number === currentPage ? "bg-[#F9F5FF] text-[#7F56D9]" : "text-[#667085]" : number === currentPage ? "bg-[#F9F5FF] text-[#112211]" : "text-white"}
    `}>
      {number}
    </button>
  )
}

export default PageNumberBox
