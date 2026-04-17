import Main from "./components/Main";
import Projects from "./components/Projects";
import SideNav from "./components/SideNav";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";
import Experience from "./components/Experience";

function App() {
  return (
    <>
      <SideNav />
      <Main />
      <Projects />
      <About />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
