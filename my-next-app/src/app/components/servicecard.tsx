
"use client";
type UserProbs={
  head:string;
  imgcard:string;
  cardbg:string
};

import Image from "next/image";

export default function Servicecard({head,imgcard,cardbg}:UserProbs){
  
  return(
    <div className="cardservice" style={{background:cardbg}}>

      <div>
        <h1  className="headcard">{head}</h1>
       <br/> <br/>
       <div className="imgpart">
        <Image src="/Icon.jpg"  width={41} height={41} alt=""/>
        <a href="">Learn More</a>
       </div>
      </div>
      
      <div>
      <Image src={imgcard} width={210} height={170} alt=""/>
      </div>
       
    </div>
  )
}