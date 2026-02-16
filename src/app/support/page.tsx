import PageHeader from "@/components/PageHeader";
import Link from "next/link";
import { Lightbulb, Users, HandCoins, Building2, Network, ArrowRight, Calendar, CheckSquare } from "lucide-react";

export default function SupportPage() {
    return (
        <div className="min-h-screen bg-white font-sans text-gray-800">
            <PageHeader
                title="Startup & Social Enterprise Support"
                breadcrumb={[
                    { label: "Support", href: "/support" }
                ]}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

                {/* Intro */}
                <section className="mb-16 max-w-4xl mx-auto text-center">
                    <p className="text-xl text-gray-600 leading-relaxed">
                        Sabka Saath Society runs an incubation program to support social enterprises and startups
                        working on solutions to address social and environmental challenges.
                    </p>
                </section>

                {/* Program Overview */}
                <section className="mb-16 max-w-4xl mx-auto">
                    <div className="bg-[#F0FFF4] border-l-4 border-green-500 p-6 md:p-8 rounded-sm">
                        <h3 className="text-xl font-bold text-[#276749] mb-3">Program Overview</h3>
                        <p className="text-gray-700 leading-relaxed">
                            The Social Enterprise Incubation Program provides mentorship, capacity building, and
                            networking opportunities to early-stage social ventures. The program is particularly
                            focused on enterprises working in rural areas and addressing challenges faced by
                            marginalized communities.
                        </p>
                    </div>
                </section>

                {/* Support Offered - Grid */}
                <section className="mb-20">
                    <h2 className="text-2xl font-bold text-[#1A365D] mb-10 text-center">Support Offered</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: "Mentorship", icon: Users, desc: "Connect with domain experts, industry practitioners, and successful social entrepreneurs" },
                            { title: "Capacity Building", icon: Lightbulb, desc: "Training on business planning, financial management, and impact assessment" },
                            { title: "Funding Guidance", icon: HandCoins, desc: "Support in accessing grants, impact investments, and government schemes" },
                            { title: "Infrastructure", icon: Building2, desc: "Access to co-working space and basic office facilities" },
                            { title: "Networking", icon: Network, desc: "Connections with potential partners, investors, and government departments" }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white p-6 border border-gray-200 rounded-sm hover:-translate-y-1 transition-transform duration-300 shadow-sm">
                                <item.icon className="w-10 h-10 text-[#319795] mb-4" />
                                <h3 className="text-lg font-bold text-[#2D3748] mb-2">{item.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Eligibility */}
                    <section>
                        <h2 className="text-2xl font-bold text-[#1A365D] mb-6 border-b border-gray-200 pb-2">Eligibility Criteria</h2>
                        <ul className="space-y-4">
                            {[
                                "The enterprise should have a clear social or environmental mission",
                                "The venture should be at early stage (ideation to pilot phase)",
                                "Preference for enterprises working in education, healthcare, livelihoods, or environment",
                                "The applicant should be an Indian citizen or entity registered in India"
                            ].map((criteria, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <CheckSquare className="w-5 h-5 text-[#319795] mt-0.5 shrink-0" />
                                    <span className="text-gray-700">{criteria}</span>
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* How to Apply */}
                    <section>
                        <h2 className="text-2xl font-bold text-[#1A365D] mb-6 border-b border-gray-200 pb-2">How to Apply</h2>
                        <div className="bg-gray-50 p-6 rounded-sm border border-gray-200">
                            <div className="flex items-start gap-4 mb-6">
                                <Calendar className="w-6 h-6 text-[#2C5282] shrink-0" />
                                <div>
                                    <h4 className="font-bold text-[#2D3748] mb-1">Applications Open</h4>
                                    <p className="text-sm text-gray-600">Applications for the 2026-27 cohort are now open.</p>
                                    <p className="text-sm font-semibold text-[#2C5282] mt-1">Deadline: 31st March 2026</p>
                                </div>
                            </div>

                            <p className="text-gray-600 text-sm mb-6">
                                Interested candidates may submit their application along with a concept note (maximum 5 pages) to:
                            </p>

                            <a href="mailto:sabkasaathngo@gmail.com" className="block w-full text-center bg-[#2C5282] text-white font-semibold py-3 rounded-sm hover:bg-[#1A365D] transition-colors mb-3">
                                Email Concept Note
                            </a>
                            <p className="text-center text-sm text-gray-500">
                                or use our <Link href="/contact" className="text-[#319795] hover:underline">contact form</Link>
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
