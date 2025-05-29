import Image from 'next/image';

interface PageHeaderProps {
    title: string;
    description?: string;
    backgroundImage?: string;
}

export default function PageHeader({
    title,
    description,
    backgroundImage = 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1920&auto=format&fit=crop'
}: PageHeaderProps) {
    return (
        <section className={'relative py-12 md:py-16 lg:py-20'}>
            <div className='absolute inset-0 z-0'>
                <div className='bg-base-1000/70 absolute inset-0 z-10' />
                <Image
                    src={backgroundImage}
                    alt={`${title} page background`}
                    className='h-full w-full object-cover'
                    fill
                    priority
                />
            </div>

            <div className='relative z-20 container mx-auto px-4 md:px-6'>
                <div className='mx-auto max-w-4xl text-center'>
                    <h1 className='text-base-50 mt-4 text-3xl leading-tight font-bold text-balance md:text-4xl lg:text-5xl lg:leading-[1.1]'>
                        {title}
                    </h1>
                    {description && <p className='text-secondary mt-4 text-lg'>{description}</p>}
                </div>
            </div>
        </section>
    );
}
