import "./portfolio.scss"

export default function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        <li className="active">Weather Dashboard</li>
        <li>Social Network API</li>
        <li>Everybody Eats</li>
        <li>Readme Generator</li>
        <li>Employee Tracker</li>
        <li>Digital DIY Bulletin Board</li>
        <li>Free School</li>
      </ul>
      <div className="container">
        <div className="item">
          <img src="../assets/weatherDash.png"/>
          <h3>Weather Dashboard</h3>
        </div>
        <div className="item">
          <img src="../assets/socialNetwork.png"/>
          <h3>Social Network API</h3>
        </div>
        <div className="item">
          <img src="../assets/everybodyEats.png"/>
          <h3>Everybody Eats</h3>
        </div>
        <div className="item">
          <img src="../assets/readmeGenerator.png"/>
          <h3>Readme Generator</h3>
        </div>
        <div className="item">
          <img src="../assets/employeeTracker.png"/>
          <h3>Employee Tracker</h3>
        </div>
        <div className="item">
          <img src="../assets/ddbb.png"/>
          <h3>Digital DIY Bulletin Board</h3>
        </div>
        <div className="item">
          <img src="../assets/freeschool.png"/>
          <h3>Free School</h3>
        </div>
      </div>
    </div>
  )
}
