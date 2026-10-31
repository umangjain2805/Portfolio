import type { Project } from "@/data/content";
// Replace the abstract geometry by supplying image in data/content.ts.
export default function ProjectMedia({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <div className={`project-media project-media-${index}`} aria-hidden="true">
      {project.image ? (
        <div
          className="project-image"
          style={{ backgroundImage: `url(${project.image})` }}
        />
      ) : (
        <>
          <div className="media-grid" />
          <div className="media-orbit orbit-one" />
          <div className="media-orbit orbit-two" />
          <span className="media-number">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="media-caption">{project.name}</span>
          <span className="media-cross cross-one">+</span>
          <span className="media-cross cross-two">+</span>
        </>
      )}
    </div>
  );
}
