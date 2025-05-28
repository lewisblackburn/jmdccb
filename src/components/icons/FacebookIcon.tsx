import { siFacebook } from 'simple-icons';

export function FacebookIcon({ className }: { className?: string }) {
    return (
        <svg role='img' viewBox='0 0 24 24' className={className} fill='currentColor'>
            <path d={siFacebook.path} />
        </svg>
    );
}
