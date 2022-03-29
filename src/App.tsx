import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import WebsiteLayout from './pages/layouts/Website/WebsiteLayout'
import ListProduct from './components/ListProduct'
import { ProductType } from './types/Product'
import { list} from './api/product'
import ProductDetail from './pages/layouts/Website/ProductDetail'
import Banner from './components/Banner'
import Products from './pages/layouts/Website/Products'
import Home from './pages/layouts/Website/Home'
function App() {
  const [listLoading, setlistLoading] = useState(false)
  const [products, setProducts] = useState<ProductType[]>([])
  useEffect(() => {
     const getProduct = async () => {
       const {data} = await list();
       setProducts(data)
     }
     getProduct();
  },[])

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<WebsiteLayout />}  >
        <Route index element={<Home products={products} />} />
        <Route path='/product'>
          <Route index element={<Products products={products} />} />
        <Route path='/product/:id' element={<ProductDetail />} />
        </Route>
        
        <Route path='/signin' element />
        </Route>


      </Routes>
    </div>
  )
}

export default App
