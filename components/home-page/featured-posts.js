import PostsGrid from '../posts/posts-grid'

const FeaturedPosts = ({ posts }) => {
  return (
    <section className='featured-posts'>
      <h2 className='featured-posts__title'>Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  )
}

export default FeaturedPosts
