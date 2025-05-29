'use client';

import { useState } from 'react';

import NextImage, { ImageProps as NextImageProps } from 'next/image';

import { cn } from '@/lib/utils';
import { Skeleton } from '@/registry/new-york-v4/ui/skeleton';

const loadedImages = new Set<string>();

type ImageWithSkeletonProps = Omit<NextImageProps, 'onLoad'> & {
    wrapperClassName?: string;
    imageClassName?: string;
};

export default function ImageWithSkeleton({
    src,
    alt,
    wrapperClassName = '',
    imageClassName = '',
    ...nextImageProps
}: ImageWithSkeletonProps) {
    const [isLoading, setIsLoading] = useState(!loadedImages.has(String(src)));

    function handleLoad() {
        loadedImages.add(String(src));
        setIsLoading(false);
    }

    return (
        <div className={wrapperClassName}>
            {isLoading && <Skeleton className={cn('absolute inset-0 h-full w-full', imageClassName)} />}
            <NextImage
                {...nextImageProps}
                src={src}
                alt={alt}
                onLoad={handleLoad}
                className={['transition-opacity duration-500', isLoading ? 'opacity-0' : 'opacity-100', imageClassName]
                    .filter(Boolean)
                    .join(' ')}
            />
        </div>
    );
}
