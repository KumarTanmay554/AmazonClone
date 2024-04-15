import React from 'react'
import { HomePage,Navbar,Checkout, SearchResults, ProductPage} from './components'
import {BrowserRouter,Routes,Route,RouterProvider} from 'react-router-dom'
const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route  path='/' element={<HomePage/>}/>
      <Route  path='/search' element={<SearchResults/>}/>
      <Route  path='/product/:id' element={<ProductPage/>}/>
      <Route  path='/checkout' element={<Checkout/>}/>
    </Routes>
    
    </BrowserRouter>
  )
}

export default App
