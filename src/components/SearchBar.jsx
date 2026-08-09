import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();

    if (!query.trim()) return;

    navigate(`/search?q=${encodeURIComponent(query.trim())}`);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="w-full max-w-3xl"
    >
      <div
        className="
          flex items-center gap-3
          rounded-2xl
          border border-white/10
          bg-white/[0.07]
          px-4 py-3
          backdrop-blur-xl
          shadow-2xl shadow-blue-500/10
          transition
          focus-within:border-blue-400/50
          focus-within:shadow-blue-500/20
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
            rounded-xl
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

      </div>
    </form>
  );
}