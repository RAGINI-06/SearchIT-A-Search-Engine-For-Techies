import { ExternalLink, Globe } from "lucide-react";

export default function SearchResults({ results }) {
  if (!results || results.length === 0) {
    return (
      <div className="mt-10 text-center text-slate-400">
        No results found.
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mt-8 space-y-5">
      {results.map((result, index) => (
        <div
          key={index}
          className="
            group
            rounded-2xl
            border border-white/10
            bg-white/[0.04]
            backdrop-blur-xl
            px-6 py-5
            transition-all duration-300
            hover:bg-white/[0.07]
            hover:border-blue-400/30
            hover:shadow-[0_0_30px_rgba(59,130,246,0.10)]
          "
        >
          {/* URL */}
          <div className="flex items-center gap-2 mb-2">
            <Globe size={15} className="text-blue-400" />

            <span className="text-sm text-slate-400 truncate">
              {result.url}
            </span>
          </div>

          {/* Title */}
          <a
            href={result.url}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex items-center gap-2
              text-xl font-semibold
              text-blue-400
              group-hover:text-blue-300
              transition-colors
            "
          >
            {result.title}

            <ExternalLink
              size={16}
              className="opacity-0 group-hover:opacity-100 transition-opacity"
            />
          </a>

          {/* Snippet */}
          <p className="mt-2 text-sm leading-6 text-slate-300">
            {result.snippet}
          </p>
        </div>
      ))}
    </div>
  );
}