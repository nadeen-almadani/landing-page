
"use client";
type Props={
description:string;
  name:string;
 experience:string;
};
export default function Testmonial({description,name,experience}:Props){
  return(
    <>
    <div className="monialcard">
    
     <p>{description}</p>
    
    <div  className="monial">
      <h3 className="monialname">{name}</h3>
      <h3 className="monialexp">{experience}</h3>
    </div>
    </div>
    </>
  )
}
