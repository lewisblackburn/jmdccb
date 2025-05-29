import Image from 'next/image';

import { Badge } from '@/registry/new-york-v4/ui/badge';
import { Button } from '@/registry/new-york-v4/ui/button';

import { AuroraText } from './magicui/aurora-text';
import { HyperText } from './magicui/hyper-text';
import { SparklesText } from './magicui/sparkles-text';
import {
    ArrowRight,
    Blocks,
    Check,
    CheckCircle,
    CheckCircle2,
    Clock,
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
                <Image
                    src='https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1920&auto=format&fit=crop'
                    alt='Construction site background'
                    className='h-full w-full object-cover'
                    fill
                />
            </div>

            <div className='relative z-20 container mx-auto px-4 md:px-6'>
                <div className='mx-auto max-w-4xl text-center'>
                    {/* <span className='mb-2 inline-block text-sm font-bold tracking-wider text-white uppercase md:text-base'>
                        JMD Construction
                    </span> */}
                    <h1 className='text-base-50 mt-4 text-4xl leading-tight font-bold text-balance md:text-5xl lg:text-7xl lg:leading-[1.1]'>
                        Building Dreams Into{' '}
                        <AuroraText colors={['#ce2a2d', '#e64c4f', '#f06b6e', '#f8a3a5', '#ffd6d7']}>
                            Reality
                        </AuroraText>
                    </h1>
                    <p className='text-secondary'>
                        Premium construction services for your home or business. Quality craftsmanship, attention to
                        detail, and customer satisfaction guaranteed.
                    </p>
                    <div className='mt-10 flex flex-col justify-center gap-4 sm:flex-row'>
                        <Button size='lg' className='px-8 py-6 text-base font-medium'>
                            Get Free Quote
                            <MoveRight className='ml-2 size-5' strokeWidth={1.5} />
                        </Button>
                        <Button size='lg' variant='secondary' className='px-8 py-6 text-base font-medium'>
                            View Our Projects
                            <MoveRight className='ml-2 size-5' strokeWidth={1.5} />
                        </Button>
                    </div>
                    <div className='mt-10 lg:mt-12'>
                        <ul className='flex flex-wrap justify-center gap-6 text-sm text-white/90 lg:text-base'>
                            <li className='flex items-center gap-2.5 whitespace-nowrap'>
                                <CheckCircle className='text-primary-500 size-5' />
                                Licensed & Insured
                            </li>
                            <li className='flex items-center gap-2.5 whitespace-nowrap'>
                                <CheckCircle className='text-primary-500 size-5' />
                                15+ Years Experience
                            </li>
                            <li className='flex items-center gap-2.5 whitespace-nowrap'>
                                <CheckCircle className='text-primary-500 size-5' />
                                Free Consultations
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
