import PageHeader from "@/components/PageHeader";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function CSRPage() {
    return (
        <div className="min-h-screen bg-white font-sans text-gray-800">
            <PageHeader
                title="CSR & Government Schemes"
                breadcrumb={[
                    { label: "CSR & Schemes", href: "/csr" }
                ]}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

                {/* Intro */}
                <section className="mb-16 max-w-4xl mx-auto text-center">
                    <p className="text-xl text-gray-600 leading-relaxed">
                        Sabka Saath Society partners with corporate entities and government departments to implement
                        development programs under Corporate Social Responsibility (CSR) mandates and various
                        government schemes.
                    </p>
                </section>

                <div className="grid lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 space-y-16">
                        {/* CSR Partnership */}
                        <section>
                            <h2 className="text-2xl font-bold text-[#1A365D] mb-6 border-b border-gray-200 pb-2">CSR Partnership</h2>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                We offer end-to-end CSR implementation services including project design, execution,
                                monitoring, and impact assessment. Our projects are aligned with Schedule VII of the
                                Companies Act, 2013.
                            </p>

                            <h3 className="text-xl font-bold text-[#2C5282] mb-4">Areas of CSR Implementation</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                {[
                                    { area: "Eradicating hunger, poverty", prog: "Livelihood programs, nutrition initiatives" },
                                    { area: "Promoting education", prog: "Scholarship programs, bridge schools" },
                                    { area: "Promoting healthcare", prog: "Health camps, sanitation projects" },
                                    { area: "Environmental sustainability", prog: "Tree plantation, waste management" },
                                    { area: "Employment enhancing vocational skills", prog: "Skill development programs" },
                                    { area: "Women empowerment", prog: "SHG formation, women entrepreneurship" }
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-[#F7FAFC] p-4 border border-gray-100 rounded-sm">
                                        <h4 className="font-semibold text-[#2D3748] mb-1">{item.area}</h4>
                                        <p className="text-sm text-gray-500">{item.prog}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Government Schemes */}
                        <section>
                            <h2 className="text-2xl font-bold text-[#1A365D] mb-6 border-b border-gray-200 pb-2">Government Schemes Implemented</h2>
                            <ul className="grid md:grid-cols-2 gap-4">
                                {[
                                    "Swachh Bharat Mission (SBM)",
                                    "National Rural Livelihoods Mission (NRLM)",
                                    "Skill India Mission",
                                    "Atal Innovation Mission (AIM)",
                                    "Poshan Abhiyaan"
                                ].map((scheme, idx) => (
                                    <li key={idx} className="flex items-center gap-3 bg-white border border-gray-200 p-4 rounded-sm shadow-sm">
                                        <CheckCircle2 className="w-5 h-5 text-[#319795]" />
                                        <span className="font-medium text-gray-700">{scheme}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    </div>

                    {/* Sidebar / Why Partner */}
                    <div className="lg:col-span-1">
                        <div className="bg-[#1A365D] text-white p-8 rounded-sm">
                            <h3 className="text-xl font-bold mb-6 border-b border-blue-800 pb-4">Why Partner with Us</h3>
                            <ul className="space-y-4">
                                {[
                                    "Registered with NGO Darpan and compliant with FCRA regulations",
                                    "Transparent fund utilization with regular reporting",
                                    "Pan-India presence with strong grassroots network",
                                    "Track record of successful project implementation",
                                    "Employee engagement opportunities for corporate volunteers"
                                ].map((reason, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-blue-100 text-sm leading-relaxed">
                                        <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0 text-[#319795]" />
                                        <span>{reason}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-8 pt-6 border-t border-blue-800">
                                <p className="text-sm text-blue-200 mb-4">
                                    Interested in collaborating?
                                </p>
                                <Link
                                    href="/contact"
                                    className="block w-full text-center bg-white text-[#1A365D] font-bold py-3 px-4 rounded-sm hover:bg-gray-100 transition-colors"
                                >
                                    Contact CSR Cell
                                </Link>
                                <p className="text-xs text-blue-300 text-center mt-3">
                                    or email sabkasaathngo@gmail.com
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
