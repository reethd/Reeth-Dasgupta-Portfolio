import { useEffect, useState } from "react";
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
  const [data, setData] = useState({});

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

  useEffect(() => {
    switch (selected) {
      case "weather dashboard":
        setData(weatherDashboard);
        break;
      case "social network api":
        setData(socialNetworkApi);
        break;
      case "everybody eats":
        setData(everybodyEats);
        break;
      case "readme generator":
        setData(readmeGenerator);
        break;
      case "employee tracker":
        setData(employeeTracker);
        break;
      case "digital diy bulletin board":
        setData(digitalDiyBulletinBoard);
        break;
      case "free school":
        setData(freeSchool);
        break;
      default:
        setData(weatherDashboard);
    }
  }, [selected]);

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
          <img src={data.img} />
          <h3>{data.title}</h3>
          <p>{data.description}</p>
          <div className="button-container">
          
            <a href={data.repo} className="btn">
              Github Link
            </a>
          
          {data.link ? (
            
              <a href={data.link} className="btn">
                Deployed Link
              </a>
            
          ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
