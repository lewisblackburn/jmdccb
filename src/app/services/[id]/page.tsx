'use client';

import Image from 'next/image';
import { notFound, useParams } from 'next/navigation';

import ImageWithSkeleton from '@/components/image-with-skeleton';
import PageHeader from '@/components/page-header';
import { services } from '@/data/services';

import { Clock, DollarSign } from 'lucide-react';

export default function ServicePage() {
    const { id } = useParams();
    const service = services.find((service) => service.id === id);

    if (!service) throw notFound();

    return (
        <>
            <PageHeader title={service.title} description={service.description} backgroundImage={service.image} />
            <section className='py-16'>
                <div className='container mx-auto px-4'>
                    <div className='grid gap-12 lg:grid-cols-3'>
                        <div className='space-y-12 lg:col-span-2'>
                            <ImageWithSkeleton
                                src={service.image}
                                alt={service.title}
                                width={1000}
                                height={1000}
                                imageClassName='aspect-video w-full rounded-lg object-cover'
                            />

                            <div className='space-y-8'>
                                <div>
                                    <h2 className='mb-4 text-xl font-semibold'>Service Overview</h2>
                                    <div className='text-muted-foreground space-y-4'>
                                        {service.overview.map((paragraph, index) => (
                                            <p key={index}>{paragraph}</p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='space-y-6'>
                            <div className='bg-card rounded-lg border p-6'>
                                <h2 className='mb-6 text-lg font-semibold'>Service Details</h2>
                                <div className='space-y-6'>
                                    {service.details.map((detail, index) => {
                                        const Icon = detail.icon;

                                        return (
                                            <div key={index} className='flex items-start gap-4'>
                                                <Icon className='text-primary mt-1 h-5 w-5' />
                                                <div>
                                                    <h3 className='text-sm font-medium'>{detail.title}</h3>
                                                    <p className='text-muted-foreground text-sm'>
                                                        {detail.description}
                                                    </p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            <div className='bg-card rounded-lg border p-6'>
                                <h2 className='mb-6 text-lg font-semibold'>Project Information</h2>
                                <div className='space-y-6'>
                                    <div className='flex items-start gap-4'>
                                        <Clock className='text-primary mt-1 h-5 w-5' />
                                        <div>
                                            <h3 className='text-sm font-medium'>Timeline</h3>
                                            <p className='text-muted-foreground text-sm'>Flexible scheduling options</p>
                                        </div>
                                    </div>
                                    <div className='flex items-start gap-4'>
                                        <DollarSign className='text-primary mt-1 h-5 w-5' />
                                        <div>
                                            <h3 className='text-sm font-medium'>Pricing</h3>
                                            <p className='text-muted-foreground text-sm'>Competitive rates</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
