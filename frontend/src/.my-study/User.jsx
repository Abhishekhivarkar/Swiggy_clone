const User = ({user}) =>{
  return(
    <>
      <div className="m-3 flex flex-col">
        <div className="px-2 border border-black p-3 rounded-md">
        <h3 >Id: {user.id}</h3>
        <h3>Name: {user.name}</h3>
        <h3>Age: {user.age}</h3>
        <h3>Email: {user.email}</h3>
        
        </div>
      </div>
      <hr className="border border-black"></hr>
      
    </>
    )
}

export default User;