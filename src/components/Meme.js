import React from 'react';

const Meme = () => {
  return (
    <>
      <div className='my-10'>
        <form action='' className='flex flex-col w-10/12 mx-auto'>
          <div className='flex gap-2 justify-center'>
            <input type='text' className='py-1 pl-1 text-lg outline-none rounded-md border-2 border-gray-200 w-full' />
            <input type='text' className='py-1 pl-1 text-lg outline-none rounded-md border-2 border-gray-200 w-full' />
          </div>
          <button className='w-full rounded-md my-5 py-3 px-6 bg-gradient-to-r from-cyan-500 to-blue-500 text-white'>
            Get a new meme image 🖼
          </button>
        </form>
      </div>
    </>
  );
};

export default Meme;
