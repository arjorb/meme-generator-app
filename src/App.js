import Meme from './components/Meme';
import Header from './components/Header';
function App() {
  return (
    <div className='flex justify-center mt-10'>
      <div className='w-137.5 bg-white shadow-xl'>
        <Header />
        <Meme />
      </div>
    </div>
  );
}

export default App;
