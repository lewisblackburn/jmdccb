import { Project } from '@/data/projects';

import { ChevronRight } from 'lucide-react';

interface ProjectCardProps {
    project: Project;
    variant?: 'homepage' | 'projects';
}

export default function ProjectCard({ project, variant = 'homepage' }: ProjectCardProps) {
    const Icon = project.icon;

    if (variant === 'homepage') {
        return (
            <a href={`/projects/${project.id}`} className='group relative overflow-hidden rounded-xl'>
                <img
                    src={project.image}
                    alt={project.title}
                    className='h-full max-h-[450px] w-full rounded-xl object-cover object-center'
                />
                <div className='from-base-950/80 to-base-900/60 absolute right-0 bottom-0 left-0 h-full rounded-xl bg-linear-to-t md:h-[50%] md:transition-all md:duration-300 md:group-hover:h-full'></div>
                <div className='absolute top-0 flex h-full w-full flex-col justify-between p-7'>
                    <span className='bg-primary text-primary-foreground ml-auto flex w-fit items-center gap-1 rounded-full px-4 py-2.5 text-sm font-semibold'>
                        <Icon className='h-auto w-6' />
                        {project.category}
                    </span>
                    <div className='text-base-50 flex flex-col gap-5'>
                        <h4 className='text-2xl font-semibold lg:text-3xl'>{project.title}</h4>
                        <p className='flex items-center gap-1 font-medium'>
                            View project details
                            <ChevronRight className='h-auto w-4' />
                        </p>
                    </div>
                </div>
            </a>
        );
    }

    return (
        <div className='group bg-base-200 relative overflow-hidden rounded-xl'>
            <img src={project.image} alt={project.title} className='h-48 w-full object-cover' />
            <div className='p-6'>
                <div className='mb-4 flex items-center justify-between'>
                    <span className='bg-primary text-primary-foreground flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold'>
                        <Icon className='h-4 w-4' />
                        {project.category}
                    </span>
                </div>
                <h3 className='mb-2 text-xl font-semibold'>{project.title}</h3>
                <p className='text-muted-foreground mb-4'>{project.description}</p>
                <div className='grid gap-2 text-sm'>
                    <div className='flex justify-between'>
                        <span className='text-muted-foreground'>Location:</span>
                        <span>{project.details.location}</span>
                    </div>
                    <div className='flex justify-between'>
                        <span className='text-muted-foreground'>Completion:</span>
                        <span>{project.details.completionDate}</span>
                    </div>
                    <div className='flex justify-between'>
                        <span className='text-muted-foreground'>Size:</span>
                        <span>{project.details.size}</span>
                    </div>
                    <div className='flex justify-between'>
                        <span className='text-muted-foreground'>Client:</span>
                        <span>{project.details.client}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
