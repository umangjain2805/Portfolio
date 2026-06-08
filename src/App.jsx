import Navbar from "./components/Navbar/Navbar";
import Hero from "./sections/Hero/Hero";

function App() {
  return (
    <main className="max-w-7xl mx-auto p-6">
      <div
        className="
        rounded-[40px]
        bg-white/20
        backdrop-blur-xl
        border
        border-white/40
        overflow-hidden
        shadow-xl
      "
      >
        <Navbar />
        <Hero />
      </div>
    </main>
  );
}

export default App;