export default function VideoPlayer ({ text }) {
  return (
    <div className='mx-2 md:mx-14 lg:mx-32 aspect-video rounded-3xl overflow-hidden flex max-w-full '>
      <iframe className='aspect-video' width='100%' height='100%' src='https://www.youtube.com/embed/PXO5Uig6qg8' title={text.tittle} allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen />
    </div>
  )
}
