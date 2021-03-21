import { Fragment } from 'react'
import Hero from '../components/home-page/hero'
import FeaturedPosts from '../components/home-page/featured-posts'
import { getFeaturedPosts } from '../lib/posts-util'
import Head from 'next/head'

const HomePage = ({ posts }) => {
  return (
    <Fragment>
      <Head>
        <title>Rudovik's Blog</title>
        <meta
          name='description'
          content='I post about programming and development'
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={posts} />
    </Fragment>
  )
}

export const getStaticProps = () => {
  const featuredPosts = getFeaturedPosts()

  return {
    props: {
      posts: featuredPosts,
    },
  }
}

export default HomePage
