'use client';

import Image from 'next/image';
import Link from 'next/link';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/registry/new-york-v4/ui/accordion';
import { Button } from '@/registry/new-york-v4/ui/button';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle
} from '@/registry/new-york-v4/ui/navigation-menu';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/registry/new-york-v4/ui/sheet';

import { MenuIcon } from 'lucide-react';

const aboutUsItems = [
    {
        title: 'Our Story',
        description: 'Learn about our journey and mission',
        href: '#'
    },
    {
        title: 'Leadership',
        description: 'Meet our team of experts',
        href: '#'
    },
    {
        title: 'Values',
        description: 'Our core principles and beliefs',
        href: '#'
    },
    {
        title: 'Partners',
        description: 'Our trusted collaborators',
        href: '#'
    }
];

const servicesItems = [
    {
        title: 'Consulting',
        description: 'Expert guidance for your business',
        href: '#'
    },
    {
        title: 'Development',
        description: 'Custom software solutions',
        href: '#'
    },
    {
        title: 'Design',
        description: 'Creative and user-centered design',
        href: '#'
    },
    {
        title: 'Support',
        description: '24/7 technical assistance',
        href: '#'
    }
];

export default function Navbar() {
    return (
        <header className='border-accent-foreground bg-base-1000 supports-[backdrop-filter]:bg-base-1000 text-secondary sticky top-0 z-50 w-full border-b backdrop-blur'>
            <div className='container mx-auto flex h-16 items-center px-4 lg:px-0'>
                <nav className='flex w-full items-center justify-between'>
                    <Link href='/' className='flex items-center gap-2'>
                        <Image src='/logo.png' alt='Logo' width={150} height={100} />
                    </Link>
                    <NavigationMenu className='ml-auto hidden lg:block'>
                        <NavigationMenuList className='gap-6'>
                            <NavigationMenuItem>
                                <NavigationMenuLink href='/' className={navigationMenuTriggerStyle()}>
                                    Home
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <div className='grid w-[400px] grid-cols-2 gap-3 p-4'>
                                        {aboutUsItems.map((item, index) => (
                                            <NavigationMenuLink
                                                href={item.href}
                                                key={index}
                                                className='hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none'>
                                                <div>
                                                    <p className='text-sm leading-none font-medium'>{item.title}</p>
                                                    <p className='text-muted-foreground line-clamp-2 text-sm leading-snug'>
                                                        {item.description}
                                                    </p>
                                                </div>
                                            </NavigationMenuLink>
                                        ))}
                                    </div>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <div className='grid w-[400px] grid-cols-2 gap-3 p-4'>
                                        {servicesItems.map((item, index) => (
                                            <NavigationMenuLink
                                                href={item.href}
                                                key={index}
                                                className='hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none'>
                                                <div>
                                                    <p className='text-sm leading-none font-medium'>{item.title}</p>
                                                    <p className='text-muted-foreground line-clamp-2 text-sm leading-snug'>
                                                        {item.description}
                                                    </p>
                                                </div>
                                            </NavigationMenuLink>
                                        ))}
                                    </div>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink href='/projects' className={navigationMenuTriggerStyle()}>
                                    Projects
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink href='/careers' className={navigationMenuTriggerStyle()}>
                                    Careers
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink href='/news' className={navigationMenuTriggerStyle()}>
                                    News
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink href='/contact' className={navigationMenuTriggerStyle()}>
                                    Contact
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                    <Sheet>
                        <SheetTrigger asChild className='ml-auto lg:hidden'>
                            <Button variant='ghost' size='icon'>
                                <MenuIcon className='h-5 w-5' />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side='right' className='w-[300px] sm:w-[400px]'>
                            <SheetHeader>
                                <SheetTitle>
                                    <a href='/' className='flex items-center gap-2'>
                                        <span className='text-xl font-bold tracking-tight'>jmdccb</span>
                                    </a>
                                </SheetTitle>
                            </SheetHeader>
                            <div className='flex flex-col gap-6 py-6'>
                                <Accordion type='single' collapsible className='w-full'>
                                    <AccordionItem value='about' className='border-none'>
                                        <AccordionTrigger className='text-base hover:no-underline'>
                                            About Us
                                        </AccordionTrigger>
                                        <AccordionContent>
                                            <div className='grid gap-2'>
                                                {aboutUsItems.map((item, index) => (
                                                    <a
                                                        href={item.href}
                                                        key={index}
                                                        className='hover:bg-accent hover:text-accent-foreground block rounded-md p-2 text-sm'>
                                                        <div>
                                                            <p className='font-medium'>{item.title}</p>
                                                            <p className='text-muted-foreground'>{item.description}</p>
                                                        </div>
                                                    </a>
                                                ))}
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value='services' className='border-none'>
                                        <AccordionTrigger className='text-base hover:no-underline'>
                                            Services
                                        </AccordionTrigger>
                                        <AccordionContent>
                                            <div className='grid gap-2'>
                                                {servicesItems.map((item, index) => (
                                                    <a
                                                        href={item.href}
                                                        key={index}
                                                        className='hover:bg-accent hover:text-accent-foreground block rounded-md p-2 text-sm'>
                                                        <div>
                                                            <p className='font-medium'>{item.title}</p>
                                                            <p className='text-muted-foreground'>{item.description}</p>
                                                        </div>
                                                    </a>
                                                ))}
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                                <div className='flex flex-col gap-4'>
                                    <a href='/projects' className='hover:text-accent-foreground text-sm font-medium'>
                                        Projects
                                    </a>
                                    <a href='/careers' className='hover:text-accent-foreground text-sm font-medium'>
                                        Careers
                                    </a>
                                    <a href='/news' className='hover:text-accent-foreground text-sm font-medium'>
                                        News
                                    </a>
                                    <a href='/contact' className='hover:text-accent-foreground text-sm font-medium'>
                                        Contact
                                    </a>
                                </div>
                                <div className='flex flex-col gap-4 pt-4'></div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </nav>
            </div>
        </header>
    );
}
