"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";

const taglines = [
    "Reliable IT Solutions",
    "SLA-Backed Support",
    "Trusted Technology Partner",
];

export default function Hero() {
    const [taglineIndex, setTaglineIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setTaglineIndex((prev) => (prev + 1) % taglines.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Glowing orbs */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-arctic-cyan/20 rounded-full blur-3xl animate-pulse-glow" />
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-arctic-blue/20 rounded-full blur-3xl animate-pulse-glow delay-500" />
                <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-arctic-purple/10 rounded-full blur-3xl animate-pulse-glow delay-300" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
                <div className="text-center">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-light mb-8">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-sm text-gray-300">Now offering SLA-based support</span>
                    </div>

                    {/* Main Headline */}
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-6">
                        <span className="text-white">Empowering Your</span>
                        <br />
                        <span className="text-white">Business with </span>
                        <span className="gradient-text">Arctic</span>
                    </h1>

                    {/* Animated Tagline */}
                    <div className="h-8 mb-8 overflow-hidden">
                        <p
                            key={taglineIndex}
                            className="text-xl text-gray-400 animate-fade-in"
                        >
                            {taglines[taglineIndex]}
                        </p>
                    </div>

                    {/* Description */}
                    <p className="max-w-2xl mx-auto text-gray-400 text-lg leading-relaxed mb-10">
                        At Arctic Technologies, we go beyond quick fixes — we deliver dependable,
                        long-term IT solutions tailored to your business. From computer repairs to
                        identity management, with SLA-backed support.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                        <Link href="/services" className="btn-primary inline-flex items-center gap-2 text-lg">
                            Explore Services
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link href="/contact" className="btn-secondary inline-flex items-center gap-2 text-lg">
                            Contact Us
                        </Link>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
                        {[
                            { value: "100%", label: "Client Satisfaction" },
                            { value: "24/7", label: "Support Available" },
                            { value: "SLA", label: "Backed Services" },
                            { value: "Fast", label: "Response Times" },
                        ].map((stat, i) => (
                            <div key={i} className="text-center">
                                <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1">
                                    {stat.value}
                                </div>
                                <div className="text-sm text-gray-500">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                    <ChevronDown className="w-6 h-6 text-gray-500" />
                </div>
            </div>
        </section>
    );
}
