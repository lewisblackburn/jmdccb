import Link from 'next/link';

import { Badge } from '@/registry/new-york-v4/ui/badge';
import { Button } from '@/registry/new-york-v4/ui/button';

import ImageWithSkeleton from './image-with-skeleton';
import { AuroraText } from './magicui/aurora-text';
import { HyperText } from './magicui/hyper-text';
import { SparklesText } from './magicui/sparkles-text';
import {
    ArrowRight,
    Award,
    Blocks,
    Check,
    CheckCircle,
    CheckCircle2,
    Clock,
    DollarSign,
    MessagesSquare,
    MoveRight,
    Phone,
    Shield,
    Users,
    Wrench,
    Zap
} from 'lucide-react';

export default function Hero() {
    return (
        <section className={'relative py-20 md:py-28 lg:py-36'}>
            <div className='absolute inset-0 z-0'>
                <div className='bg-base-1000/70 absolute inset-0 z-10' />
                <ImageWithSkeleton
                    src='https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1920&auto=format&fit=crop'
                    alt='Construction site background'
                    imageClassName='h-full w-full object-cover'
                    fill
                />
            </div>

            <div className='relative z-20 container mx-auto px-4 md:px-6'>
                <div className='mx-auto max-w-4xl text-center'>
                    <span className='mb-2 inline-block text-sm font-bold tracking-wider text-white uppercase md:text-base'>
                        JM Developments
                    </span>
                    <h1 className='text-base-50 mt-4 text-4xl leading-tight font-bold text-balance md:text-5xl lg:text-7xl lg:leading-[1.1]'>
                        Building a Better Future
                    </h1>
                    <p className='text-secondary mt-6 text-lg'>
                        Leading contractors in Civils, Construction and Building industries, delivering projects safely,
                        within budget, and to the highest standards required by our clients.
                    </p>
                    <div className='mt-10 flex flex-col justify-center gap-4 sm:flex-row'>
                        <Link href='/contact'>
                            <Button size='lg' className='px-8 py-6 text-base font-medium'>
                                Get in Touch
                                <MoveRight className='ml-2 size-5' strokeWidth={1.5} />
                            </Button>
                        </Link>
                        <Link href='/projects'>
                            <Button size='lg' variant='secondary' className='px-8 py-6 text-base font-medium'>
                                View Our Projects
                                <MoveRight className='ml-2 size-5' strokeWidth={1.5} />
                            </Button>
                        </Link>
                    </div>
                    <div className='mt-10 lg:mt-12'>
                        <ul className='flex flex-wrap justify-center gap-6 text-sm text-white/90 lg:text-base'>
                            <li className='flex items-center gap-2.5 whitespace-nowrap'>
                                <Shield className='text-primary-500 size-5' />
                                Safe Contractor Accredited
                            </li>
                            <li className='flex items-center gap-2.5 whitespace-nowrap'>
                                <Clock className='text-primary-500 size-5' />
                                On-Time Delivery
                            </li>
                            <li className='flex items-center gap-2.5 whitespace-nowrap'>
                                <DollarSign className='text-primary-500 size-5' />
                                Budget Conscious
                            </li>
                            <li className='flex items-center gap-2.5 whitespace-nowrap'>
                                <Award className='text-primary-500 size-5' />
                                Highest Standards
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
