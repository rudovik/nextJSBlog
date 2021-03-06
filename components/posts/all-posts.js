import PostsGrid from './posts-grid'

const AllPosts = ({ posts }) => {
  return (
    <section className='all-posts'>
      <h1 className='all-posts__title'>All Posts</h1>
      <PostsGrid posts={posts} />
    </section>
  )
}

export default AllPosts
