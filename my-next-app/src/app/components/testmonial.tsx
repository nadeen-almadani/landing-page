
"use client";
type data={
description:string;
  name:string;
 experience:string;
};
export default function Testmonial({description,name,experience}:data){
  return(
    <>
    <div className="monialcard">
    
     <p >{description}</p>
    
    <div  className="monial">
      <h3 className="monialname">{name}</h3>
      <h3 className="monialexp">{experience}</h3>
    </div>
    </div>
    </>
  )
}
