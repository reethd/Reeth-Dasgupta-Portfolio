import "./header.scss"

import { FaPhoneSquare, FaGithub, FaEnvelope, FaLinkedinIn } from 'react-icons/fa'

export default function Header() {
  return (
    <div className="header" id="header">
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
        <div className="right"></div>
      </div>
    </div>
  )
}
