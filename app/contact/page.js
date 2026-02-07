
import styles from './contact.module.css';

export default function ContactPage() {
    return (
        <div className={styles.contactContainer}>
            <div className={styles.header}>
                <h1 className={styles.title}>Contact Us</h1>
                <p className="text-muted">
                    Ready to get started? We're just a message away.
                </p>
            </div>

            <div className={styles.contentGrid}>
                {/* Contact Info */}
                <div className={styles.infoBox}>
                    <h2 className={styles.infoTitle}>Get in Touch</h2>

                    <div className={styles.infoItem}>
                        <div className={styles.icon}>📞</div>
                        <div>
                            <p style={{ marginBottom: '0.2rem', fontWeight: 'bold' }}>Phone</p>
                            <p>(323) 989-4840</p>
                        </div>
                    </div>

                    <div className={styles.infoItem}>
                        <div className={styles.icon}>📧</div>
                        <div>
                            <p style={{ marginBottom: '0.2rem', fontWeight: 'bold' }}>Email</p>
                            <p>info@ncsvs.org</p>
                        </div>
                    </div>

                    <div className={styles.infoItem}>
                        <div className={styles.icon}>📍</div>
                        <div>
                            <p style={{ marginBottom: '0.2rem', fontWeight: 'bold' }}>Service Area</p>
                            <p>Los Angeles, Orange County & Surrounding Areas</p>
                        </div>
                    </div>

                    <div className={styles.infoItem}>
                        <div className={styles.icon}>⏰</div>
                        <div>
                            <p style={{ marginBottom: '0.2rem', fontWeight: 'bold' }}>Hours</p>
                            <p>Mon - Fri: 8:00 AM - 6:00 PM</p>
                            <p>Sat: 9:00 AM - 4:00 PM</p>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className={styles.formBox}>
                    <h2 className={styles.formTitle}>Schedule Service</h2>
                    <form>
                        <div className={styles.formGroup}>
                            <label htmlFor="name" className={styles.label}>Full Name</label>
                            <input type="text" id="name" name="name" className={styles.input} placeholder="John Doe" required />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="email" className={styles.label}>Email Address</label>
                            <input type="email" id="email" name="email" className={styles.input} placeholder="john@example.com" required />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="phone" className={styles.label}>Phone Number</label>
                            <input type="tel" id="phone" name="phone" className={styles.input} placeholder="(555) 123-4567" required />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="address" className={styles.label}>Service Address</label>
                            <input type="text" id="address" name="address" className={styles.input} placeholder="123 Main St, Los Angeles, CA" required />
                        </div>

                        <div className={styles.formRow}>
                            <div className={styles.formGroup}>
                                <label htmlFor="date" className={styles.label}>Preferred Date</label>
                                <input type="date" id="date" name="date" className={styles.input} />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="time" className={styles.label}>Preferred Time</label>
                                <select id="time" name="time" className={styles.input} style={{ appearance: 'none' }}>
                                    <option value="" style={{ color: "black" }}>Select time...</option>
                                    <option value="morning" style={{ color: "black" }}>Morning (8AM - 12PM)</option>
                                    <option value="afternoon" style={{ color: "black" }}>Afternoon (12PM - 4PM)</option>
                                    <option value="evening" style={{ color: "black" }}>Evening (4PM - 6PM)</option>
                                </select>
                            </div>
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="service" className={styles.label}>Service Needed</label>
                            <select id="service" name="service" className={styles.input} style={{ appearance: 'none' }}>
                                <option value="" style={{ color: "black" }}>Select a service...</option>
                                <option value="electrical" style={{ color: "black" }}>Electrical</option>
                                <option value="plumbing" style={{ color: "black" }}>Plumbing</option>
                                <option value="carpentry" style={{ color: "black" }}>Carpentry</option>
                                <option value="painting" style={{ color: "black" }}>Painting</option>
                                <option value="smart-home" style={{ color: "black" }}>Smart Home</option>
                                <option value="assembly" style={{ color: "black" }}>Assembly</option>
                                <option value="general" style={{ color: "black" }}>General Repair</option>
                                <option value="emergency" style={{ color: "black" }}>Emergency Repair</option>
                                <option value="other" style={{ color: "black" }}>Other</option>
                            </select>
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="message" className={styles.label}>Project Description</label>
                            <textarea id="message" name="message" className={styles.textarea} placeholder="Please describe your project or issue in detail..." required></textarea>
                        </div>

                        <button type="submit" className={styles.submitBtn}>
                            Request Free Estimate
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
