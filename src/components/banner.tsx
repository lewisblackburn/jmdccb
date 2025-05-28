'use client';

import { FacebookIcon } from './icons/FacebookIcon';
import { InstagramIcon } from './icons/InstagramIcon';
import { XIcon } from './icons/XIcon';
import { MapPin, Phone } from 'lucide-react';

export default function Banner() {
    return (
        <section className='w-full border-b bg-white py-3 shadow-sm'>
            <div className='container mx-auto'>
                <div className='flex items-center justify-between gap-2'>
                    <div className='flex items-center gap-6'>
                        <div className='flex items-center gap-2'>
                            <Phone className='text-primary h-4 w-4' />
                            <span className='text-muted-foreground text-sm'>123-456-7890</span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <MapPin className='text-primary h-4 w-4' />
                            <span className='text-muted-foreground text-sm'>
                                123 Construction Ave, Building City, ST 12345
                            </span>
                        </div>
                    </div>

                    <div className='flex items-center gap-6'>
                        <a
                            href='https://facebook.com'
                            target='_blank'
                            rel='noreferrer'
                            className='text-muted-foreground hover:text-foreground'>
                            <FacebookIcon className='h-4 w-4' />
                        </a>
                        <a
                            href='https://instagram.com'
                            target='_blank'
                            rel='noreferrer'
                            className='text-muted-foreground hover:text-foreground'>
                            <InstagramIcon className='h-4 w-4' />
                        </a>
                        <a
                            href='https://twitter.com'
                            target='_blank'
                            rel='noreferrer'
                            className='text-muted-foreground hover:text-foreground'>
                            <XIcon className='h-4 w-4' />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
