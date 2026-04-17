
"useclient";
type data={
  number:string;
  title:string;
  description:string;
}
import Image from "next/image";
export default function Procard({number,title,description, isActive,onClick}:data){
  return(
    <>
    <div className={isActive ? "card cardActive" :"card"} onClick={onClick} >
      <div className="cardcontent">
        <div><Image src={number} width={75} height={77} alt=""/></div>
        <div><p>{title}</p></div>
      </div>
      <div className="icon"> {isActive ?"-" : "+"}
        </div>
        
       
    </div>
    
    </>
  )
}