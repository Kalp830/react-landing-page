import React from 'react'
import Layout from './pages/Layout'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Service from './pages/Service'
import Feature from './pages/Feature'
import Product from './pages/Product'
import Testimonial from './pages/Testimonial'
import FAQ from './pages/FAQ'

function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='/service' element={<Service/>}/>
          <Route path='/feature' element={<Feature/>}/>
          <Route path='/product' element={<Product/>}/>
          <Route path='/testimonial' element={<Testimonial/>}/>
          <Route path='/faq' element={<FAQ/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
       
    </>
  )
}

export default App
