import Header from "./components/header/Header";
import About from "./components/about/About";
import Portfolio from "./components/portfolio/Portfolio";
import Resume from "./components/resume/Resume";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <div className="app">
      <Header />
      <About />
      <Portfolio />
      <Resume />
      <Contact />
    </div>
  );
}

export default App;
