import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Star, Building2, Quote } from "lucide-react";

export const metadata: Metadata = {
    title: "Our Customers | Arctic Technologies",
    description: "See how Arctic Technologies helps businesses with IT solutions, computer repairs, and digital transformation.",
    keywords: [
        "Arctic Technologies clients",
        "IT customer testimonials",
        "business IT success stories",
        "technology partner Sri Lanka",
    ],
    alternates: {
        canonical: "/customers",
    },
    openGraph: {
        title: "Our Customers | Arctic Technologies",
        description: "Read how businesses benefit from Arctic Technologies IT services and support.",
        url: "https://arctictechnologies.org.lk/customers",
        siteName: "Arctic Technologies",
        type: "website",
        images: [
            {
                url: "/Arctic_logo.png",
                width: 1200,
                height: 630,
                alt: "Arctic Technologies Customers",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Our Customers | Arctic Technologies",
        description: "See real feedback from organizations supported by Arctic Technologies.",
        images: ["/Arctic_logo.png"],
    },
    robots: {
        index: true,
        follow: true,
    },
};

const testimonials = [
    {
        quote: "Arctic Technologies transformed our IT infrastructure. Their SLA-backed support gives us peace of mind knowing issues will be resolved quickly.",
        author: "Business Client",
        role: "Small Business Owner",
        rating: 5
    },
    // {
    //     quote: "The team at Arctic is professional, responsive, and truly understands the needs of modern businesses. Highly recommended!",
    //     author: "Corporate Client",
    //     role: "IT Manager",
    //     rating: 5
    // },
    {
        quote: "From computer repairs to our new company website, Arctic Technologies has been our go-to partner for all things tech.",
        author: "Enterprise Client",
        role: "Operations Director",
        rating: 5
    },
];

const industries = [
    { icon: Building2, name: "Small Businesses" },
    { icon: Building2, name: "Startups" },
    { icon: Building2, name: "Corporate Offices" },
    { icon: Building2, name: "Educational Institutions" },
    { icon: Building2, name: "Healthcare" },
    { icon: Building2, name: "Retail" },
];

export default function CustomersPage() {
    return (
        <div className="pt-24 lg:pt-32">
            {/* Hero Section */}
            <section className="py-16 lg:py-24 relative">
                <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-arctic-purple/10 rounded-full blur-3xl pointer-events-none" />

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="text-arctic-cyan text-sm font-medium uppercase tracking-wider">
                        Our Customers
                    </span>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">
                        Trusted by <span className="gradient-text">Businesses</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-gray-400 text-lg">
                        From startups to established enterprises, we&apos;re proud to partner with
                        businesses that value reliability, quality, and professional IT support.
                    </p>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-16 lg:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                            What Our Clients Say
                        </h2>
                        <p className="text-gray-400">Real feedback from real partnerships</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, i) => (
                            <div key={i} className="glass rounded-2xl p-8 relative">
                                <Quote className="absolute top-6 right-6 w-8 h-8 text-arctic-cyan/20" />

                                {/* Stars */}
                                <div className="flex gap-1 mb-6">
                                    {[...Array(testimonial.rating)].map((_, j) => (
                                        <Star key={j} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                                    ))}
                                </div>

                                <p className="text-gray-300 leading-relaxed mb-6">
                                    &ldquo;{testimonial.quote}&rdquo;
                                </p>

                                <div>
                                    <p className="text-white font-medium">{testimonial.author}</p>
                                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industries Section */}
            <section className="py-16 lg:py-24 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-arctic-blue/5 to-transparent pointer-events-none" />

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                            Industries We Serve
                        </h2>
                        <p className="text-gray-400">Tailored solutions for diverse sectors</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {industries.map((industry, i) => (
                            <div
                                key={i}
                                className="glass-light rounded-xl p-6 text-center hover:border-arctic-cyan/30 border border-transparent transition-all"
                            >
                                <industry.icon className="w-8 h-8 text-arctic-cyan mx-auto mb-3" />
                                <p className="text-gray-300 text-sm font-medium">{industry.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 lg:py-24">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="glass rounded-3xl p-8 lg:p-12">
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                            <div>
                                <div className="text-3xl lg:text-4xl font-bold gradient-text mb-2">100%</div>
                                <p className="text-gray-400 text-sm">Client Satisfaction</p>
                            </div>
                            <div>
                                <div className="text-3xl lg:text-4xl font-bold gradient-text mb-2">SLA</div>
                                <p className="text-gray-400 text-sm">Backed Support</p>
                            </div>
                            <div>
                                <div className="text-3xl lg:text-4xl font-bold gradient-text mb-2">24/7</div>
                                <p className="text-gray-400 text-sm">Support Available</p>
                            </div>
                            <div>
                                <div className="text-3xl lg:text-4xl font-bold gradient-text mb-2">Fast</div>
                                <p className="text-gray-400 text-sm">Response Times</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 lg:py-24">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                        Join Our Growing List of Happy Clients
                    </h2>
                    <p className="text-gray-400 mb-8">
                        Experience the Arctic Technologies difference. Get reliable IT support
                        backed by SLA guarantees.
                    </p>
                    <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                        Become a Client
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
