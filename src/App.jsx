import Header from './Components/Header';
import Footer from './Components/Footer';
import Products from './Components/Products/index';
import Categories from './Components/Categories';
import ProductModal from './Components/Products/modal';
import CartModal from './Components/SimpleCart/modal';

const App = () => {


  return (
    <>
    <Header />
    <CartModal />
    <Categories />
    <Products />
    <ProductModal />
    <Footer />  
    </>
  )
}

export default App
