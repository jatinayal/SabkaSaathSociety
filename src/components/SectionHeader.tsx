import { cn } from "@/lib/utils";

interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    alignment?: "left" | "center" | "right";
    className?: string;
}

export default function SectionHeader({
    title,
    subtitle,
    alignment = "center",
    className,
}: SectionHeaderProps) {
    const alignmentClasses = {
        left: "text-left",
        center: "text-center mx-auto",
        right: "text-right ml-auto",
    };

    return (
        <div className={cn("mb-12 max-w-3xl", alignmentClasses[alignment], className)}>
            <h2 className="text-3xl md:text-4xl font-bold text-primary font-heading mb-4 relative inline-block">
                {title}
                <span className="absolute bottom-0 left-0 w-full h-1 bg-secondary opacity-50 rounded-full transform translate-y-2"></span>
            </h2>
            {subtitle && (
                <p className="text-gray-600 text-lg mt-4 leading-relaxed font-body">
                    {subtitle}
                </p>
            )}
        </div>
    );
}
