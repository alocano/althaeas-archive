import { projects } from "../data/projects";
import Card from "../components/Card";
import SymbolKey from "../components/SymbolKey";

export default function Projects() {
    return (
        <div>
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-medium">Projects by alocano</h2>
                <SymbolKey />
            </div>

            <div className="space-y-4">
                {projects.map((project) => (
                    <Card key={project.id}>
                        <div className="flex items-start justify-between">
                            <a
                                href={project.repoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-red-900 font-medium underline"
                            >
                                {project.title}
                            </a>
                            <span className="text-xs text-neutral-500 font-timestamp">{project.dateRange}</span>
                        </div>

                        <p className="text-xs text-neutral-500 mt-1">{project.role}</p>

                        {/* stack tags, styled like AO3 tags: underlined, comma separated */}
                        <div className="flex flex-wrap gap-x-1 gap-y-1 mt-2 text-xs">
                            {project.stack.map((tech: string, i: number) => (
                                <span key={tech} className="text-neutral-600">
                  <span className="underline decoration-neutral-400">{tech}</span>
                                    {i < project.stack.length - 1 && ","}
                </span>
                            ))}
                            {project.hasVideo && (
                                <span className="underline decoration-red-900 text-red-900">
                  Video Available
                </span>
                            )}
                            {project.hasDemo && (
                                <span className="underline decoration-red-900 text-red-900">
                  Demo Available
                </span>
                            )}
                        </div>

                        <p className="text-sm text-neutral-700 mt-2">{project.description}</p>

                        <p className="text-xs text-neutral-500 mt-2 italic">
                            My contribution: {project.myContribution}
                        </p>
                    </Card>
                ))}
            </div>
        </div>
    );
}

