import Head from 'next/head'
import PostContent from '../../components/posts/post-detail/post-content'

import { getPostData, getPostsFiles } from '../../lib/posts-util'

const PostDetailPage = ({ post: { title, excerpt }, post }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={excerpt} />
      </Head>
      <PostContent post={post} />
    </>
  )
}

export const getStaticProps = ({ params: { slug } }) => {
  const postData = getPostData(slug)

  return {
    props: {
      post: postData,
      revalidate: 600,
    },
  }
}

export const getStaticPaths = () => {
  const postFilenames = getPostsFiles()

  const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/, ''))

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false, // true, 'blocking'
  }
}

export default PostDetailPage
