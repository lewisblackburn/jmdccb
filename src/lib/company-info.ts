export const companyInfo = {
    name: 'JM Developments',
    fullName: 'JM Developments Civils, Construction and Building',
    description:
        'A leading contractor within the Civils, Construction and Building industries, dedicated to delivering projects safely, within budget, timescale, and to the highest standard required by our clients.',
    theme: {
        primary: '#ce2a2d',
        primaryForeground: '#fff',
        ring: '#ce2a2d9c',
        radius: '0rem'
    },
    contact: {
        address: {
            street: '1 Carlsberg Close',
            city: 'Hillview',
            country: 'United Kingdom'
        },
        email: {
            julian: 'julian@jmdccb.com',
            jamie: 'jamie@jmdccb.com',
            bob: 'bob@jmdccb.com'
        },
        phone: {
            julian: '+44 7736 339 448',
            jamie: '+44 7920 426 294',
            bob: '+44 7909 068 560'
        }
    },
    social: {
        facebook: 'https://facebook.com/jmdevelopments',
        twitter: 'https://twitter.com/jmdevelopments',
        instagram: 'https://instagram.com/jmdevelopments'
    },
    certifications: ['Safe Contractor accreditation'],
    services: ['Civil Engineering', 'Construction', 'Building', 'Project Management', 'Health and Safety Management'],
    team: {
        julian: {
            name: 'Julian Mills',
            role: 'Director',
            phone: '+44 7736 339 448',
            email: 'julian@jmdccb.com'
        },
        jamie: {
            name: 'Jamie Sidebottom',
            role: 'Director',
            phone: '+44 7920 426 294',
            email: 'jamie@jmdccb.com'
        },
        bob: {
            name: 'Bob Irwin',
            role: 'Health & Safety / Construction Manager',
            phone: '+44 7909 068 560',
            email: 'bob@jmdccb.com'
        }
    }
} as const;
