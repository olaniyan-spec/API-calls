import Header from './Components/Header'
import Products from './Components/Products'
import Home from './Components/Home'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
const App = () => {
  return (
    <div className='app'>
      
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/Home' index element={<Home/>} ></Route>
          <Route  path = '/Products' element = {<Products/>}></Route>
        </Routes>
      
      
      </BrowserRouter>
      
    </div>
  )
}

export default App