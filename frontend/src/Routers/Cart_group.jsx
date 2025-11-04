import {Cart} from "../components/Cart"
import Header from "../components/Header"
import Footer from "../components/Footer"

function Cart_group(){
  return(
    <>
      <Header/>
      <Cart className="min-h-screen"/>
      <Footer/>
    </>
    )
}
export default Cart_group