import {useState} from "react"
const Login = ({data})=>{
  

  
 return(
  <>
<hr></hr>
<div className="pt-2 pb-2">
  <h1>{data.name}</h1>
 <h1>{data.age}</h1>
 <h1>{data.address}</h1>
  </div>

  
  
  </>
    )
  
}

export default Login

