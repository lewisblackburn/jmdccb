import PageHeader from '@/components/page-header';
import ProjectCard from '@/components/project-card';
import { projects } from '@/data/projects';

export default function ProjectsPage() {
    return (
        <>
            <PageHeader
                title='Projects'
                description='Our latest projects.'
                backgroundImage='https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1920&auto=format&fit=crop'
            />
            <section className='container mx-auto px-4 py-16 md:px-6'>
                <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
                    {projects.map((project) => {
                        return <ProjectCard key={project.id} project={project} />;
                    })}
                </div>
            </section>
        </>
    );
}
