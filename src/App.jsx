import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Services from "./components/Services";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Underline from "./components/Underline";
import Space from "./components/Space";
import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="container    mx-auto pt-10 border-r-[1px] border-l-[1px] border-n-6 overflow-hidden">
        <Navbar />
        <Hero />
        <Underline />
        <Benefits />
        <Underline />
        <Collaboration />
        <Underline />
        <Services />
        <Space />
        <Underline />
        <Pricing />
        <Roadmap />

        <Footer />
      </div>
    </>
  );
}

export default App;
