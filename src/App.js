import './App.css';
import Header from './Components/Header';
import DownScrollButton from './Components/DownScrollButton';
import Inputs from './Components/Inputs';
import SideImage from './Components/SideImage';

function App() {
  return (
    <div className='bg-[#001220] overflow-hidden'>
      {/* <img src={background} className="fixed z-[-1] h-screen object-cover w-screen"/> */}
      <div className="" />
      <Header />
      <DownScrollButton />
      <Inputs className=""/>
      <SideImage />
    </div>
  );
}

export default App;
