import { NavLink } from "react-router-dom";

// Dashboard stands alone at the top, like AO3's own dashboard link
const topNavItems = [{ to: "/dashboard", label: "Dashboard" },
{ to: "/profile", label: "Profile" },
];

// core archive pages
const mainNavItems = [
  { to: "/projects", label: "Projects" },
  { to: "/bookmarks", label: "Bookmarks" },
  { to: "/interests", label: "Interests" },
];

// separate group for the misc/highlights/stats window
{/*const extraNavItems = [{ to: "/Misc", label: "Miscellaneous" }];*/ }

function navLinkClass({ isActive }: { isActive: boolean }) {
  return `px-4 py-3 text-sm text-right ${isActive
      ? "bg-neutral-200 font-medium"
      : "hover:bg-neutral-100 text-neutral-700"
    }`;
}

export default function Sidebar() {
  return (
    <aside className="w-48 shrink-0 border-r border-neutral-300 bg-white">
      <nav className="flex flex-col">
        {topNavItems.map((item) => (
          <NavLink key={item.to} to={item.to} className={navLinkClass}>
            {item.label}
          </NavLink>
        ))}

        {/* divider between Dashboard and the rest, matching AO3 */}
        <div className="border-t border-neutral-300 my-2" />

        {mainNavItems.map((item) => (
          <NavLink key={item.to} to={item.to} className={navLinkClass}>
            {item.label}
          </NavLink>
        ))}

        {/* divider before the highlights/stats group 
        <div className="border-t border-neutral-300 my-2" />

        {extraNavItems.map((item) => (
          <NavLink key={item.to} to={item.to} className={navLinkClass}>
            {item.label}
          </NavLink>
        ))}*/}
      </nav>
    </aside>
  );
}