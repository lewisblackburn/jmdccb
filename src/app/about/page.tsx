'use client';

import { type SVGProps, useId } from 'react';

import PageHeader from '@/components/page-header';
import { Carousel, CarouselContent, CarouselItem } from '@/registry/new-york-v4/ui/carousel';

export default function AboutPage() {
    return (
        <>
            <PageHeader title='About Us' description='Learn more about our company and our mission.' />
            <About />
        </>
    );
}

function About() {
    return (
        <section className='overflow-x-hidden px-4 py-10 md:px-0 md:py-32'>
            <section className='relative container mx-auto max-w-5xl py-10 md:py-12 lg:py-15'>
                <div className=''>
                    <h1 className='text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl'>
                        Building Excellence,
                        <br />
                        Delivering Quality.
                    </h1>
                    <p className='text-muted-foreground mt-4 max-w-2xl text-2xl md:text-3xl'>
                        We're dedicated to delivering exceptional construction and civil engineering services, ensuring
                        every project meets the highest standards of quality and safety.
                    </p>
                </div>
                <>
                    <div className='absolute inset-0 z-[-1] -translate-y-1/2 overflow-hidden blur-[100px] will-change-transform'>
                        <div className='bg-gradient-1/25 absolute top-0 right-0 h-[400px] w-[800px] -translate-x-1/5 rounded-full' />
                        <div className='bg-gradient-2/10 absolute top-0 right-0 size-[400px] rounded-full' />
                    </div>
                    <div className='absolute -inset-40 z-[-1] overflow-hidden [mask-image:radial-gradient(circle_at_center,black_0%,black_20%,transparent_80%)]'>
                        <PlusSigns className='text-foreground/[0.05] h-full w-full' />
                    </div>
                </>
            </section>

            <section className='container mx-auto max-w-5xl border-y py-5'>
                <h2 className='text-accent-foreground font-mono text-sm font-semibold tracking-widest'>
                    Our Expertise
                </h2>
                <div className='mt-6 grid grid-cols-2 gap-8 md:grid-cols-4'>
                    <div>
                        <h3 className='text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl'>15+</h3>
                        <p className='text-muted-foreground mt-1 font-medium'>Years Experience</p>
                    </div>
                    <div>
                        <h3 className='text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl'>500+</h3>
                        <p className='text-muted-foreground mt-1 font-medium'>Projects Completed</p>
                    </div>
                    <div>
                        <h3 className='text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl'>100%</h3>
                        <p className='text-muted-foreground mt-1 font-medium'>Client Satisfaction</p>
                    </div>
                    <div>
                        <h3 className='text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl'>24/7</h3>
                        <p className='text-muted-foreground mt-1 font-medium'>Support Available</p>
                    </div>
                </div>
            </section>

            <section className='container mx-auto max-w-5xl py-10 md:py-12 lg:py-15'>
                <div className='max-w-2xl space-y-5 md:space-y-8 lg:space-y-10'>
                    <p className='text-lg'>
                        At JM Developments, we understand that construction is more than just building structures – it's
                        about creating lasting value and trust. Our commitment to excellence has made us a leading
                        contractor in the Civils, Construction, and Building industries.
                    </p>

                    <h2 className='text-2xl font-medium tracking-tight md:text-3xl'>
                        Safety and quality are at the heart of everything we do.
                    </h2>
                    <p className='text-lg'>
                        With Safe Contractor accreditation and a team of experienced professionals, we ensure that every
                        project is completed safely, within budget, and to the highest standards required by our
                        clients. Our comprehensive services span from civil engineering to construction, building, and
                        project management.
                    </p>
                </div>
            </section>

            <section className='my-5 pb-10 md:my-8 md:pb-12 lg:my-12 lg:pb-15'>
                <Carousel
                    opts={{
                        align: 'start'
                    }}>
                    <CarouselContent className='-ml-4'>
                        <CarouselItem className='basis-[80%] lg:basis-1/3 xl:basis-[40%]'>
                            <div className='relative h-[330px] lg:h-[440px] xl:h-[600px]'>
                                <img
                                    src='/images/projects/commercial-1.jpg'
                                    alt='Commercial construction project'
                                    className='object-cover'
                                />
                            </div>
                        </CarouselItem>
                        <CarouselItem className='basis-[80%] lg:basis-1/3 xl:basis-[40%]'>
                            <div className='relative h-[330px] lg:h-[440px] xl:h-[600px]'>
                                <img
                                    src='/images/projects/residential-1.jpg'
                                    alt='Residential construction project'
                                    className='object-cover'
                                />
                            </div>
                        </CarouselItem>
                        <CarouselItem className='basis-[80%] lg:basis-1/3 xl:basis-[40%]'>
                            <div className='relative h-[330px] lg:h-[440px] xl:h-[600px]'>
                                <img
                                    src='/images/projects/industrial-1.jpg'
                                    alt='Industrial construction project'
                                    className='object-cover'
                                />
                            </div>
                        </CarouselItem>
                    </CarouselContent>
                </Carousel>
            </section>

            <section className='container mx-auto max-w-5xl'>
                <div className='mr-0 ml-auto max-w-2xl space-y-5 md:space-y-8 lg:space-y-10'>
                    <p className='text-lg'>
                        Our team of skilled professionals brings together decades of experience in the construction
                        industry. We pride ourselves on our attention to detail, commitment to safety, and ability to
                        deliver projects on time and within budget.
                    </p>

                    <h2 className='text-2xl font-medium tracking-tight md:text-3xl'>
                        We're not just builders – we're your trusted construction partners.
                    </h2>

                    <p className='text-lg'>
                        From initial consultation to project completion, we work closely with our clients to ensure
                        their vision becomes reality. Our comprehensive approach to construction management ensures that
                        every aspect of your project is handled with expertise and care.
                    </p>
                </div>
            </section>

            <section className='container mx-auto max-w-5xl py-10 md:py-12 lg:py-15'>
                <div className='grid gap-5 md:grid-cols-2 md:gap-10 lg:gap-16'>
                    <div className='order-2 md:order-1'>
                        <h2 className='text-4xl font-semibold tracking-tight md:text-4xl'>Our Leadership Team</h2>
                        <p className='mt-5 text-lg md:mt-6'>
                            Led by our experienced directors Julian Mills and Jamie Sidebottom, along with our Health &
                            Safety / Construction Manager Bob Irwin, our team brings together decades of industry
                            expertise. We're committed to maintaining the highest standards of safety and quality in
                            every project we undertake. Our leadership team ensures that every aspect of your project is
                            managed with precision and care, from initial planning to final delivery.
                        </p>
                    </div>
                    <img
                        src='/images/team/leadership.jpg'
                        alt='JM Developments leadership team'
                        width={480}
                        height={400}
                        className='order-1 object-cover md:order-2'
                    />
                </div>
            </section>
        </section>
    );
}

interface PlusSignsProps extends SVGProps<SVGSVGElement> {
    className?: string;
}

function PlusSigns({ className, ...props }: PlusSignsProps) {
    const GAP = 16;
    const STROKE_WIDTH = 1;
    const PLUS_SIZE = 6;
    const id = useId();
    const patternId = `plus-pattern-${id}`;

    return (
        <svg width={GAP * 2} height={GAP * 2} className={className} {...props}>
            <defs>
                <pattern id={patternId} x='0' y='0' width={GAP} height={GAP} patternUnits='userSpaceOnUse'>
                    <line
                        x1={GAP / 2}
                        y1={(GAP - PLUS_SIZE) / 2}
                        x2={GAP / 2}
                        y2={(GAP + PLUS_SIZE) / 2}
                        stroke='currentColor'
                        strokeWidth={STROKE_WIDTH}
                    />
                    <line
                        x1={(GAP - PLUS_SIZE) / 2}
                        y1={GAP / 2}
                        x2={(GAP + PLUS_SIZE) / 2}
                        y2={GAP / 2}
                        stroke='currentColor'
                        strokeWidth={STROKE_WIDTH}
                    />
                </pattern>
            </defs>
            <rect width='100%' height='100%' fill={`url(#${patternId})`} />
        </svg>
    );
}
