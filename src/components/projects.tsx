import { projects } from '@/data/projects';

import ProjectCard from './project-card';

export default function Projects() {
    const featuredProjects = projects.slice(0, 3);

    return (
        <section className='bg-base-100 py-32'>
            <div className='container mx-auto px-4 md:px-6'>
                <h1 className='mb-4 text-center text-4xl font-semibold'>Our Construction Projects</h1>
                <p className='text-muted-foreground text-center'>
                    Showcasing our expertise in delivering exceptional construction and renovation projects.
                </p>
                <div className='grid gap-5 pt-14 xl:grid-cols-3'>
                    {featuredProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} variant='homepage' />
                    ))}
                </div>
            </div>
        </section>
    );
}
