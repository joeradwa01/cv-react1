import Experiance from "./components/Experiance";
import Main from "./components/Main";
import Projects from "./components/Projects";
import SideNav from "./components/SideNav";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";
function App() {
  return (
    <>
      <SideNav />
      <Main />
      <Experiance />
      <About />

      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
