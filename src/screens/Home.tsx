import React from 'react'
import RecentBlog from '../components/Home/RecentBlog'
import { useAppSelector } from '../app/hooks'
import AllBlog from '../components/Home/AllBlog'

const Home = (): React.JSX.Element => {
  const data = useAppSelector(state => state.posts.posts)
  const postImages = useAppSelector(state => state.posts.mainImages)

  return (
    <div>
      <h1 className="xl:text-[243px] md:text-[160px]  sm:text-[120px] text-[72px] font-bold uppercase border-y-2 border-slate border-solid text-center my-8">The Blog</h1>

      <div className='px-[32px] py-[30px]'>
        <RecentBlog posts={data.slice(0, 4)} postImages={postImages.slice(0, 4)} />
        <AllBlog postsImages={postImages.slice(4)} />
      </div>
    </div>
  )
}

export default Home
