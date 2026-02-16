import PageHeader from "@/components/PageHeader";

export default function PrivacyPolicyPage() {
    return (
        <div className="min-h-screen bg-white font-sans text-gray-800">
            <PageHeader
                title="Privacy Policy"
                breadcrumb={[
                    { label: "Privacy Policy", href: "/privacy-policy" }
                ]}
            />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="bg-gray-50 border border-gray-200 p-8 rounded-sm mb-10 text-sm text-gray-600">
                    <strong>Last Updated:</strong> 1st January 2025
                </div>

                <div className="prose prose-blue max-w-none text-gray-700">
                    <h3 className="text-[#1A365D] text-xl font-bold mb-4">1. Introduction</h3>
                    <p className="mb-6 leading-relaxed">
                        Sabka Sath Society ("we", "us", or "our") is committed to protecting the privacy of
                        visitors to our website. This Privacy Policy explains how we collect, use, and safeguard
                        your personal information when you visit our website.
                    </p>

                    <h3 className="text-[#1A365D] text-xl font-bold mb-4">2. Information We Collect</h3>
                    <p className="mb-3">We may collect the following types of information:</p>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li><strong>Personal Information:</strong> Name, email address, phone number, and address when you voluntarily provide it through our contact forms.</li>
                        <li><strong>Usage Data:</strong> Information about how you use our website, including IP address, browser type, and pages visited.</li>
                    </ul>

                    <h3 className="text-[#1A365D] text-xl font-bold mb-4">3. How We Use Your Information</h3>
                    <p className="mb-3">We use the information we collect for the following purposes:</p>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li>To respond to your inquiries and requests</li>
                        <li>To send updates about our programs (if you have subscribed)</li>
                        <li>To improve our website and services</li>
                        <li>To comply with legal obligations</li>
                    </ul>

                    <h3 className="text-[#1A365D] text-xl font-bold mb-4">4. Information Sharing</h3>
                    <p className="mb-6 leading-relaxed">
                        We do not sell, trade, or otherwise transfer your personal information to third parties
                        without your consent, except as required by law or to protect our rights.
                    </p>

                    <h3 className="text-[#1A365D] text-xl font-bold mb-4">5. Data Security</h3>
                    <p className="mb-6 leading-relaxed">
                        We implement appropriate technical and organizational measures to protect your personal
                        data against unauthorized access, alteration, disclosure, or destruction.
                    </p>

                    <h3 className="text-[#1A365D] text-xl font-bold mb-4">6. Your Rights</h3>
                    <p className="mb-6 leading-relaxed">
                        You have the right to access, correct, or delete your personal information. To exercise
                        these rights, please contact us at <a href="mailto:privacy@sabkasath.org" className="text-blue-600 hover:underline">privacy@sabkasath.org</a>.
                    </p>

                    <h3 className="text-[#1A365D] text-xl font-bold mb-4">7. Contact Us</h3>
                    <p className="mb-6 leading-relaxed bg-blue-50 p-6 rounded-sm border border-blue-100">
                        For questions about this Privacy Policy, please contact:<br />
                        <strong>Email:</strong> privacy@sabkasath.org<br />
                        <strong>Address:</strong> 123 NGO Street, Sector 4, New Delhi - 110001
                    </p>
                </div>
            </div>
        </div>
    );
}
