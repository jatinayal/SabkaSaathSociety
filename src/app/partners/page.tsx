import PageHeader from "@/components/PageHeader";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function PartnersPage() {
    return (
        <div className="min-h-screen bg-white font-sans text-gray-800">
            <PageHeader
                title="Partners & Collaborations"
                breadcrumb={[
                    { label: "Partners", href: "/partners" }
                ]}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

                {/* Intro */}
                <section className="mb-16 max-w-4xl mx-auto text-center">
                    <p className="text-xl text-gray-600 leading-relaxed">
                        Sabka Saath Society works in collaboration with government departments, corporate entities,
                        academic institutions, and other civil society organizations to maximize the impact of
                        our development interventions.
                    </p>
                </section>

                <div className="grid lg:grid-cols-2 gap-12 mb-16">
                    {/* Government Partners */}
                    <section>
                        <h2 className="text-2xl font-bold text-[#1A365D] mb-6 border-b border-gray-200 pb-2">Government Partners</h2>
                        <div className="bg-[#F7FAFC] border border-gray-200 rounded-sm p-6">
                            <ul className="space-y-4">
                                {[
                                    "Ministry of Rural Development, Government of India",
                                    "Ministry of Women and Child Development, Government of India",
                                    "State Rural Livelihoods Missions (various states)",
                                    "District Administration (various districts)",
                                    "Block Development Offices (various blocks)"
                                ].map((partner, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-gray-700">
                                        <ArrowRight className="w-4 h-4 text-[#319795] mt-1.5 shrink-0" />
                                        <span>{partner}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>

                    {/* Academic Partners */}
                    <section>
                        <h2 className="text-2xl font-bold text-[#1A365D] mb-6 border-b border-gray-200 pb-2">Academic & Research Institutions</h2>
                        <div className="bg-[#F7FAFC] border border-gray-200 rounded-sm p-6">
                            <ul className="space-y-4">
                                {[
                                    "[University Name] - Research collaboration on rural development",
                                    "[Institute Name] - Technical support for skill development",
                                    "[College Name] - Student volunteer programs"
                                ].map((partner, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-gray-700">
                                        <ArrowRight className="w-4 h-4 text-[#319795] mt-1.5 shrink-0" />
                                        <span>{partner}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>
                </div>

                {/* Corporate Partners - Wide Table/Grid */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold text-[#1A365D] mb-6 border-b border-gray-200 pb-2">Corporate Partners</h2>
                    <div className="bg-white border border-gray-200 rounded-sm overflow-hidden">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-50 border-b border-gray-200">
                                    <th className="py-4 px-6 font-semibold text-[#2D3748] w-16 text-center">S.No.</th>
                                    <th className="py-4 px-6 font-semibold text-[#2D3748]">Corporate Partner</th>
                                    <th className="py-4 px-6 font-semibold text-[#2D3748]">Project Area</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 text-sm md:text-base">
                                {[
                                    { partner: "[Corporate Name]", area: "Education" },
                                    { partner: "[Corporate Name]", area: "Healthcare" },
                                    { partner: "[Corporate Name]", area: "Skill Development" },
                                    { partner: "[Corporate Name]", area: "Environment" },
                                    { partner: "[Corporate Name]", area: "Women Empowerment" }
                                ].map((row, idx) => (
                                    <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                                        <td className="py-3 px-6 text-gray-500 text-center">{idx + 1}</td>
                                        <td className="py-3 px-6 text-gray-800 font-medium">{row.partner}</td>
                                        <td className="py-3 px-6 text-gray-600">{row.area}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Networks */}
                <section className="max-w-4xl mx-auto text-center mb-12">
                    <h2 className="text-xl font-bold text-[#2D3748] mb-6">Network & Memberships</h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        {[
                            "Voluntary Action Network India (VANI)",
                            "Credibility Alliance",
                            "State Voluntary Coordination Committee"
                        ].map((network, idx) => (
                            <span key={idx} className="bg-white border border-gray-300 px-6 py-2 rounded-full text-gray-600 shadow-sm text-sm font-medium">
                                {network}
                            </span>
                        ))}
                    </div>
                </section>

                <div className="bg-[#F0FFF4] border border-[#C6F6D5] p-8 rounded-sm text-center max-w-2xl mx-auto">
                    <h3 className="text-lg font-bold text-[#276749] mb-2">Partnership Inquiries</h3>
                    <p className="text-gray-700">
                        Organizations interested in partnering with us may contact us at <a href="mailto:sabkasaathngo@gmail.com" className="text-[#2B6CB0] hover:underline font-medium">sabkasaathngo@gmail.com</a> or through the <Link href="/contact" className="text-[#2B6CB0] hover:underline font-medium">contact form</Link>.
                    </p>
                </div>
            </div>
        </div>
    );
}
