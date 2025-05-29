'use client';

import Image from 'next/image';
import { useParams } from 'next/navigation';

import PageHeader from '@/components/page-header';
import { projects } from '@/data/projects';
import { Alert, AlertDescription, AlertTitle } from '@/registry/new-york-v4/ui/alert';
import { Badge } from '@/registry/new-york-v4/ui/badge';

import { Calendar, Clock, DollarSign, MapPin, Ruler, Users } from 'lucide-react';

export default function ProjectPage() {
    const { id } = useParams();
    const project = projects.find((project) => project.id === id);

    if (!project) {
        return (
            <section className='py-16'>
                <div className='container mx-auto px-4'>
                    <Alert>
                        <AlertTitle>Project Not Found</AlertTitle>
                        <AlertDescription>The requested project could not be found.</AlertDescription>
                    </Alert>
                </div>
            </section>
        );
    }

    return (
        <>
            <PageHeader title={project.title} description={project.description} backgroundImage={project.image} />
            <section className='py-16'>
                <div className='container mx-auto px-4'>
                    <div className='grid gap-12 lg:grid-cols-3'>
                        <div className='space-y-12 lg:col-span-2'>
                            <Image
                                src={project.image}
                                alt={project.title}
                                width={1000}
                                height={1000}
                                className='aspect-video w-full rounded-lg object-cover'
                            />

                            <div className='space-y-8'>
                                <div>
                                    <h2 className='mb-4 text-xl font-semibold'>Project Overview</h2>
                                    <p className='text-muted-foreground'>{project.description}</p>
                                </div>

                                <div className='grid gap-6 sm:grid-cols-2'>
                                    <div className='flex items-start gap-4'>
                                        <MapPin className='text-primary mt-1 h-5 w-5' />
                                        <div>
                                            <h3 className='text-sm font-medium'>Location</h3>
                                            <p className='text-muted-foreground text-sm'>{project.details.location}</p>
                                        </div>
                                    </div>
                                    <div className='flex items-start gap-4'>
                                        <Calendar className='text-primary mt-1 h-5 w-5' />
                                        <div>
                                            <h3 className='text-sm font-medium'>Completion Date</h3>
                                            <p className='text-muted-foreground text-sm'>
                                                {project.details.completionDate}
                                            </p>
                                        </div>
                                    </div>
                                    <div className='flex items-start gap-4'>
                                        <Ruler className='text-primary mt-1 h-5 w-5' />
                                        <div>
                                            <h3 className='text-sm font-medium'>Project Size</h3>
                                            <p className='text-muted-foreground text-sm'>{project.details.size}</p>
                                        </div>
                                    </div>
                                    <div className='flex items-start gap-4'>
                                        <Users className='text-primary mt-1 h-5 w-5' />
                                        <div>
                                            <h3 className='text-sm font-medium'>Client</h3>
                                            <p className='text-muted-foreground text-sm'>{project.details.client}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='space-y-8'>
                                <h2 className='text-xl font-semibold'>Project Details</h2>
                                <div className='grid gap-6 sm:grid-cols-2'>
                                    <div className='flex items-start gap-4'>
                                        <Clock className='text-primary mt-1 h-5 w-5' />
                                        <div>
                                            <h3 className='text-sm font-medium'>Timeline</h3>
                                            <p className='text-muted-foreground text-sm'>
                                                12 months construction period
                                            </p>
                                        </div>
                                    </div>
                                    <div className='flex items-start gap-4'>
                                        <DollarSign className='text-primary mt-1 h-5 w-5' />
                                        <div>
                                            <h3 className='text-sm font-medium'>Budget</h3>
                                            <p className='text-muted-foreground text-sm'>$5M - $10M</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='space-y-6'>
                            <div className='bg-card rounded-lg border p-6'>
                                <h2 className='mb-4 text-lg font-semibold'>Project Status</h2>
                                <Badge variant='outline' className='mb-4'>
                                    {project.category}
                                </Badge>
                                <Alert>
                                    <AlertTitle>Current Status</AlertTitle>
                                    <AlertDescription>
                                        This project is currently in progress and is scheduled for completion in{' '}
                                        {project.details.completionDate}.
                                    </AlertDescription>
                                </Alert>
                            </div>

                            <div className='bg-card rounded-lg border p-6'>
                                <h2 className='mb-4 text-lg font-semibold'>Key Features</h2>
                                <ul className='space-y-2 text-sm'>
                                    <li>• Sustainable design principles</li>
                                    <li>• Energy-efficient systems</li>
                                    <li>• Modern infrastructure</li>
                                    <li>• Advanced security systems</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
