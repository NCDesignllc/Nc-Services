
import styles from './service.module.css';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const servicesData = {
    'carpentry-cabinets': {
        icon: '🪚',
        title: 'Carpentry and Cabinets',
        description: 'Qualified carpenters at your service!',
        longDescription: 'Our skilled carpentry team specializes in custom woodwork, cabinet installation, and repairs. Whether you need new cabinets, repairs to existing ones, or custom built-ins, we deliver quality craftsmanship that stands the test of time.',
        services: [
            'Custom cabinet installation',
            'Cabinet repair & refinishing',
            'Door installation & repair',
            'Custom shelving & built-ins',
            'Trim & molding installation',
            'Crown molding',
            'Baseboards & window trim',
            'Closet organization systems'
        ],
        benefits: [
            'Expert craftsmen with years of experience',
            'Quality materials and finishes',
            'Custom solutions for your space',
            'Clean and professional work'
        ]
    },
    'gutters-siding': {
        icon: '🏠',
        title: 'Gutters and Siding',
        description: 'Installation, Repair, and Upkeep of Siding and Gutters.',
        longDescription: 'Protect your home from water damage with our comprehensive gutter and siding services. We handle everything from cleaning and repairs to full installations, ensuring your home stays protected year-round.',
        services: [
            'Gutter cleaning & maintenance',
            'Gutter repair & sealing',
            'Gutter guard installation',
            'Downspout installation',
            'Siding repair',
            'Siding replacement',
            'Fascia & soffit repair',
            'Drainage solutions'
        ],
        benefits: [
            'Prevent water damage to your home',
            'Extend the life of your roof',
            'Improve curb appeal',
            'Professional installation'
        ]
    },
    'holiday-decorating': {
        icon: '🎄',
        title: 'Holiday Decorating',
        description: 'Transform your space with festive holiday decorations.',
        longDescription: 'Make your holidays magical without the hassle! Our team handles all aspects of holiday decorating, from hanging lights to setting up displays. We work safely and efficiently to bring your holiday vision to life.',
        services: [
            'Christmas light installation',
            'Outdoor display setup',
            'Tree decorating assistance',
            'Wreath & garland hanging',
            'Light removal & storage',
            'Commercial holiday displays',
            'Event decorating',
            'Year-round seasonal decor'
        ],
        benefits: [
            'Safe professional installation',
            'No ladder climbing for you',
            'Custom designs available',
            'Timely setup and removal'
        ]
    },
    'decks-fences': {
        icon: '🏗️',
        title: 'Decks and Fences',
        description: 'Design and install your dream deck and fence.',
        longDescription: 'Enhance your outdoor living space with our professional deck and fence services. From new construction to repairs and staining, we help you create the perfect outdoor environment for your family.',
        services: [
            'Deck design & construction',
            'Deck repair & restoration',
            'Deck staining & sealing',
            'Fence installation',
            'Fence repair',
            'Gate installation & repair',
            'Pergola construction',
            'Outdoor structure building'
        ],
        benefits: [
            'Quality materials that last',
            'Custom designs to fit your space',
            'Increase property value',
            'Expert craftsmanship'
        ]
    },
    'maintenance': {
        icon: '🔧',
        title: 'Maintenance Services',
        description: 'Comprehensive property maintenance services.',
        longDescription: 'Keep your home in top condition with our comprehensive maintenance services. We handle routine upkeep and repairs to prevent small issues from becoming big problems.',
        services: [
            'Regular home inspections',
            'Preventive maintenance',
            'Seasonal maintenance',
            'Caulking & sealing',
            'Weather stripping',
            'Minor repairs',
            'Safety checks',
            'Property upkeep'
        ],
        benefits: [
            'Prevent costly repairs',
            'Maintain home value',
            'Peace of mind',
            'Scheduled service plans available'
        ]
    },
    'drywall-repair': {
        icon: '🧱',
        title: 'Drywall Repair',
        description: 'Quick and professional drywall repairs.',
        longDescription: 'From small holes to large patches, our drywall experts deliver seamless repairs that blend perfectly with your existing walls. We handle everything from damage repair to texture matching.',
        services: [
            'Hole patching (all sizes)',
            'Crack repair',
            'Water damage repair',
            'Texture matching',
            'Joint compound finishing',
            'Popcorn ceiling removal',
            'Drywall installation',
            'Finishing & sanding'
        ],
        benefits: [
            'Seamless repairs',
            'Texture matching expertise',
            'Quick turnaround',
            'Clean workmanship'
        ]
    },
    'painting': {
        icon: '🎨',
        title: 'Painting',
        description: 'Transform your space with professional painting services.',
        longDescription: 'Give your home a fresh new look with our professional painting services. We provide meticulous prep work and use quality paints to ensure a beautiful, long-lasting finish.',
        services: [
            'Interior wall painting',
            'Exterior house painting',
            'Cabinet painting',
            'Trim & door painting',
            'Accent walls',
            'Color consultation',
            'Surface preparation',
            'Touch-ups & repairs'
        ],
        benefits: [
            'Quality paints and materials',
            'Thorough surface preparation',
            'Clean, precise edges',
            'Furniture protection included'
        ]
    },
    'plumbing': {
        icon: '🚰',
        title: 'Plumbing',
        description: 'Efficient plumbing solutions for your home and business.',
        longDescription: 'Our plumbing services cover everything from minor repairs to fixture installations. We diagnose issues quickly and provide reliable solutions to keep your plumbing working perfectly.',
        services: [
            'Faucet repair & installation',
            'Toilet repair & replacement',
            'Leak detection & repair',
            'Drain cleaning',
            'Garbage disposal installation',
            'Showerhead upgrades',
            'Water heater services',
            'Pipe repairs'
        ],
        benefits: [
            'Fast response time',
            'Upfront pricing',
            'Quality parts used',
            'Work guaranteed'
        ]
    },
    'light-fixture-installation': {
        icon: '💡',
        title: 'Light Fixture Installation',
        description: 'Upgrade your home with stylish light fixture installations.',
        longDescription: 'Brighten up your space with professional light fixture installation. We handle all types of fixtures, from simple replacements to complex installations, ensuring safe and proper wiring.',
        services: [
            'Chandelier installation',
            'Pendant light installation',
            'Recessed lighting',
            'Track lighting',
            'Under-cabinet lighting',
            'Outdoor lighting',
            'Dimmer switch installation',
            'LED upgrades'
        ],
        benefits: [
            'Safe, code-compliant work',
            'Clean installation',
            'Proper fixture support',
            'All fixture types welcome'
        ]
    },
    'ceiling-fan-installation': {
        icon: '🌀',
        title: 'Ceiling Fan Installation',
        description: 'Keep your space comfortable with energy-efficient ceiling fan installations.',
        longDescription: 'Stay cool and save on energy bills with professional ceiling fan installation. We ensure proper mounting, balanced blades, and correct wiring for safe, efficient operation.',
        services: [
            'New fan installation',
            'Fan replacement',
            'Fan repair',
            'Remote control setup',
            'Light kit installation',
            'Blade balancing',
            'Outdoor fan installation',
            'Smart fan setup'
        ],
        benefits: [
            'Secure mounting guaranteed',
            'Wobble-free installation',
            'All brands welcome',
            'Energy savings'
        ]
    },
    'flooring': {
        icon: '🪵',
        title: 'Flooring',
        description: 'Transform your space with elegant and functional flooring solutions.',
        longDescription: 'Update your home with beautiful new flooring. We install and repair various flooring types, ensuring a perfect fit and finish that enhances your space.',
        services: [
            'Laminate flooring installation',
            'Vinyl plank installation',
            'Tile installation',
            'Hardwood repair',
            'Floor repair',
            'Transition strips',
            'Baseboard installation',
            'Subfloor repair'
        ],
        benefits: [
            'Precise measurements',
            'Quality installation',
            'Clean workspace',
            'Various materials available'
        ]
    },
    'tv-mounting': {
        icon: '📺',
        title: 'TV Mounting',
        description: 'Create the ultimate entertainment setup with expert TV mounting.',
        longDescription: 'Get that sleek, professional look with our TV mounting services. We handle all sizes and types of TVs, with options for cable concealment to create a clean, theater-like setup.',
        services: [
            'Flat screen TV mounting',
            'Tilting mount installation',
            'Full-motion mount installation',
            'Cable concealment',
            'In-wall cable routing',
            'Soundbar mounting',
            'Speaker installation',
            'home theater setup'
        ],
        benefits: [
            'Secure mounting on any wall type',
            'Cable management included',
            'Clean, professional finish',
            'All TV sizes'
        ]
    },
    'furniture-assembly': {
        icon: '🛋️',
        title: 'Assembling Furniture',
        description: 'Let us take care of your furniture assembly quickly and efficiently.',
        longDescription: 'Skip the frustration of complicated instructions. Our assembly experts put together all types of furniture quickly and correctly, ensuring everything is sturdy and properly assembled.',
        services: [
            'IKEA furniture assembly',
            'Office furniture setup',
            'Bedroom furniture assembly',
            'Outdoor furniture assembly',
            'Fitness equipment assembly',
            'Shelving systems',
            'Storage units',
            'Kids furniture & cribs'
        ],
        benefits: [
            'Fast, efficient service',
            'All brands and types',
            'Proper tool usage',
            'Cleanup included'
        ]
    },
    'electrical': {
        icon: '⚡',
        title: 'Electrical/Low Voltage',
        description: 'Get safe and efficient electrical and low voltage system installations.',
        longDescription: 'Our electrical services cover a wide range of needs, from outlet installations to low voltage systems. We prioritize safety and code compliance in all our work.',
        services: [
            'Outlet installation & repair',
            'Switch replacement',
            'GFCI outlet installation',
            'USB outlet upgrades',
            'Low voltage wiring',
            'Doorbell installation',
            'Smoke detector installation',
            'Electrical troubleshooting'
        ],
        benefits: [
            'Licensed and insured',
            'Code-compliant work',
            'Safety-focused',
            'Upfront pricing'
        ]
    },
    'smart-home': {
        icon: '📱',
        title: 'Smart Home',
        description: 'Upgrade your home with smart technology for convenience and efficiency.',
        longDescription: 'Transform your home into a smart home with our technology installation services. We set up and integrate smart devices for seamless control and automation.',
        services: [
            'Smart thermostat installation',
            'Smart lock installation',
            'Video doorbell setup',
            'Smart lighting systems',
            'Smart plug installation',
            'Voice assistant setup',
            'Security camera installation',
            'Home automation integration'
        ],
        benefits: [
            'Expert device setup',
            'App configuration included',
            'Integration with existing systems',
            'User training provided'
        ]
    }
};

export async function generateStaticParams() {
    return Object.keys(servicesData).map((slug) => ({
        slug: slug,
    }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const service = servicesData[slug];
    if (!service) return { title: 'Service Not Found' };
    
    return {
        title: `${service.title} - NC Services`,
        description: service.description,
    };
}

export default async function ServicePage({ params }) {
    const { slug } = await params;
    const service = servicesData[slug];
    
    if (!service) {
        notFound();
    }

    return (
        <div className={styles.servicePageContainer}>
            {/* Hero Section */}
            <section className={styles.heroSection}>
                <div className={styles.heroIcon}>{service.icon}</div>
                <h1 className={styles.heroTitle}>{service.title}</h1>
                <p className={styles.heroDescription}>{service.description}</p>
            </section>

            {/* Content Section */}
            <section className={styles.contentSection}>
                <div className={styles.contentGrid}>
                    {/* Main Content */}
                    <div className={styles.mainContent}>
                        <h2 className={styles.sectionTitle}>About This Service</h2>
                        <p className={styles.longDescription}>{service.longDescription}</p>

                        <h3 className={styles.subTitle}>What We Offer</h3>
                        <ul className={styles.servicesList}>
                            {service.services.map((item, index) => (
                                <li key={index}>
                                    <span className={styles.checkIcon}>✓</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Sidebar */}
                    <div className={styles.sidebar}>
                        <div className={styles.benefitsCard}>
                            <h3>Why Choose NC Services?</h3>
                            <ul>
                                {service.benefits.map((benefit, index) => (
                                    <li key={index}>
                                        <span className={styles.bulletIcon}>★</span>
                                        {benefit}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className={styles.ctaCard}>
                            <h3>Ready to Get Started?</h3>
                            <p>Contact us today for a free estimate on your {service.title.toLowerCase()} project.</p>
                            <Link href="/contact" className="btn">
                                Get Free Estimate
                            </Link>
                            <a href="tel:3239894840" className={styles.phoneLink}>
                                📞 (323) 989-4840
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Back to Services */}
            <div className={styles.backLink}>
                <Link href="/services">← Back to All Services</Link>
            </div>
        </div>
    );
}
