import Image from 'next/image'

const Hero = () => {
  return (
    <section className='hero'>
      <div className='hero__image'>
        <Image
          src='/images/site/rudovik3.jpg'
          alt='An image showing Rudovik'
          width={300}
          height={300}
          objectFit={'cover'}
        />
      </div>
      <h1 className='hero__title'>Hi, I'm Rudovik</h1>
      <p className='hero__text'>
        I blog about web development - especially React frontend framework.{' '}
      </p>
    </section>
  )
}

export default Hero
