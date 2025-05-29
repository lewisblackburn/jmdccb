import { Building2, Clock, Hammer, LucideIcon, Shield, Users, Wrench } from 'lucide-react';

interface Service {
    id: string;
    title: string;
    description: string;
    icon: LucideIcon;
    image: string;
    overview: string[];
    details: {
        icon: LucideIcon;
        title: string;
        description: string;
    }[];
}

export const services: Service[] = [
    {
        id: 'commercial-construction',
        title: 'Commercial Construction',
        description:
            'Full-service commercial construction including office buildings, retail spaces, and industrial facilities. We handle everything from design to completion.',
        icon: Building2,
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
        overview: [
            'Our commercial construction services encompass the complete development of office buildings, retail spaces, and industrial facilities. We handle everything from initial design consultation to final project completion.',
            'With a focus on sustainable building practices and modern design principles, we create commercial spaces that are both functional and environmentally conscious. Our team ensures that each project meets the highest standards of quality and safety.',
            'We understand the importance of minimizing disruption to your business operations. Our project management approach includes careful planning and coordination to ensure efficient construction processes and timely completion.'
        ],
        details: [
            {
                icon: Building2,
                title: 'Project Types',
                description: 'Office buildings, retail spaces, industrial facilities'
            },
            { icon: Shield, title: 'Certifications', description: 'ISO 9001, Safety First Certified' },
            { icon: Users, title: 'Team Size', description: '20+ experienced professionals' },
            { icon: Wrench, title: 'Service Area', description: 'Nationwide coverage' }
        ]
    },
    {
        id: 'residential-renovations',
        title: 'Residential Renovations',
        description:
            'Transform your living space with our comprehensive renovation services. From kitchen remodels to full home renovations, we bring your vision to life.',
        icon: Hammer,
        image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80',
        overview: [
            'Our residential renovation services transform living spaces into beautiful, functional homes. From kitchen remodels to full home renovations, we bring your vision to life with precision and care.',
            "We understand that your home is your sanctuary. That's why we work closely with you throughout the renovation process, ensuring that every detail meets your expectations and enhances your living experience.",
            'Our team of skilled craftsmen combines traditional techniques with modern innovations to deliver renovations that stand the test of time. We use only the highest quality materials and maintain strict quality control throughout the project.'
        ],
        details: [
            { icon: Building2, title: 'Project Types', description: 'Kitchens, bathrooms, full home renovations' },
            { icon: Shield, title: 'Warranty', description: '5-year craftsmanship guarantee' },
            { icon: Users, title: 'Team Size', description: '15+ skilled craftsmen' },
            { icon: Wrench, title: 'Service Area', description: 'Local and surrounding areas' }
        ]
    },
    {
        id: 'project-management',
        title: 'Project Management',
        description:
            'Professional project management ensuring your construction project stays on time and budget. We coordinate all aspects of your project from start to finish.',
        icon: Users,
        image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
        overview: [
            'Our project management services ensure your construction project stays on time and budget. We coordinate all aspects of your project, from initial planning to final completion, with meticulous attention to detail.',
            'With our comprehensive project management approach, we handle everything from contractor coordination to timeline management, ensuring a smooth and efficient construction process.',
            'We pride ourselves on transparent communication and regular progress updates. Our project managers are always available to address your concerns and keep you informed about every aspect of your project.'
        ],
        details: [
            { icon: Building2, title: 'Services', description: 'Planning, coordination, monitoring' },
            { icon: Shield, title: 'Experience', description: '15+ years in project management' },
            { icon: Users, title: 'Team Size', description: '10+ certified project managers' },
            { icon: Wrench, title: 'Service Area', description: 'Nationwide coverage' }
        ]
    },
    {
        id: 'general-contracting',
        title: 'General Contracting',
        description:
            'Licensed general contracting services for both residential and commercial projects. We manage subcontractors and ensure quality workmanship throughout.',
        icon: Shield,
        image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
        overview: [
            'Our general contracting services provide comprehensive oversight for both residential and commercial projects. We coordinate all aspects of construction, ensuring seamless execution from start to finish.',
            'With our extensive network of trusted subcontractors and suppliers, we deliver high-quality results while maintaining strict timelines and budgets. Our experienced team manages every detail of your project.',
            'We take pride in our commitment to quality and safety. Our rigorous quality control processes and safety protocols ensure that every project meets or exceeds industry standards.'
        ],
        details: [
            { icon: Building2, title: 'Project Types', description: 'Residential and commercial construction' },
            { icon: Shield, title: 'Licenses', description: 'Fully licensed and insured' },
            { icon: Users, title: 'Team Size', description: '25+ experienced contractors' },
            { icon: Wrench, title: 'Service Area', description: 'Nationwide coverage' }
        ]
    },
    {
        id: 'construction-consulting',
        title: 'Construction Consulting',
        description:
            'Expert construction consulting services to help you make informed decisions about your project, including cost estimation and feasibility studies.',
        icon: Wrench,
        image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80',
        overview: [
            "Our construction consulting services provide expert guidance throughout your project's lifecycle. We help you make informed decisions with detailed cost estimations, feasibility studies, and risk assessments.",
            'Our team of experienced consultants brings decades of industry knowledge to every project. We analyze your requirements and provide tailored solutions that align with your goals and budget.',
            "We specialize in identifying potential challenges early and developing effective strategies to mitigate risks. Our proactive approach helps ensure your project's success from planning to completion."
        ],
        details: [
            { icon: Building2, title: 'Services', description: 'Cost estimation, feasibility studies' },
            { icon: Shield, title: 'Experience', description: '20+ years in construction consulting' },
            { icon: Users, title: 'Team Size', description: '8+ expert consultants' },
            { icon: Wrench, title: 'Service Area', description: 'Nationwide coverage' }
        ]
    },
    {
        id: 'timeline-management',
        title: 'Timeline Management',
        description:
            'Efficient timeline management ensuring your project stays on schedule. We implement proven strategies to meet deadlines without compromising quality.',
        icon: Clock,
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
        overview: [
            'Our timeline management services ensure your project stays on track and meets all deadlines. We implement proven strategies and tools to optimize project scheduling and resource allocation.',
            'With our detailed planning and monitoring systems, we identify potential delays early and take proactive measures to keep your project on schedule. Our team maintains clear communication with all stakeholders.',
            'We understand that time is money in construction. Our efficient timeline management helps minimize costs while maintaining the highest standards of quality and safety.'
        ],
        details: [
            { icon: Building2, title: 'Services', description: 'Scheduling, resource management' },
            { icon: Shield, title: 'Tools', description: 'Advanced project management software' },
            { icon: Users, title: 'Team Size', description: '12+ scheduling specialists' },
            { icon: Wrench, title: 'Service Area', description: 'Nationwide coverage' }
        ]
    }
];
