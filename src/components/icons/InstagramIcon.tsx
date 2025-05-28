import { siInstagram } from 'simple-icons';

export function InstagramIcon({ className }: { className?: string }) {
    return (
        <svg role='img' viewBox='0 0 24 24' className={className} fill='currentColor'>
            <path d={siInstagram.path} />
        </svg>
    );
}
