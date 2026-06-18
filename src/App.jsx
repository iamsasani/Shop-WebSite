
import  './App.css'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Shop from './Pages/shop/Shop';
import Cart from './Pages/cart/Cart';
import  Nav  from "./Components/Nav"
import { ShopContextProvider } from "./context/ShopContextProvider";

function App() {
  



  return (

    <div className='wrapper'>
      <ShopContextProvider>


        <Router>
          <Nav/>

           <Routes>
            <Route path='/' element={<Shop/>}/>
            <Route path='/cart' element={<Cart/>}/>
           </Routes>
        </Router>


      </ShopContextProvider>
    </div>
  )
}

export default App
