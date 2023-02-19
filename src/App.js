import Meme from './components/Meme';
import Navbar from './components/Navbar';
function App() {
  return (
    <div className='flex justify-center mt-10 '>
      <div className='w-[550px] bg-white shadow-xl '>
        <Navbar />
        <Meme />
      </div>
    </div>
  );
}

export default App;
