import {styles} from '../styles'
import {services} from '../Constants/index'
const Services = () => {
  return (
    <section className={`${styles.Layout} mt-20`}>
      <div className='flex justify-center gap-16 flex-wrap'>
        {services.map((prev)=>(
          <div key={prev.id} className='flex flex-col  shadow-2xl p-8 justify-center rounded-2xl'>
            <div className='flex gap-2 items-center mb-2'>
            <img src={prev.name} alt='collection' className='bg-cyan p-2 rounded-full w-10 h-10' />
            <h1 className='font-mono text-3xl'>{prev.title}</h1>
            </div>
            <p className='max-w-[260px] text-gray-700 text-xl'>{prev.about}</p>
            
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services