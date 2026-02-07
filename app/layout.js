import './globals.css';
import { Inter, Outfit } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-body', display: 'swap' });
const outfit = Outfit({ subsets: ['latin'], variable: '--font-heading', display: 'swap' });

export const metadata = {
    title: 'Nc Services - Premium Handyman Services',
    description: 'Expert residential and commercial handyman services in Los Angeles.',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
            <body>
                <header className="site-header glass">
                    <div className="container">
                        <a href="/" className="logo">
                            Nc <span className="text-accent">Services</span>
                        </a>
                        <nav className="main-nav">
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="/services">Services</a></li>
                                <li><a href="/about">About</a></li>
                                <li><a href="/contact">Contact</a></li>
                            </ul>
                        </nav>
                        <a href="/contact" className="btn cta-btn">
                            Get Quote
                        </a>
                    </div>
                </header>

                <main>
                    {children}
                </main>

                <footer className="site-footer">
                    <div className="container footer-grid">
                        <div className="footer-col">
                            <h4>Nc Services</h4>
                            <p className="text-muted">Premium handyman services you can trust. Serving Los Angeles & Orange County.</p>
                        </div>
                        <div className="footer-col">
                            <h4>Quick Links</h4>
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="/services">Services</a></li>
                                <li><a href="/about">About Us</a></li>
                                <li><a href="/contact">Contact Us</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Services</h4>
                            <ul>
                                <li><a href="/services/plumbing">Plumbing</a></li>
                                <li><a href="/services/electrical">Electrical</a></li>
                                <li><a href="/services/carpentry-cabinets">Carpentry</a></li>
                                <li><a href="/services/painting">Painting</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Contact Info</h4>
                            <ul>
                                <li><a href="#">(323) 989-4840</a></li>
                                <li><a href="#">info@ncsvs.org</a></li>
                                <li><a href="#">Los Angeles, CA</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        © {new Date().getFullYear()} Nc Services. All rights reserved.
                    </div>
                </footer>
            </body>
        </html>
    );
}
