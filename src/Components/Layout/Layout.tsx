import React from 'react'
import { Route } from 'react-router'
import { AppRoutes } from '../../Routes'
import { FooterContainer } from '../Footer'
import { ProductList } from '../ProductList'
import Sidebar from '../Sidebar/Sidebar'

function Layout() {
    return (
        <div>
        <div className="row">
        <div className="col-3">
        <Sidebar /> 
          </div>
          <div className="col-9">
          <ProductList />
          </div>
        </div>
        </div>
    )
}

export default Layout
