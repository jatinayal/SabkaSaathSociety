import { cn } from "@/lib/utils";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface PageHeaderProps {
    title: string;
    breadcrumb: {
        label: string;
        href: string;
    }[];
    className?: string;
}

export default function PageHeader({
    title,
    breadcrumb,
    className,
}: PageHeaderProps) {
    return (
        <div className={cn("bg-[#F7FAFC] border-b border-gray-200 py-12 md:py-16", className)}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Breadcrumb */}
                <nav className="flex mb-4 text-sm text-gray-500" aria-label="Breadcrumb">
                    <ol className="inline-flex items-center space-x-1 md:space-x-3">
                        <li className="inline-flex items-center">
                            <Link href="/" className="inline-flex items-center hover:text-[#2C5282] transition-colors">
                                Home
                            </Link>
                        </li>
                        {breadcrumb.map((item, index) => (
                            <li key={index}>
                                <div className="flex items-center">
                                    <ChevronRight className="w-4 h-4 text-gray-400 mx-1" />
                                    <Link
                                        href={item.href}
                                        className={cn(
                                            "ml-1 font-medium transition-colors hover:text-[#2C5282]",
                                            index === breadcrumb.length - 1 ? "text-[#2C5282]" : "text-gray-500"
                                        )}
                                        aria-current={index === breadcrumb.length - 1 ? "page" : undefined}
                                    >
                                        {item.label}
                                    </Link>
                                </div>
                            </li>
                        ))}
                    </ol>
                </nav>

                <h1 className="text-3xl md:text-4xl font-bold text-[#1A365D] tracking-tight">
                    {title}
                </h1>
            </div>
        </div>
    );
}
