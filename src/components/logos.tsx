import Link from 'next/link';

import { Button } from '@/registry/new-york-v4/ui/button';

import { ArrowRight } from 'lucide-react';

const logos = [
    {
        id: 'ssip',
        description: 'SSIP',
        image: '/images/ssip.webp'
    },
    {
        id: 'safe-contractor',
        description: 'Safe Contractor',
        image: '/images/safe-contractor.webp'
    }
];

export default function Logos() {
    return (
        <section className='bg-base-100 py-32'>
            <div className='container mx-auto px-4 md:px-6'>
                <div className='border-border grid overflow-hidden rounded-xl border md:grid-cols-2'>
                    <div className='my-auto px-6 py-10 sm:px-10 sm:py-12 lg:p-16'>
                        <div className='w-full md:max-w-md'>
                            <h2 className='mb-4 text-2xl font-semibold lg:text-3xl'>Our certifications say it all.</h2>
                            <p className='mb-6 text-lg'>We are proud to be certified by the following organizations.</p>
                            <Link href='/contact'>
                                <Button className='w-full md:w-fit'>
                                    <ArrowRight className='mr-2 size-5' />
                                    Get in touch
                                </Button>
                            </Link>
                        </div>
                    </div>
                    <div className='border-border grid grid-cols-3 border-t md:border-t-0 md:border-l'>
                        {logos.map((logo) => (
                            <div
                                key={logo.id}
                                className='border-border -mb-px flex items-center justify-center border-r border-b p-5 nth-[3n]:border-r-0 sm:p-6'>
                                <img
                                    src={logo.image}
                                    alt={logo.description}
                                    className='size-12 object-cover object-center sm:size-16 lg:size-24'></img>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
