/* eslint-disable no-unused-vars */
import React from 'react';

function Header() {
  return (
    <header className="bg-blue-500 text-white py-4 text-center flex justify-between items-center">
      <div className="ml-40">
      <h1 className="text-2xl font-bold hover:text-black"><a href='/'>College<span className='text-black hover:text-white'>Cruiser</span></a></h1>
      </div>
      <div className="mr-40">
        <ul className='flex space-x-4'>
          <li className='px-2 py-1 rounded-md hover:border-2 hover:border-black/[0.3] hover:bg-white hover:text-black '>
            <a className='font-semibold text-base' href="/pooler">Cruisers</a>
          </li>
          <li className='px-2 py-1 rounded-md hover:border-2 hover:border-black/[0.3] hover:bg-white hover:text-black '>
            <a className='font-semibold text-base' href="/pool">Cruise</a>
          </li>
          <li className='px-2 py-1 rounded-md hover:border-2 hover:border-black/[0.3] hover:bg-white hover:text-black '>
            <a className='font-semibold text-base' href="/login" >Login </a>
          </li>
          <li className='px-2 py-1 rounded-md hover:border-2 hover:border-black/[0.3] hover:bg-white hover:text-black '>
            <a className='font-semibold text-base' href="/signup">Signup</a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
