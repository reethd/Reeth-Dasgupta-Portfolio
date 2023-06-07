import { useEffect, useState } from "react";
import "./portfolio.scss";
import { data } from "../../portfolioData";
import { FaCaretRight, FaCaretLeft } from "react-icons/fa";


export default function Portfolio() {
  let [currentSlide, setCurrentSlide] = useState(0);

  const handleClick = (direction) => {
    direction === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : data.length - 1)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);

    console.log(currentSlide);
  };

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="left-container">
                  <h2>{d.title}</h2>
                  <p>{d.description}</p>
                  <div className="button-container">
                    <a href={d.repo} className="btn">
                      Github Link
                    </a>

                    

                    {d.link ? <a href={d.link} className="btn">
                        Deployed Link
                      </a>
                     : null}
                  </div>
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="nav-dots">
        {data.map((d)=> (
          <div className={currentSlide === d.id ? "dot active" : "dot"} onClick={()=> setCurrentSlide(d.id)}></div>
        ))}
      </div>
      <FaCaretLeft className="arrow left" onClick={() => handleClick("left")} />
      <FaCaretRight className="arrow right" onClick={() => handleClick()} />
    </div>
  );
}
