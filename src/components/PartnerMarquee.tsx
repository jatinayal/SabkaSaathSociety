"use client";

const partners = [
    { name: "Ministry of Rural Dev.", logo: "/satyamev.png" },
    { name: "NITI Aayog", logo: "/satyamev.png" },
    { name: "State Govt of Bihar", logo: "/Seal_of_Bihar,svg-Picsart-BackgroundRemover.png" },
    { name: "State Govt of UP", logo: "/sssup.png" },
    { name: "HDFC Bank CSR", logo: "/sshdfc.png" },
    { name: "ICICI Foundation", logo: "/ssicici.png" },
    { name: "Tech Mahindra Fdn.", logo: "/sstechm.png" },
    { name: "UNDP India", logo: "/ssundp.png" },
    { name: "Bill & Melinda Gates Fdn.", logo: "/ssbill.png" },
    { name: "Tata Trusts", logo: "/Tata-Trust-Logo-Picsart-BackgroundRemover.webp" },
    { name: "Reliance Foundation", logo: "/photo_1753787602-Picsart-BackgroundRemover.jpg" },
    { name: "Nabard", logo: "/nabard.jpg" },
    { name: "SIDBI", logo: "/SIDBI--Picsart-BackgroundRemover.jpg" },
    { name: "Skill India", logo: "/skill.jpg" },
    { name: "NSDC", logo: "/nsdc.png" },
    { name: "World Bank", logo: "/bank.jpg" },
];

export default function PartnerMarquee() {
    return (
        <div className="w-full overflow-hidden bg-white border-y border-gray-200 py-10">
            <div className="relative w-full max-w-7xl mx-auto">
                <div
                    className="flex w-max animate-scroll"
                    style={{
                        width: "max-content",
                    }}
                >
                    {/* First set of partners */}
                    {partners.map((partner, idx) => (
                        <div
                            key={`p1-${idx}`}
                            className="flex items-center justify-center px-8 py-3 mx-4 border border-gray-100 bg-gray-50/50 rounded-sm whitespace-nowrap text-[#2D3748] font-semibold text-lg"
                        >
                            <div className="relative h-8 w-auto aspect-square mr-3">
                                <img
                                    src={partner.logo}
                                    alt={partner.name}
                                    className="h-full w-full object-contain"
                                />
                            </div>
                            {partner.name}
                        </div>
                    ))}
                    {/* Duplicate set for seamless scrolling */}
                    {partners.map((partner, idx) => (
                        <div
                            key={`p2-${idx}`}
                            className="flex items-center justify-center px-8 py-3 mx-4 border border-gray-100 bg-gray-50/50 rounded-sm whitespace-nowrap text-[#2D3748] font-semibold text-lg"
                        >
                            <div className="relative h-8 w-auto aspect-square mr-3">
                                <img
                                    src={partner.logo}
                                    alt={partner.name}
                                    className="h-full w-full object-contain"
                                />
                            </div>
                            {partner.name}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
