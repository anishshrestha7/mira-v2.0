import { useState } from 'react';

function Contact() {
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessage('Thanks for reaching out. We will get back to you soon.');
  };

  return (
    <main className='con py-16 md:px-15'>
      <section className='mb-12 bg-[#f6f6f6] py-16 text-center'>
        <h1 className='text-[35px] uppercase'>Contact us</h1>
        <p className='mt-2 text-xs text-gray-500'>Home / Contact us</p>
      </section>

      <section className='mx-auto grid max-w-5xl gap-12 md:grid-cols-2'>
        <div>
          <h2 className='text-3xl text-gray-700'>Get in touch</h2>
          <p className='mt-4 max-w-md text-sm leading-7 text-gray-600'>
            Have a question about an order, our products, or delivery? Send us a message and our team will be happy to help.
          </p>

          <div className='mt-8 space-y-5 text-sm text-gray-600'>
            <div>
              <h3 className='font-semibold text-black'>Visit us</h3>
              <p className='mt-1'>123 Market Street, New York, NY 10001</p>
            </div>
            <div>
              <h3 className='font-semibold text-black'>Email us</h3>
              <p className='mt-1'>hello@mira.com</p>
            </div>
            <div>
              <h3 className='font-semibold text-black'>Call us</h3>
              <p className='mt-1'>+1 (555) 123-4567</p>
            </div>
          </div>
        </div>

        <form className='space-y-5' onSubmit={handleSubmit}>
          <div>
            <label className='mb-2 block text-sm font-medium' htmlFor='name'>Name</label>
            <input id='name' name='name' type='text' required className='w-full rounded border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-black' placeholder='Your name' />
          </div>

          <div>
            <label className='mb-2 block text-sm font-medium' htmlFor='contact-email'>Email address</label>
            <input id='contact-email' name='email' type='email' required className='w-full rounded border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-black' placeholder='you@example.com' />
          </div>

          <div>
            <label className='mb-2 block text-sm font-medium' htmlFor='message'>Message</label>
            <textarea id='message' name='message' rows='5' required className='w-full resize-y rounded border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-black' placeholder='How can we help?' />
          </div>

          <button type='submit' className='rounded bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-800'>
            Send message
          </button>

          {message && <p className='text-sm text-green-700' role='status'>{message}</p>}
        </form>
      </section>
    </main>
  );
}

export default Contact;