import { ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    href?: string;
    children: ReactNode;
    className?: string;
}

export default function Button({
    variant = "primary",
    size = "md",
    href,
    children,
    className,
    ...props
}: ButtonProps) {
    const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
        primary: "bg-primary text-white hover:bg-blue-800 focus:ring-primary",
        secondary: "bg-secondary text-white hover:bg-emerald-600 focus:ring-secondary",
        outline: "border border-primary text-primary hover:bg-blue-50 focus:ring-primary",
        ghost: "text-primary hover:bg-blue-50 focus:ring-primary",
    };

    const sizes = {
        sm: "h-9 px-3 text-sm",
        md: "h-11 px-5 text-base",
        lg: "h-14 px-8 text-lg",
    };

    // Basic cn (classname) utility logic
    const combinedClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className || ""}`;

    if (href) {
        return (
            <Link href={href} className={combinedClasses}>
                {children}
            </Link>
        );
    }

    return (
        <button className={combinedClasses} {...props}>
            {children}
        </button>
    );
}
