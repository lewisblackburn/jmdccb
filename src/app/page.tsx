import Hero from '@/components/hero';
import Logos from '@/components/logos';
import Projects from '@/components/projects';
import Services from '@/components/services';
import Testimonials from '@/components/testimonials';

const Page = () => {
    return (
        <div className='min-h-screen'>
            <Hero />
            <Services />
            <Projects />
            <Testimonials />
            <Logos />
        </div>
    );
};

export default Page;
