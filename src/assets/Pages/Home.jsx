import A  from '../A'
import banner from '/banner.webp'
import { blog } from '../Data' 
import BlogCard from '../../Component/BlogCard';
function Home() {
  return (
    <>
    <div className='text-center'>
          <h1 className='text-[100px]  pt-50'>Summer Collection 2026</h1>
          <h5 className='text-[30px] pb-16'>A Good looking, Comfortable Traditional Collection</h5>
          <button className='text-white font-medium duration-300 hover:opacity-100 uppercase text-xs bg-black py-4 px-6 mb-45 cursor-pointer hover:text-black hover:bg-[#f8f9fa] border hover:border-gray-400 ease-out transition-all rounded'>Shop The Collection</button>
        </div>
     <section className="con py-10">
         <A/>
      </section>

       <section className='con flex justify-center pb-14'>
      <button className='text-white font-medium duration-300 hover:opacity-100 uppercase text-xs bg-black py-4 px-6 mb-45 cursor-pointer hover:text-black hover:bg-[#f8f9fa] border hover:border-gray-400 ease-out transition-all rounded'>View More</button>
      </section>

      <section className='con'>
      <img className='h-[458px] mb-28 ' src={banner} alt="" />
      </section>

      <section className=' py-4 w-[500px] m-auto'>
        <h2 className=' flex justify-center text-4xl pb-4'>Latest News</h2>
        <p className=' flex justify-center text-gray-600 text-center text-medium pb-3'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>

      </section>
      <section className="con">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full gap-6">
      {blog.map((post) => (
        <BlogCard key={post.id} item={post} />
      ))}
    </div>
      </section>

     

      
    </>
  )
}

export default Home
