import { useState } from "react";
import { interests } from "../data/interests";
import Card from "../components/Card";
import FilterDropdown from "../components/FilterDropdown";

export default function Interests() {
  const [selectedCategory, setSelectedCategory] = useState("All Media Types");

  const categoryOptions = interests.map((group) => group.category);

  const visibleGroups =
    selectedCategory === "All Media Types"
      ? interests
      : interests.filter((group) => group.category === selectedCategory);

  return (
    <div>
      {/* box thing holding title + filter, matching AO3's filter box */}
      <div className="bg-neutral-100 border border-neutral-300 rounded-sm p-4 mb-4">
        <h2 className="text-lg font-medium mb-3">alocano's Interests + Skills</h2>
        <div className="flex gap-2">
          <FilterDropdown
            options={categoryOptions}
            selected={selectedCategory}
            onChange={setSelectedCategory}
          />
          <button
            type="button"
            className="text-sm border border-neutral-400 rounded-sm px-3 py-1 bg-white hover:bg-neutral-50"
          >
            Show
          </button>
        </div>
      </div>

      <div className="space-y-3">
        {visibleGroups.map((group) => (
          <Card key={group.id}>
            <p className="font-medium text-sm mb-1">{group.category}:</p>
            <p className="text-sm text-neutral-700">{group.items.join(", ")}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
