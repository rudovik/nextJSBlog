import Image from 'next/image'

const PostHeader = ({ title, image }) => {
  return (
    <header className='post-header'>
      <h1 className='post-header__title'>{title}</h1>
      <Image
        src={image}
        alt={title}
        width={200}
        height={150}
        objectFit={'cover'}
        className='post-header__image'
      />
    </header>
  )
}

export default PostHeader
