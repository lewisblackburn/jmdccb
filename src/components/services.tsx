import Link from 'next/link';

import { Building2, ChevronRight, Clock, Hammer, Shield, Users, Wrench } from 'lucide-react';

const services = [
    {
        title: 'Expert Craftsmanship',
        description:
            'Our team of skilled professionals delivers exceptional quality in every project, ensuring your construction needs are met with precision and care.',
        icon: <Hammer className='text-primary size-6' />,
        link: '#'
    },
    {
        title: 'Licensed & Insured',
        description:
            'Rest easy knowing your project is protected. We maintain full licensing and comprehensive insurance coverage for all our construction services.',
        icon: <Shield className='text-primary size-6' />,
        link: '#'
    },
    {
        title: 'Custom Solutions',
        description:
            'From residential renovations to commercial construction, we provide tailored solutions that perfectly match your vision and requirements.',
        icon: <Building2 className='text-primary size-6' />,
        link: '#'
    },
    {
        title: 'Experienced Team',
        description:
            'With over 15 years of industry experience, our dedicated team brings expertise and professionalism to every project we undertake.',
        icon: <Users className='text-primary size-6' />,
        link: '#'
    },
    {
        title: 'Timely Delivery',
        description:
            'We value your time and commit to completing projects on schedule. Our efficient processes ensure timely delivery without compromising quality.',
        icon: <Clock className='text-primary size-6' />,
        link: '#'
    },
    {
        title: 'Comprehensive Services',
        description:
            'From initial consultation to final inspection, we offer end-to-end construction services, handling every aspect of your project with care.',
        icon: <Wrench className='text-primary size-6' />,
        link: '#'
    }
];

export default function Services() {
    return (
        <section className='before:bg-primary/10 relative py-32 before:absolute before:inset-0 before:[mask-image:url(/images/block/waves.svg)] before:[mask-size:64px_32px] before:[mask-repeat:repeat]'>
            <div className='to-background absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-transparent'></div>
            <div className='relative container mx-auto px-4 md:px-6'>
                <h2 className='mb-8 max-w-xl text-3xl font-bold text-balance md:text-4xl lg:text-5xl'>Our Services</h2>
                <div className='z-30 grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
                    {services.map((service, index) => (
                        <Link
                            key={index}
                            href={service.link}
                            className='bg-background hover:border-primary block flex flex-col gap-10 rounded-lg border p-8 transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.01] hover:shadow-md'>
                            <div>
                                {service.icon}
                                <h3 className='mt-6 mb-2 font-medium'>{service.title}</h3>
                                <p className='text-muted-foreground text-sm'>{service.description}</p>
                            </div>
                            <div className='text-primary-foreground flex items-center gap-2 text-sm font-medium'>
                                Learn more
                                <ChevronRight className='w-4 transition-transform duration-300 group-hover:translate-x-1' />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
