import { projects } from "../data/projects";
import { interests } from "../data/interests";
import SectionBox from "../components/SectionBox";

export default function Dashboard() {
  const recentProjects = projects.slice(0, 2);

  return (
    <div>
      <div className="flex items-center gap-4 mb-6">
        <div className="w-16 h-16 bg-red-900 rounded-sm shrink-0" />
        <p className="text-sm">Welcome, I'm Althaea!</p>
      </div>

      <div className="space-y-4">
        <SectionBox title="Interests + Skills">
          <p className="text-sm text-neutral-700">
            {interests
              .slice(0, 3)
              .map((group) => group.category)
              .join(" · ")}
          </p>
        </SectionBox>

        <SectionBox title="Recent Updates">
          <div className="space-y-3">
            {recentProjects.map((project) => (
              <div key={project.id}>
                <p className="text-sm font-medium">{project.title}</p>
                <p className="text-xs text-neutral-500">{project.dateRange}</p>
              </div>
            ))}
          </div>
        </SectionBox>
      </div>
    </div>
  );
}
