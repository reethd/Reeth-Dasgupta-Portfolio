import "./about.scss";

export default function About() {
  return (
    <div className="about" id="about">
      <div className="left">
        <h2>Nice to meet you!</h2>
        <div className="about">
          <p>
            Front and back-end capable web developer with a background in the
            music industry from production to performance as well as the service
            industry. Received full-stack web development certificate from
            Georgia Institute of Technology in 2023. Through the projects
            developed in this program, I have cultivated a skill set that
            includes a familiarity with HTML, CSS, Javascript, MongoDB,
            Express.js, React, and Node.js. Between this program and prior
            professional experience, I've also developed and expanded on the
            ability to work and be productive in high stress environments while
            communicating effectively with a team.
          </p>
        </div>
      </div>
      <div className="right">
        <div className="icon-container">
          <h2>Technologies</h2>
          <ul>
            <li className="icon">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="javascript"/>
            </li>
            <li className="icon">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" alt="html"/>
            </li>
            <li className="icon">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" alt="css"/>
            </li>
            <li className="icon">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg" alt="bootstrap" />
            </li>
            <li className="icon">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" alt="icon"/>
            </li>
            <li className="icon">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" alt="express"/>
            </li>
            <li className="icon">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb"/>
            </li>
            <li className="icon">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt="react"/>
            </li>
            <li className="icon">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" alt="mysql"/>
            </li>
            <li className="icon">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" alt="github"/>
            </li>
            <li className="icon">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain-wordmark.svg" alt="graphql"/>
            </li>
            <li className="icon">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original-wordmark.svg" alt="heroku"/>
            </li>
            <li className="icon">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" alt="npm"/>
            </li>
            <li className="icon">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original-wordmark.svg" alt="vscode"/>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
