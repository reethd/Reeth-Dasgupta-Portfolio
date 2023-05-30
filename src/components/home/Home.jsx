import "./home.scss"

export default function Home() {
  return (
    <div className="home" id="home">
        <div className="left">
            <div className="imgContainer"><img src="assets/headshot.png" alt="Hi! It's me, Reeth!"/></div>
            
        </div>
        <div className="right">
            <div className="wrapper">
                <h2>Hello and welcome! My name is </h2>
                <h1>Reeth Dasgupta</h1>
                <h3>Fullstack Developer<span></span></h3>
            </div>
        </div>
    </div>
  )
}
