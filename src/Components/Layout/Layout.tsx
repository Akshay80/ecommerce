import { useDispatch } from 'react-redux'
import * as ACTIONS from './action'
import { ProductList } from '../ProductList'
import { Carasoul } from '../Carasoul/Carasoul'
import Sidebar from '../Sidebar/Sidebar'
import { useEffect, useState } from 'react'



function Layout() {
  const [category, setCategory] = useState<string>('')
  const getProductByCategory = (category:string) => {
    setCategory(category)
  }
    return (
        <div>
        <div className="row">
        <div className="col-2">
        <Sidebar getProductByCategory={getProductByCategory}   /> 
          </div>
          <div className="col-10">
          <Carasoul />
          <ProductList category={category} />
          </div>
        </div>
        </div>
    )
}

export default Layout
