import { FacebookIcon } from '@/components/icons/FacebookIcon';
import { InstagramIcon } from '@/components/icons/InstagramIcon';
import { XIcon } from '@/components/icons/XIcon';
import PageHeader from '@/components/page-header';
import { companyInfo } from '@/lib/company-info';
import { Button } from '@/registry/new-york-v4/ui/button';
import { Input } from '@/registry/new-york-v4/ui/input';
import { Label } from '@/registry/new-york-v4/ui/label';
import { Textarea } from '@/registry/new-york-v4/ui/textarea';

const formFields = [
    {
        label: 'Full name',
        name: 'fullName',
        placeholder: 'First and last name',
        type: 'text'
    },
    {
        label: 'Email address',
        name: 'email',
        placeholder: 'you@example.com',
        type: 'email'
    },
    {
        label: 'Phone number',
        name: 'phone',
        placeholder: '+44 XXX XXX XXXX',
        type: 'tel',
        optional: true
    },
    {
        label: 'Subject',
        name: 'subject',
        placeholder: 'What is this regarding?',
        type: 'text'
    },
    {
        label: 'Your message',
        name: 'message',
        placeholder: 'How can we help you?',
        type: 'textarea'
    }
];

export default function Contact() {
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
                            <form className='mt-5 space-y-5'>
                                {formFields.map((field) => (
                                    <div key={field.name} className='space-y-2'>
                                        <Label>
                                            {field.label}
                                            {field.optional && (
                                                <span className='text-muted-foreground/60'> (optional)</span>
                                            )}
                                        </Label>
                                        {field.type === 'textarea' ? (
                                            <Textarea
                                                name={field.name}
                                                placeholder={field.placeholder}
                                                className='min-h-[120px] resize-none'
                                            />
                                        ) : (
                                            <Input
                                                type={field.type}
                                                name={field.name}
                                                placeholder={field.placeholder}
                                            />
                                        )}
                                    </div>
                                ))}

                                <div className='flex justify-end'>
                                    <Button type='submit' size='lg'>
                                        Send Message
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
