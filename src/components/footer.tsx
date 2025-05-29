import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { services } from '@/data/services';
import { companyInfo } from '@/lib/company-info';

import { FacebookIcon } from './icons/FacebookIcon';
import { InstagramIcon } from './icons/InstagramIcon';
import { XIcon } from './icons/XIcon';

interface FooterProps {
    sections?: {
        title: string;
        links: { name: string; href: string }[];
    }[];
    description?: string;
    socialLinks?: { icon: React.ReactElement; href: string; label: string }[];
    copyright?: string;
    legalLinks?: { name: string; href: string }[];
}

const defaultSections = [
    {
        title: 'Services',
        links: services.map((service) => ({
            name: service.title,
            href: `/services/${service.id}`
        }))
    },
    {
        title: 'Company',
        links: [
            { name: 'Projects', href: '/projects' },
            { name: 'News', href: '/news' },
            { name: 'Contact', href: '/contact' }
        ]
    },
    {
        title: 'Legal',
        links: [
            { name: 'Terms and Conditions', href: '/terms' },
            { name: 'Privacy Policy', href: '/privacy' }
        ]
    }
];

const defaultSocialLinks = [
    { icon: <InstagramIcon className='size-5' />, href: companyInfo.social.instagram, label: 'Instagram' },
    { icon: <FacebookIcon className='size-5' />, href: companyInfo.social.facebook, label: 'Facebook' },
    { icon: <XIcon className='size-5' />, href: companyInfo.social.twitter, label: 'Twitter' }
];

export default function Footer({
    sections = defaultSections,
    description = companyInfo.description,
    socialLinks = defaultSocialLinks,
    copyright = `©${new Date().getFullYear()} ${companyInfo.name}. All rights reserved.`
}: FooterProps) {
    return (
        <section className='bg-base-1000 text-base-50 py-10 lg:py-32'>
            <div className='container mx-auto px-4 lg:px-0'>
                <div className='flex w-full flex-col justify-between gap-10 lg:flex-row lg:items-start lg:text-left'>
                    <div className='flex w-full flex-col justify-between gap-6 lg:items-start'>
                        <div className='flex items-center gap-2 lg:justify-start'>
                            <Link href='/'>
                                <Image src='/logo.png' alt={`${companyInfo.name} logo`} width={150} height={100} />
                            </Link>
                        </div>
                        <p className='max-w-[70%] text-sm'>{description}</p>
                        <ul className='flex items-center space-x-6'>
                            {socialLinks.map((social, idx) => (
                                <li key={idx} className='font-medium hover:text-[#ce2a2d]'>
                                    <a href={social.href} aria-label={social.label}>
                                        {social.icon}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='grid w-full gap-6 md:grid-cols-3 lg:gap-20'>
                        {sections.map((section, sectionIdx) => (
                            <div key={sectionIdx}>
                                <h3 className='mb-4 font-bold'>{section.title}</h3>
                                <ul className='space-y-3 text-sm'>
                                    {section.links.map((link, linkIdx) => (
                                        <li key={linkIdx} className='font-medium hover:text-[#ce2a2d]'>
                                            <a href={link.href}>{link.name}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='mt-8 flex flex-col justify-between gap-4 border-t py-8 text-xs font-medium md:flex-row md:items-center md:text-left'>
                    <p className='order-2 lg:order-1'>{copyright}</p>
                </div>
            </div>
        </section>
    );
}
