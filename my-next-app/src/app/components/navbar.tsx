
"use client";
import { useState,useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar(){
  
  const [menuOpen,setMenuOpen]=useState(false);
  const [darkMode,setDarkMode]=useState(false);

  useEffect(()=>{
    if(darkMode){
      document.body.classList.add("dark")
    } else {
      document.body.classList.remove("dark")
    }
  },[darkMode])

    return (
      <div>
        
      <nav className={`navbar ${darkMode ? "dark":""}`}>
        
          <button className="darkBtn" onClick={()=>setDarkMode(!darkMode)}>
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </button>
        
      <div>
        <Image src="/Logo.png" width={200} height={200} alt="" />
      </div>
    
      <div className={`navlink ${menuOpen ? "activelink":""}`}>
          <Link href="#about"onClick={()=> setMenuOpen(false)} >About Us</Link>
          <Link href="#servicess" onClick={()=> setMenuOpen(false)}>Services</Link>
          <Link href="#process" onClick={()=> setMenuOpen(false)}>Process</Link>
          <Link href="#ourteam" onClick={()=> setMenuOpen(false)}>Our Team</Link>
          <Link href="#contact" onClick={()=> setMenuOpen(false)}>Contact Us</Link>
        
      </div>
      <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
       {menuOpen ?"x": "☰"}
      </div>
      <div>
       <Link href="#contact"> <button>Request a qoute</button></Link>
      </div>
       </nav>
      </div>
       
    )
     
    
    

}