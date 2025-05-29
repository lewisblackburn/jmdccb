'use client';

import { useParams } from 'next/navigation';

import PageHeader from '@/components/page-header';
import { projects } from '@/data/projects';

export default function ProjectPage() {
    const { id } = useParams();
    const project = projects.find((project) => project.id === id);

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
