import Link from 'next/link'
import Image from 'next/image'

const PostCard = ({ post }) => {
  const { title, image, excerpt, date, slug } = post

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  const imagePath = `/images/posts/${slug}/${image}`

  console.log(title)

  return (
    <li className='postCard'>
      <Link href={`/posts/${slug}`}>
        <a className='postCard__link'>
          <div className='postCard__image'>
            <Image
              src={imagePath}
              alt={title}
              width={300}
              height={200}
              layout='responsive'
              objectFit={'cover'}
            />
          </div>
          <div className='postCard__content'>
            <h3 className='postCard__title'>{title}</h3>
            <time className='postCard__time'>{formattedDate}</time>
            <p className='postCard__excerpt'>{excerpt}</p>
          </div>
        </a>
      </Link>
    </li>
  )
}

export default PostCard
