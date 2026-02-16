import PageHeader from "@/components/PageHeader";
import Link from "next/link";
import { FileText, Download, FileBarChart, Scale } from "lucide-react";

export default function ResourcesPage() {
    return (
        <div className="min-h-screen bg-white font-sans text-gray-800">
            <PageHeader
                title="Resources"
                breadcrumb={[
                    { label: "Resources", href: "/resources" }
                ]}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

                {/* Intro */}
                <section className="mb-16 max-w-4xl mx-auto text-center">
                    <p className="text-xl text-gray-600 leading-relaxed">
                        This section contains reports, publications, and other resources related to the work of
                        Sabka Sath Society. Documents are available for download in PDF format.
                    </p>
                </section>

                <div className="grid lg:grid-cols-2 gap-12 mb-20">
                    {/* Annual Reports */}
                    <section>
                        <div className="flex items-center gap-3 mb-8 pb-4 border-b border-gray-200">
                            <FileBarChart className="w-6 h-6 text-[#2C5282]" />
                            <h2 className="text-2xl font-bold text-[#1A365D]">Annual Reports</h2>
                        </div>
                        <div className="grid gap-4">
                            {[
                                { year: "2024-25", label: "Annual Report 2024-25" },
                                { year: "2023-24", label: "Annual Report 2023-24" },
                                { year: "2022-23", label: "Annual Report 2022-23" }
                            ].map((doc, idx) => (
                                <div key={idx} className="group flex items-center justify-between p-4 bg-white border border-gray-200 rounded-sm hover:border-blue-400 hover:shadow-sm transition-all">
                                    <div className="flex items-center gap-4">
                                        <div className="bg-blue-50 p-2 rounded-sm text-blue-600 group-hover:bg-blue-100 transition-colors">
                                            <FileText className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-800 group-hover:text-[#2C5282] transition-colors">{doc.label}</h3>
                                            <span className="text-xs text-gray-500 font-medium">PDF Document</span>
                                        </div>
                                    </div>
                                    <button className="flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-[#2C5282] transition-colors">
                                        <Download className="w-4 h-4" />
                                        <span className="hidden sm:inline">Download</span>
                                    </button>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Financial Statements */}
                    <section>
                        <div className="flex items-center gap-3 mb-8 pb-4 border-b border-gray-200">
                            <Scale className="w-6 h-6 text-[#2C5282]" />
                            <h2 className="text-2xl font-bold text-[#1A365D]">Financial Statements</h2>
                        </div>
                        <div className="grid gap-4">
                            {[
                                { year: "2024-25", label: "Audited Financial Statement" },
                                { year: "2023-24", label: "Audited Financial Statement" }
                            ].map((doc, idx) => (
                                <div key={idx} className="group flex items-center justify-between p-4 bg-white border border-gray-200 rounded-sm hover:border-green-400 hover:shadow-sm transition-all">
                                    <div className="flex items-center gap-4">
                                        <div className="bg-green-50 p-2 rounded-sm text-green-600 group-hover:bg-green-100 transition-colors">
                                            <FileText className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-800 group-hover:text-[#276749] transition-colors">{doc.label} <span className="text-gray-500 font-normal">({doc.year})</span></h3>
                                            <span className="text-xs text-gray-500 font-medium">PDF Document</span>
                                        </div>
                                    </div>
                                    <button className="flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-[#276749] transition-colors">
                                        <Download className="w-4 h-4" />
                                        <span className="hidden sm:inline">Download</span>
                                    </button>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Project Reports */}
                    <section className="bg-gray-50 p-8 rounded-sm border border-gray-200">
                        <h2 className="text-xl font-bold text-[#1A365D] mb-6">Project Reports</h2>
                        <ul className="space-y-4">
                            {[
                                "Project Shiksha - Impact Assessment Report (2024)",
                                "Clean Water Initiative - Completion Report (2023)",
                                "Swavalamban Program - Mid-Term Evaluation (2022)"
                            ].map((report, idx) => (
                                <li key={idx}>
                                    <Link href="#" className="flex items-start gap-3 group">
                                        <div className="mt-1 w-1.5 h-1.5 bg-gray-400 rounded-full group-hover:bg-[#319795] transition-colors"></div>
                                        <span className="text-gray-700 group-hover:text-[#2C5282] group-hover:underline transition-colors">{report}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* Policy Documents */}
                    <section className="bg-gray-50 p-8 rounded-sm border border-gray-200">
                        <h2 className="text-xl font-bold text-[#1A365D] mb-6">Policy Documents</h2>
                        <ul className="space-y-4">
                            {[
                                { name: "Memorandum of Association", href: "#" },
                                { name: "Rules & Regulations", href: "#" },
                                { name: "Anti-Sexual Harassment Policy", href: "#" },
                                { name: "Child Protection Policy", href: "#" }
                            ].map((policy, idx) => (
                                <li key={idx}>
                                    <Link href={policy.href} className="flex items-start gap-3 group">
                                        <div className="mt-1 w-1.5 h-1.5 bg-gray-400 rounded-full group-hover:bg-[#319795] transition-colors"></div>
                                        <span className="text-gray-700 group-hover:text-[#2C5282] group-hover:underline transition-colors">{policy.name}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </section>
                </div>

                <div className="mt-16 text-center">
                    <p className="text-gray-500 text-sm">
                        <strong>Note:</strong> Some documents may require login. For access to restricted
                        documents, please <Link href="/contact" className="text-[#2B6CB0] hover:underline">contact us</Link>.
                    </p>
                </div>
            </div>
        </div>
    );
}
