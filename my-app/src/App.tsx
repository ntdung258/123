import './App.css';
import { Header } from './components/Header';
import Banner from './components/banner/Index';
import Recently from './components/recently/Index';
import Trending from './components/trending/Index';
import NewRelease from './components/newRelease/Index';
import Recommended from './components/recommended/Index';
function App() {
  return (
    <>
      <div className='bg-black'>
        <div>
          <Header />
        </div>
      </div>  
      <Banner />
      <div className='bg-black pt-5'>
        <div className="container">
          <Recently />
          <Trending />
          <NewRelease />
          <Recommended />
        </div>
      </div>
    </>
  );
}

export default App;
