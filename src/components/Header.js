const Header = () => {
  return (
    <div className='flex justify-between items-center py-4 px-5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white'>
      <div className='flex gap-2 items-center cursor-pointer'>
        <img src='./Troll.png' alt='Troll Logo' className='w-14' />
        <p className='text-2xl font-bold'>Meme Generator</p>
      </div>
      <div className='cursor-pointer'>
        <p>React Course - Project 3</p>
      </div>
    </div>
  );
};

export default Header;
