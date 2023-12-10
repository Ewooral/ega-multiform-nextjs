import Image from 'next/image'
import Stepper from '../components/stepper/Stepper'

export default function Home() {
  return (
    // <main className="flex flex-col items-center justify-between min-h-screen p-24">
    <main>
     <section className='p-[2rem]'>
      <h1 className="p-[5rem] text-center font-extrabold text-4xl">EGANOW MULTI STEPPER FORM</h1>
      <hr style={{border: '1px solid #66339973'}}/>
      <Stepper />
     </section>
     {/* <hr style={{border: '1px solid #66339973'}}/> */}
    </main>
  )
}