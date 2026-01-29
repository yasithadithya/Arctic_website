import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Service } from "@/data/services";

interface ServiceCardProps {
    service: Service;
    index?: number;
}

export default function ServiceCard({ service, index = 0 }: ServiceCardProps) {
    const Icon = service.icon;

    return (
        <div
            className="service-card group"
            style={{ animationDelay: `${index * 100}ms` }}
        >
            {/* Icon Container */}
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-arctic-cyan/20 to-arctic-blue/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <Icon className="w-7 h-7 text-arctic-cyan" />
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-arctic-cyan transition-colors">
                {service.title}
            </h3>

            {/* Description */}
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
                {service.shortDescription}
            </p>

            {/* Features List */}
            <ul className="space-y-2 mb-6">
                {service.features.slice(0, 3).map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-500">
                        <span className="w-1.5 h-1.5 rounded-full bg-arctic-cyan" />
                        {feature}
                    </li>
                ))}
            </ul>

            {/* Link */}
            <Link
                href={`/services#${service.id}`}
                className="inline-flex items-center gap-2 text-arctic-cyan text-sm font-medium group/link"
            >
                Learn More
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
            </Link>
        </div>
    );
}
