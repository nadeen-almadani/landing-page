
"use client";

import Image from "next/image";
import Servicecard from "../components/servicecard";
import Studiescard from "../components/studiescard";
import Procard from "../components/procard";
import Person from "../components/person";
import Testmonial from "../components/testmonial";
import { useState } from "react";
import Link from "next/link";

// array of logos
const logos=[
   "/vector2.svg",
  "/vector3.svg",
  "/company logo.svg",
  "/company logo2.svg",
  "/company logo3.svg",
  "/company logo4.svg",
]




// array of services card
const servicecard=[
  {
    head:"Search engine optimization",
    imgcard:"/img9.jpg",
    cardbg:"#F3F3F3",
  },
  {
    head:"Pay-per-click advertising" ,
    imgcard:"/img10.jpg",
    cardbg:"#B9FF66"
  },
  {
    head:"Social Media Marketing",
   imgcard:"/img11.jpg",
   cardbg:"#F3F3F3",
  },
  {
    head:"Email Marketing",
    imgcard:"/img12.jpg",
    cardbg:"#B9FF66"

  },
  {
    head:"Conten Creation",
    imgcard:"/img13.jpg",
    cardbg:"#B9FF66"
  },
  {
    head:"Analytics and Tracking",
    imgcard:"/img14.jpg",
    cardbg:"#F3F3F3",
  }
];




// array of case studies
const studiescard=[
  {
    text:"For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales"
  },
  {
    text:"For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic."
  },
  {
    text:"For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales."
  }
]






//array of  card
const cardsdata=[
  {number:"/01.svg",
    title:"Consultation",
    description:"During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."

  },
  {
    number:"/02.jpg",
    title:"Research and Strategy Development",
  },
  {
    number:"/03.jpg",
  title:"Implementation",
   
  },
  {
    number:"/04.jpg",
    title:"Monitoring and Optimization",
  },
  {
    number:"/05.jpg",
    title:"Reporting and Communication",
   
  },
  {
    number:"/06.jpg",
    title:"Continual Improvement",
   
  }
];

//array of persons
const persondata=[
  {
    personimage:"/Person1.jpg",
    personname:"John Smith",
    social:"CEO and Founder",
    experience:"10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
  },
    {
    personimage:"/person2.jpg",
    personname:"Jane Doe",
    social:"Director of Operations",
    experience:"7+ years of experience in project management and team leadership. Strong organizational and communication skills",
  },

  {
    personimage:"/Mask group.png",
    personname:"Michael Brown",
    social:"CEO and Founder",
    experience:"5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
  },

  {
    personimage:"/person2.jpg",
    personname:"Jane Doe",
    social:"Director of Operations",
    experience:"7+ years of experience in project management and team leadership. Strong organizational and communication skills",
  },

    {
    personimage:"/Person1.jpg",
    personname:"John Smith",
    social:"CEO and Founder",
    experience:"10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
  },

  {
    personimage:"/person2.jpg",
    personname:"Jane Doe",
    social:"Director of Operations",
    experience:"7+ years of experience in project management and team leadership. Strong organizational and communication skills",
  },

]

// array of testimonials cards
const monialsCard=[
  {
   description:"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
   name:"John Smith",
   experience:"Marketing Director at XYZ Corp"
  },
  {
  description:"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
   name:"ahmad Smith",
   experience:" Director at XYZ Corp"
  }

]


export default function Landpage(){
 
  
  const [activeIndex,setActiveindex]=useState(null);
  const [inputEmail,setInputEmail]=useState("")
  const [formData,setformData]=useState({
    name:"",email:"",message:"",type:"hi",
  });

  const [error,seterror]=useState("");
  {/* submitform*/}
  function handlesubmit(e){
    e.preventDefault();
    if(!formData.name || !formData.email || !formData.message){
      
       seterror("please fill all fields");
       setTimeout(()=>{seterror("")},2000)
     
      return;
    }
    
    console.log(formData);
    setformData({name:"",email:"",message:"",type:"hi"})
  };

  {/*submit email in footer */}
  function handleEmailSubmit(e){
  e.preventDefault();
  console.log(inputEmail)
  setInputEmail("");
  }

  return(
    <div> 
    
  

    {/* Navigation part*/}
   <div className="navigation" id="about" >
    <div className="heroText">
      <h1 >Navigating the digital landscape for success</h1>
      <p >our marketing business helps agency grow and succeed online through a range of services including SEO ,PPC</p>

      <Link href="#contact"><button >Book a consultation</button></Link>
    </div>
    <div className="heroImage">
      <Image src="/img8.jpg" width={600} height={515} alt=""/>
    </div>
   </div>

   {/*website link */}
   <div className="weblink" >
   {logos.map((logo,index)=>(
    <div key={index} className="logoItem">
   <Image src={logo} width={120} height={50} alt="company logo"/>
   </div>
   ))}
  </div>


   {/*services section */}
   <div className="services" id="servicess">
    <div className="heading"><h2>Services</h2></div>
    <div><p> our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:</p></div>
   </div>


   <div className="servicescard"> 
    {servicecard.map((service,index)=>(
              <Servicecard key={index} head={service.head} imgcard={service.imgcard} cardbg={service.cardbg}/>
          )
          
          )}
     
    

    </div>
    
    
       
   


       {/* Let’s make things happen section*/}
      <div className="thingshappen">
        <div>
           <h3>Let’s make things happen</h3>
           <br/>
           <p>Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.</p>
           <button>Get your free proposal</button>
        </div>
        <div>
         <Image src="/img15.jpg" width={494} height={394} alt="" style={{backgroundColor:"#F3F3F3"}}/>
        </div>
      </div>   

      {/*Case Studies section */}
      <div className="casestudies">
        <h3 >Case Studies</h3>
        <p>Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies</p>
      </div>

      <div className="stcard">
        {studiescard.map((studies,index)=>(
          < Studiescard key={index} text={studies.text} />
        ))}
      </div>

      {/*Our Working Process */}
        <div className="process" id="process">
       <h3>Our Working Process </h3>
        <p>Step-by-Step Guide to Achieving Your Business Goals</p>
      </div>

       {/*cards */ }
      <div  className="procard">
      
       
       {cardsdata.map((card,index)=>(
        <Procard key={index}
        {...card}
        isActive={activeIndex===index}
        onClick={()=>setActiveindex(activeIndex === index ? null :index)}
        
        />
        
       ))}
       
      </div>

     {/*Team section */}
        <div className="team" id="ourteam">
       <h3 className="headteam">Team</h3>
         <p className="pteam">Meet the skilled and experienced team behind our successful digital marketing strategies</p>
      
      </div>

      <div className="personteam">
          {persondata.map((person,index)=>(
              <Person key={index} personimage={person.personimage} 
              personname={person.personname}
              social={person.social}
              experience={person.experience} />
          )
          
          )}
      </div>
      <div style={{direction:"rtl"}}>
        <button className="buttonteam">See all team</button>
      </div>


       {/*Testimonials section */}
        <div className="testimonials">
         <h3>Testimonials</h3>
         <p>Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services</p>
        </div>

      <div className="testimanialscontect">
        {
          monialsCard.map((card,index)=>(
            <Testmonial key={index} description={card.description} name={card.name} experience={card.experience}/>
          ))
        }
        </div>
       
      

       {/*contact section */}
       <div id="contact" className="contactsec">
        <h3 className="headcontact">Contact Us</h3>
         <p className="pcontact">Connect with Us: Lets Discuss Your Digital Marketing Needs</p>
      
      </div>

     {/*contact form */}
      <div className="formcontact">
        <div>
          <form onSubmit={handlesubmit} className="form">
      <div className="radioGroup">
        <div>
          <input type="radio"  name="type" value="hi" checked={
          formData.type==="hi"} onChange={(e)=>setformData({...formData,type:e.target.value})}
         />
         <label> Say Hi</label>
        </div>
        <div>
        <input type="radio"  name="type" value="qoute" checked={formData.type==="qoute"}
          onChange={(e)=>setformData({...formData,type:e.target.value})}
        />
         <label>
         
        Get a Quote
        </label>
        </div>
        
        
       
        </div>

        <br/>
        {/*inputs */}
        <label>Name</label>
        <br/>
        <input type="text" placeholder="Name"
        value={formData.name} onChange={(e)=>{setformData({...formData,name:e.target.value}); seterror("");  }}/>
        <br/>
        <br/>
        <label>Email*</label>
        <br/>
        <input type="email" placeholder="Email"
        value={formData.email} onChange={(e)=>{setformData({...formData,email:e.target.value}) ; seterror("")}}/>
        <br/>
        <br/>
        <label>Message*</label>
        <br/>
        <textarea placeholder="Message" 
        value={formData.message} onChange={(e)=>{setformData({...formData,message:e.target.value}); seterror("")}}></textarea>
        
        <br/>
        <br/>
        {/*error */}
        {error && <p style={{color:"red"}}>{error}</p>}

        <button className="submitBtn" type="submit">Send Message</button>
      
          </form>
        </div>
        <div className="formImage">
        <Image src="/form2.jpg" width={350} height={300} alt="" />
        </div>
    
      </div>

      {/* footer section*/}
      <div className="footerContainer">
        <div className="navFooter">
        <div className="imgNav">
        <Image src="/logo.png" width={200} height={200} alt="" />
      </div>

      <div className="navlink2">
          <Link href="#about">About Us</Link>
          <Link href="#servicess">Services</Link>
          <Link href="#process">Process</Link>
          <Link href="#ourteam">Our Team</Link>
          <Link href="#contact">Contact Us</Link>
      </div>

      <div className="iconImage">
        <Image src="/Social icon1.jpg" width={30} height={30} alt="" style={{borderRadius:"70px"}}/>
        <Image src="/Social icon3.jpg" width={30} height={30} alt="" style={{borderRadius:"70px"}}/>
        <Image src="/face.png" width={30} height={30} alt="" style={{borderRadius:"70px"}}/>

      </div>
      </div>

      <div className="contactInfo">
        <div className="info">
          <h3 className="headerInfo">Contact us:</h3>
        <div className="information">
          <p>Email: info@positivus.com</p>
          <p>  Phone: 555-567-8901</p> 
          <p>Address: 1234 Main St</p> 
          <p>Moonstone City, Stardust State 12345  </p>
             
          </div>  
        </div>
        <div  className="footerForm">
         <div>
          <input className="emailForm" type="email" placeholder="Email"
          value={inputEmail} onChange={(e)=>{setInputEmail(e.target.value)}}/>
         </div>
         <div>
          <button className="buttonForm" onClick={handleEmailSubmit} type="submit">Subscribe to news</button>
         </div>
        </div>
      </div>


       <hr/>
       <div className="footer">
       <p>© 2023 Positivus. All Rights Reserved.</p>
       <p className="privacy">Privacy Policy</p>
       

       </div>
      
        </div>
        
    
      
   

   
    </div>
  )
}