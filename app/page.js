import styles from './page.module.css';
import Link from 'next/link';

export default function Home() {
    return (
        <>
            {/* Hero Section - Split Layout */}
            <section className={styles.heroSplit}>
                {/* Left Orange Panel */}
                <div className={styles.heroLeft}>
                    <div className={styles.verticalText}>24/7 Los Angeles Handyman</div>
                    
                    <div className={styles.heroForm}>
                        <h3 className={styles.formTitle}>Schedule Service Now!</h3>
                        <p className={styles.formSubtitle}>
                            Your solution for residential / commercial services.<br />
                            Book online and get 10% off discount.
                        </p>
                        <form className={styles.bookingForm}>
                            <input type="text" name="fullname" placeholder="Fullname" required />
                            <input type="tel" name="phone" placeholder="Phone number" required />
                            <input type="text" name="service" placeholder="Service" />
                            <button type="submit" className={styles.submitBtn}>Submit</button>
                        </form>
                        <div className={styles.ratingBadge}>
                            <span className={styles.stars}>★★★★★</span>
                            <span className={styles.ratingText}>Top Rated Handyman Services With Excellent Quality<br />by Reliable Experts</span>
                        </div>
                    </div>
                </div>

                {/* Right Content Panel */}
                <div className={styles.heroRight}>
                    <div className={styles.heroContent}>
                        <p className={styles.heroLocation}>Los Angeles's</p>
                        <h1 className={styles.heroTitle}>
                            Trusted Handyman<br />Services
                        </h1>
                        <p className={styles.heroTagline}>Professional & Reliable Service</p>
                        <p className={styles.heroDescription}>
                            Your trusted local professional 24/7 emergency handyman service in LA. We are dedicated to providing high-quality handyman services with 15+ years of experience.
                        </p>
                        
                        <ul className={styles.featureList}>
                            <li><span className={styles.checkmark}>✓</span> 24/7 Handyman Team 365</li>
                            <li><span className={styles.checkmark}>✓</span> #1 Most Loved & Trusted Pros</li>
                            <li><span className={styles.checkmark}>✓</span> Fast Arrival</li>
                            <li><span className={styles.checkmark}>✓</span> Professional Friendly Handyman</li>
                        </ul>

                        <div className={styles.heroCtas}>
                            <a href="/contact" className={styles.btnPrimary}>Get a Free quote</a>
                            <a href="tel:3239894840" className={styles.btnSecondary}>📞 (323) 989-4840</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Customer Reviews Section */}
            <section className={styles.reviewsBar}>
                <div className={styles.reviewsContent}>
                    <div className={styles.reviewsTitle}>
                        <h2>Our Customer<br />Reviews</h2>
                        <p>We are focused on customer satisfaction.<br />See our top-notch service and dedication.</p>
                    </div>
                    <div className={styles.reviewBadges}>
                        <div className={styles.reviewBadge}>
                            <span className={styles.platformIcon}>G</span>
                            <div>
                                <span className={styles.platformName}>Google Rating</span>
                                <div className={styles.ratingStars}>★★★★★ <span>5.0</span></div>
                            </div>
                        </div>
                        <div className={styles.reviewBadge}>
                            <span className={styles.platformIcon} style={{background: '#d32323'}}>Y</span>
                            <div>
                                <span className={styles.platformName}>Yelp Rating</span>
                                <div className={styles.ratingStars}>★★★★★ <span>5.0</span></div>
                            </div>
                        </div>
                        <div className={styles.reviewBadge}>
                            <span className={styles.platformIcon} style={{background: '#1877f2'}}>f</span>
                            <div>
                                <span className={styles.platformName}>Facebook Rating</span>
                                <div className={styles.ratingStars}>★★★★★ <span>5.0</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className={styles.servicesSection}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}><span className={styles.titleAccent}>|</span> Services</h2>
                    <p className={styles.sectionSubtitle}>Reliable, Trusted and Professional Handyman Services.</p>
                </div>
                
                <div className={styles.servicesGrid}>
                    <Link href="/services/carpentry-cabinets" className={styles.serviceItem}>
                        <span className={styles.serviceIcon}>🪚</span>
                        <div>
                            <h3>CARPENTRY AND CABINETS</h3>
                            <p>Qualified carpenters at your service!</p>
                        </div>
                    </Link>
                    <Link href="/services/gutters-siding" className={styles.serviceItem}>
                        <span className={styles.serviceIcon}>🏠</span>
                        <div>
                            <h3>GUTTERS AND SIDING</h3>
                            <p>Installation, Repair, and Upkeep.</p>
                        </div>
                    </Link>
                    <Link href="/services/holiday-decorating" className={styles.serviceItem}>
                        <span className={styles.serviceIcon}>🎄</span>
                        <div>
                            <h3>HOLIDAY DECORATING</h3>
                            <p>Transform your space with festive decorations.</p>
                        </div>
                    </Link>
                    <Link href="/services/decks-fences" className={styles.serviceItem}>
                        <span className={styles.serviceIcon}>🏗️</span>
                        <div>
                            <h3>DECKS AND FENCES</h3>
                            <p>Design and install your dream deck and fence.</p>
                        </div>
                    </Link>
                    <Link href="/services/maintenance" className={styles.serviceItem}>
                        <span className={styles.serviceIcon}>🔧</span>
                        <div>
                            <h3>MAINTENANCE SERVICES</h3>
                            <p>Comprehensive property maintenance.</p>
                        </div>
                    </Link>
                    <Link href="/services/drywall-repair" className={styles.serviceItem}>
                        <span className={styles.serviceIcon}>🧱</span>
                        <div>
                            <h3>DRYWALL REPAIR</h3>
                            <p>Quick and professional drywall repairs.</p>
                        </div>
                    </Link>
                    <Link href="/services/painting" className={styles.serviceItem}>
                        <span className={styles.serviceIcon}>🎨</span>
                        <div>
                            <h3>PAINTING</h3>
                            <p>Transform your space with professional painting.</p>
                        </div>
                    </Link>
                    <Link href="/services/plumbing" className={styles.serviceItem}>
                        <span className={styles.serviceIcon}>🚰</span>
                        <div>
                            <h3>PLUMBING</h3>
                            <p>Efficient plumbing solutions for your home.</p>
                        </div>
                    </Link>
                    <Link href="/services/light-fixture-installation" className={styles.serviceItem}>
                        <span className={styles.serviceIcon}>💡</span>
                        <div>
                            <h3>LIGHT FIXTURE INSTALLATION</h3>
                            <p>Upgrade with stylish light fixtures.</p>
                        </div>
                    </Link>
                    <Link href="/services/ceiling-fan-installation" className={styles.serviceItem}>
                        <span className={styles.serviceIcon}>🌀</span>
                        <div>
                            <h3>CEILING FAN INSTALLATION</h3>
                            <p>Energy-efficient ceiling fan installations.</p>
                        </div>
                    </Link>
                    <Link href="/services/flooring" className={styles.serviceItem}>
                        <span className={styles.serviceIcon}>🪵</span>
                        <div>
                            <h3>FLOORING</h3>
                            <p>Elegant and functional flooring solutions.</p>
                        </div>
                    </Link>
                    <Link href="/services/tv-mounting" className={styles.serviceItem}>
                        <span className={styles.serviceIcon}>📺</span>
                        <div>
                            <h3>TV MOUNTING</h3>
                            <p>Expert TV mounting for the ultimate setup.</p>
                        </div>
                    </Link>
                    <Link href="/services/furniture-assembly" className={styles.serviceItem}>
                        <span className={styles.serviceIcon}>🛋️</span>
                        <div>
                            <h3>ASSEMBLING FURNITURE</h3>
                            <p>Furniture assembly quickly and efficiently.</p>
                        </div>
                    </Link>
                    <Link href="/services/electrical" className={styles.serviceItem}>
                        <span className={styles.serviceIcon}>⚡</span>
                        <div>
                            <h3>ELECTRICAL/LOW VOLTAGE</h3>
                            <p>Safe electrical and low voltage installations.</p>
                        </div>
                    </Link>
                    <Link href="/services/smart-home" className={styles.serviceItem}>
                        <span className={styles.serviceIcon}>📱</span>
                        <div>
                            <h3>SMART HOME</h3>
                            <p>Smart technology for convenience and efficiency.</p>
                        </div>
                    </Link>
                </div>
            </section>

            {/* Scrolling Banner */}
            <div className={styles.scrollingBanner}>
                <div className={styles.bannerTrack}>
                    <span>FAST, PROFESSIONAL HANDYMAN AT YOUR SERVICE</span>
                    <span className={styles.bannerDot}>•</span>
                    <span>FAST ARRIVAL IN 30 MINUTES!</span>
                    <span className={styles.bannerDot}>•</span>
                    <span>CLICK HERE TO GET STARTED!</span>
                    <span className={styles.bannerDot}>•</span>
                    <span>FAST, PROFESSIONAL HANDYMAN AT YOUR SERVICE</span>
                    <span className={styles.bannerDot}>•</span>
                    <span>FAST ARRIVAL IN 30 MINUTES!</span>
                    <span className={styles.bannerDot}>•</span>
                    <span>CLICK HERE TO GET STARTED!</span>
                    <span className={styles.bannerDot}>•</span>
                </div>
            </div>

            {/* CTA Section with Form */}
            <section className={styles.ctaSection}>
                <div className={styles.ctaContent}>
                    <div className={styles.ctaText}>
                        <h2>Let us take care of all<br /><span className={styles.accentText}>your handyman needs.</span></h2>
                        <p>
                            Our standards of service include all required certifications, licenses, and background to guarantee the safety, quality, and expertise of our work.
                        </p>
                        <div className={styles.ctaButtons}>
                            <a href="tel:3239894840" className={styles.btnPrimary}>Call now</a>
                            <a href="/contact" className={styles.btnOutline}>Schedule Service</a>
                        </div>
                    </div>
                    
                    <div className={styles.ctaFormBox}>
                        <h3>Schedule Service Now!</h3>
                        <p>Your solution for residential / commercial services. Book now and get a 10% off discount.</p>
                        <form className={styles.ctaForm}>
                            <input type="text" placeholder="Name" required />
                            <input type="tel" placeholder="Phone number" required />
                            <input type="email" placeholder="Email" />
                            <input type="text" placeholder="Address" />
                            <button type="submit">Submit</button>
                        </form>
                        <div className={styles.testimonialMini}>
                            <div className={styles.miniStars}>★★★★★</div>
                            <p>"Excellent quality in their Handyman LA service"</p>
                            <span>by Debbie Escobar</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Emergency Section */}
            <section className={styles.emergencySection}>
                <div className={styles.emergencyContent}>
                    <div className={styles.emergencyText}>
                        <h2><span className={styles.titleAccent}>|</span> Emergency Handyman<br />Solutions</h2>
                        <p>
                            Need a quick fix for your home, office, or business in Los Angeles? Don't stress! NC Services is here to provide you with expert emergency handyman services. Available 24/7, our experienced and highly skilled team is ready to tackle any urgent repair needs you may have. Whether it's a minor fix or a major repair, NC Services has become the trusted name for emergency handyman solutions in the area, catering to all your residential, commercial, and industrial needs.
                        </p>
                    </div>
                    <div className={styles.serviceBadges}>
                        <div className={styles.serviceBadge}>
                            <span className={styles.badgeIcon}>🏠</span>
                            <span>Residential Handyman</span>
                        </div>
                        <div className={styles.serviceBadge}>
                            <span className={styles.badgeIcon}>🏢</span>
                            <span>Commercial Handyman</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
