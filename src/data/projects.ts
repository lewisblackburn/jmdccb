import { Building2, Construction, HardHat } from 'lucide-react';

export interface Project {
    id: string;
    title: string;
    description: string;
    category: 'Commercial' | 'Residential' | 'Industrial';
    image: string;
    icon: typeof Building2 | typeof HardHat | typeof Construction;
    details: {
        location: string;
        completionDate: string;
        size: string;
        client: string;
    };
}

export const projects: Project[] = [
    {
        id: 'commercial-1',
        title: 'State-of-the-art office complex development',
        description: 'A modern office complex featuring sustainable design and cutting-edge technology.',
        category: 'Commercial',
        image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop',
        icon: Building2,
        details: {
            location: 'Downtown Business District',
            completionDate: 'Q4 2023',
            size: '50,000 sq ft',
            client: 'TechCorp Inc.'
        }
    },
    {
        id: 'residential-1',
        title: 'Luxury residential complex renovation',
        description: 'Complete renovation of a high-end residential complex with premium amenities.',
        category: 'Residential',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
        icon: HardHat,
        details: {
            location: 'Uptown Residential Area',
            completionDate: 'Q2 2024',
            size: '75,000 sq ft',
            client: 'Luxury Living Properties'
        }
    },
    {
        id: 'industrial-1',
        title: 'Modern industrial facility construction',
        description: 'Construction of a state-of-the-art manufacturing facility with advanced automation systems.',
        category: 'Industrial',
        image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop',
        icon: Construction,
        details: {
            location: 'Industrial Park Zone',
            completionDate: 'Q1 2024',
            size: '100,000 sq ft',
            client: 'Global Manufacturing Co.'
        }
    }
];
