import { Building2, ChevronRight, Construction, HardHat } from 'lucide-react';

export default function Projects() {
    return (
        <section className='bg-base-100 py-32'>
            <div className='container mx-auto px-4 md:px-6'>
                <h1 className='mb-4 text-center text-4xl font-semibold'>Our Construction Projects</h1>
                <p className='text-muted-foreground text-center'>
                    Showcasing our expertise in delivering exceptional construction and renovation projects.
                </p>
                <div className='grid gap-5 pt-14 xl:grid-cols-3'>
                    <a href='#' className='group relative overflow-hidden rounded-xl'>
                        <img
                            src='https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop'
                            alt='Modern office building construction'
                            className='h-full max-h-[450px] w-full rounded-xl object-cover object-center'
                        />
                        <div className='from-base-950/80 to-base-900/60 absolute right-0 bottom-0 left-0 h-full rounded-xl bg-linear-to-t md:h-[50%] md:transition-all md:duration-300 md:group-hover:h-full'></div>
                        <div className='absolute top-0 flex h-full w-full flex-col justify-between p-7'>
                            <span className='bg-primary text-primary-foreground ml-auto flex w-fit items-center gap-1 rounded-full px-4 py-2.5 text-sm font-semibold'>
                                <Building2 className='h-auto w-6' />
                                Commercial
                            </span>
                            <div className='text-base-50 flex flex-col gap-5'>
                                <h4 className='text-2xl font-semibold lg:text-3xl'>
                                    State-of-the-art office complex development
                                </h4>
                                <p className='flex items-center gap-1 font-medium'>
                                    View project details
                                    <ChevronRight className='h-auto w-4' />
                                </p>
                            </div>
                        </div>
                    </a>
                    <a href='#' className='group relative overflow-hidden rounded-xl'>
                        <img
                            src='https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop'
                            alt='Luxury residential project'
                            className='h-full max-h-[450px] w-full rounded-xl object-cover object-center'
                        />
                        <div className='from-base-950/80 to-base-900/60 absolute right-0 bottom-0 left-0 h-full rounded-xl bg-linear-to-t md:h-[50%] md:transition-all md:duration-300 md:group-hover:h-full'></div>
                        <div className='absolute top-0 flex h-full w-full flex-col justify-between p-7'>
                            <span className='bg-primary text-primary-foreground ml-auto flex w-fit items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold'>
                                <HardHat className='h-auto w-6' />
                                Residential
                            </span>
                            <div className='text-base-50 flex flex-col gap-5'>
                                <h4 className='text-2xl font-semibold lg:text-3xl'>
                                    Luxury residential complex renovation
                                </h4>
                                <p className='flex items-center gap-1 font-medium'>
                                    View project details
                                    <ChevronRight className='h-auto w-4' />
                                </p>
                            </div>
                        </div>
                    </a>
                    <a href='#' className='group relative overflow-hidden rounded-xl'>
                        <img
                            src='https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop'
                            alt='Industrial construction site'
                            className='h-full max-h-[450px] w-full rounded-xl object-cover object-center'
                        />
                        <div className='from-base-950/80 to-base-900/60 absolute right-0 bottom-0 left-0 h-full rounded-xl bg-linear-to-t md:h-[50%] md:transition-all md:duration-300 md:group-hover:h-full'></div>
                        <div className='absolute top-0 flex h-full w-full flex-col justify-between p-7'>
                            <span className='bg-primary text-primary-foreground ml-auto flex w-fit items-center gap-1 rounded-full px-4 py-2.5 text-sm font-semibold'>
                                <Construction className='h-auto w-6' />
                                Industrial
                            </span>
                            <div className='text-base-50 flex flex-col gap-5'>
                                <h4 className='text-2xl font-semibold lg:text-3xl'>
                                    Modern industrial facility construction
                                </h4>
                                <p className='flex items-center gap-1 font-medium'>
                                    View project details
                                    <ChevronRight className='h-auto w-4' />
                                </p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
}
