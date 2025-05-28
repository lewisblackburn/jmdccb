import { siX } from 'simple-icons';

export function XIcon({ className }: { className?: string }) {
    return (
        <svg role='img' viewBox='0 0 24 24' className={className} fill='currentColor'>
            <path d={siX.path} />
        </svg>
    );
}
