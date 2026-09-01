import { projects } from "../data/projects";
import { interests } from "../data/interests";
import SectionBox from "../components/SectionBox";
import { useState } from "react";
import avatarImg from "../assets/me.jpg";
{/* instead of normal profile button under username, connect button will link to LinkedIn profile*/ }
const LINKEDIN_URL = "https://www.linkedin.com/in/alocano";


export default function Dashboard() {
  const [isMuted, setIsMuted] = useState(false);
  const recentProjects = projects.slice(0, 2);

  return (
    <div>
      <div className="flex items-center justify-between gap-4">
        <img
          src={avatarImg}
          alt="Profile avatar"
          className="w-30 h-30 rounded-sm shrink-0 object-cover"
        />

        <div className="flex items-center gap-4">

          <div className="flex flex-col gap-2">
            <p className="text-sm">Welcome, I'm Althaea!</p>
            <div className="flex gap-2">
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs border border-neutral-400 rounded-sm px-3 py-1 hover:bg-neutral-100"
              >
                Connect
              </a>
              <button
                type="button"
                onClick={() => setIsMuted((prev) => !prev)}
                className="text-xs border border-neutral-400 rounded-sm px-3 py-1 hover:bg-neutral-100"
              >
                {isMuted ? ":(" : "Mute"}
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* divider under the avatar row, matching AO3's profile pattern */}
      <div className="border-t border-neutral-300 mt-3 mb-6" />

      <div className="space-y-6">
        <SectionBox title="Interests + Skills">
          <div className="space-y-3">
            {interests.slice(0, 2).map((group) => (
              <div
                key={group.id}
                className="border border-neutral-300 rounded-sm bg-white p-3 shadow-sm"
              >
                <p className="text-sm font-semibold font-heading">{group.category}:</p>
                <p className="text-sm text-neutral-700">{group.items.join(", ")}</p>
              </div>
            ))}
          </div>
        </SectionBox>

        <SectionBox title="Recent Updates">
          <div className="space-y-3">
            {recentProjects.map((project) => (
              <div
                key={project.id}
                className="border border-neutral-300 rounded-sm bg-white p-3 shadow-sm"
              >
                <div className="flex items-baseline justify-between">
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium font-heading text-red-900 underline"
                  >
                    {project.title}
                  </a>
                  <span className="text-xs text-neutral-500 font-timestamp">
                    {project.dateRange}
                  </span>
                </div>
                <p className="text-xs text-neutral-500 mt-0.5">
                  {project.stack.join(", ")}
                </p>
                <p className="text-sm text-neutral-700 mt-1">{project.description}</p>
              </div>
            ))}
          </div>
        </SectionBox>
      </div>
    </div>
  );
}