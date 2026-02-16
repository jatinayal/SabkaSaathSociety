import PageHeader from "@/components/PageHeader";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white font-sans text-gray-800">
            <PageHeader
                title="About Sabka Saath Society"
                breadcrumb={[
                    { label: "About Us", href: "/about" }
                ]}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

                {/* Introduction - Clean Text Block */}
                <section className="mb-16 max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-[#1A365D] mb-6 border-b-2 border-[#E2E8F0] pb-2 inline-block">Organization Background</h2>
                    <p className="text-lg text-gray-600 leading-relaxed mb-6">
                        Sabka Saath Society is a registered non-governmental organization established in 2010 with the
                        core objective of promoting sustainable development and social welfare. We work at the intersection of
                        community needs and government policy, ensuring effective implementation of developmental schemes.
                    </p>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        The organization is registered under the Societies Registration Act, 1860 and is duly enrolled
                        with the NGO Darpan portal of NITI Aayog, Government of India.
                    </p>
                </section>

                {/* Mission & Vision - Two Column Grid */}
                <section className="mb-16 grid md:grid-cols-2 gap-8 lg:gap-12">
                    <div className="bg-[#F7FAFC] p-8 border border-gray-200 rounded-sm">
                        <h3 className="text-xl font-bold text-[#276749] mb-4 flex items-center gap-2">
                            <span className="w-1 h-6 bg-[#276749] rounded-full inline-block"></span>
                            Our Vision
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            To create an equitable society where every individual has access to quality education, healthcare,
                            and livelihood opportunities, enabling them to lead a life of dignity, self-reliance, and purpose.
                        </p>
                    </div>
                    <div className="bg-[#F7FAFC] p-8 border border-gray-200 rounded-sm">
                        <h3 className="text-xl font-bold text-[#2C5282] mb-4 flex items-center gap-2">
                            <span className="w-1 h-6 bg-[#2C5282] rounded-full inline-block"></span>
                            Our Mission
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            To empower marginalized communities through sustainable development programs, capacity building,
                            and policy advocacy, ensuring inclusive growth and widespread prosperity across all sections of society.
                        </p>
                    </div>
                </section>

                {/* Objectives - Styled List */}
                <section className="mb-16 max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-[#1A365D] mb-8 border-b-2 border-[#E2E8F0] pb-2 inline-block">Core Objectives</h2>
                    <ul className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                        {[
                            "Promote education and literacy among underprivileged sections",
                            "Provide healthcare services and awareness in rural areas",
                            "Support women empowerment through Self-Help Groups (SHGs)",
                            "Facilitate livelihood opportunities through vocational training",
                            "Promote environmental sustainability and conservation",
                            "Collaborate with government for efficient CSR implementation"
                        ].map((obj, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-gray-600">
                                <span className="mt-1.5 w-1.5 h-1.5 bg-[#319795] rounded-full flex-shrink-0"></span>
                                <span>{obj}</span>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Registration Details - Clean Table */}
                <section className="mb-16 max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-[#1A365D] mb-6">Legal & Registration Details</h2>
                    <div className="bg-white border border-gray-200 rounded-sm overflow-hidden">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-50 border-b border-gray-200">
                                    <th className="py-4 px-6 font-semibold text-[#2D3748] w-1/3">Particulars</th>
                                    <th className="py-4 px-6 font-semibold text-[#2D3748]">Details</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 text-sm md:text-base">
                                {[
                                    { label: "Registration Act", value: "Societies Registration Act, 1860" },
                                    { label: "Registration Number", value: "XXXX/2010" },
                                    { label: "NGO Darpan Unique ID", value: "XX/2015/XXXXXX" },
                                    { label: "PAN", value: "XXXXX1234X" },
                                    { label: "12A Registration", value: "Registered (Valid)" },
                                    { label: "80G Registration", value: "Registered (Valid)" },
                                    { label: "FCRA Status", value: "Prior Permission Category" },
                                ].map((row, idx) => (
                                    <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                                        <td className="py-3 px-6 text-gray-500 font-medium">{row.label}</td>
                                        <td className="py-3 px-6 text-gray-800">{row.value}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Governing Body - Clean Table */}
                <section className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-[#1A365D] mb-6">Governing Body</h2>
                    <p className="text-gray-600 mb-6">
                        The organization is governed by an Executive Committee comprising eminent personalities from
                        diverse fields including social work, education, law, and public administration.
                    </p>
                    <div className="bg-white border border-gray-200 rounded-sm overflow-hidden">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-50 border-b border-gray-200">
                                    <th className="py-4 px-6 font-semibold text-[#2D3748] w-16 text-center">S.No.</th>
                                    <th className="py-4 px-6 font-semibold text-[#2D3748]">Name</th>
                                    <th className="py-4 px-6 font-semibold text-[#2D3748]">Designation</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 text-sm md:text-base">
                                {[
                                    { name: "Shri/Smt. [Name]", role: "Chairperson" },
                                    { name: "Shri/Smt. [Name]", role: "Secretary" },
                                    { name: "Shri/Smt. [Name]", role: "Treasurer" },
                                    { name: "Shri/Smt. [Name]", role: "Member" },
                                    { name: "Shri/Smt. [Name]", role: "Member" },
                                ].map((member, idx) => (
                                    <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                                        <td className="py-3 px-6 text-gray-500 text-center">{idx + 1}</td>
                                        <td className="py-3 px-6 text-gray-800 font-medium">{member.name}</td>
                                        <td className="py-3 px-6 text-gray-600">{member.role}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        </div>
    );
}
