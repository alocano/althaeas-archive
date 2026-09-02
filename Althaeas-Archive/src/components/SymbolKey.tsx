import { useState } from "react";
import type { SymbolGrid } from "../types";
import { symbolLegend } from "../data/symbolLegend";

interface SymbolGridDisplayProps {
  grid: SymbolGrid;
  size?: number; // pixel size of symbols quadrant, defaults to 16
}

function Quadrant({ src, size }: { src: string; size: number }) {
  return (
    <div
      className="border border-neutral-300 bg-white overflow-hidden"
      style={{ width: size, height: size }}
    >
      <img src={src} alt="" className="w-full h-full object-cover" />
    </div>
  );
}

export default function SymbolGridDisplay({
  grid,
  size = 24,
}: SymbolGridDisplayProps) {
  const [isOpen, setIsOpen] = useState(false);

  // top-left = software, top-right = hardware, bottom-left = demo,
  // bottom-right = complete/incomplete (always one or the other, never blank)
  const topLeft = grid.isSoftware ? "/symbols/Software.svg" : "/symbols/off.svg";
  const topRight = grid.isHardware ? "/symbols/Hardware.svg" : "/symbols/off.svg";
  const bottomLeft = grid.hasDemo ? "/symbols/Demo.svg" : "/symbols/off.svg";
  const bottomRight = grid.isComplete
    ? "/symbols/Complete.svg"
    : "/symbols/Incomplete.svg";

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="inline-grid grid-cols-2 gap-0.5"
        style={{ cursor: "help" }}
        aria-label="Show symbol key"
      >
        <Quadrant src={topLeft} size={size} />
        <Quadrant src={topRight} size={size} />
        <Quadrant src={bottomLeft} size={size} />
        <Quadrant src={bottomRight} size={size} />
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-white rounded-sm shadow-lg max-w-md w-full mx-4 max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-4 py-3 border-b border-neutral-300">
              <h3 className="font-heading font-semibold text-base">
                Symbols we use on the Archive
              </h3>
            </div>

            <div className="p-4 space-y-3">
              {symbolLegend.map((entry) => (
                <div key={entry.label} className="flex items-center gap-3">
                  <div className="w-8 h-8 border border-neutral-300 shrink-0 overflow-hidden">
                    <img
                      src={entry.image}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium">{entry.label}</p>
                    <p className="text-xs text-neutral-600">
                      {entry.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="px-4 py-3 border-t border-neutral-300 flex justify-between items-center">
              <span className="text-sm font-medium">Symbols key</span>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="text-xs border border-neutral-400 rounded-sm px-3 py-1 hover:bg-neutral-100"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}