import { useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {
  weatherDashboard,
  socialNetworkApi,
  everybodyEats,
  readmeGenerator,
  employeeTracker,
  digitalDiyBulletinBoard,
  freeSchool,
} from "../../portfolioData";

export default function Portfolio() {
  const [selected, setSelected] = useState("weather dashboard");

  const list = [
    {
      id: "weather dashboard",
      title: "Weather Dashboard",
    },
    {
      id: "social network api",
      title: "Social Network API",
    },
    {
      id: "everybody eats",
      title: "Everybody Eats",
    },
    {
      id: "readme generator",
      title: "Readme Generator",
    },
    {
      id: "employee tracker",
      title: "Employee Tracker",
    },
    {
      id: "digital diy bulletin board",
      title: "Digital DIY Bulletin Board",
    },
    {
      id: "free school",
      title: "Free School",
    },
  ];

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        <div className="item">
          <img src="../assets/weatherDash.png" />
          <h3>Weather Dashboard</h3>
        </div>
        <div className="item">
          <img src="../assets/socialNetwork.png" />
          <h3>Social Network API</h3>
        </div>
        <div className="item">
          <img src="../assets/everybodyEats.png" />
          <h3>Everybody Eats</h3>
        </div>
        <div className="item">
          <img src="../assets/readmeGenerator.png" />
          <h3>Readme Generator</h3>
        </div>
        <div className="item">
          <img src="../assets/employeeTracker.png" />
          <h3>Employee Tracker</h3>
        </div>
        <div className="item">
          <img src="../assets/ddbb.png" />
          <h3>Digital DIY Bulletin Board</h3>
        </div>
        <div className="item">
          <img src="../assets/freeschool.png" />
          <h3>Free School</h3>
        </div>
      </div>
    </div>
  );
}
