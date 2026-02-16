import Link from "next/link";
import { ArrowRight, ChevronRight, Users, BookOpen, Heart, Activity, Globe, Lightbulb } from "lucide-react";
import CountUpStats from "@/components/CountUpStats";
import PartnerMarquee from "@/components/PartnerMarquee";

export default function Home() {
    return (
        <div className="bg-gray-50/50 min-h-screen font-sans text-gray-800">

            {/* Hero Section - Clean, High Contrast */}
            <section className="bg-white border-b border-gray-100 bg-grid-pattern">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24 text-center">
                    <div className="inline-block px-3 py-1 mb-6 text-xs font-bold tracking-widest text-[#2C5282] uppercase bg-blue-50/50 rounded-sm border border-blue-100/50">
                        Official NGO Portal
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A365D] mb-6 tracking-tight leading-tight">
                        Sabka Saath Society
                    </h1>
                    <p className="text-2xl md:text-3xl text-gray-600 max-w-3xl mx-auto font-normal leading-relaxed mb-10">
                        Empowering Communities. Supporting Innovation.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link
                            href="/about"
                            className="px-8 py-3 bg-[#276749] text-white font-semibold text-[15px] rounded-sm hover:bg-[#22543d] transition-colors shadow-sm focus:ring-2 focus:ring-offset-2 focus:ring-[#276749]"
                        >
                            About Our Mission
                        </Link>
                        <Link
                            href="/programs"
                            className="px-8 py-3 bg-white text-[#2C5282] border border-[#2C5282] font-semibold text-[15px] rounded-sm hover:bg-blue-50 transition-colors shadow-sm focus:ring-2 focus:ring-offset-2 focus:ring-[#2C5282]"
                        >
                            View Programs
                        </Link>
                    </div>
                </div>
            </section>

            {/* Organization Introduction - Light Background */}
            <section className="bg-[#F7FAFC] py-16 border-b border-gray-100">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-2xl font-bold text-[#2D3748] mb-6">Bridging Gap & Governance</h2>
                    <p className="text-lg text-gray-600 leading-8 mb-10">
                        Sabka Saath Society is a non-profit organization working to promote entrepreneurship,
                        social innovation, skill development, and inclusive community growth through structured
                        programs and ecosystem collaboration
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div className="py-3 px-2 bg-white border border-gray-200 rounded-sm text-[#2D3748] font-semibold shadow-sm">
                            Society Reg. Act
                        </div>
                        <div className="py-3 px-2 bg-white border border-gray-200 rounded-sm text-[#2D3748] font-semibold shadow-sm">
                            NGO Darpan (NITI Aayog)
                        </div>
                        <div className="py-3 px-2 bg-white border border-gray-200 rounded-sm text-[#2D3748] font-semibold shadow-sm">
                            12A & 80G Certified
                        </div>
                        <div className="py-3 px-2 bg-white border border-gray-200 rounded-sm text-[#2D3748] font-semibold shadow-sm">
                            FCRA Registered
                        </div>
                    </div>
                </div>
            </section>

            {/* Focus Areas - White Background with Clean Borders */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-[#1A365D] mb-4">Key Focus Areas</h2>
                        <p className="text-gray-500 max-w-2xl mx-auto">Targeted interventions aligned with national development goals.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: BookOpen, title: "Startup & Social Enterprise Support", desc: "Mentorship, incubation guidance, and ecosystem support to help startups and social enterprises build sustainable and scalable impact-driven solutions." },
                            { icon: Activity, title: "Skill Development", desc: "Industry-relevant training programs, digital literacy initiatives, and hands-on workshops designed to enhance employability and entrepreneurial capabilities." },
                            { icon: Users, title: "Youth & Women Empowerment", desc: "Capacity-building programs, leadership development initiatives, and economic participation opportunities for youth and women." },
                            { icon: Globe, title: "Community Innovation", desc: "Encouraging grassroots innovation, collaborative problem-solving, and locally driven solutions to address community challenges." },
                            { icon: Lightbulb, title: "Government Scheme Awareness", desc: "Spreading awareness and facilitating access to government schemes, subsidies, and welfare programs for eligible beneficiaries." },
                        ].map((item, idx) => (
                            <div key={idx} className="group p-6 bg-white border border-gray-200 rounded-sm hover:border-[#319795] transition-colors">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-2 bg-green-50 text-[#276749] rounded-sm group-hover:bg-[#276749] group-hover:text-white transition-colors">
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-lg font-bold text-[#2D3748]">{item.title}</h3>
                                </div>
                                <p className="text-gray-600 text-[15px] leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Programs Overview - Structured List */}
            <section className="py-20 bg-[#F7FAFC] border-y border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                        <div>
                            <h2 className="text-3xl font-bold text-[#1A365D] mb-3">Programs & Initiatives</h2>
                            <p className="text-gray-600 max-w-xl text-[16px]">
                                Scalable models for social impact and community development.
                            </p>
                        </div>
                        <Link href="/programs" className="text-[#2B6CB0] font-semibold hover:text-[#2C5282] flex items-center gap-2 group">
                            All Programs <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            { name: "Project Shiksha", tag: "Education", desc: "Holistic support system for 5000+ students across 20 municipal schools." },
                            { name: "Swavalamban", tag: "Livelihood", desc: "Micro-entrepreneurship incubation for 1200+ rural women artisans." },
                            { name: "Green Village", tag: "Environment", desc: "Zero-waste model village implementation in 5 districts of UP." },
                            { name: "Kaushal Vikas", tag: "Skill Dev", desc: "NSDC-aligned vocational training training centers for youth." },
                        ].map((prog, idx) => (
                            <div key={idx} className="p-8 bg-white border border-gray-200 rounded-sm hover:shadow-sm transition-shadow">
                                <span className="inline-block px-2.5 py-0.5 bg-blue-50 text-[#2C5282] text-xs font-bold uppercase tracking-wide rounded-sm mb-4">
                                    {prog.tag}
                                </span>
                                <h3 className="text-xl font-bold text-[#1A365D] mb-2">{prog.name}</h3>
                                <p className="text-gray-600 text-[15px] leading-relaxed mb-4">{prog.desc}</p>
                                <Link href="/programs" className="text-[#276749] text-sm font-semibold hover:underline flex items-center gap-1">
                                    Read More <ChevronRight className="w-3 h-3" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Impact - High Contrast Dark Blue Section */}
            <section className="bg-[#1A365D] text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 divide-x divide-white/10 border-t border-b border-white/10 py-8">
                        <CountUpStats end={50} suffix="+" label="Projects" />
                        <CountUpStats end={10000} suffix="+" label="Beneficiaries" />
                        <CountUpStats end={100} suffix="+" label="Villages" />
                        <CountUpStats end={20} suffix="+" label="Partners" />
                    </div>
                </div>
            </section>

            {/* Partners - Infinite Marquee */}
            <section className="py-20 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
                    <h2 className="text-2xl font-bold text-[#2D3748] text-center">Trusted By</h2>
                </div>
                <PartnerMarquee />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 text-center">
                    <Link href="/partners" className="text-[#2B6CB0] text-sm font-semibold hover:text-[#1A365D] hover:underline">
                        View All Collaborations
                    </Link>
                </div>
            </section>

        </div>
    );
}
