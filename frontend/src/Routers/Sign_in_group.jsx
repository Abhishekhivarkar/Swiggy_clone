import Sign_in from "../components/Sign_in"
import Header from "../components/Header"
import Footer from "../components/Footer"

function Sign_in_group(){
  return(
    <>
      <Header/>
      <Sign_in className="min-h-screen"/>
      <Footer/>
    </>
    )
}
export default Sign_in_group