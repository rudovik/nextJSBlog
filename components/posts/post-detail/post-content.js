import PostHeader from './post-header'

const DUMMY_POST = {
  slug: 'getting-started-with-nextjs',
  title: 'Getting Started with NextJS',
  image: 'getting-started-nextjs.png',
  excerpt:
    'NextJs is a React frameworkk for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.',
  date: '2022-02-10',
  content: '# This is a first post',
}

const PostContent = () => {
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`

  return (
    <article className='post-content'>
      <PostHeader title={DUMMY_POST.title} image={imagePath} />
      {DUMMY_POST.content}
    </article>
  )
}

export default PostContent
