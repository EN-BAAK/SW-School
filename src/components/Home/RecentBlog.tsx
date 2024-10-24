import React from 'react'
import SectionTitle from '../SectionTitle'
import { Posts } from '../../misc/types'
import Post from '../Post'

interface Props {
  posts: Posts[]
}

const containerStyle = (id: number): string => {
  if (id === 2 || id == 3)
    return "sm:flex sm:items-center sm:gap-[24px]"
  else return ""
}

const RecentBlog = ({ posts }: Props): React.JSX.Element => {
  return (
    <div>
      <SectionTitle title='Recent blog posts' />

      <div className="grid grid-cols-1 gap-[32px] mt-[32px]">
        {posts.map(post =>
          <Post
            key={post.id}
            id={post.id}
            title={post.title}
            date={post.date}
            mainImage={post.mainImage}
            categories={post.categories}
            introText={post.introText}
            containerStyle={containerStyle(post.id)}
          />)}
      </div>
    </div>
  )
}

export default RecentBlog
