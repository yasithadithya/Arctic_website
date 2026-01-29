import Link from "next/link";
import { Snowflake, Facebook, Linkedin, MessageCircle, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
    services: [
        { label: "Computer Sales", href: "/services#computers" },
        { label: "Computer Repair", href: "/services#repair" },
        { label: "Mobile Repairs", href: "/services#mobile" },
        { label: "Power Apps", href: "/services#powerapps" },
        { label: "Website Design", href: "/services#web" },
        { label: "Identity Management", href: "/services#identity" },
    ],
    company: [
        { label: "About Us", href: "/about" },
        { label: "Our Customers", href: "/customers" },
        { label: "Community", href: "/community" },
        { label: "Contact", href: "/contact" },
    ],
};

const socialLinks = [
    {
        icon: Facebook,
        href: "https://web.facebook.com/profile.php?id=61575511880304",
        label: "Facebook",
        hoverColor: "hover:text-blue-500"
    },
    {
        icon: Linkedin,
        href: "https://www.linkedin.com/company/arctic-technologies-by-lucifer/",
        label: "LinkedIn",
        hoverColor: "hover:text-blue-400"
    },
    {
        icon: MessageCircle,
        href: "https://whatsapp.com/channel/0029VaqrpXCBlHphT762Pz3i",
        label: "WhatsApp",
        hoverColor: "hover:text-green-500"
    },
];

export default function Footer() {
    return (
        <footer className="relative mt-20 border-t border-white/5">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-arctic-navy-light to-transparent pointer-events-none" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
                    {/* Brand Column */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="inline-flex items-center gap-2 group mb-4">
                            <Snowflake className="w-8 h-8 text-arctic-cyan transition-transform group-hover:rotate-45 duration-500" />
                            <span className="text-xl font-bold">
                                <span className="text-white">Arctic</span>
                                <span className="gradient-text">Technologies</span>
                            </span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed mt-4">
                            Empowering businesses with reliable IT solutions and SLA-backed support.
                            Your trusted technology partner in Sri Lanka.
                        </p>

                        {/* Social Links */}
                        <div className="flex items-center gap-3 mt-6">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 ${social.hoverColor} hover:bg-white/10 transition-all`}
                                    aria-label={social.label}
                                >
                                    <social.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Services Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Services</h3>
                        <ul className="space-y-2">
                            {footerLinks.services.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 text-sm hover:text-arctic-cyan transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Company</h3>
                        <ul className="space-y-2">
                            {footerLinks.company.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 text-sm hover:text-arctic-cyan transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Contact Us</h3>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href="tel:+94788861811"
                                    className="flex items-center gap-3 text-gray-400 text-sm hover:text-arctic-cyan transition-colors group"
                                >
                                    <span className="w-8 h-8 rounded-lg bg-arctic-cyan/10 flex items-center justify-center group-hover:bg-arctic-cyan/20 transition-colors">
                                        <Phone className="w-4 h-4 text-arctic-cyan" />
                                    </span>
                                    +94 78 88 618 11
                                </a>
                            </li>
                            <li>
                                <a
                                    href="mailto:Team@arctictechnologies.org.lk"
                                    className="flex items-center gap-3 text-gray-400 text-sm hover:text-arctic-cyan transition-colors group"
                                >
                                    <span className="w-8 h-8 rounded-lg bg-arctic-cyan/10 flex items-center justify-center group-hover:bg-arctic-cyan/20 transition-colors">
                                        <Mail className="w-4 h-4 text-arctic-cyan" />
                                    </span>
                                    Team@arctictechnologies.org.lk
                                </a>
                            </li>
                            <li>
                                <div className="flex items-start gap-3 text-gray-400 text-sm">
                                    <span className="w-8 h-8 rounded-lg bg-arctic-cyan/10 flex items-center justify-center flex-shrink-0">
                                        <MapPin className="w-4 h-4 text-arctic-cyan" />
                                    </span>
                                    <span>Sri Lanka</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} Arctic Technologies. All rights reserved.
                    </p>
                    <p className="text-gray-500 text-sm">
                        Designed with <span className="text-arctic-cyan">❄</span> in Sri Lanka
                    </p>
                </div>
            </div>
        </footer>
    );
}
