
"use client";
 type usertype={
  text:string;
  
}

import Image from "next/image";

export default function Studiescard({text}:usertype){
  return(
    <>
    <div className="item">
      <p>{text}</p>
      <br/>
      <div  className="linkpart">
        <a>Learn more</a>
        <Image src="/icon.jpg" width={17} height={10} alt=""/>
      </div>
    </div>
    </>
  )
}