"use client";

import { useEffect, useState, useRef } from "react";

interface CountUpStatsProps {
    end: number;
    duration?: number;
    label: string;
    suffix?: string;
    prefix?: string;
}

export default function CountUpStats({
    end,
    duration = 1000,
    label,
    suffix = "",
    prefix = "",
}: CountUpStatsProps) {
    const [count, setCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
                    let start = 0;
                    const increment = end / (duration / 16); // 60fps
                    const timer = setInterval(() => {
                        start += increment;
                        if (start >= end) {
                            setCount(end);
                            clearInterval(timer);
                        } else {
                            setCount(Math.floor(start));
                        }
                    }, 16);
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [end, duration, hasAnimated]);

    return (
        <div ref={ref} className="text-center p-4">
            <div className="text-4xl md:text-5xl font-bold mb-2 tabular-nums">
                {prefix}
                {count}
                {suffix}
            </div>
            <div className="text-sm font-medium text-blue-100 uppercase tracking-widest">
                {label}
            </div>
        </div>
    );
}
