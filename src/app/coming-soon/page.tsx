import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, Clock, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
    title: "Coming Soon | Arctic Technologies",
    description: "Exciting new content coming soon from Arctic Technologies. Stay tuned!",
    alternates: {
        canonical: "/coming-soon",
    },
    openGraph: {
        title: "Coming Soon | Arctic Technologies",
        description: "New Arctic Technologies content is on the way. Follow us for updates.",
        url: "https://arctictechnologies.org.lk/coming-soon",
        siteName: "Arctic Technologies",
        type: "website",
        images: [
            {
                url: "/Arctic_logo.png",
                width: 1200,
                height: 630,
                alt: "Arctic Technologies Coming Soon",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Coming Soon | Arctic Technologies",
        description: "Stay tuned for new Arctic Technologies resources and updates.",
        images: ["/Arctic_logo.png"],
    },
    robots: {
        index: false,
        follow: true,
        nocache: true,
    },
};

export default function ComingSoonPage() {
    return (
        <div className="pt-24 lg:pt-32 min-h-screen flex items-center">
            <section className="py-16 lg:py-24 w-full relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-arctic-cyan/10 rounded-full blur-3xl pointer-events-none" />

                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    {/* Icon */}
                    <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-arctic-cyan/20 to-arctic-blue/20 flex items-center justify-center mb-8 glow-cyan">
                        <Clock className="w-10 h-10 text-arctic-cyan" />
                    </div>

                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-light mb-6">
                        <span className="w-2 h-2 rounded-full bg-arctic-cyan animate-pulse" />
                        <span className="text-sm text-gray-300">In Development</span>
                    </div>

                    {/* Main Content */}
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                        <span className="gradient-text">Coming Soon</span>
                    </h1>

                    <p className="text-xl text-gray-400 mb-4">
                        We're working on something exciting!
                    </p>

                    <p className="max-w-2xl mx-auto text-gray-400 leading-relaxed mb-12">
                        This content is currently under development. We're crafting quality resources,
                        tutorials, and insights to help you get the most out of technology. Stay tuned
                        for updates on our social channels!
                    </p>

                    {/* Action Cards */}
                    <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-12">
                        <div className="glass rounded-xl p-6 text-left">
                            <h3 className="text-white font-semibold mb-2">Get Notified</h3>
                            <p className="text-gray-400 text-sm mb-4">
                                Subscribe to our WhatsApp channel for instant updates when this content launches
                            </p>
                            <a
                                href="https://whatsapp.com/channel/0029VaqrpXCBlHphT762Pz3i"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-arctic-cyan text-sm font-medium inline-flex items-center gap-2 hover:gap-3 transition-all"
                            >
                                Subscribe Now
                                <MessageCircle className="w-4 h-4" />
                            </a>
                        </div>

                        <div className="glass rounded-xl p-6 text-left">
                            <h3 className="text-white font-semibold mb-2">Need Help Now?</h3>
                            <p className="text-gray-400 text-sm mb-4">
                                Don't wait! Contact us today for immediate assistance with your IT needs
                            </p>
                            <Link
                                href="/contact"
                                className="text-arctic-cyan text-sm font-medium inline-flex items-center gap-2 hover:gap-3 transition-all"
                            >
                                Contact Us
                                <ArrowLeft className="w-4 h-4 rotate-180" />
                            </Link>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/community" className="btn-secondary inline-flex items-center gap-2">
                            <ArrowLeft className="w-5 h-5" />
                            Back to Community
                        </Link>
                        <Link href="/services" className="btn-primary">
                            Explore Our Services
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
