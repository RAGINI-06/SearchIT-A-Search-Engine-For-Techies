import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import Background from "../components/Background";
import SearchBar from "../components/SearchBar";
import SearchResults from "../components/SearchResults";
import { searchPages } from "../services/searchService";

export default function SearchPage() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const location = useLocation();

  const params = new URLSearchParams(location.search);
  const keyword = params.get("q") || "";

  useEffect(() => {
    if (!keyword) {
      setResults([]);
      return;
    }

    const fetchResults = async () => {
      setLoading(true);

      try {
        const data = await searchPages(keyword);
        setResults(data);
      } catch (error) {
        console.error("Search failed:", error);
        setResults([]);
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [keyword]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050816]">
      
      {/* Particles */}
      <Background />

      {/* Content */}
      <div className="relative z-10 min-h-screen px-6 py-8">

        {/* Header */}
        <div className="mx-auto max-w-5xl">

          {/* Logo */}
          <div className="mb-8">
            <h1
              className="
                text-3xl
                font-extrabold
                tracking-tight
                text-white
              "
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Search
              <span className="text-blue-400">IT</span>
            </h1>
          </div>

          {/* Search bar */}
          <SearchBar />

          {/* Search information */}
          {keyword && (
            <div className="mt-8">
              <p className="text-sm text-slate-400">
                Search results for
              </p>

              <h2 className="mt-1 text-2xl font-semibold text-white">
                "{keyword}"
              </h2>
            </div>
          )}

          {/* Loading */}
          {loading && (
            <div className="mt-10 flex items-center gap-3 text-slate-400">
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-blue-400 border-t-transparent" />
              Searching...
            </div>
          )}

          {/* Results */}
          {!loading && (
            <SearchResults results={results} />
          )}

        </div>
      </div>
    </div>
  );
}