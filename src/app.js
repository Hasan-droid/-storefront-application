import React from 'react'
import Header from './components/header/header'
import Categories from './components/categories/categories'
import Products from './components/products/products'
import Footer from './components/footer/footer'
import SimpleCart from './components/cart/SimpleCart'
export default function App() {
    return (
       <>
       <Header/>
       <SimpleCart/>
       <Categories/>
       <Products/>
   
       <Footer/>
       </>
    )
}
