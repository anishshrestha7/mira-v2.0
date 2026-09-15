import React from 'react'
import logo from '../assets/logo.webp';

function Footer() {
  return (
    <>
      <footer className="con grid grid-cols-5">
        <div>
          <img className='mb-6' src={logo} alt="LOGO" />
          <p className='w-45 text-sm font-normal mb-3 text-gray-600'>Lorem ipsum dolor sit amet tempor, consectetur adipisicing.</p>
          <div className='gap-2 flex text-[#626262]'>
            <a className='hover:text-black font-semibold' href="https://www.facebook.com/" target="_blank"><i className="fa-brands fa-facebook" /></a>
            <a className='hover:text-black font-semibold' href="https://www.youtube.com/" target="_blank"><i className="fa-brands fa-youtube" /></a>
            <a className='hover:text-black font-semibold' href="https://www.google.com/" target="_blank"><i class="fa-brands fa-google"></i></a>
            <a className='hover:text-black font-semibold' href="https://linkedin.com/" target="_blank"><i class="fa-brands fa-square-linkedin"></i></a>
            <a className='hover:text-black font-semibold' href="https://www.instagram.com/" target="_blank"><i class="fa-brands fa-instagram"></i></a>
          </div>
        </div>
        <div className='om'>
          <h2 className='text-[18px] uppercase pt-4 pb-4'>categories</h2>
          <p>Clothing</p>
          <p>Shoes</p>
          <p>Watches</p>
          <p>Jewelry</p>
        </div>
        <div className='om'>
          <h2 className='text-[18px] uppercase pt-4 pb-4'>Support</h2>
          <p>Careers</p>
          <p>Sale products</p>
          <p>Terms & Condition</p>
          <p>Delivery Inforamtion</p>
        </div>
        <div className='om'>
          <h2 className='text-[18px] uppercase pt-4 pb-4'>Quick Links</h2>
          <p>Login</p>
          <p>Wishlist</p>
          <p>My Cart</p>
          <p>Checkout</p>
        </div>
        <div className='mb-20'>
          <h2 className='text-[18px] uppercase pt-4 pb-4'>newsletter</h2>
          <p className='w-70 text-gray-600 text-sm font-normal mb-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et.</p>
          <div className='flex'>
            <form action>
              <input className='w-45 border border-gray-400 placeholder:text-xs ps-4 py-3 focus:outline-none text-xs ' type="text" name placeholder="Your email address" />
            </form>
            <button className="w-30 text-sm font-normal px-2 py-2 text-white bg-[black] cursor-pointer hover:bg-gray-600 rounded-tr rounded-br"> Subscribe</button>
          </div>
        </div>
      </footer>
      <section className='flex justify-center text-sm text-gray-800 font-light py-4 con border-t border-gray-400'>
        © 2026 <a href="https://personal-potfolio-zeta-smoky.vercel.app/" target="_blank" rel="noreferrer" className='underline cursor-pointer text-gray-600 hover:text-black ps-1 text-sm'>AnishShrestha</a> . All Rights Reserved.
      </section>
    </>
  )
}

export default Footer
