import React, { useEffect, useState } from 'react';

const Meme = () => {
  const [meme, setMeme] = useState({ topText: '', buttomText: '', randomImage: '' });
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
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url,
    }));
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setMeme(prevMeme => ({
      ...prevMeme,
      [name]: value,
    }));
    console.log(meme);
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
              name='topText'
              value={meme.topText}
              onChange={handleChange}
            />
            <input
              type='text'
              placeholder='Bottom text'
              className='py-1 pl-1 text-lg outline-none rounded-md border-2 border-gray-200 w-full'
              name='buttomText'
              value={meme.buttomText}
              onChange={handleChange}
            />
          </div>
          <button
            onClick={handleGenerateImage}
            className='w-full rounded-md my-5 py-3 px-6 bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
          >
            Get a new meme image 🖼
          </button>

          <div className='relative'>
            {meme.randomImage && <img src={meme.randomImage} alt='meme image' className='relative' />}
            <h1 className='absolute top-5 z-20 left-0 right-0 text-center font-bold text-5xl text-white'>
              {meme.topText}
            </h1>
            <h1 className='absolute bottom-5 z-20 left-0 right-0 text-center font-bold text-5xl text-white'>
              {meme.buttomText}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Meme;
