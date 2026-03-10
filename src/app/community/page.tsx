import Link from "next/link";
import { ArrowRight, Facebook, Linkedin, MessageCircle, Rss, Mail } from "lucide-react";

export const metadata = {
    title: "Community | Arctic Technologies",
    description: "Join the Arctic Technologies community. Stay updated with tech tips, news, and behind-the-scenes content.",
};

const socialPlatforms = [
    {
        icon: Facebook,
        name: "Facebook",
        description: "Join our Facebook community for updates, tips, and discussions",
        href: "https://web.facebook.com/profile.php?id=61575511880304",
        color: "from-blue-600 to-blue-700",
        followers: "Growing Community"
    },
    {
        icon: Linkedin,
        name: "LinkedIn",
        description: "Connect with us professionally and stay updated on company news",
        href: "https://www.linkedin.com/company/arctic-technologies-by-lucifer/",
        color: "from-blue-500 to-blue-600",
        followers: "Professional Network"
    },
    {
        icon: MessageCircle,
        name: "WhatsApp Channel",
        description: "Subscribe for quick updates, announcements, and exclusive offers",
        href: "https://whatsapp.com/channel/0029VaqrpXCBlHphT762Pz3i",
        color: "from-green-500 to-green-600",
        followers: "Instant Updates"
    },
];

const upcomingContent = [
    {
        type: "Tech Tips",
        title: "Weekly IT tips and tricks to boost your productivity",
        icon: "💡"
    },
    {
        type: "Tutorials",
        title: "Step-by-step guides for common tech problems",
        icon: "📚"
    },
    {
        type: "News",
        title: "Latest updates in technology and our services",
        icon: "📰"
    },
    {
        type: "Behind the Scenes",
        title: "Meet our team and see how we work",
        icon: "🎬"
    },
];

export default function CommunityPage() {
    return (
        <div className="pt-24 lg:pt-32">
            {/* Hero Section */}
            <section className="py-16 lg:py-24 relative">
                <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-arctic-cyan/10 rounded-full blur-3xl pointer-events-none" />

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="text-arctic-cyan text-sm font-medium uppercase tracking-wider">
                        Join Our Community
                    </span>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">
                        Connect with <span className="gradient-text">Arctic</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-gray-400 text-lg">
                        We love sharing insights, tips, and behind-the-scenes moments from our
                        journey in tech. Follow us and be part of our growing community.
                    </p>
                </div>
            </section>

            {/* Social Platforms */}
            <section className="py-16 lg:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-8">
                        {socialPlatforms.map((platform, i) => (
                            <a
                                key={i}
                                href={platform.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="glass rounded-2xl p-8 group hover:border-arctic-cyan/30 border border-transparent transition-all"
                            >
                                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${platform.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                    <platform.icon className="w-7 h-7 text-white" />
                                </div>

                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-arctic-cyan transition-colors">
                                    {platform.name}
                                </h3>

                                <p className="text-gray-400 text-sm mb-4">
                                    {platform.description}
                                </p>

                                <div className="flex items-center justify-between">
                                    <span className="text-arctic-cyan text-sm">{platform.followers}</span>
                                    <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-arctic-cyan group-hover:translate-x-1 transition-all" />
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Upcoming Content Section */}
            <section className="py-16 lg:py-24 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-arctic-blue/5 to-transparent pointer-events-none" />

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                            What to Expect
                        </h2>
                        <p className="text-gray-400">Content we&apos;re creating for our community</p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {upcomingContent.map((item, i) => (
                            <Link
                                key={i}
                                href="/coming-soon"
                                className="glass-light rounded-xl p-6 text-center hover:border-arctic-cyan/30 border border-transparent transition-all hover:-translate-y-1 cursor-pointer group"
                            >
                                <span className="text-4xl mb-4 block">{item.icon}</span>
                                <h3 className="text-white font-semibold mb-2 group-hover:text-arctic-cyan transition-colors">{item.type}</h3>
                                <p className="text-gray-400 text-sm">{item.title}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="py-16 lg:py-24">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="glass rounded-3xl p-8 lg:p-12 text-center">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-arctic-cyan/20 to-arctic-blue/20 flex items-center justify-center mx-auto mb-6">
                            <Mail className="w-8 h-8 text-arctic-cyan" />
                        </div>

                        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                            Stay Updated
                        </h2>
                        <p className="text-gray-400 mb-8 max-w-lg mx-auto">
                            Subscribe to our channels for the latest tech tips, company updates,
                            and exclusive content from the Arctic Technologies team.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a
                                href="https://whatsapp.com/channel/0029VaqrpXCBlHphT762Pz3i"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary inline-flex items-center gap-2"
                            >
                                <MessageCircle className="w-5 h-5" />
                                Subscribe on WhatsApp
                            </a>
                            <Link href="/contact" className="btn-secondary">
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 lg:py-24">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                        Got Questions? Let&apos;s Talk!
                    </h2>
                    <p className="text-gray-400 mb-8">
                        We&apos;re always excited to connect with fellow innovators and changemakers.
                        Drop us a message — we&apos;d love to hear from you.
                    </p>
                    <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                        Get in Touch
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
