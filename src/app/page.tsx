import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, CheckCircle, Zap, Shield, Clock, Users } from "lucide-react";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Arctic Technologies | IT Solutions & SLA-Backed Support",
  description:
    "Arctic Technologies provides dependable IT support, computer and mobile repairs, website design, and software solutions in Sri Lanka.",
  keywords: [
    "IT support Sri Lanka",
    "computer repair Sri Lanka",
    "mobile repair services",
    "website design Sri Lanka",
    "software solutions",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Arctic Technologies | IT Solutions & SLA-Backed Support",
    description:
      "SLA-backed IT support and digital solutions for businesses in Sri Lanka.",
    url: "https://arctictechnologies.org.lk",
    siteName: "Arctic Technologies",
    type: "website",
    images: [
      {
        url: "/Arctic_logo.png",
        width: 1200,
        height: 630,
        alt: "Arctic Technologies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arctic Technologies | IT Solutions & SLA-Backed Support",
    description:
      "SLA-backed IT support and digital solutions for businesses in Sri Lanka.",
    images: ["/Arctic_logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const whyChooseUs = [
  {
    icon: Zap,
    title: "Fast Resolution",
    description: "Quick turnaround times with SLA-backed guarantees"
  },
  {
    icon: Shield,
    title: "Reliable Security",
    description: "Enterprise-grade security for all solutions"
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock assistance when you need it"
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Certified professionals with years of experience"
  },
];

const benefits = [
  "Reduced downtime and faster issue resolution",
  "Improved security and compliance across systems",
  "Optimized performance and smoother operations",
  "Clear communication and dedicated support",
];

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "Arctic Technologies",
        url: "https://arctictechnologies.org.lk",
        logo: "https://arctictechnologies.org.lk/Arctic_logo.png",
        sameAs: [
          "https://web.facebook.com/profile.php?id=61575511880304",
          "https://www.linkedin.com/company/arctic-technologies-by-lucifer/",
          "https://whatsapp.com/channel/0029VaqrpXCBlHphT762Pz3i",
        ],
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: "+94-76-472-1478",
            contactType: "customer support",
            availableLanguage: ["English"],
          },
        ],
      },
      {
        "@type": "WebSite",
        name: "Arctic Technologies",
        url: "https://arctictechnologies.org.lk",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <section className="py-20 lg:py-32" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-arctic-cyan text-sm font-medium uppercase tracking-wider">
              Our Services
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4 mb-6">
              The Ways We Can Help You
            </h2>
            <p className="max-w-2xl mx-auto text-gray-400">
              From device repairs to enterprise solutions, we provide comprehensive
              IT services backed by SLA commitments.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="btn-primary inline-flex items-center gap-2"
            >
              View All Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 lg:py-32 relative">
        {/* Background accent */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-arctic-blue/5 to-transparent pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <div>
              <span className="text-arctic-cyan text-sm font-medium uppercase tracking-wider">
                Why Choose Us
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4 mb-6">
                Top Reasons to Partner with{" "}
                <span className="gradient-text">Arctic</span>
              </h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                At Arctic Technologies, we don&apos;t just offer services — we deliver trust,
                reliability, and results. What makes us unique is our SLA-backed support
                model, ensuring businesses receive consistent, high-quality IT services
                with guaranteed response times.
              </p>

              {/* Benefits List */}
              <ul className="space-y-4">
                {benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-arctic-cyan mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/about"
                className="btn-secondary inline-flex items-center gap-2 mt-8"
              >
                Learn More About Us
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Right - Feature Cards */}
            <div className="grid grid-cols-2 gap-4 lg:gap-6">
              {whyChooseUs.map((item, i) => (
                <div
                  key={i}
                  className="glass-light rounded-2xl p-6 hover:border-arctic-cyan/30 border border-transparent transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-arctic-cyan/20 to-arctic-blue/20 flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-arctic-cyan" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative glass rounded-3xl p-8 lg:p-16 text-center overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-arctic-cyan/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="max-w-xl mx-auto text-gray-400 mb-8">
                Let&apos;s discuss how Arctic Technologies can help transform your IT
                infrastructure and drive your business forward.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                  Contact Us Today
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a href="tel:+94788861811" className="btn-secondary">
                  Call +94 78 88 618 11
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
