import PostHeader from './post-header'
import ReactMarkdown from 'react-markdown'
import Image from 'next/image'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'

const DUMMY_POST = {
  slug: 'getting-started-with-nextjs',
  title: 'Getting Started with NextJS',
  image: 'getting-started-nextjs.png',
  excerpt:
    'NextJs is a React frameworkk for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.',
  date: '2022-02-10',
  content: '# This is a first post',
}

const PostContent = ({ post }) => {
  const imagePath = `/images/posts/${post.slug}/${post.image}`

  const customRenderers = {
    // image(image) {
    //   return (
    //     <Image
    //       src={`/images/posts/${post.slug}/${image.src}`}
    //       alt={image.alt}
    //       width={600}
    //       height={300}
    //     />
    //   )
    // },
    paragraph(paragraph) {
      const { node } = paragraph

      if (node.children[0].type === 'image') {
        const image = node.children[0]

        return (
          <div className='post-content__image'>
            <Image
              src={`/images/posts/${post.slug}/${image.url}`}
              alt={image.alt}
              width={600}
              height={300}
            />
          </div>
        )
      }
      return <p>{paragraph.children}</p>
    },

    code(code) {
      const { language, value } = code
      return (
        <SyntaxHighlighter
          style={atomDark}
          language={language}
          children={value}
        />
      )
    },
  }

  return (
    <article className='post-content'>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown renderers={customRenderers}>{post.content}</ReactMarkdown>
    </article>
  )
}

export default PostContent
