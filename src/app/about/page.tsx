import Link from "next/link";
import { ArrowRight, Target, Users, Lightbulb, Heart } from "lucide-react";

export const metadata = {
    title: "About Us | Arctic Technologies",
    description: "Learn about Arctic Technologies - your trusted IT partner in Sri Lanka delivering SLA-backed computer services, repairs, and digital solutions.",
};

const values = [
    {
        icon: Target,
        title: "Precision",
        description: "Every task handled with accuracy and care"
    },
    {
        icon: Users,
        title: "Partnership",
        description: "Building long-term relationships with clients"
    },
    {
        icon: Lightbulb,
        title: "Innovation",
        description: "Embracing new technologies and solutions"
    },
    {
        icon: Heart,
        title: "Commitment",
        description: "Dedicated support for your success"
    },
];

const timeline = [
    {
        year: "2024",
        title: "Arctic Technologies Founded",
        description: "Started with a vision to provide reliable IT services in Sri Lanka"
    },
    {
        year: "2025",
        title: "SLA-Based Support Launch",
        description: "Introduced Service Level Agreement backed support for businesses"
    },
    {
        year: "2026",
        title: "Expanding Services",
        description: "Added Power Apps, Software Solutions, and Web Design services"
    },
];

export default function AboutPage() {
    return (
        <div className="pt-24 lg:pt-32">
            {/* Hero Section */}
            <section className="py-16 lg:py-24 relative">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-arctic-purple/10 rounded-full blur-3xl pointer-events-none" />

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-arctic-cyan text-sm font-medium uppercase tracking-wider">
                                Who We Are
                            </span>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">
                                About <span className="gradient-text">Arctic Technologies</span>
                            </h1>
                            <p className="text-gray-400 text-lg leading-relaxed mb-8">
                                At Arctic Technologies, we believe technology should simplify, not complicate.
                                Founded in Sri Lanka by a dedicated team of IT professionals, we specialize
                                in computer services backed by SLA-driven support, ensuring businesses stay
                                productive and protected.
                            </p>
                            <p className="text-gray-400 leading-relaxed mb-8">
                                From computer and mobile phone repairs to software solutions, cloud solutions,
                                and proactive maintenance, we deliver reliable, scalable services tailored to
                                your needs. Whether you&apos;re a startup or an established enterprise, we bring
                                clarity, consistency, and care to every engagement.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                                    Get in Touch
                                    <ArrowRight className="w-5 h-5" />
                                </Link>
                                <Link href="/services" className="btn-secondary">
                                    Our Services
                                </Link>
                            </div>
                        </div>

                        {/* Stats Card */}
                        <div className="glass rounded-3xl p-8 lg:p-12">
                            <h3 className="text-2xl font-bold text-white mb-8">Our Mission</h3>
                            <p className="text-gray-400 mb-8 leading-relaxed">
                                Our mission is simple: to help you operate smarter, faster, and with
                                confidence in a digital-first world. We go beyond quick fixes — we
                                deliver dependable, long-term IT solutions tailored to your business.
                            </p>

                            <div className="grid grid-cols-2 gap-6">
                                <div className="text-center p-4 rounded-xl bg-white/5">
                                    <div className="text-3xl font-bold gradient-text mb-1">SLA</div>
                                    <div className="text-sm text-gray-400">Backed Support</div>
                                </div>
                                <div className="text-center p-4 rounded-xl bg-white/5">
                                    <div className="text-3xl font-bold gradient-text mb-1">100%</div>
                                    <div className="text-sm text-gray-400">Commitment</div>
                                </div>
                                <div className="text-center p-4 rounded-xl bg-white/5">
                                    <div className="text-3xl font-bold gradient-text mb-1">24/7</div>
                                    <div className="text-sm text-gray-400">Availability</div>
                                </div>
                                <div className="text-center p-4 rounded-xl bg-white/5">
                                    <div className="text-3xl font-bold gradient-text mb-1">Fast</div>
                                    <div className="text-sm text-gray-400">Response</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-16 lg:py-24 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-arctic-blue/5 to-transparent pointer-events-none" />

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-arctic-cyan text-sm font-medium uppercase tracking-wider">
                            Our Values
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mt-4">
                            What Drives Us
                        </h2>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value, i) => (
                            <div
                                key={i}
                                className="glass-light rounded-2xl p-6 text-center hover:border-arctic-cyan/30 border border-transparent transition-all hover:-translate-y-1"
                            >
                                <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-to-br from-arctic-cyan/20 to-arctic-blue/20 flex items-center justify-center mb-4">
                                    <value.icon className="w-6 h-6 text-arctic-cyan" />
                                </div>
                                <h3 className="text-white font-semibold mb-2">{value.title}</h3>
                                <p className="text-gray-400 text-sm">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Journey Section */}
            <section className="py-16 lg:py-24">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-arctic-cyan text-sm font-medium uppercase tracking-wider">
                            Our Journey
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mt-4">
                            Growing Together
                        </h2>
                    </div>

                    <div className="space-y-8">
                        {timeline.map((item, i) => (
                            <div key={i} className="flex gap-6">
                                <div className="flex flex-col items-center">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-arctic-cyan to-arctic-blue flex items-center justify-center text-white font-bold text-sm">
                                        {item.year}
                                    </div>
                                    {i < timeline.length - 1 && (
                                        <div className="w-0.5 h-full bg-gradient-to-b from-arctic-cyan to-transparent mt-2" />
                                    )}
                                </div>
                                <div className="pb-8">
                                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                    <p className="text-gray-400">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Connect Section */}
            <section className="py-16 lg:py-24">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="glass rounded-3xl p-8 lg:p-12 text-center">
                        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                            Let&apos;s Connect
                        </h2>
                        <p className="text-gray-400 mb-8">
                            We love sharing insights, tips, and behind-the-scenes moments from our
                            journey in tech. Follow us on social media and let&apos;s build something
                            amazing together.
                        </p>
                        <div className="flex justify-center gap-4">
                            <a
                                href="https://www.linkedin.com/company/arctic-technologies-by-lucifer/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-secondary"
                            >
                                LinkedIn
                            </a>
                            <a
                                href="https://web.facebook.com/profile.php?id=61575511880304"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-secondary"
                            >
                                Facebook
                            </a>
                            <a
                                href="https://whatsapp.com/channel/0029VaqrpXCBlHphT762Pz3i"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-secondary"
                            >
                                WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
