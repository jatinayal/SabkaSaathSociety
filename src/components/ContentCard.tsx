import { ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface ContentCardProps {
    title: string;
    description: string;
    icon?: ReactNode;
    href?: string;
    className?: string;
}

export default function ContentCard({
    title,
    description,
    icon,
    href,
    className,
}: ContentCardProps) {
    const CardContent = (
        <div className={cn("bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 h-full flex flex-col", className)}>
            {icon && (
                <div className="mb-4 text-primary bg-blue-50 p-3 rounded-full w-fit">
                    {icon}
                </div>
            )}
            <h3 className="text-xl font-bold text-gray-800 mb-3 font-heading">{title}</h3>
            <p className="text-gray-600 mb-4 grow font-body text-sm leading-relaxed">{description}</p>

            {href && (
                <div className="mt-auto flex items-center text-primary font-medium text-sm group-hover:text-blue-700 transition-colors">
                    Learn More <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
            )}
        </div>
    );

    if (href) {
        return (
            <Link href={href} className="block group h-full">
                {CardContent}
            </Link>
        );
    }

    return CardContent;
}
