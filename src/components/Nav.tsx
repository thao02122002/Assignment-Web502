import React from 'react'
import Search from './Search'
import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from 'react-router-dom'
import {isAuthenticate} from "../utils/localStorage"

type Props = {}

const Nav = (props: Props) => {
  return (

    <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-xl   ">
                <li className="nav-item">
                  <a className="nav-link active text-white  " aria-current="page" href="/">Trang chủ</a>
                </li>
                
                
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle text-white " to="/product" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Sản phẩm
                  </Link>
                  {/* <ul className="dropdown-menu text-white" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item text-lg" href="#">Dưỡng da</a></li>
                    <li><a className="dropdown-item  text-lg" href="#">Trang điểm</a></li>
                    <li><a className="dropdown-item text-lg" href="#">Chăm sóc cơ thể</a></li>
                    <li><a className="dropdown-item text-lg" href="#">Set đồ trang điểm, dưỡng da</a></li>
                    <li><a className="dropdown-item text-lg" href="#">Thương hiệu</a></li>
                  </ul> */}
                 </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="/contact">Liên hệ</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="">
                    
                  </a>
                </li>
              </ul>




  )
}

export default Nav