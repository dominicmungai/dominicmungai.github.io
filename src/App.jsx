import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Resume from "./components/Resume";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Home />
      <About />
      <Resume />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}
