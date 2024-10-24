import React from 'react'
import { Posts } from '../misc/types'
import Category from './Category'
import image from "../assets/images/mainImgs/Image1.jpg"
import { MdOutlineArrowOutward } from "react-icons/md";

interface Props {
  containerStyle: string
}

const Post = ({
  title,
  date,
  introText,
  categories,
  containerStyle = "",
}: Posts & Props): React.JSX.Element => {

  return (
    <div className={containerStyle}>
      <img src={image} alt={title} className={`mb-5 w-full lg:max-w-[592px] max-h-[200px] sm:max-h-[250px]`} />

      <div>
        <p className='font-semibold text-[14px] text-[#6941c6] mb-5'>{date}</p>

        <div className='text-[24px] font-semibold flex items-center justify-between'>
          <h1 >{title}</h1>
          <MdOutlineArrowOutward />
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
