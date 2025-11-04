import { useForm } from "react-hook-form"
import axios from "axios"
import toast from "react-hot-toast"
import {useNavigate} from "react-router-dom"
function Sign_in() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm()
const navigate = useNavigate()
const onSubmit=async(data) =>{
   const userInfo={
     email:data.email,
     password:data.password,
     cpassword:data.cpassword
   }
  await axios.post("http://localhost:4001/user/sign_up",userInfo)
   .then((res)=>{
     if (res.data){
       toast.success("Signup succefully")
        localStorage.setItem("data",JSON.stringify(res.data.user))
        navigate("/log_in")
     }
    
   }).catch((err)=>{
     if(err.response){
       toast.error("Error : " + err.response.data.message)
     }
   })
 }


  return (
    <>
      <div className="h-screen flex justify-center items-center relative">
        <img src="/Image/bg.png" className="absolute h-full w-full top-0 left-0 " />

        <div className="  z-10 backdrop-blur-lg rounded-[40px] bg-white/25">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="h-[550px] w-[530px] rounded-[40px]  flex flex-col  gap-4 shadow-lg">
              <div className="flex justify-center items-center my-[70px]">

                <p className="text-white text-[60px]" style={{
                  fontFamily: "cursive"

                }}>Please Sign up</p>
              </div>

              <div className="w-full flex flex-col items-center">
                <input type="email" placeholder="Enter your email " className="border border-white bg-transparent py-3 px-3 rounded-full w-[90%] shadow-lg text-white placeholder-white"{...register("email", { required: true }

                )} />

                {
                  errors.email && <span className="text-red-500">This field is required</span>
                }
              </div>


              <div className="w-full flex flex-col items-center">
                <input type="password" placeholder="Enter password " className="border border-white bg-transparent py-3 px-3 rounded-full w-[90%] shadow-lg text-white placeholder-white"{...register("password", { required: true }

                )} />

                {
                  errors.password && <span className="text-red-500">This field is required</span>
                }
              </div>

              <div className="w-full flex flex-col items-center">
                <input type="password" placeholder="Enter conform password" className="border border-white bg-transparent py-3 px-3 rounded-full w-[90%] shadow-lg text-white placeholder-white"{...register("cpassword", { required: true }

                )} />

                {
                  errors.cpassword && <span className="text-red-500">This field is required</span>
                }
              </div>

              <div className="flex justify-between  items-center mt-10 px-3">
                <button type="submit" className="px-3 py-2 rounded-lg bg-blue-500 text-white ">Sign Up</button>
                <p className="text-white">Already Have Account? <a href="/log_in/">Login</a></p>
              </div>
            </div>

          </form>
        </div>

      </div>
    </>

  )
}

export default Sign_in