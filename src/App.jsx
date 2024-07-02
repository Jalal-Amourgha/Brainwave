import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Generative from "./components/Generative";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Underline from "./components/Underline";

function App() {
  return (
    <>
      <div className="container  pb-[500px] mx-auto pt-10 border-r-[1px] border-l-[1px] border-n-6 overflow-hidden">
        <Navbar />
        <Hero />
        <Underline />
        <Benefits />
        <Underline />
        <Collaboration />
        <Underline />
        <Generative />
      </div>
    </>
  );
}

export default App;
