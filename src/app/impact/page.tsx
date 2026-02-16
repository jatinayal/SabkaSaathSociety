import PageHeader from "@/components/PageHeader";
import Link from "next/link";
import { TrendingUp, Users, MapPin, CheckCircle } from "lucide-react";

export default function ImpactPage() {
    return (
        <div className="min-h-screen bg-white font-sans text-gray-800">
            <PageHeader
                title="Impact & Achievements"
                breadcrumb={[
                    { label: "Impact", href: "/impact" }
                ]}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

                {/* Intro */}
                <section className="mb-16 max-w-4xl mx-auto text-center">
                    <p className="text-xl text-gray-600 leading-relaxed">
                        Since its inception in 2010, Sabka Saath Society has been working to create measurable
                        and sustainable impact across communities. Our programs have benefited thousands of
                        individuals across multiple states.
                    </p>
                </section>

                {/* Key Metrics - Grid of Cards */}
                <section className="mb-20">
                    <h2 className="text-2xl font-bold text-[#1A365D] mb-8 text-center">Key Impact Metrics</h2>
                    <p className="text-center text-gray-500 mb-10 text-sm uppercase tracking-wider font-semibold">As on 31st March 2025</p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { label: "Total Projects", value: "50+", icon: CheckCircle, color: "text-blue-600" },
                            { label: "Direct Beneficiaries", value: "10,000+", icon: Users, color: "text-green-600" },
                            { label: "Villages Covered", value: "100+", icon: MapPin, color: "text-purple-600" },
                            { label: "States of Operation", value: "5", icon: TrendingUp, color: "text-orange-600" },
                            { label: "SHGS Formed", value: "150+", icon: Users, color: "text-teal-600" },
                            { label: "Students Supported", value: "5,000+", icon: CheckCircle, color: "text-indigo-600" },
                            { label: "Health Camps", value: "200+", icon: MapPin, color: "text-red-600" },
                            { label: "Trees Planted", value: "50,000+", icon: TrendingUp, color: "text-emerald-600" }
                        ].map((stat, idx) => (
                            <div key={idx} className="bg-[#F7FAFC] border border-gray-100 p-6 rounded-sm text-center hover:border-gray-200 transition-colors">
                                <stat.icon className={`w-8 h-8 mx-auto mb-3 ${stat.color} opacity-80 shrink-0`} />
                                <div className={`text-3xl font-bold mb-1 ${stat.color}`}>{stat.value}</div>
                                <div className="text-sm font-medium text-gray-500 uppercase tracking-wide">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Notable Projects - Distinct Blocks */}
                <section className="max-w-5xl mx-auto">
                    <h2 className="text-2xl font-bold text-[#1A365D] mb-10 border-b border-gray-200 pb-4">Notable Projects</h2>

                    <div className="space-y-8">
                        {[
                            {
                                title: "Project Shiksha",
                                year: "2023-24",
                                desc: "A bridge education program in rural Bihar that successfully rehabilitated 500 out-of-school children back into formal schooling system through non-formal education centers."
                            },
                            {
                                title: "Clean Water Initiative",
                                year: "2022-23",
                                desc: "Installation of 20 community water filtration plants in drought-prone districts of Rajasthan, benefiting over 10,000 families with access to safe drinking water."
                            },
                            {
                                title: "Swavalamban - Women's Livelihood Program",
                                year: "2021-22",
                                desc: "Formation of 50 Self-Help Groups covering 600 women in Jharkhand, with cumulative savings of Rs. 25 lakhs and bank linkages for micro-enterprises."
                            }
                        ].map((project, idx) => (
                            <div key={idx} className="flex flex-col md:flex-row gap-6 bg-white border-l-4 border-l-[#2C5282] pl-6 py-2">
                                <div className="md:w-1/4 flex-shrink-0">
                                    <h3 className="text-xl font-bold text-[#2D3748]">{project.title}</h3>
                                    <span className="inline-block mt-2 px-3 py-1 bg-gray-100 text-gray-600 text-xs font-semibold rounded-full">
                                        {project.year}
                                    </span>
                                </div>
                                <div className="md:w-3/4">
                                    <p className="text-gray-600 leading-relaxed">{project.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 bg-gray-50 p-6 rounded-sm border border-gray-200 text-center">
                        <p className="text-gray-600">
                            <strong>Note:</strong> Annual Reports and detailed impact assessments are available in the
                            <Link href="/resources" className="text-[#2B6CB0] font-semibold hover:underline ml-1">Resources section</Link>.
                        </p>
                    </div>
                </section>
            </div>
        </div>
    );
}
