const ProjectCard = ({ project, onClick }) => (
  <div
    className="group flex h-full cursor-pointer flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#facc15] focus-visible:ring-offset-2 sm:p-6"
    onClick={() => onClick(project)}
    onKeyDown={(e) => e.key === 'Enter' && onClick(project)}
    role="button"
    tabIndex={0}
  >
    <div className="relative mb-5 overflow-hidden rounded-xl border border-slate-100 bg-slate-100">
      <img
        src={project.image}
        alt={project.title}
        className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
      />
    </div>
    <span className="text-[10px] font-black uppercase tracking-widest text-[#a16207]">{project.category}</span>
    <h3 className="mb-3 mt-1 text-2xl font-black text-slate-900 transition-colors group-hover:text-[#a16207]">{project.title}</h3>
    <p className="text-sm leading-relaxed text-slate-500 line-clamp-3">{project.desc}</p>
  </div>
);

export default ProjectCard;
