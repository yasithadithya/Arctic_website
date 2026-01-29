import { services } from "@/data/services";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: "Our Services | Arctic Technologies",
    description: "Explore Arctic Technologies' comprehensive IT services including computer repairs, mobile services, Power Apps, website design, and identity management.",
};

export default function ServicesPage() {
    return (
        <div className="pt-24 lg:pt-32">
            {/* Hero Section */}
            <section className="py-16 lg:py-24 relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-arctic-cyan/10 rounded-full blur-3xl pointer-events-none" />

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="text-arctic-cyan text-sm font-medium uppercase tracking-wider">
                        What We Offer
                    </span>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">
                        Explore Our <span className="gradient-text">Services</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-gray-400 text-lg">
                        We provide a comprehensive range of IT services designed to keep your
                        business running smoothly, securely, and efficiently.
                    </p>
                </div>
            </section>

            {/* Services Detail Section */}
            <section className="py-16 lg:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-24">
                        {services.map((service, index) => {
                            const Icon = service.icon;
                            const isEven = index % 2 === 0;

                            return (
                                <div
                                    key={service.id}
                                    id={service.id}
                                    className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${!isEven ? "lg:grid-flow-dense" : ""
                                        }`}
                                >
                                    {/* Content */}
                                    <div className={!isEven ? "lg:col-start-2" : ""}>
                                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-arctic-cyan/20 to-arctic-blue/20 flex items-center justify-center mb-6">
                                            <Icon className="w-8 h-8 text-arctic-cyan" />
                                        </div>

                                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                                            {service.title}
                                        </h2>

                                        <p className="text-gray-400 leading-relaxed mb-8">
                                            {service.fullDescription}
                                        </p>

                                        {/* Features */}
                                        <div className="grid grid-cols-2 gap-4 mb-8">
                                            {service.features.map((feature, i) => (
                                                <div
                                                    key={i}
                                                    className="flex items-center gap-2 text-gray-300"
                                                >
                                                    <span className="w-2 h-2 rounded-full bg-arctic-cyan" />
                                                    <span className="text-sm">{feature}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <Link
                                            href="/contact"
                                            className="btn-primary inline-flex items-center gap-2"
                                        >
                                            Get Started
                                            <ArrowRight className="w-5 h-5" />
                                        </Link>
                                    </div>

                                    {/* Visual Card */}
                                    <div className={`${!isEven ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                                        <div className="glass rounded-3xl p-8 lg:p-12 relative group">
                                            {/* Glow effect on hover */}
                                            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-arctic-cyan/10 to-arctic-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                            <div className="relative">
                                                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-arctic-cyan to-arctic-blue flex items-center justify-center mb-6 glow-cyan">
                                                    <Icon className="w-10 h-10 text-white" />
                                                </div>

                                                <h3 className="text-2xl font-bold text-white mb-4">
                                                    {service.title}
                                                </h3>

                                                <p className="text-gray-400 mb-6">
                                                    {service.shortDescription}
                                                </p>

                                                <div className="flex flex-wrap gap-2">
                                                    {service.features.map((feature, i) => (
                                                        <span
                                                            key={i}
                                                            className="px-3 py-1.5 rounded-full bg-white/5 text-xs text-gray-300 border border-white/10"
                                                        >
                                                            {feature}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 lg:py-24">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                        Need a Custom Solution?
                    </h2>
                    <p className="text-gray-400 mb-8">
                        Every business is unique. Let&apos;s discuss how we can tailor our services
                        to meet your specific requirements.
                    </p>
                    <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                        Schedule a Consultation
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
