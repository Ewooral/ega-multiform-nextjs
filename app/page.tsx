import Image from 'next/image'
import Stepper from '../components/stepper/Stepper'

export default function Home() {
  return (
    // <main className="flex flex-col items-center justify-between min-h-screen p-24">
    <main>
     <section className=''>
      <h1 
      // style={{background:'#bbb', color: '#000', fontSize: '23px'}}
      className="font-normal text-[14px] text-start p-[5rem]">
        Eganow Multi-Stepper Form
      </h1>
      <hr style={{border: '1px solid #66339973'}}/>
      <Stepper  />
     </section>
     {/* <hr style={{border: '1px solid #66339973'}}/> */}
    </main>
  )
}