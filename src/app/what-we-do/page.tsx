import PageHeader from "@/components/PageHeader";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function WhatWeDoPage() {
    return (
        <div className="min-h-screen bg-white font-sans text-gray-800">
            <PageHeader
                title="What We Do"
                breadcrumb={[
                    { label: "What We Do", href: "/what-we-do" }
                ]}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

                {/* Intro */}
                <section className="mb-16 max-w-4xl mx-auto text-center">
                    <p className="text-xl text-gray-600 leading-relaxed">
                        Sabka Sath Society works across multiple thematic areas to address developmental challenges
                        at the grassroots level. Our approach combines direct implementation, capacity building,
                        and policy advocacy to create sustainable impact.
                    </p>
                </section>

                {/* Our Approach - Flat Cards */}
                <section className="mb-20">
                    <h2 className="text-2xl font-bold text-[#1A365D] mb-8 text-center">Our Approach</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Direct Implementation",
                                desc: "We execute programs directly in communities, ensuring quality control, transparency, and accountability at every stage of the project lifecycle."
                            },
                            {
                                title: "Capacity Building",
                                desc: "We train local stakeholders, community leaders, and government functionaries to strengthen institutions and ensure sustainability of interventions."
                            },
                            {
                                title: "Policy Advocacy",
                                desc: "We conduct research and engage with policymakers to bridge gaps between policy intent and implementation, improving public service delivery."
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-[#F7FAFC] p-8 border border-gray-200 rounded-sm">
                                <h3 className="text-lg font-bold text-[#2C5282] mb-3">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Thematic Areas - Structured Grid */}
                <section>
                    <h2 className="text-2xl font-bold text-[#1A365D] mb-8 border-b border-gray-200 pb-4">Thematic Areas</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                area: "Education",
                                activities: "Bridge schools, scholarships, digital literacy",
                                color: "border-l-4 border-l-blue-500"
                            },
                            {
                                area: "Healthcare",
                                activities: "Health camps, sanitation, maternal health",
                                color: "border-l-4 border-l-green-500"
                            },
                            {
                                area: "Women Empowerment",
                                activities: "SHGs, micro-finance, skill training",
                                color: "border-l-4 border-l-purple-500"
                            },
                            {
                                area: "Livelihood",
                                activities: "Vocational training, artisan support",
                                color: "border-l-4 border-l-orange-500"
                            },
                            {
                                area: "Environment",
                                activities: "Tree plantation, water conservation",
                                color: "border-l-4 border-l-teal-500"
                            }
                        ].map((item, idx) => (
                            <div key={idx} className={`bg-white p-6 border border-gray-200 rounded-sm hover:border-gray-300 transition-colors ${item.color}`}>
                                <h3 className="text-lg font-bold text-[#2D3748] mb-2">{item.area}</h3>
                                <p className="text-gray-600 text-sm">{item.activities}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <Link
                            href="/programs"
                            className="inline-flex items-center text-[#2B6CB0] font-semibold hover:text-[#1A365D] hover:underline"
                        >
                            View detailed program information
                            <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    );
}
