import axios from "axios"
import toast from "react-hot-toast"
import {useForm} from "react-hook-form"
function Log_in(){
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },

  } = useForm()
  
  const onSubmit = (data) => {
  const userInfo = {
    email: data.email,
    password: data.password,
  };

  axios
    .post("http://localhost:4001/user/log_in", userInfo)
    .then((res) => {
      if (res.data) {
        toast.success("Login successfully");
        localStorage.setItem("userData", JSON.stringify(res.data.user));
        localStorage.setItem("isLoggedIn", "true"); 
        window.location.href = "/";
      }
    })
    .catch((err) => {
      if (err.response) {
        toast.error(err.response.data.message);
      }
    });
};
  return(
    <>
        <div className="relative h-screen w-full">
        <img
          src="/Image/Sign_in.jpg"
          alt="Background"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />

       



        <div className="relative flex flex-col justify-center items-center h-full w-full z-10 shadow-lg">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="h-[600px] w-[500px] backdrop-blur-lg rounded-[80px] shadow-2xl p-3">

              <div className="h-full w-full  flex flex-col justify-center items-center gap-2 ">
                <p className="text-center text-[60px] font-cursive  mb-[50px] text-white" style={{
                  fontFamily: "cursive"

                }}>Welcome</p>
                <input type="email" className="text-white outline-none bg-transparent border border-white w-[400px] py-3 px-2 placeholder-white " placeholder="enter your email"{...register(
                  "email", { required: true }
                )} />


                {
                  errors.email && <p className="text-red-500 border border-black mt-0">This field is required </p>
                }

                <input type="password" className="outline-none bg-transparent border border-white w-[400px] py-3 px-2 placeholder-white text-white" placeholder="enter your password"{...register(
                  "password", { required: true }
                )} />

                {
                  errors.password && <p className="text-red-500">This field is required </p>
                }
                <button className="bg-transparent border border-white w-[400px] py-3 px-2 mb-10 mt-10 text-white cursor-pointer">Login
                </button>
                <div className="flex justify-between w-[450px]">
                  <a className="text-white">Forget Password</a>
                  <a className="text-white" href="/sign_in">Don't have account? Sign Up</a>
                </div>
              </div>
            </div>


          </form>
        </div>


      </div>
    </>
    )
}
export default Log_in