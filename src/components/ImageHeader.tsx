import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/vite.svg'

const ImageHeader = () => {
  return (
    <div className='flex items-center mb-8'>
      <img className='w-28 h-28 object-contain' src={reactLogo} alt="React" />
      <span className='mx-5'>+</span>
      <img className='w-28 h-28 object-contain' src={viteLogo} alt="Vite" />
    </div>
  )
}

export default ImageHeader
