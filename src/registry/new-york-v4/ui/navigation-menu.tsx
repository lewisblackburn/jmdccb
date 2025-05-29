'use client';

import * as React from 'react';

import { cn } from '@/lib/utils';
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';

import { cva } from 'class-variance-authority';
import { ChevronDownIcon } from 'lucide-react';

const NavigationMenu = React.forwardRef<
    React.ElementRef<typeof NavigationMenuPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ className, children, ...props }, ref) => (
    <NavigationMenuPrimitive.Root
        ref={ref}
        className={cn('relative z-10 flex max-w-max flex-1 items-center justify-center', className)}
        {...props}>
        {children}
        {/* <NavigationMenuViewport /> */}
    </NavigationMenuPrimitive.Root>
));

function NavigationMenuList({ className, ...props }: React.ComponentProps<typeof NavigationMenuPrimitive.List>) {
    return (
        <NavigationMenuPrimitive.List
            data-slot='navigation-menu-list'
            className={cn('group flex flex-1 list-none items-center justify-center gap-1', className)}
            {...props}
        />
    );
}

function NavigationMenuItem({ className, ...props }: React.ComponentProps<typeof NavigationMenuPrimitive.Item>) {
    return (
        <NavigationMenuPrimitive.Item
            data-slot='navigation-menu-item'
            className={cn('relative', className)}
            {...props}
        />
    );
}

const navigationMenuTriggerStyle = cva(
    'group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[active=true]:bg-accent/50 data-[state=open]:bg-accent/50 data-[active=true]:text-accent-foreground ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 transition-[color,box-shadow] focus-visible:ring-4 focus-visible:outline-1'
);

function NavigationMenuTrigger({
    className,
    children,
    ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Trigger>) {
    return (
        <NavigationMenuPrimitive.Trigger
            data-slot='navigation-menu-trigger'
            className={cn(navigationMenuTriggerStyle(), 'group', className)}
            {...props}>
            {children}{' '}
            <ChevronDownIcon
                className='relative top-[1px] ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180'
                aria-hidden='true'
            />
        </NavigationMenuPrimitive.Trigger>
    );
}

const NavigationMenuContent = React.forwardRef<
    React.ElementRef<typeof NavigationMenuPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
    <NavigationMenuPrimitive.Content
        ref={ref}
        className={cn(
            'absolute left-0',
            'bg-popover absolute top-full mt-[5px] w-fit',
            'data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52',
            'origin-top-center bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 absolute mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border shadow-lg md:w-[var(--radix-navigation-menu-viewport-width)]',
            className
        )}
        {...props}
    />
));

function NavigationMenuViewport({
    className,
    ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Viewport>) {
    return (
        <div className={cn('absolute top-full left-0 isolate z-50 flex justify-center')}>
            <NavigationMenuPrimitive.Viewport
                data-slot='navigation-menu-viewport'
                className={cn(
                    'origin-top-center bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border shadow md:w-[var(--radix-navigation-menu-viewport-width)]',
                    className
                )}
                {...props}
            />
        </div>
    );
}

function NavigationMenuLink({ className, ...props }: React.ComponentProps<typeof NavigationMenuPrimitive.Link>) {
    return (
        <NavigationMenuPrimitive.Link
            data-slot='navigation-menu-link'
            className={cn(
                "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active=true]:bg-accent/50 data-[active=true]:text-accent-foreground ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 [&_svg:not([class*='text-'])]:text-muted-foreground flex flex-col gap-1 rounded-sm p-2 text-sm transition-[color,box-shadow] focus-visible:ring-4 focus-visible:outline-1 [&_svg:not([class*='size-'])]:size-4",
                className
            )}
            {...props}
        />
    );
}

function NavigationMenuIndicator({
    className,
    ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Indicator>) {
    return (
        <NavigationMenuPrimitive.Indicator
            data-slot='navigation-menu-indicator'
            className={cn(
                'data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden',
                className
            )}
            {...props}>
            <div className='bg-border relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm shadow-md' />
        </NavigationMenuPrimitive.Indicator>
    );
}

export {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuContent,
    NavigationMenuTrigger,
    NavigationMenuLink,
    NavigationMenuIndicator,
    NavigationMenuViewport,
    navigationMenuTriggerStyle
};
