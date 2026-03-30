
export const VideoTitle = ({ title, overview }) => {
  return (
    <div className='h-full bg-linear-to-r from-black to-transparent'>
      <div className='absolute px-24 pt-36 top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 text-white w-1/2 flex flex-col justify-center z-100'>
        <h2 className='text-4xl font-bold mb-2'>{title}</h2>
        <p className='mb-2'>{overview}</p>
        <div className='flex gap-4'>
            <button className='bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200 cursor-pointer'>Play</button>
            <button className='bg-gray-600 text-white px-4 py-2 rounded-md bg-opacity-70 hover:bg-gray-600 cursor-pointer'>More Info</button>
        </div>
        </div>
    </div>
  )
}
