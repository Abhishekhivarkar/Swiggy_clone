
import { FcRating } from "react-icons/fc";
function Card(props){
  return(
    <>
      <div className="w-full overflow-hidden">
      <div className="border border-1 w-[185px] h-[130px] rounded-lg overflow-hidden ">
        <img className="w-[185px] h-[130px] object-cover"src={props.Image}></img>
       
      </div>
     <p className="font-bold mt-2">{props.name}</p>
       <div className="flex ">
             <FcRating className="mt-1 mr-1"/>
              <p>{props.rating}</p>
            </div>
            <p>{props.location}</p>
      </div>
    </>
    )
}
export default Card