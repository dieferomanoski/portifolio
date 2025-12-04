import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="glass-card group flex flex-col justify-between rounded-2xl p-5 shadow-lg shadow-slate-950/70 transition hover:-translate-y-1 hover:shadow-neon-cyan">
      <div>
        <h3 className="text-base font-semibold text-slate-100">
          {project.title}
        </h3>
        <p className="mt-2 text-sm text-slate-400">{project.description}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.tech.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-slate-700/70 bg-slate-900/60 px-2.5 py-1 text-[11px] font-medium text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-4 flex gap-3 text-xs font-medium">
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            className="text-neon-cyan transition hover:text-neon-magenta"
          >
            Live demo →
          </a>
        )}
        {project.codeUrl && (
          <a
            href={project.codeUrl}
            target="_blank"
            className="text-slate-400 transition hover:text-neon-cyan"
          >
            Source code
          </a>
        )}
      </div>
    </article>
  );
}


