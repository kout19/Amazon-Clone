import './App.css';
import Header from './components/Header/Header';
import Carousel from './components/Carousel/Carousel';
import Catagory from './components/Catagory/Catagory';
function App() {
  return (
    <div className="amazon-header">
       <Header/>
      <Carousel />
      <Catagory />
    </div>
  );
}

export default App;
