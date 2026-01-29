import {
    Monitor,
    Wrench,
    Smartphone,
    Layers,
    Globe,
    ShieldCheck,
    LucideIcon
} from "lucide-react";

export interface Service {
    id: string;
    icon: LucideIcon;
    title: string;
    shortDescription: string;
    fullDescription: string;
    features: string[];
}

export const services: Service[] = [
    {
        id: "computers",
        icon: Monitor,
        title: "Computers & Smart Devices",
        shortDescription: "Curated selection of high-performance computers, laptops, and smart devices.",
        fullDescription: "We offer a curated selection of computers, laptops, and smart devices tailored for performance, reliability, and value. Whether you're upgrading your office setup or looking for a powerful device for personal use, our products come with expert guidance, warranty support, and optional setup services. Every purchase is backed by our commitment to quality and after-sales care — so you get more than just a device, you get peace of mind.",
        features: [
            "Expert product guidance",
            "Warranty support",
            "Optional setup services",
            "After-sales care"
        ]
    },
    {
        id: "repair",
        icon: Wrench,
        title: "Computer Repair & Services",
        shortDescription: "SLA-backed computer repairs and IT support for maximum uptime.",
        fullDescription: "We don't just fix computers — we restore productivity. Our computer repair and IT support services are built around Service Level Agreements (SLAs) that guarantee timely response, transparent communication, and consistent quality. Whether it's hardware troubleshooting, software optimization, or full system recovery, we ensure every task is handled with precision and accountability. For businesses and individuals alike, our SLA-backed support means fewer disruptions and faster resolutions — because your time matters.",
        features: [
            "SLA-guaranteed response times",
            "Hardware troubleshooting",
            "Software optimization",
            "Full system recovery"
        ]
    },
    {
        id: "mobile",
        icon: Smartphone,
        title: "Mobile Phone Repairs",
        shortDescription: "Quick, reliable mobile device repairs with SLA commitments.",
        fullDescription: "We bring your mobile devices back to life with precision and care. From cracked screens and battery replacements to software fixes and water damage recovery, our technicians handle it all. We follow strict service protocols and SLA commitments, ensuring quick turnaround times, transparent pricing, and reliable results. Whether you're a business user or a casual smartphone owner, we treat every device like it's mission-critical — because staying connected shouldn't have to wait.",
        features: [
            "Screen replacements",
            "Battery replacements",
            "Software fixes",
            "Water damage recovery"
        ]
    },
    {
        id: "powerapps",
        icon: Layers,
        title: "Power App Solutions",
        shortDescription: "Custom PowerApps to automate workflows and boost efficiency.",
        fullDescription: "We design and deploy custom PowerApps that transform manual tasks into streamlined digital workflows. Whether you're automating approvals, managing inventory, or integrating with Microsoft 365 and Azure, our solutions are built for scalability, security, and speed. We follow a consultative approach backed by SLAs, ensuring every app is delivered on time, optimized for performance, and aligned with your business goals. From concept to deployment, we turn complexity into clarity — so your team can focus on what matters most.",
        features: [
            "Workflow automation",
            "Microsoft 365 integration",
            "Azure integration",
            "Custom app development"
        ]
    },
    {
        id: "web",
        icon: Globe,
        title: "Website Designs",
        shortDescription: "Modern, responsive websites that drive engagement and conversions.",
        fullDescription: "We craft modern, responsive websites that do more than just look good — they drive engagement, build trust, and convert visitors into customers. Whether you're launching a startup site or revamping an existing brand, our designs are tailored to your goals, optimized for speed, and built with SEO and mobile-first principles. With AI-generated content, Microsoft integration, and SLA-backed delivery, we ensure your digital presence is not only beautiful but also strategic and scalable.",
        features: [
            "Responsive design",
            "SEO optimization",
            "Mobile-first approach",
            "AI-powered content"
        ]
    },
    {
        id: "identity",
        icon: ShieldCheck,
        title: "Identity Management Solutions",
        shortDescription: "Secure identity solutions with Microsoft Entra ID integration.",
        fullDescription: "We deliver robust identity management solutions that empower organizations to control access, protect data, and streamline user experiences across cloud and on-prem environments. Leveraging tools like Microsoft Entra ID, we implement role-based access control, multi-factor authentication, and seamless integration with your existing systems. Our SLA-backed approach ensures every deployment is secure, scalable, and aligned with compliance standards — giving you full visibility and control over who accesses what, when, and how.",
        features: [
            "Microsoft Entra ID integration",
            "Role-based access control",
            "Multi-factor authentication",
            "Compliance alignment"
        ]
    }
];
