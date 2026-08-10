import Background from "../components/Background";
import SearchBar from "../components/SearchBar";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#020617]">

      <Background />

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6">

        <h1
          className="text-7xl md:text-8xl font-extrabold tracking-tight text-white"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Search
          <span className="text-blue-400">IT</span>
        </h1>

        <p className="mt-5 mb-10 text-lg text-slate-300">
          Search trusted technical documentation
        </p>

        <SearchBar />

      </div>

    </div>
  );
}