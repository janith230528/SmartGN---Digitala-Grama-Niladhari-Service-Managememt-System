import About from "./Components/Landing-page/About/About.jsx";
import Footer from "./Components/Landing-page/Footer/Footer.jsx";
import Hero from "./Components/Landing-page/Hero/Hero.jsx";
import Navbar from "./Components/Landing-page/Navbar/Navbar.jsx";
import Services from "./Components/Landing-page/Services/Services.jsx";

function App() {
  return (
    <>
    <div className= "App">
      <Navbar />
      <Hero />
      <hr/>
      <About />
      <hr/>
      <Services />
      <hr/>
      <Footer />
      </div>
    </>
  )
}

export default App;