"use client";
type person={
  personimage:string;
  personname:string;
  social:string;
  experience:string;

}
import Image from "next/image";
export default function Person({personimage,personname,social,experience}:person){
  return(
    <>
    <div className="personcard">
    <div className="personcontent">
      
      <div style={{display:"flex",alignItems:"center",gap:"20px"}}>
        <div><Image src={personimage} width={105} height={102} alt=""/></div>
        <div>
          <h2>{personname}</h2>
          <h3 className="social">{social}</h3>
          </div>
      </div>

      <div><Image src="/Social icon.jpg" width={34} height={34} alt=""/></div>
    </div>
    <br/>
    <hr style={{border:"1px solid black"}}/>
    <br/>
    <p className="exoerience">{experience}</p>
    </div>
    </>
  )
}