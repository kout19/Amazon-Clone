import './App.css';
import Header from './components/Header/Header';
import Carousel from './components/Carousel/Carousel';
import Catagory from './components/Catagory/Catagory';
import Product from './components/Product/Product';
function App() {
  return (
    <div className="amazon-header">
       <Header/>
      <Carousel />
      <Catagory />
      <Product/>
    </div>
  );
}

export default App;
