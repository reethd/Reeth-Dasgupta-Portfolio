import Header from "./components/header/Header";
import About from "./components/about/About";
import Portfolio from "./components/portfolio/Portfolio";
import Resume from "./components/resume/Resume";
import Contact from "./components/contact/Contact";
import Home from "./components/home/Home";
import "./app.scss";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="sections">
        <Home />
        <About />
        <Portfolio />
        <Resume />
        <Contact />
      </div>
    </div>
  );
}

export default App;
