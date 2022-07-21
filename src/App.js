import './App.css';
import Header from './Components/Header';
import DownScrollButton from './Components/DownScrollButton';
import Inputs from './Components/Inputs';
import SideImage from './Components/SideImage';

function App() {
  return (
    <div className='bg-[#001220] h-[2300px] overflow-hidden'>
      {/* <img src={background} className="fixed z-[-1] h-screen object-cover w-screen"/> */}
      <div className="" />
      <Header />
      <DownScrollButton />
      <Inputs />
      <SideImage />
    </div>
  );
}

export default App;
