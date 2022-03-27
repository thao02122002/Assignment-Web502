import React from 'react'
import { Outlet } from 'react-router-dom'
import Banner from '../../../components/Banner'
import Footer from '../../../components/Footer'
import Header from '../../../components/Header'

type Props = {}

const WebsiteLayout = (props: Props) => {
  return (
   <div>
     <Header />
     <Banner />
     <Outlet />
     <Footer />
   </div>
  )
}

export default WebsiteLayout