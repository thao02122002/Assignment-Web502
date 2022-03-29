import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import WebsiteLayout from './pages/layouts/Website/WebsiteLayout'
import ListProduct from './components/ListProduct'
import { ProductType } from './types/Product'
import { list} from './api/product'
import ProductDetail from './components/ProductDetail'
import Banner from './components/Banner'
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
        <Route index element={<Banner  />} />
        <Route path='/' element={<ListProduct products={products} />} />
        <Route path='/product/:id' element={<ProductDetail />} />
        <Route path='/signin' element />
        </Route>


      </Routes>
    </div>
  )
}

export default App
