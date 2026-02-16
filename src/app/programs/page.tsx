import PageHeader from "@/components/PageHeader";
import Link from "next/link";

export default function ProgramsPage() {
    return (
        <div className="min-h-screen bg-white font-sans text-gray-800">
            <PageHeader
                title="Programs & Initiatives"
                breadcrumb={[
                    { label: "Programs", href: "/programs" }
                ]}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

                {/* Intro */}
                <section className="mb-12 max-w-4xl">
                    <p className="text-xl text-gray-600 leading-relaxed">
                        Sabka Sath Society implements various programs and initiatives aimed at sustainable development
                        and community empowerment. Our programs are designed in alignment with national development
                        priorities and the UN Sustainable Development Goals (SDGs).
                    </p>
                </section>

                <div className="space-y-12">
                    {[
                        {
                            title: "Education & Literacy Programs",
                            desc: "The organization runs several educational initiatives to promote literacy and quality education among underprivileged children and youth.",
                            items: [
                                { name: "Bridge Schools", detail: "Non-formal education centers for out-of-school children" },
                                { name: "Scholarship Program", detail: "Financial assistance for meritorious students from economically weaker sections" },
                                { name: "Digital Literacy", detail: "Computer training programs for youth in rural areas" },
                                { name: "Adult Education", detail: "Literacy programs for adults, especially women" }
                            ]
                        },
                        {
                            title: "Healthcare Initiatives",
                            desc: "We conduct healthcare programs to ensure access to basic health services in underserved areas.",
                            items: [
                                { name: "Mobile Health Camps", detail: "Regular health check-up camps in villages" },
                                { name: "Maternal & Child Health", detail: "Programs focusing on pre-natal and post-natal care" },
                                { name: "Sanitation Drives", detail: "Construction of household toilets under Swachh Bharat Mission" },
                                { name: "Health Awareness", detail: "IEC campaigns on nutrition, hygiene, and disease prevention" }
                            ]
                        },
                        {
                            title: "Women Empowerment",
                            desc: "Empowering women through economic independence and leadership development.",
                            items: [
                                { name: "Self-Help Groups (SHGs)", detail: "Formation and capacity building of women's SHGs" },
                                { name: "Micro-Finance", detail: "Facilitating access to micro-credit for small enterprises" },
                                { name: "Skill Training", detail: "Tailoring, handicrafts, food processing, etc." },
                                { name: "Legal Awareness", detail: "Programs on women's rights and legal aid" }
                            ]
                        },
                        {
                            title: "Livelihood Support",
                            desc: "Creating sustainable livelihood opportunities for marginalized communities.",
                            items: [
                                { name: "Vocational Training", detail: "Skill development in trades like electrician, plumber, etc." },
                                { name: "Artisan Support", detail: "Market linkages and design support for traditional craftspersons" },
                                { name: "Agriculture", detail: "Sustainable farming practices and farmer training" },
                                { name: "Entrepreneurship", detail: "Support for micro and small enterprises" }
                            ]
                        },
                        {
                            title: "Environmental Conservation",
                            desc: "Promoting environmental sustainability and ecological balance.",
                            items: [
                                { name: "Tree Plantation", detail: "Annual plantation drives in collaboration with Forest Department" },
                                { name: "Waste Management", detail: "Community-based waste segregation and composting" },
                                { name: "Water Conservation", detail: "Rainwater harvesting and watershed management" },
                                { name: "Renewable Energy", detail: "Promotion of solar energy in rural households" }
                            ]
                        }
                    ].map((program, idx) => (
                        <div key={idx} className="bg-white border border-gray-200 rounded-sm overflow-hidden">
                            <div className="bg-gray-50 border-b border-gray-200 px-6 py-4">
                                <h3 className="text-xl font-bold text-[#1A365D]">{program.title}</h3>
                            </div>
                            <div className="p-6 md:p-8">
                                <p className="text-gray-600 mb-6">{program.desc}</p>
                                <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                                    {program.items.map((item, itemIdx) => (
                                        <div key={itemIdx} className="flex flex-col">
                                            <span className="font-semibold text-[#2D3748] mb-1">{item.name}</span>
                                            <span className="text-sm text-gray-500">{item.detail}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 bg-[#F0FFF4] border border-[#C6F6D5] p-6 rounded-sm text-center max-w-2xl mx-auto">
                    <p className="text-[#276749]">
                        <strong>Note:</strong> For detailed project reports and impact assessments, please visit the{' '}
                        <Link href="/resources" className="underline hover:text-[#22543d]">Resources section</Link>
                        {' '}or{' '}
                        <Link href="/contact" className="underline hover:text-[#22543d]">contact us</Link>.
                    </p>
                </div>
            </div>
        </div>
    );
}
