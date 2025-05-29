'use client';

import { useState } from 'react';

import { FacebookIcon } from '@/components/icons/FacebookIcon';
import { InstagramIcon } from '@/components/icons/InstagramIcon';
import { XIcon } from '@/components/icons/XIcon';
import PageHeader from '@/components/page-header';
import { companyInfo } from '@/lib/company-info';
import { Button } from '@/registry/new-york-v4/ui/button';
import { Input } from '@/registry/new-york-v4/ui/input';
import { Label } from '@/registry/new-york-v4/ui/label';
import { Textarea } from '@/registry/new-york-v4/ui/textarea';
import { zodResolver } from '@hookform/resolvers/zod';

import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

const contactFormSchema = z.object({
    fullName: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Please enter a valid email address'),
    phone: z.string().optional(),
    subject: z.string().min(2, 'Subject must be at least 2 characters'),
    message: z.string().min(10, 'Message must be at least 10 characters')
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactFormSchema)
    });

    const onSubmit = async (data: ContactFormData) => {
        setIsSubmitting(true);
        try {
            const recipient = 'lewisblackburn10@gmail.com';

            const emailBody = `
Dear ${recipient},

${data.message}

Best regards,
${data.fullName}

---
Contact Information:
Email: ${data.email}
${data.phone ? `Phone: ${data.phone}` : ''}
Subject: ${data.subject}
            `.trim();

            const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(emailBody)}`;

            window.location.href = mailtoLink;

            toast.success('Opening email client...');
            reset();
        } catch (error) {
            console.error('Error preparing email:', error);
            toast.error('Failed to prepare email. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <PageHeader
                title='Contact us'
                description="We'd love to hear from you. Get in touch with our team."
                backgroundImage='https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1920&auto=format&fit=crop'
            />
            <section className='py-10 md:py-32'>
                <div className='container mx-auto max-w-4xl px-4 lg:px-0'>
                    <div className='mt-8 flex gap-10 max-md:flex-col md:mt-12 md:divide-x'>
                        <div className='space-y-10 pr-10 md:gap-20'>
                            <div>
                                <h2 className='text-lg font-semibold'>Corporate office</h2>
                                <p className='text-muted-foreground mt-3 font-medium tracking-tight'>
                                    {companyInfo.contact.address.street}
                                    <br />
                                    {companyInfo.contact.address.city}, {companyInfo.contact.address.country}
                                </p>
                            </div>

                            <div>
                                <h2 className='text-lg font-semibold'>Our Team</h2>
                                <div className='mt-3 space-y-6'>
                                    {Object.values(companyInfo.team).map((member) => (
                                        <div key={member.name}>
                                            <p className='text-primary font-medium'>{member.name}</p>
                                            <p className='text-muted-foreground'>{member.role}</p>
                                            <a
                                                href={`tel:${member.phone}`}
                                                className='text-muted-foreground mt-1 block tracking-tight'>
                                                {member.phone}
                                            </a>
                                            <a
                                                href={`mailto:${member.email}`}
                                                className='text-muted-foreground mt-1 block tracking-tight'>
                                                {member.email}
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h2 className='text-lg font-semibold'>Follow us</h2>
                                <div className='mt-3 flex gap-6'>
                                    <a
                                        href={companyInfo.social.facebook}
                                        className='text-muted-foreground hover:text-foreground'>
                                        <FacebookIcon className='size-6' />
                                    </a>
                                    <a
                                        href={companyInfo.social.twitter}
                                        className='text-muted-foreground hover:text-foreground'>
                                        <XIcon className='size-6' />
                                    </a>
                                    <a
                                        href={companyInfo.social.instagram}
                                        className='text-muted-foreground hover:text-foreground'>
                                        <InstagramIcon className='size-6' />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className='flex-1'>
                            <h2 className='text-lg font-semibold'>Send us a message</h2>
                            <form onSubmit={handleSubmit(onSubmit)} className='mt-5 space-y-5'>
                                <div className='space-y-2'>
                                    <Label>Full name</Label>
                                    <Input type='text' {...register('fullName')} placeholder='First and last name' />
                                    {errors.fullName && (
                                        <p className='text-sm text-red-500'>{errors.fullName.message}</p>
                                    )}
                                </div>

                                <div className='space-y-2'>
                                    <Label>Email address</Label>
                                    <Input type='email' {...register('email')} placeholder='you@example.com' />
                                    {errors.email && <p className='text-sm text-red-500'>{errors.email.message}</p>}
                                </div>

                                <div className='space-y-2'>
                                    <Label>
                                        Phone number
                                        <span className='text-muted-foreground/60'> (optional)</span>
                                    </Label>
                                    <Input type='tel' {...register('phone')} placeholder='+44 XXX XXX XXXX' />
                                    {errors.phone && <p className='text-sm text-red-500'>{errors.phone.message}</p>}
                                </div>

                                <div className='space-y-2'>
                                    <Label>Subject</Label>
                                    <Input type='text' {...register('subject')} placeholder='What is this regarding?' />
                                    {errors.subject && <p className='text-sm text-red-500'>{errors.subject.message}</p>}
                                </div>

                                <div className='space-y-2'>
                                    <Label>Your message</Label>
                                    <Textarea
                                        {...register('message')}
                                        placeholder='How can we help you?'
                                        className='min-h-[120px] resize-none'
                                    />
                                    {errors.message && <p className='text-sm text-red-500'>{errors.message.message}</p>}
                                </div>

                                <div className='flex justify-end'>
                                    <Button type='submit' size='lg' disabled={isSubmitting}>
                                        {isSubmitting ? 'Sending...' : 'Send Message'}
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
