import React from 'react'
import { Route } from 'react-router'
import { AppRoutes } from '../../Routes'
import { FooterContainer } from '../Footer'
import { Carasoul } from '../Carasoul/Carasoul'
import Sidebar from '../Sidebar/Sidebar'
import { ProductList } from '../../Components/ProductList/index'

function Layout() {
    return (
        <div>
        <div className="row">
        <div className="col-2">
        <Sidebar /> 
          </div>
          <div className="col-10">
            <Carasoul />
          <ProductList/>
          </div>
        </div>
        </div>
    )
}

export default Layout
