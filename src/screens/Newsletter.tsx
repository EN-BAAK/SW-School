import React from 'react'
import Subscribe from '../components/Subscribe'
import RecentBlog from '../components/RecentBlog'
import { useAppSelector } from '../app/hooks'

const Newsletter = (): React.JSX.Element => {
  const data = useAppSelector(state => state.posts)

  return (
    <div className='px-[32px] py-[30px]'>
      <Subscribe />
      <RecentBlog
        postImages={data.mainImages}
        posts={data.posts}
      />
    </div>
  )
}

export default Newsletter
