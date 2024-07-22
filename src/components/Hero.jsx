import React from 'react'
import { styles } from '../styles'
import { ComputersCanvas } from './canvas'

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.padding} absolute inset-0 top-[120px] max-w-7xl mx-auto flec flex-auto items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
          <div className='w-1 sm:h-80 h-40 violet-gradient'/>

        </div><div>
        <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className={'text-[#9153eff]'}> Vaibhav</span></h1>
        <p className={`${styles.heroSubText} mt-2 text-white-100`}>I develop software for the<br className='sm:block hidden'/> web and mobile applications</p>
        </div>
        
      </div>
        <ComputersCanvas/>
      
    </section>
  )
}

export default Hero