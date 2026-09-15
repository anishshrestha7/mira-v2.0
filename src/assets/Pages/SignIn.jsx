import { useState } from 'react';

function SignIn() {
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessage('Your sign-in details have been submitted.');
  };

  return (
    <main className='con flex justify-center py-16 md:px-15'>
      <section className='w-full max-w-md rounded-lg border border-gray-200 bg-white p-8 shadow-sm'>
        <h1 className='text-2xl font-semibold'>Sign in to continue</h1>
        <p className='mt-2 text-sm text-gray-500'>Sign in before continuing to checkout.</p>

        <form className='mt-6 space-y-5' onSubmit={handleSubmit}>
          <div>
            <label className='mb-2 block text-sm font-medium' htmlFor='email'>Email address</label>
            <input id='email' name='email' type='email' autoComplete='email' required className='w-full rounded border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-black' placeholder='you@example.com' />
          </div>

          <div>
            <label className='mb-2 block text-sm font-medium' htmlFor='password'>Password</label>
            <input id='password' name='password' type='password' autoComplete='current-password' required className='w-full rounded border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-black' placeholder='Enter your password' />
          </div>

          <button type='submit' className='w-full rounded bg-black px-4 py-3 text-sm font-semibold text-white transition hover:bg-gray-800'>
            Sign In
          </button>

          {message && <p className='text-center text-sm text-green-700' role='status'>{message}</p>}
        </form>
      </section>
    </main>
  );
}

export default SignIn;
