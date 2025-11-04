import Header from "../components/Header"
import  MiddleContent from "../components/MiddleContent"
import  SecondMiddleContent from "../components/SecondMiddleContent"
import  ThirdMiddleContent from "../components/ThirdMiddleContent"
import  Places from "../components/Places"
import  Footer from "../components/Footer"
function Home(){
  return(
    <>
      <div className="min-h-screen flex flex-col">
      <main className = "flex-grow">
      <Header/>
      
     <MiddleContent/>
      <SecondMiddleContent/>
      <ThirdMiddleContent/>
    
      <Places/>
      </main>
      <Footer/>
      </div>
    </>
    )
}

export default Home