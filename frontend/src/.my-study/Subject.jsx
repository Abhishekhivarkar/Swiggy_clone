
 import SubjectContext from "./ContextData"
 function Subject() {
  const subject = SubjectContext
  return (
    <>
     <div className="bg-violet-400 p-10">
       Subject component : {subject}
      
     </div>
       
    </>
    
        
    
  );
}

export default Subject;