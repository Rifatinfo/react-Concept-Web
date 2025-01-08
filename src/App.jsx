
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
  const [selected, setSelected] = useState([]);
//  console.log(isActive);
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

  

  const handleSelectedProduct = (product) =>{
    const isExist = selected.find(p => p.id === product.id);

    if(isExist){
      alert("You have added a product");
      return;
    }
    else{
      const newProduct = [...selected, product];
      setSelected(newProduct);
    }
    console.log(isExist);
       

  }
// console.log(selected);
  return (
    <>
      <Nav selected={selected}></Nav>
      <div className='flex  justify-around mt-10'>
        <AllProduct handleSelectedProduct={handleSelectedProduct}></AllProduct>
        <CartContainer 
        isActive={isActive}
        handleIsActive={handleIsActive}></CartContainer>
      </div>
    </>
  )
}

export default App
