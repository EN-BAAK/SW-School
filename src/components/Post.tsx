import React from 'react'
import { Posts } from '../misc/types'
import Category from './Category'
import { MdOutlineArrowOutward } from "react-icons/md";

interface Props {
  containerStyle?: string
  imgStyle?: string
}

const Post = ({
  title,
  date,
  introText,
  mainImage,
  categories,
  containerStyle,
  imgStyle
}: Posts & Props): React.JSX.Element => {

  return (
    <div className={containerStyle}>
      <img src={mainImage} alt={title} className={`mb-5 w-full h-[228px] object-fill ${imgStyle}`} />

      <div>
        <p className='font-semibold text-[14px] text-[#6941c6] mb-5'>{date}</p>

        <div className='text-[18px] font-semibold flex items-center justify-between'>
          <h1 >{title}</h1>
          <MdOutlineArrowOutward size={25} className='cursor-pointer' />
        </div>
        <p className='text-[16px] text-[#667085] my-5'>{introText}</p>

        <div className="flex items-center gap-[8px]">
          {categories.map((cate, index) => <Category key={index} category={cate} />)}
        </div>
      </div>
    </div>
  )
}

export default Post
