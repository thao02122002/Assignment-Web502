import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import WebsiteLayout from './pages/layouts/Website/WebsiteLayout'
import ListProduct from './components/ListProduct'
import { ProductType } from './types/Product'
import { list} from './api/product'
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
           
           <Route index element={<ListProduct products={products} />} />
        </Route>


      </Routes>
    </div>
  )
}

export default App
