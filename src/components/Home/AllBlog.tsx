import React from 'react'
import SectionTitle from '../SectionTitle'
import Post from '../Post'
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import PageNumberBox from '../PageNumberBox';
import { nextPage, prevPage } from '../../features/posts/postsSlice';

interface Props {
  postsImages: string[]
}

const AllBlog = ({ postsImages }: Props): React.JSX.Element => {
  const page = useAppSelector(state => state.posts)
  const dispatch = useAppDispatch()

  return (
    <React.Fragment>
      <SectionTitle style='lg:mt-8 sm:mt-6 mt-8 mb-[32px]' title='All blog posts' />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-start gap-[32px]">
        {
          page.visiblePosts.map(post =>
            <Post
              key={post.id}
              id={post.id}
              title={post.title}
              date={post.date}
              mainImage={postsImages[post.id - 4 - 1]}
              categories={post.categories}
              introText={post.introText}
            />
          )
        }
      </div>

      <div className="border-t border-solid border-[#EAECF057] pt-2 mt-[32px] sm:flex sm:items-center sm:justify-between">
        <button
          onClick={() => dispatch(prevPage())}
          className='text-[#667085] text-[14px] flex items-center mx-auto font-medium cursor-pointer'>
          <IoIosArrowRoundBack size={24} />
          Previous
        </button>

        <p className='flex items-center justify-center flex-1'>
          {Array.from({ length: page.pages }, (_, index) => index + 1).map((pageNumber) => (
            <PageNumberBox number={pageNumber} currentPage={page.page} key={pageNumber} />
          ))}
        </p>

        <button
          onClick={() => dispatch(nextPage())}
          className='text-[#667085] text-[14px] flex items-center mx-auto font-medium text-center cursor-pointer'>
          Next
          <IoIosArrowRoundForward size={24} />
        </button>
      </div>
    </React.Fragment>
  )
}

export default AllBlog
