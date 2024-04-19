import StoreFront from "./Components/StoreFront";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ProductDetails from "./Components/ProductDetails";
import ShoppingCart from "./Components/ShoppingCart";
const App = () => {

  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<StoreFront />} />
          <Route path='/details' element={<ProductDetails />}/>
          <Route path='/checkout' element={<ShoppingCart />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
