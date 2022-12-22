'use client'
export default function VideoPlayer () {
  return (
    <div className='w-screen px-24'>
      <div className='flex max-full  h-[720px] border-2 border-tangle-rich-black-FOGBRA-29 '>
        <iframe width='100%' height='100%' src='https://www.youtube.com/embed/PXO5Uig6qg8' title='What Matters the Most' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen />
      </div>
    </div>
  )
}
