// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Search } from "lucide-react";

// export default function SearchBar() {
//   const [query, setQuery] = useState("");
//   const navigate = useNavigate();

//   const handleSearch = (e) => {
//     e.preventDefault();

//     if (!query.trim()) return;

//     navigate(`/search?q=${encodeURIComponent(query.trim())}`);
//   };

//   return (
//     <form
//       onSubmit={handleSearch}
//       className="w-full max-w-3xl"
//     >
//       <div
//         className="
//           flex items-center gap-3
//           rounded-2xl
//           border border-white/10
//           bg-white/[0.07]
//           px-4 py-3
//           backdrop-blur-xl
//           shadow-2xl shadow-blue-500/10
//           transition
//           focus-within:border-blue-400/50
//           focus-within:shadow-blue-500/20
//         "
//       >

//         {/* Search Icon */}
//         <Search
//           size={22}
//           className="shrink-0 text-slate-400"
//         />

//         {/* Input */}
//         <input
//           type="text"
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//           placeholder="Search Java, Spring Boot, React..."
//           className="
//             min-w-0
//             flex-1
//             bg-transparent
//             py-2
//             text-white
//             outline-none
//             placeholder:text-slate-500
//           "
//         />

//         {/* Search Button */}
//         <button
//           type="submit"
//           className="
//             shrink-0
//             rounded-xl
//             bg-blue-500
//             px-6
//             py-2.5
//             font-medium
//             text-white
//             transition
//             hover:bg-blue-400
//             active:scale-95
//           "
//         >
//           Search
//         </button>

//       </div>
//     </form>
//   );
// }

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import { getSuggestions } from "../services/suggestionService";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const navigate = useNavigate();

  // Fetch suggestions while typing
  useEffect(() => {
    if (!query.trim()) {
      setSuggestions([]);
      setShowSuggestions(false);
      return;
    }

    const timer = setTimeout(async () => {
      try {
        const data = await getSuggestions(query.trim());

        setSuggestions(data);
        setShowSuggestions(true);
      } catch (error) {
        console.error("Suggestions failed:", error);
        setSuggestions([]);
        setShowSuggestions(false);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [query]);

  // Search
  const handleSearch = (e) => {
    e.preventDefault();

    if (!query.trim()) return;

    setShowSuggestions(false);

    navigate(`/search?q=${encodeURIComponent(query.trim())}`);
  };

  // Select suggestion
  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion);
    setShowSuggestions(false);

    navigate(`/search?q=${encodeURIComponent(suggestion)}`);
  };

  return (
    <div className="relative w-full">
      <form
        onSubmit={handleSearch}
        className="
          flex
          w-full
          items-center
          gap-3
          border
          border-slate-700
          bg-slate-900/80
          px-4
          py-2
          shadow-lg
          backdrop-blur-md
        "
      >
        {/* Search Icon */}
        <Search
          size={22}
          className="shrink-0 text-slate-400"
        />

        {/* Input */}
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => {
            if (suggestions.length > 0) {
              setShowSuggestions(true);
            }
          }}
          onBlur={() => {
            setTimeout(() => {
              setShowSuggestions(false);
            }, 150);
          }}
          placeholder="Search Java, Spring Boot, React..."
          className="
            min-w-0
            flex-1
            bg-transparent
            py-2
            text-white
            outline-none
            placeholder:text-slate-500
          "
        />

        {/* Search Button */}
        <button
          type="submit"
          className="
            shrink-0
            bg-blue-500
            px-6
            py-2.5
            font-medium
            text-white
            transition
            hover:bg-blue-400
            active:scale-95
          "
        >
          Search
        </button>
      </form>

      {/* Suggestions Dropdown */}
      {showSuggestions && suggestions.length > 0 && (
        <div
          className="
            absolute
            left-0
            right-0
            top-full
            z-50
            mt-1
            overflow-hidden
            border
            border-slate-700
            bg-slate-900
            shadow-2xl
          "
        >
          {suggestions.map((suggestion, index) => (
            <button
              key={`${suggestion}-${index}`}
              type="button"
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => handleSuggestionClick(suggestion)}
              className="
                flex
                w-full
                items-center
                gap-3
                px-4
                py-3
                text-left
                text-sm
                text-slate-300
                transition
                hover:bg-slate-800
                hover:text-white
              "
            >
              <Search
                size={16}
                className="shrink-0 text-slate-500"
              />

              <span className="truncate">
                {suggestion}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

