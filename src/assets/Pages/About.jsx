import React from 'react'
import Abanner from './Abanner.webp'
import { team } from '../Data'
import TeamCard from '../../Component/TeamCard'

function About() {
  return (
    <>
    <section className='mb-16'>
      <div className="con  bg-[#f6f6f6] py-20 ">
      <h1 className='text-[35px] uppercase grid text-center'>about us</h1>
      <p className='text-[12px]  grid text-center'>Home / About Us</p>
    </div>
    </section>

    <section className=" w-[860px] m-auto">
      <img className='mb-14' src={Abanner} alt="" />
      <h1 className='text-[35px] uppercase grid text-center text-gray-600 mb-4'>welcome to demo</h1>
      <p className='text-xs font-normal text-gray-600 w-155 grid text-center m-auto mb-12'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. U enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dol in reprehenderit in</p>
    </section>
    <section className='w-200 m-auto'>
      <div className='grid grid-cols-3 mb-18'>
      <div>
        <h2 className='text-center text-[60px]'>20</h2>
      <p className='text-center text-gray-400 font-light'>Years in Business</p>
      </div>
      <div>
        <h2 className='text-center text-[60px]'>200</h2>
      <p className='text-center text-gray-400 font-light'>Clients and Partners</p>
      </div>
      <div>
        <h2 className='text-center text-[60px]'>15</h2>
      <p className='text-center text-gray-400 font-light'>Billion Sales</p>
      </div>
     
      </div>

      <h2 className='text-center text-[42px] text-gray-600 mb-8'>What <span className='border-b border-gray-400 pb-2'>people</span> say?</h2>

    <section className=' m-auto'>
      <p className='text-sm leading-[1.625] text-gray-600 w-165 grid text-center m-auto pb-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. U enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dol in reprehenderit in .</p>
      <h2 className='text-[16px]  grid text-center'>Tayeb Rayed</h2>
      <h3 className='text-[16px]  grid text-center text-gray-600 mb-16'>CEO at company</h3>
    </section>
    </section>
    <section>
      <h2 className='text-center mx-auto text-[32px] text-gray-600 '>Our Team Member</h2>
      <div className="relative after:content-[''] after:absolute after:bottom-0 after:left-160 after:w-[90px] after:h-[1px] after:bg-gray-400">
 </div>



  <section className=" w-[860px] mx-auto py-20">
      <div className="grid grid-cols-1 md:grid-cols-3">
        {team.map((member) => (
          <TeamCard key={member.id} member={member} />
        ))}
      </div>
    </section>
    </section>
    </>
  )
}

export default About
