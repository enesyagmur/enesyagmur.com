import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsappButton from "./components/WhatsappButton";

function App() {
  return (
    <div className="font-body">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Contact />
        <WhatsappButton />
      </main>
      <Footer />
    </div>
  );
}

export default App;
