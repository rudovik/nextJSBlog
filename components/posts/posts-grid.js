import PostCard from './post-card'

const PostsGrid = ({ posts }) => {
  return (
    <ul className='posts-grid'>
      {posts.map((post) => (
        <PostCard key={post.slug} post={post} />
      ))}
    </ul>
  )
}

export default PostsGrid
