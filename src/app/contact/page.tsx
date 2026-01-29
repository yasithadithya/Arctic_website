import { Phone, Mail, MapPin, Clock, Facebook, Linkedin, MessageCircle } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata = {
    title: "Contact Us | Arctic Technologies",
    description: "Get in touch with Arctic Technologies for IT solutions, computer repairs, and SLA-backed support services in Sri Lanka.",
};

const contactInfo = [
    {
        icon: Phone,
        title: "Phone",
        content: "+94 78 88 618 11",
        href: "tel:+94788861811"
    },
    {
        icon: Mail,
        title: "Email",
        content: "Team@arctictechnologies.org.lk",
        href: "mailto:Team@arctictechnologies.org.lk"
    },
    {
        icon: MapPin,
        title: "Location",
        content: "Sri Lanka",
        href: null
    },
    {
        icon: Clock,
        title: "Business Hours",
        content: "Mon - Sat: 9AM - 6PM",
        href: null
    },
];

const socialLinks = [
    {
        icon: Facebook,
        label: "Facebook",
        href: "https://web.facebook.com/profile.php?id=61575511880304",
        color: "hover:bg-blue-600"
    },
    {
        icon: Linkedin,
        label: "LinkedIn",
        href: "https://www.linkedin.com/company/arctic-technologies-by-lucifer/",
        color: "hover:bg-blue-500"
    },
    {
        icon: MessageCircle,
        label: "WhatsApp",
        href: "https://whatsapp.com/channel/0029VaqrpXCBlHphT762Pz3i",
        color: "hover:bg-green-500"
    },
];

export default function ContactPage() {
    return (
        <div className="pt-24 lg:pt-32">
            {/* Hero Section */}
            <section className="py-16 lg:py-24 relative">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-arctic-cyan/10 rounded-full blur-3xl pointer-events-none" />

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="text-arctic-cyan text-sm font-medium uppercase tracking-wider">
                        Get in Touch
                    </span>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">
                        Need to <span className="gradient-text">Talk to Us?</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-gray-400 text-lg">
                        We&apos;re here to help. Reach out to discuss your IT needs, get a quote,
                        or schedule a consultation with our team.
                    </p>
                </div>
            </section>

            {/* Contact Content */}
            <section className="py-16 lg:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-5 gap-12">
                        {/* Contact Info */}
                        <div className="lg:col-span-2 space-y-8">
                            <div>
                                <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
                                <div className="space-y-6">
                                    {contactInfo.map((item, i) => (
                                        <div key={i} className="flex items-start gap-4">
                                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-arctic-cyan/20 to-arctic-blue/20 flex items-center justify-center flex-shrink-0">
                                                <item.icon className="w-5 h-5 text-arctic-cyan" />
                                            </div>
                                            <div>
                                                <h3 className="text-white font-medium mb-1">{item.title}</h3>
                                                {item.href ? (
                                                    <a
                                                        href={item.href}
                                                        className="text-gray-400 hover:text-arctic-cyan transition-colors"
                                                    >
                                                        {item.content}
                                                    </a>
                                                ) : (
                                                    <p className="text-gray-400">{item.content}</p>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Social Links */}
                            <div>
                                <h3 className="text-white font-medium mb-4">Connect With Us</h3>
                                <div className="flex gap-3">
                                    {socialLinks.map((social, i) => (
                                        <a
                                            key={i}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 hover:text-white ${social.color} transition-colors`}
                                            aria-label={social.label}
                                        >
                                            <social.icon className="w-5 h-5" />
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Quick Response Box */}
                            <div className="glass rounded-2xl p-6">
                                <h3 className="text-white font-semibold mb-2">Quick Response Guaranteed</h3>
                                <p className="text-gray-400 text-sm">
                                    As an SLA-backed service provider, we guarantee quick response times.
                                    Expect to hear from us within 24 hours of your inquiry.
                                </p>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-3">
                            <div className="glass rounded-3xl p-8 lg:p-10">
                                <h2 className="text-2xl font-bold text-white mb-2">Send Us a Message</h2>
                                <p className="text-gray-400 mb-8">
                                    Fill out the form below and we&apos;ll get back to you as soon as possible.
                                </p>
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
