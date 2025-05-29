import PageHeader from '@/components/page-header';
import { projects } from '@/data/projects';

import { Building2, Construction, HardHat } from 'lucide-react';

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
                        const Icon = project.icon;

                        return (
                            <div key={project.id} className='group bg-base-200 relative overflow-hidden rounded-xl'>
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
                    })}
                </div>
            </section>
        </>
    );
}
