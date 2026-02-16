import PageHeader from "@/components/PageHeader";

export default function TermsConditionsPage() {
    return (
        <div className="min-h-screen bg-white font-sans text-gray-800">
            <PageHeader
                title="Terms & Conditions"
                breadcrumb={[
                    { label: "Terms & Conditions", href: "/terms-conditions" }
                ]}
            />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="bg-gray-50 border border-gray-200 p-8 rounded-sm mb-10 text-sm text-gray-600">
                    <strong>Last Updated:</strong> 1st January 2025
                </div>

                <div className="prose prose-blue max-w-none text-gray-700">
                    <h3 className="text-[#1A365D] text-xl font-bold mb-4">1. Acceptance of Terms</h3>
                    <p className="mb-6 leading-relaxed">
                        By accessing and using this website, you accept and agree to be bound by these Terms
                        and Conditions. If you do not agree to these terms, please do not use this website.
                    </p>

                    <h3 className="text-[#1A365D] text-xl font-bold mb-4">2. Use of Website</h3>
                    <p className="mb-3">This website is intended for informational purposes only. You agree to:</p>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li>Use the website only for lawful purposes</li>
                        <li>Not attempt to gain unauthorized access to any part of the website</li>
                        <li>Not use the website in any way that may damage or impair its availability</li>
                        <li>Not use automated tools to access or scrape the website</li>
                    </ul>

                    <h3 className="text-[#1A365D] text-xl font-bold mb-4">3. Intellectual Property</h3>
                    <p className="mb-6 leading-relaxed">
                        All content on this website, including text, graphics, logos, and images, is the property
                        of Sabka Saath Society and is protected by applicable copyright and trademark laws. You
                        may not reproduce, distribute, or use any content without our prior written permission.
                    </p>

                    <h3 className="text-[#1A365D] text-xl font-bold mb-4">4. Disclaimer</h3>
                    <p className="mb-6 leading-relaxed">
                        The information on this website is provided "as is" without any warranties of any kind.
                        We do not guarantee the accuracy, completeness, or timeliness of the information. We shall
                        not be liable for any damages arising from the use of this website.
                    </p>

                    <h3 className="text-[#1A365D] text-xl font-bold mb-4">5. Links to External Websites</h3>
                    <p className="mb-6 leading-relaxed">
                        This website may contain links to external websites. We are not responsible for the content
                        or privacy practices of those websites.
                    </p>

                    <h3 className="text-[#1A365D] text-xl font-bold mb-4">6. Modifications</h3>
                    <p className="mb-6 leading-relaxed">
                        We reserve the right to modify these Terms and Conditions at any time. Changes will be
                        effective immediately upon posting on this website.
                    </p>

                    <h3 className="text-[#1A365D] text-xl font-bold mb-4">7. Governing Law</h3>
                    <p className="mb-6 leading-relaxed">
                        These Terms and Conditions are governed by and construed in accordance with the laws of
                        India. Any disputes shall be subject to the exclusive jurisdiction of the courts in
                        New Delhi.
                    </p>

                    <h3 className="text-[#1A365D] text-xl font-bold mb-4">8. Contact</h3>
                    <p className="mb-6 leading-relaxed bg-blue-50 p-6 rounded-sm border border-blue-100">
                        For questions about these Terms and Conditions, please contact:<br />
                        <strong>Email:</strong> sabkasaathngo@gmail.com<br />
                        <strong>Address:</strong> C-93, 1st Floor Nehru Vihar, 110054-New Delhi
                    </p>
                </div>
            </div>
        </div>
    );
}
