import Header from './Components/Header';
import Footer from './Components/Footer';
import Products from './Components/Products/index';
import Categories from './Components/Categories';
import ProductModal from './Components/Products/modal';

const App = () => {


  return (
    <>
    <Header />
    <Categories />
    <Products />
    <ProductModal />
    <Footer />  
    </>
  )
}

export default App
