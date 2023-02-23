import React, { useEffect, useState } from 'react';

const Meme = () => {
  const [meme, setMeme] = useState({ topText: '', buttomText: '', randomImage: 'http://i.imgflip.com/1bij.jpg' });
  const [allMemeImage, setAllMemeImage] = useState([]);

  useEffect(() => {
    const getMeme = async () => {
      const res = await fetch('https://api.imgflip.com/get_memes');
      const data = await res.json();
      setAllMemeImage(data.data.memes);
    };
    getMeme();
  }, []);

  const handleGenerateImage = () => {
    const randomImage = Math.floor(Math.random() * allMemeImage.length);
    const url = allMemeImage[randomImage].url;
    console.log(url);
  };

  return (
    <>
      <div className='my-10'>
        <div action='' className='flex flex-col w-10/12 mx-auto'>
          <div className='flex gap-2 justify-center'>
            <input
              type='text'
              placeholder='Top text'
              className='py-1 pl-1 text-lg outline-none rounded-md border-2 border-gray-200 w-full'
            />
            <input
              type='text'
              placeholder='Bottom text'
              className='py-1 pl-1 text-lg outline-none rounded-md border-2 border-gray-200 w-full'
            />
          </div>
          <button
            onClick={handleGenerateImage}
            className='w-full rounded-md my-5 py-3 px-6 bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
          >
            Get a new meme image 🖼
          </button>
          <div>
            <img src={meme.randomImage} alt='meme image' />
          </div>
        </div>
      </div>
    </>
  );
};

export default Meme;
