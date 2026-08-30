import { useState } from "react";
const SYMBOL_LEGEND = [
  { symbol: "p", meaning: "In progress" },
  { symbol: "c", meaning: "Complete" },
  { symbol: "o", meaning: "On hold" },
];

export default function SymbolKey() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="group relative w-5 h-5 rounded-full border border-neutral-400 text-xs flex items-center justify-center hover:bg-neutral-200"
        aria-label="Show symbol key"
      >
        ?
        
        {!isOpen && (
          <span className="pointer-events-none absolute bottom-full mb-1 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-neutral-800 text-white text-xs px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
            Symbol key
          </span>
        )}
      </button>

      {isOpen && (
        <div className="absolute z-10 top-full mt-2 right-0 w-56 border border-neutral-300 bg-white shadow-md rounded-sm p-3">
          <p className="text-xs font-medium mb-2">Symbol key</p>
          <ul className="space-y-1">
            {SYMBOL_LEGEND.map((entry) => (
              <li key={entry.symbol} className="flex items-center gap-2 text-xs">
                <span className="w-4">{entry.symbol}</span>
                <span className="text-neutral-600">{entry.meaning}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
