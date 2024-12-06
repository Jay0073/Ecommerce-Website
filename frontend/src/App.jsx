import './App.css' 
import Navbar from '../public/Components/Navbar/Navbar'

import { BrowserRouter, Routes, Route} from 'react-router-dom'

import Shop from '../public/Pages/Shop'
import ShopCategory from '../public/Pages/ShopCategory'
import Product from '../public/Pages/Product'
import Cart from '../public/Pages/Cart'
import LoginSignup from '../public/Pages/LoginSignup'
import Footer from '../public/Components/Footer/Footer'

import mens_banner from '../public/Components/assets/banner_mens.png'
import women_banner from '../public/Components/assets/banner_women.png'
import kids_banner from '../public/Components/assets/banner_kids.png'


function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Shop/>}/>
        <Route path="/mens" element={<ShopCategory banner={mens_banner} category='men'/>}/>
        <Route path="/womens" element={<ShopCategory banner={women_banner} category='women'/>}/>
        <Route path="/kids" element={<ShopCategory banner={kids_banner} category='kid'/>}/>
        
        <Route path="/product" element={<Product/>}/>
        <Route path=":productId" element={<Product/>}/>
      {/* now for cart */}
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      
      <Footer/>

    </BrowserRouter>
    </>
  )
}

export default App
