import "./home.scss"
import{ FaChevronDown } from "react-icons/fa"
import{init} from "ityped"
import { useEffect, useRef } from "react"

export default function Home() {

    const textRef = useRef();

    useEffect(()=>{
      init(textRef.current, {
        showCursor: true,
        strings:["Fullstack Developer", "Web Designer"],
      });
    },[]);

  return (
    <div className="home" id="home">
        <div className="left">
            <div className="imgContainer"><img src="assets/headshot.png" alt="Hi! It's me, Reeth!"/></div>
            
        </div>
        <div className="right">
            <div className="wrapper">
                <h2>Hello and welcome! My name is </h2>
                <h1>Reeth Dasgupta</h1>
                <h3>Freelance <span ref={textRef}></span></h3>
            </div>
            <div className="arrow-container">
            <a href="#about"><FaChevronDown style={{fontSize:"8vw"}}/></a>
            </div>
        </div>
    </div>
  )
}
