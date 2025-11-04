import Item_details from "../components/Item_details"
import Header from "../components/Header"
import Footer from "../components/Footer"

function Item_details_group(){
  return(
    <>
      <Header/>
      <Item_details className="min-h-screen"/>
      <Footer/>
    </>
    )
}
export default Item_details_group