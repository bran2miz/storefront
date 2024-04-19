import Header from '../Header';
import Footer from '../Footer';
import Products from '../Products/index';
import Categories from '../Categories';
import ProductModal from '../Products/modal';
import CartModal from '../SimpleCart/modal';

const StoreFront = () => {
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

export default StoreFront