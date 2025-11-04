function Footer(){
  return(
    <>
      <footer className=" w-full bg-[#f1f0f5] bottom-0  h-[300px] mt-20 px">
        <div className="max-w-[800px] mx-auto  mt-5">
        <div className="flex">
          <p className="text-[18px] font-bold">For better experience,download the Swiggy app now</p>
          
          
          <div className="flex ml-auto gap-5 ">
          <div className="flex items-center  bg-black text-white px-4 rounded-lg">
            <div className="flex items-center gap-2 ">
            <div>
              <img className="size-10" src="/logo/playstore.png"/>
            </div>
            <div>
              <p>GET IT ON</p>
              <p>Google Play</p>
            </div>
            </div>
          </div>
          
            <div className="flex items-center  bg-black text-white px-4 rounded-lg">
            <div className="flex items-center gap-2 ">
            <div>
              <img className="size-10" src="/logo/Apple.png"/>
            </div>
            <div>
              <p>GET IT ON</p>
              <p>Ape Store</p>
            </div>
            </div>
          </div>
        </div>
        </div>
        </div>
        
        <div className="max-w-[700px]  mx-auto mt-15">
          <div className="flex">
          <div className=" w-[155px]">
          <div className="flex items-center gap-2">
            <div className=" size-12">
            <img className="size-[100%]"src="/Image/Swiggy.png"/>
            </div>
            <p className="text-[#f37e49] font-bold text-[25px]">Swiggy</p>
          </div>
          <p className="text-[15px]">2025 Swiggy Limited</p>
          </div>
          <div className="flex gap-8 font-medium ml-auto">
            <p>Company</p>
            <p>Contact Us</p>
            <p>Available in:</p>
            <p>Life at Swiggy</p>
          </div>
          </div>
          
          
        </div>
        
      </footer>
      
    </>
    )
}

export default Footer