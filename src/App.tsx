import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import WebsiteLayout from './pages/layouts/Website/WebsiteLayout'
import ListProduct from './components/ListProduct'
import { ProductType } from './types/Product'
import { create, list, remove, update} from './api/product'
import { Add, List, Remove, Update} from './api/category'

import ProductDetail from './pages/layouts/Website/ProductDetail'
import Banner from './components/Banner'
import Products from './pages/layouts/Website/Products'
import Home from './pages/layouts/Website/Home'
import SignUp from './pages/layouts/Website/SignUp'
import SignIn from './pages/layouts/Website/SignIn'
import New from './pages/layouts/Website/New'
import AdminLayout from './pages/layouts/Admin/AdminLayout'
import Dashboard from './pages/layouts/Admin/Dashboard'
import ProductList from './pages/layouts/Admin/Product/ProductList'
import ProductAdd from './pages/layouts/Admin/Product/ProductAdd'
import ProductEdit from './pages/layouts/Admin/Product/ProductEdit'
import PrivateRouter from './components/PrivateRouter'
import Contact from './pages/layouts/Website/Contact'
import Statistical from './pages/layouts/Admin/Statistical'
import { CategoryType } from './types/Category'
import CategoryList from './pages/layouts/Admin/Category/CategoryList'
import { ListUser, UpdateUser } from './api/user'
import { UserType } from './types/user'
import UserList from './pages/layouts/Admin/User/UserList'
import ListCategory from './components/ListCategory'
import CategoryDetail from './pages/layouts/Website/CategoryDetail'
import CategoryAdd from './pages/layouts/Admin/Category/CategoryAdd'
import CategoryEdit from './pages/layouts/Admin/Category/CategoryEdit'
import UserEdit from './pages/layouts/Admin/User/UserEdit'
function App() {
  const [listLoading, setlistLoading] = useState(false)
  const [products, setProducts] = useState<ProductType[]>([])
  const [categories, setCategories] = useState<CategoryType[]>([])
  const [users, setUsers] = useState<UserType[]>([])
  useEffect(() => {
     const getProduct = async () => {
       const {data} = await list();
       setProducts(data)
     }
     getProduct();
  },[])

  const onHandleAdd = async (product: ProductType) => {
    const {data} = await create(product)
    setProducts([...products, data])
  }

  const onHandleUpdate = async (product: ProductType) => {
    try {
      const {data} = await update(product)
      setProducts(products.map(item => item._id === data._id ? product : item))
      
    } catch (error) {
      
    }
  }

  const onHandleRemove = async (id: number) => {
    remove(id);
    setProducts(products.filter(item => item._id !== id));
  }


  //CATEGORY
  useEffect(() => {
    const getCategory = async () => {
      const {data} = await List();
      setCategories(data)
    }
    getCategory();
 },[])
 const onHandleAddCate = async (category: CategoryType) => {
  const {data} = await Add(category)
  setCategories([...categories, data])
}

 const onHandleRemoveCate = async (id: any) => {
  Remove(id);
  setCategories(categories.filter(item => item._id !== id));
}
const onHandleUpdateCate = async (category: CategoryType) => {
  try {
    const {data} = await Update(category)
    console.log(data);
    
    setCategories(categories.map(item => item._id === data._id ? category : item))
    
  } catch (error) {
    
  }
}


//USER
 useEffect(() => {
  const getUser = async () => {
    const {data} = await ListUser();
    setUsers(data)
  }
  getUser();
},[])
const onHandleUpdateUser = async (user: UserType) => {
  try {
    const {data} = await UpdateUser(user)
    setUsers(users.map(item => item._id === data._id ? user : item))
    
  } catch (error) {
    
  }
}

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<WebsiteLayout />}  >
        <Route index element={<Home products={products} />} />
        <Route path='/product'>
          <Route index element={<Products products={products} />} />
          {/* <Route path='' element={<ListCategory categories={categories} />} /> */}
        <Route path='/product/:id' element={<ProductDetail />} />
        </Route>
        <Route path='/category/:id' element={<CategoryDetail />} />

        
        
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/contact' element={<Contact />} />

        </Route>

        <Route path='admin' element={<PrivateRouter><AdminLayout /></PrivateRouter> }>
          <Route index element={<Statistical />} />
            {/* <Route index element={<Dashboard />} /> */}
            <Route path='product'>
                 <Route index element={<ProductList products={products} onRemove={onHandleRemove} />} />
                 <Route path='/admin/product/:id/edit' element={<ProductEdit onUpdate={onHandleUpdate} />} />
                 <Route path='add' element={<ProductAdd onAdd={onHandleAdd} />} />
            </Route>
            <Route path='category' >
              <Route index element={<CategoryList categories={categories} onRemoveCate={onHandleRemoveCate} />}/>
              <Route path='/admin/category/:id/edit' element={<CategoryEdit onUpdateCate={onHandleUpdateCate} />}/>
              <Route path='add' element={<CategoryAdd onAddCate={onHandleAddCate} />}/>
            </Route>
            <Route path='user' >
              <Route index element={<UserList users={users} />}/>
              <Route path='/admin/user/:id/edit' element={<UserEdit onUpdateUser={onHandleUpdateUser}/>}/>
            </Route>
        </Route>


      </Routes>
    </div>
  )
}

export default App
