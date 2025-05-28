'use client';

import { FacebookIcon } from './icons/FacebookIcon';
import { InstagramIcon } from './icons/InstagramIcon';
import { XIcon } from './icons/XIcon';
import { MapPin, Phone } from 'lucide-react';

export default function Banner() {
    return (
        <section className='hidden w-full border-b bg-white py-2 shadow-sm md:block md:py-3'>
            <div className='container mx-auto px-2 md:px-4'>
                <div className='flex flex-col items-center justify-between gap-2 md:flex-row md:gap-2'>
                    <div className='flex flex-col items-center gap-2 md:flex-row md:gap-6'>
                        <div className='flex items-center gap-1 md:gap-2'>
                            <Phone className='text-primary h-3 w-3 md:h-4 md:w-4' />
                            <span className='text-muted-foreground text-xs md:text-sm'>123-456-7890</span>
                        </div>
                        <div className='flex items-center gap-1 md:gap-2'>
                            <MapPin className='text-primary h-3 w-3 md:h-4 md:w-4' />
                            <span className='text-muted-foreground text-xs md:text-sm'>
                                123 Construction Ave, Building City, ST 12345
                            </span>
                        </div>
                    </div>

                    <div className='flex items-center gap-4 md:gap-6'>
                        <a
                            href='https://facebook.com'
                            target='_blank'
                            rel='noreferrer'
                            className='text-muted-foreground hover:text-foreground'>
                            <FacebookIcon className='h-3 w-3 md:h-4 md:w-4' />
                        </a>
                        <a
                            href='https://instagram.com'
                            target='_blank'
                            rel='noreferrer'
                            className='text-muted-foreground hover:text-foreground'>
                            <InstagramIcon className='h-3 w-3 md:h-4 md:w-4' />
                        </a>
                        <a
                            href='https://twitter.com'
                            target='_blank'
                            rel='noreferrer'
                            className='text-muted-foreground hover:text-foreground'>
                            <XIcon className='h-3 w-3 md:h-4 md:w-4' />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
