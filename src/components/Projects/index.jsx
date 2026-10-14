import { useState, useEffect } from 'react';
import { projects } from '../features/ProjectFeatures';
import SectionHeader from '../ui/SectionHeader';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

const ProjectSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedProject]);

  return (
    <section id="projects" className="bg-white py-24 px-6 font-sans relative scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge="Selected Projects"
          title={<>Projects in <span className="text-[#facc15]">Progress</span></>}
          subtitle="A selection of systems I’m building across business management, productivity, payment reconciliation, and Wi-Fi subscription management."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} onClick={setSelectedProject} />
          ))}
        </div>

        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}

      </div>
    </section>
  );
};

export default ProjectSection;
