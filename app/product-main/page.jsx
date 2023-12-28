import React from 'react'
import { ComplexNavbar } from '../components/navbar/page'
import { DrawerWithNavigation } from '../components/sidebarDrawer/page'
import { ProductMainCard } from '../components/productMainCard/page'

const ProductMain = () => {
  return (
    <>
        <ComplexNavbar/>
        <DrawerWithNavigation/>
        <ProductMainCard/>
    </>
  )
}

export default ProductMain