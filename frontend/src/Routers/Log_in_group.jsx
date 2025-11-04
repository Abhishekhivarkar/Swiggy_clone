import Log_in from "../components/Log_in"
import Header from "../components/Header"
import Footer from "../components/Footer"

function Log_in_group(){
  return(
    <>
      <Header/>
      <Log_in className="min-h-screen"/>
      <Footer/>
    </>
    )
}
export default Log_in_group