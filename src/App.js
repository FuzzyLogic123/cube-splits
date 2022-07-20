import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import background from './hughs-amazing-background.png';
import DownScrollButton from './Components/DownScrollButton';
import Inputs from './Components/Inputs';

function App() {
  return (
    <div className='bg-[#001220] h-[2300px] overflow-hidden'>
      {/* <img src={background} className="fixed z-[-1] h-screen object-cover w-screen"/> */}
      <div className="" />
      <Header />
      <DownScrollButton />
      <Inputs />
    </div>
  );
}

export default App;
