import React from 'react';

export const metadata = {
    title: 'Privacy Policy | JM DCCB',
    description: 'Privacy policy for JM DCCB website and services.'
};

export default function PrivacyPage() {
    return (
        <main className='container mx-auto px-4 py-16 lg:px-0'>
            <h1 className='mb-8 text-4xl font-bold'>Privacy Policy</h1>

            <div className='prose prose-lg max-w-none'>
                <section className='mb-8'>
                    <h2 className='mb-4 text-2xl font-semibold'>1. Information We Collect</h2>
                    <p>
                        We collect information that you provide directly to us, including but not limited to your name,
                        email address, phone number, and any other information you choose to provide when contacting us
                        or using our services.
                    </p>
                </section>

                <section className='mb-8'>
                    <h2 className='mb-4 text-2xl font-semibold'>2. How We Use Your Information</h2>
                    <p>
                        We use the information we collect to provide, maintain, and improve our services, to communicate
                        with you, and to comply with legal obligations.
                    </p>
                </section>

                <section className='mb-8'>
                    <h2 className='mb-4 text-2xl font-semibold'>3. Information Sharing</h2>
                    <p>
                        We do not sell or rent your personal information to third parties. We may share your information
                        with service providers who assist us in operating our website and conducting our business.
                    </p>
                </section>

                <section className='mb-8'>
                    <h2 className='mb-4 text-2xl font-semibold'>4. Data Security</h2>
                    <p>
                        We implement appropriate security measures to protect your personal information from
                        unauthorized access, alteration, disclosure, or destruction.
                    </p>
                </section>

                <section className='mb-8'>
                    <h2 className='mb-4 text-2xl font-semibold'>5. Your Rights</h2>
                    <p>
                        You have the right to access, correct, or delete your personal information. You may also have
                        the right to restrict or object to certain processing of your information.
                    </p>
                </section>

                <section className='mb-8'>
                    <h2 className='mb-4 text-2xl font-semibold'>6. Changes to This Policy</h2>
                    <p>
                        We may update this privacy policy from time to time. We will notify you of any changes by
                        posting the new policy on this page.
                    </p>
                </section>

                <section className='mb-8'>
                    <h2 className='mb-4 text-2xl font-semibold'>7. Contact Us</h2>
                    <p>
                        If you have any questions about this privacy policy, please contact us through our contact page.
                    </p>
                </section>
            </div>
        </main>
    );
}
