'use client';

import { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { services } from '@/data/services';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/registry/new-york-v4/ui/accordion';
import { Button } from '@/registry/new-york-v4/ui/button';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger
} from '@/registry/new-york-v4/ui/navigation-menu';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/registry/new-york-v4/ui/sheet';

import { MenuIcon } from 'lucide-react';

const servicesItems = services.map((service) => ({
    title: service.title,
    href: `/services/${service.id}`,
    icon: service.icon
}));

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className='border-accent-foreground bg-base-1000 supports-[backdrop-filter]:bg-base-1000 text-secondary sticky top-0 z-50 w-full border-b backdrop-blur'>
            <div className='container mx-auto flex h-16 items-center px-4 lg:px-0'>
                <nav className='flex w-full items-center justify-between'>
                    <Link href='/' className='flex items-center gap-2'>
                        <Image src='/images/logo.png' alt='Logo' width={150} height={100} />
                    </Link>
                    <NavigationMenu className='ml-auto hidden lg:block'>
                        <NavigationMenuList className='gap-6'>
                            <NavigationMenuItem>
                                <NavigationMenuLink
                                    href='/'
                                    className='hover:bg-accent/10 hover:text-base-50 focus:bg-accent/10 focus:text-base-50 rounded-md px-4 py-2 text-base font-medium transition-colors'>
                                    Home
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink
                                    href='/about'
                                    className='hover:bg-accent/10 hover:text-base-50 focus:bg-accent/10 focus:text-base-50 rounded-md px-4 py-2 text-base font-medium transition-colors'>
                                    About Us
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className='hover:bg-accent/10 hover:text-base-50 focus:bg-accent/10 focus:text-base-50 rounded-md px-4 py-2 text-base font-medium transition-colors'>
                                    Services
                                </NavigationMenuTrigger>
                                <NavigationMenuContent className='border-accent-foreground bg-base-1000 supports-[backdrop-filter]:bg-base-1000 text-secondary p-6'>
                                    <div className='3xl:w-[400px] 3xl:grid-cols-2 grid w-[200px] grid-cols-1 gap-4'>
                                        {servicesItems.map((item, index) => (
                                            <NavigationMenuLink
                                                href={item.href}
                                                key={index}
                                                className='hover:bg-accent/10 hover:text-base-50 inline-flex items-center gap-3 rounded-md p-3 text-base font-medium transition-colors'>
                                                <item.icon className='text-accent h-4 w-4 flex-shrink-0' />
                                                <span className='whitespace-nowrap'>{item.title}</span>
                                            </NavigationMenuLink>
                                        ))}
                                    </div>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink
                                    href='/projects'
                                    className='hover:bg-accent/10 hover:text-base-50 focus:bg-accent/10 focus:text-base-50 rounded-md px-4 py-2 text-base font-medium transition-colors'>
                                    Projects
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink
                                    href='/contact'
                                    className='hover:bg-accent/10 hover:text-base-50 focus:bg-accent/10 focus:text-base-50 rounded-md px-4 py-2 text-base font-medium transition-colors'>
                                    Contact
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild className='ml-auto lg:hidden'>
                            <Button variant='ghost' size='icon' className='hover:bg-accent/10 hover:text-base-50'>
                                <MenuIcon className='h-5 w-5' />
                            </Button>
                        </SheetTrigger>
                        <SheetContent
                            side='top'
                            className='border-accent-foreground bg-base-1000 supports-[backdrop-filter]:bg-base-1000 text-secondary w-full'>
                            <SheetHeader className='border-accent-foreground border-b pb-4'>
                                <SheetTitle>
                                    <Link href='/' className='flex items-center gap-2' onClick={() => setIsOpen(false)}>
                                        <Image src='/images/logo.png' alt='Logo' width={150} height={100} />
                                    </Link>
                                </SheetTitle>
                            </SheetHeader>
                            <div className='flex flex-col space-y-2 px-4 pt-2 pb-6'>
                                <Link
                                    href='/'
                                    className='hover:bg-accent/10 hover:text-base-50 rounded-md px-4 py-2.5 text-base font-medium transition-colors'
                                    onClick={() => setIsOpen(false)}>
                                    Home
                                </Link>
                                <Link
                                    href='/about'
                                    className='hover:bg-accent/10 hover:text-base-50 rounded-md px-4 py-2.5 text-base font-medium transition-colors'
                                    onClick={() => setIsOpen(false)}>
                                    About Us
                                </Link>
                                <Accordion type='single' collapsible className='w-full'>
                                    <AccordionItem value='services' className='border-none'>
                                        <AccordionTrigger className='hover:bg-accent/10 hover:text-base-50 rounded-md px-4 py-2.5 text-base transition-colors hover:no-underline'>
                                            Services
                                        </AccordionTrigger>
                                        <AccordionContent>
                                            <div className='grid gap-2 px-4 pt-2'>
                                                {servicesItems.map((item, index) => (
                                                    <Link
                                                        href={item.href}
                                                        key={index}
                                                        className='hover:bg-accent/10 hover:text-base-50 block rounded-md p-3 text-sm transition-colors'
                                                        onClick={() => setIsOpen(false)}>
                                                        <div className='flex items-center gap-3'>
                                                            <item.icon className='text-accent h-4 w-4 flex-shrink-0' />
                                                            <p className='font-medium'>{item.title}</p>
                                                        </div>
                                                    </Link>
                                                ))}
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                                <Link
                                    href='/projects'
                                    className='hover:bg-accent/10 hover:text-base-50 rounded-md px-4 py-2.5 text-base font-medium transition-colors'
                                    onClick={() => setIsOpen(false)}>
                                    Projects
                                </Link>
                                <Link
                                    href='/contact'
                                    className='hover:bg-accent/10 hover:text-base-50 rounded-md px-4 py-2.5 text-base font-medium transition-colors'
                                    onClick={() => setIsOpen(false)}>
                                    Contact
                                </Link>
                            </div>
                        </SheetContent>
                    </Sheet>
                </nav>
            </div>
        </header>
    );
}
