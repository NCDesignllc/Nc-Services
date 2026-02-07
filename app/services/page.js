
import styles from './services.module.css';
import Link from 'next/link';

const services = [
    {
        slug: 'carpentry-cabinets',
        icon: '🪚',
        title: 'Carpentry and Cabinets',
        description: 'Qualified carpenters at your service!'
    },
    {
        slug: 'gutters-siding',
        icon: '🏠',
        title: 'Gutters and Siding',
        description: 'Installation, Repair, and Upkeep of Siding and Gutters.'
    },
    {
        slug: 'holiday-decorating',
        icon: '🎄',
        title: 'Holiday Decorating',
        description: 'Transform your space with festive holiday decorations.'
    },
    {
        slug: 'decks-fences',
        icon: '🏗️',
        title: 'Decks and Fences',
        description: 'Design and install your dream deck and fence.'
    },
    {
        slug: 'maintenance',
        icon: '🔧',
        title: 'Maintenance Services',
        description: 'Comprehensive property maintenance services.'
    },
    {
        slug: 'drywall-repair',
        icon: '🧱',
        title: 'Drywall Repair',
        description: 'Quick and professional drywall repairs.'
    },
    {
        slug: 'painting',
        icon: '🎨',
        title: 'Painting',
        description: 'Transform your space with professional painting services.'
    },
    {
        slug: 'plumbing',
        icon: '🚰',
        title: 'Plumbing',
        description: 'Efficient plumbing solutions for your home and business.'
    },
    {
        slug: 'light-fixture-installation',
        icon: '💡',
        title: 'Light Fixture Installation',
        description: 'Upgrade your home with stylish light fixture installations.'
    },
    {
        slug: 'ceiling-fan-installation',
        icon: '🌀',
        title: 'Ceiling Fan Installation',
        description: 'Keep your space comfortable with energy-efficient ceiling fan installations.'
    },
    {
        slug: 'flooring',
        icon: '🪵',
        title: 'Flooring',
        description: 'Transform your space with elegant and functional flooring solutions.'
    },
    {
        slug: 'tv-mounting',
        icon: '📺',
        title: 'TV Mounting',
        description: 'Create the ultimate entertainment setup with expert TV mounting.'
    },
    {
        slug: 'furniture-assembly',
        icon: '🛋️',
        title: 'Assembling Furniture',
        description: 'Let us take care of your furniture assembly quickly and efficiently.'
    },
    {
        slug: 'electrical',
        icon: '⚡',
        title: 'Electrical/Low Voltage',
        description: 'Get safe and efficient electrical and low voltage system installations.'
    },
    {
        slug: 'smart-home',
        icon: '📱',
        title: 'Smart Home',
        description: 'Upgrade your home with smart technology for convenience and efficiency.'
    }
];

export default function ServicesPage() {
    return (
        <>
            <section className={styles.header}>
                <h1 className={styles.title}>Our Services</h1>
                <p className={styles.subtitle}>
                    Expert solutions for every corner of your home. We handle the tough jobs so you don't have to.
                </p>
            </section>

            <section className={styles.servicesGrid}>
                {services.map((service) => (
                    <Link href={`/services/${service.slug}`} key={service.slug} className={styles.serviceCard}>
                        <div className={styles.cardIcon}>{service.icon}</div>
                        <div className={styles.cardContent}>
                            <h3 className={styles.cardTitle}>{service.title}</h3>
                            <p className={styles.cardDescription}>{service.description}</p>
                        </div>
                    </Link>
                ))}
            </section>

            <div className={styles.ctaSection}>
                <h2>Don't see what you need?</h2>
                <p className="text-muted">Contact us to discuss your specific project.</p>
                <a href="/contact" className="btn">Get a Custom Quote</a>
            </div>
        </>
    );
}
