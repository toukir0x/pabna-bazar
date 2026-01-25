

import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Cart from './pages/Cart.jsx'


import ReactDOM from 'react-dom/client'

const container = ReactDOM.createRoot(document.getElementById('root'))




container.render(
    <BrowserRouter> 
    <Home />
    
   
    
  </BrowserRouter>
)
