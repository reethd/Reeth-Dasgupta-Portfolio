import "./header.scss"

import { FaPhoneSquare, FaGithub, FaEnvelope, FaLinkedinIn } from 'react-icons/fa'

export default function Header({menuOpen, setMenuOpen}) {
  return (
    <div className={"header " + (menuOpen && "active")} id="header">
      <div className="wrapper">
        <div className="left">
          <h1>Reeth Dasgupta</h1>
            <div className="icon-container">
            <a href="http://github.com/reethd"><FaGithub className="icon" style={{color: "white"}}/></a>
            <a href="https://www.linkedin.com/in/reethdasgupta/"><FaLinkedinIn className="icon" style={{color: "white"}}/></a> 
            <a href="mailto:reeth.dasgupta@gmail.com"><FaEnvelope className="icon" style={{color: "white"}}/></a> 
            <a href="tel:678-559-4629"><FaPhoneSquare className="icon" style={{color: "white"}}/></a>             
            </div>          
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  )
}
