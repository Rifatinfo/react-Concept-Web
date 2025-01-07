
import { useState } from 'react'
import './App.css'
import AllProduct from './Components/AllProduct'
import CartContainer from './Components/CartContainer'
import Nav from './Nav/nav'

function App() {
  const [isActive, setIsActive] = useState({
    cart:true,
    status : "cart"
  });
 console.log(isActive);
  const handleIsActive = (status) =>{
     if(status == "cart"){
      setIsActive({
        cart:true,
        status : "cart"
      })
     }
     else{
      setIsActive({
        cart:false,
        status : "about"
      })
     }
  }

  return (
    <>
      <Nav></Nav>
      <div className='flex  justify-around mt-10'>
        <AllProduct></AllProduct>
        <CartContainer 
        isActive={isActive}
        handleIsActive={handleIsActive}></CartContainer>
      </div>
    </>
  )
}

export default App
