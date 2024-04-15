'use client';

import { signIn, signOut, useSession } from 'next-auth/react'

const Login = () => {
  const { data: session, status } = useSession();

  return (
    <div className='w-full flex-1 flex justify-center items-center'>
      {status === 'authenticated' ? (
        <button 
          onClick={() => signOut()} 
          className='w-36 py-3 bg-slate-700 text-white rounded-lg'
        >
          Sign Out
        </button>
      ) : (
        <button 
          onClick={() => signIn()} 
          className='w-36 py-3 bg-slate-700 text-white rounded-lg'
        >
          Sign In
        </button>
      )}
    </div>
  );
};

export default Login;