import PageHeader from '@/components/page-header';
import { projects } from '@/data/projects';

export default function ProjectPage({ params }: { params: { id: string } }) {
    const project = projects.find((project) => project.id === params.id);

    return (
        <>
            <PageHeader
                title={project?.title ?? 'Project Details'}
                description={project?.description ?? 'View the details of our construction projects.'}
                backgroundImage={project?.image ?? ''}
            />
        </>
    );
}
