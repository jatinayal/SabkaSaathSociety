import Link from "next/link";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-100 border-t-2 border-gray-400 mt-8">
            <div className="max-w-6xl mx-auto px-4 py-6">
                <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-700 border-b border-gray-300 pb-6 mb-4">
                    {/* Organization Info */}
                    <div>
                        <h4 className="font-bold text-gray-900 mb-2 border-b border-gray-400 pb-1">ORGANIZATION</h4>
                        <p className="mb-1"><strong>Sabka Saath Society</strong></p>
                        <p>Registered under Societies Registration Act, 1860</p>
                        <p>Registration No: 1914/2018 </p>
                        {/* <p>NGO Darpan ID: XX/2015/XXXXXX</p> */}
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="font-bold text-gray-900 mb-2 border-b border-gray-400 pb-1">CONTACT DETAILS</h4>
                        <p className="mb-1">C-93, 1st Floor Nehru Vihar Near </p>
                        <p className="mb-1">TimarPur, 110054-New Delhi,India </p>
                        <p className="mb-1">Phone: +91 850 5990 773, +91 886 0005 130 </p>
                        <p>Email: sabkasaathngo@gmail.com</p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold text-gray-900 mb-2 border-b border-gray-400 pb-1">QUICK LINKS</h4>
                        <ul className="space-y-1">
                            <li><Link href="/about" className="text-blue-800 hover:underline">About Us</Link></li>
                            <li><Link href="/programs" className="text-blue-800 hover:underline">Our Programs</Link></li>
                            <li><Link href="/contact" className="text-blue-800 hover:underline">Contact Us</Link></li>
                            <li><Link href="/privacy-policy" className="text-blue-800 hover:underline">Privacy Policy</Link></li>
                            <li><Link href="/terms-conditions" className="text-blue-800 hover:underline">Terms & Conditions</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="text-center text-xs text-gray-600">
                    <p>&copy; {currentYear} Sabka Saath Society. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}
