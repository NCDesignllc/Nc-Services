import styles from './about.module.css';

export default function AboutPage() {
    return (
        <div className={styles.aboutContainer}>
            {/* Hero Section */}
            <section className={styles.heroSection}>
                <h1 className={styles.heroTitle}>About <span className="text-accent">NC Services</span></h1>
                <p className={styles.heroSubtitle}>
                    Your trusted, family-owned handyman company serving Los Angeles & Orange County
                </p>
            </section>

            {/* Mission Section */}
            <section className={styles.missionSection}>
                <div className={styles.missionContent}>
                    <div className={styles.missionText}>
                        <h2 className={styles.sectionTitle}>Our Mission</h2>
                        <p>
                            At NC Services, our mission is simple: to provide <strong>exceptional craftsmanship</strong>, 
                            <strong> honest communication</strong>, and <strong>unmatched customer care</strong> for 
                            every project we undertake.
                        </p>
                        <p>
                            We believe that your home deserves the same attention to detail that we would give our own. 
                            That's why we treat every job—big or small—with the same level of professionalism and dedication.
                        </p>
                        <p>
                            Founded as a family-owned business, we've built our reputation on trust, reliability, and 
                            quality workmanship. We're not just fixing your home; we're building lasting relationships 
                            with our community.
                        </p>
                    </div>
                    <div className={styles.missionImage}>
                        <div className={styles.imagePlaceholder}>
                            <span>🏠</span>
                            <p>Quality Service Since Day One</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className={styles.valuesSection}>
                <h2 className={styles.sectionTitle}>Our Core Values</h2>
                <div className={styles.valuesGrid}>
                    <div className={styles.valueCard}>
                        <div className={styles.valueIcon}>🎯</div>
                        <h3>Excellence</h3>
                        <p>We never cut corners. Every task is completed to the highest standard of quality.</p>
                    </div>
                    <div className={styles.valueCard}>
                        <div className={styles.valueIcon}>🤝</div>
                        <h3>Integrity</h3>
                        <p>Honest pricing, transparent communication, and no hidden fees—ever.</p>
                    </div>
                    <div className={styles.valueCard}>
                        <div className={styles.valueIcon}>⏰</div>
                        <h3>Reliability</h3>
                        <p>We show up on time, every time. Your schedule matters to us.</p>
                    </div>
                    <div className={styles.valueCard}>
                        <div className={styles.valueIcon}>❤️</div>
                        <h3>Customer Care</h3>
                        <p>Your satisfaction is our priority. We're not done until you're happy.</p>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className={styles.whySection}>
                <div className={styles.whyContent}>
                    <h2 className={styles.sectionTitle}>Why Choose NC Services?</h2>
                    <div className={styles.whyGrid}>
                        <div className={styles.whyItem}>
                            <span className={styles.checkIcon}>✔</span>
                            <div>
                                <h4>Fully Insured</h4>
                                <p>Complete peace of mind with comprehensive insurance coverage</p>
                            </div>
                        </div>
                        <div className={styles.whyItem}>
                            <span className={styles.checkIcon}>✔</span>
                            <div>
                                <h4>Free Estimates</h4>
                                <p>No obligation quotes for all projects—know the cost upfront</p>
                            </div>
                        </div>
                        <div className={styles.whyItem}>
                            <span className={styles.checkIcon}>✔</span>
                            <div>
                                <h4>Satisfaction Guaranteed</h4>
                                <p>100% satisfaction guarantee on all work we perform</p>
                            </div>
                        </div>
                        <div className={styles.whyItem}>
                            <span className={styles.checkIcon}>✔</span>
                            <div>
                                <h4>Same-Day Service</h4>
                                <p>Emergency repairs and same-day appointments available</p>
                            </div>
                        </div>
                        <div className={styles.whyItem}>
                            <span className={styles.checkIcon}>✔</span>
                            <div>
                                <h4>Skilled Professionals</h4>
                                <p>Experienced technicians with expertise across all trades</p>
                            </div>
                        </div>
                        <div className={styles.whyItem}>
                            <span className={styles.checkIcon}>✔</span>
                            <div>
                                <h4>Clean Workspaces</h4>
                                <p>We leave your space cleaner than we found it</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Area */}
            <section className={styles.areaSection}>
                <h2 className={styles.sectionTitle}>Service Area</h2>
                <p className={styles.areaText}>
                    NC Services proudly serves homeowners and businesses throughout:
                </p>
                <div className={styles.areaGrid}>
                    <div className={styles.areaItem}>📍 Los Angeles</div>
                    <div className={styles.areaItem}>📍 Orange County</div>
                    <div className={styles.areaItem}>📍 Pasadena</div>
                    <div className={styles.areaItem}>📍 Glendale</div>
                    <div className={styles.areaItem}>📍 Burbank</div>
                    <div className={styles.areaItem}>📍 Santa Monica</div>
                    <div className={styles.areaItem}>📍 Long Beach</div>
                    <div className={styles.areaItem}>📍 Surrounding Areas</div>
                </div>
            </section>

            {/* CTA Section */}
            <section className={styles.ctaSection}>
                <h2>Ready to Experience the NC Services Difference?</h2>
                <p>Contact us today for a free estimate on your next project.</p>
                <div className={styles.ctaButtons}>
                    <a href="/contact" className="btn">Get Free Estimate</a>
                    <a href="tel:3239894840" className="btn" style={{ background: 'transparent', border: '2px solid var(--color-accent)', color: 'var(--color-accent)' }}>
                        Call (323) 989-4840
                    </a>
                </div>
            </section>
        </div>
    );
}
