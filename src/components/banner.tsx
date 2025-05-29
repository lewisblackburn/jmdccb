'use client';

import { companyInfo } from '@/lib/company-info';

import { FacebookIcon } from './icons/FacebookIcon';
import { InstagramIcon } from './icons/InstagramIcon';
import { XIcon } from './icons/XIcon';
import { MapPin, Phone } from 'lucide-react';

export default function Banner() {
    return (
        <section className='border-accent-foreground bg-base-1000 text-base-50 hidden w-full border-b py-2 shadow-sm md:block md:py-3'>
            <div className='container mx-auto px-4 lg:px-0'>
                <div className='flex flex-col items-center justify-between gap-2 md:flex-row md:gap-2'>
                    <div className='flex flex-col items-center gap-2 md:flex-row md:gap-6'>
                        <div className='flex items-center gap-1 md:gap-2'>
                            <Phone className='h-3 w-3 text-[#ce2a2d] md:h-4 md:w-4' />
                            <span className='text-xs md:text-sm'>{companyInfo.contact.phone.julian}</span>
                        </div>
                        <div className='flex items-center gap-1 md:gap-2'>
                            <MapPin className='h-3 w-3 text-[#ce2a2d] md:h-4 md:w-4' />
                            <span className='text-xs md:text-sm'>
                                {companyInfo.contact.address.street}, {companyInfo.contact.address.city},{' '}
                                {companyInfo.contact.address.country}
                            </span>
                        </div>
                    </div>
                    <div className='flex items-center gap-4'>
                        <a href={companyInfo.social.facebook} className='text-base-50 hover:text-[#ce2a2d]'>
                            <FacebookIcon className='h-4 w-4' />
                        </a>
                        <a href={companyInfo.social.twitter} className='text-base-50 hover:text-[#ce2a2d]'>
                            <XIcon className='h-4 w-4' />
                        </a>
                        <a href={companyInfo.social.instagram} className='text-base-50 hover:text-[#ce2a2d]'>
                            <InstagramIcon className='h-4 w-4' />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
