import Hero from '@/components/hero'
import Timeline from '@/components/timeline'

export default function Home() {
  return (
    <div className=''>
      <div className=''>
        <Hero></Hero>
      </div>
      <div className='flex place-content-start text-4xl ms-32 mb-4 font-medium underline underline-offset-4'>
        My Work Experience
      </div>
      <div className='flex place-content-center p-5 mb-40 mx-auto'>
        <Timeline></Timeline>
      </div>
    </div>
  )
}
