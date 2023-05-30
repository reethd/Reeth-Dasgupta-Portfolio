import "./header.scss"

import { FaPhoneSquare, FaGithub, FaEnvelope, FaLinkedinIn } from 'react-icons/fa'

export default function Header({menuOpen, setMenuOpen}) {
  return (
    <div className={"header " + (menuOpen && "active")} id="header">
      <div className="wrapper">
        <div className="left">
          <h1>Reeth Dasgupta</h1>
            <div className="icon-container">
            <FaGithub className="icon"/>
            <FaLinkedinIn className="icon"/>
            <FaEnvelope className="icon"/>
            <FaPhoneSquare className="icon"/>
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
