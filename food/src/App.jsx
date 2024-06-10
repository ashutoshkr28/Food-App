import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home/Home"
import Cart from "./pages/Home/Cart/Cart"
import OrderPlace from "./pages/Home/OrderPlace/OrderPlace"


function App() {

  return (
   <div className="app">
   <Navbar></Navbar>
   <Routes>
    <Route path="/" element = {<Home></Home>}/>
    <Route path="/Cart" element = {<Cart></Cart>}/>
    <Route path = "/OrderPlace" element = {<OrderPlace/>} />
   </Routes>
   </div>
  )
}

export default App
