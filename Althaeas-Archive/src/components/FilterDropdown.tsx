interface FilterDropdownProps {
  options: string[];
  selected: string;
  onChange: (value: string) => void;
}

export default function FilterDropdown({
  options,
  selected,
  onChange,
}: FilterDropdownProps) {
  return (
    <select
      value={selected}
      onChange={(e) => onChange(e.target.value)}
      className="border border-neutral-400 rounded-sm px-2 py-1 text-sm bg-white"
    >
      <option value="All Media Types">All Media Types</option>
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  );
}
