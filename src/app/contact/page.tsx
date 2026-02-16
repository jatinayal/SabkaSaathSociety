"use client";

import PageHeader from "@/components/PageHeader";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus("success");
                setFormData({ name: "", email: "", subject: "", message: "" });
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    };

    return (
        <div className="min-h-screen bg-white font-sans text-gray-800">
            <PageHeader
                title="Contact Us"
                breadcrumb={[
                    { label: "Contact", href: "/contact" }
                ]}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid lg:grid-cols-2 gap-16">

                    {/* Contact Info Side */}
                    <div>
                        <h2 className="text-2xl font-bold text-[#1A365D] mb-8 border-b border-gray-200 pb-4">Get in Touch</h2>
                        <p className="text-gray-600 mb-10 leading-relaxed">
                            For any queries, partnership proposals, or general information, please reach out to us.
                            Our team will respond to you within 3-5 working days.
                        </p>

                        <div className="space-y-8">
                            <div className="flex gap-4">
                                <div className="bg-blue-50 p-3 rounded-sm h-fit text-[#2C5282]">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-800 mb-1">Office Address</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Sabka Sath Society<br />
                                        C-93,1stFloor Nehru Vihar Near <br />
                                        TimarPur, 110054-New Delhi,India
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="bg-blue-50 p-3 rounded-sm h-fit text-[#2C5282]">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-800 mb-1">Phone & Mobile</h3>
                                    <p className="text-gray-600">+91 850 5990 773</p>
                                    <p className="text-gray-600">+91 886 0005 130</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="bg-blue-50 p-3 rounded-sm h-fit text-[#2C5282]">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-800 mb-1">Email</h3>
                                    <a href="mailto:sabkasaathngo@gmail.com" className="text-blue-600 hover:underline">sabkasaathngo@gmail.com</a>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="bg-blue-50 p-3 rounded-sm h-fit text-[#2C5282]">
                                    <Clock className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-800 mb-1">Working Hours</h3>
                                    <p className="text-gray-600">Monday to Friday, 10:00 AM to 5:00 PM</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form Side */}
                    <div className="bg-gray-50 border border-gray-200 p-8 rounded-sm shadow-sm">
                        <h3 className="text-xl font-bold text-[#2D3748] mb-6">Send us a Message</h3>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="w-full border border-gray-300 px-4 py-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white"
                                    placeholder="Enter your full name"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full border border-gray-300 px-4 py-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white"
                                    placeholder="Enter your email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">Subject *</label>
                                <select
                                    id="subject"
                                    name="subject"
                                    required
                                    className="w-full border border-gray-300 px-4 py-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white"
                                    value={formData.subject}
                                    onChange={handleChange}
                                >
                                    <option value="">-- Select a Topic --</option>
                                    <option value="General Inquiry">General Inquiry</option>
                                    <option value="Partnership Proposal">Partnership Proposal</option>
                                    <option value="CSR Collaboration">CSR Collaboration</option>
                                    <option value="Volunteering">Volunteering</option>
                                    <option value="Media/Press">Media/Press</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Message *</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={5}
                                    className="w-full border border-gray-300 px-4 py-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white"
                                    placeholder="Type your message here..."
                                    value={formData.message}
                                    onChange={handleChange}
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={status === "submitting"}
                                className="w-full bg-[#1A365D] text-white font-bold py-3 px-6 rounded-sm hover:bg-[#2C5282] transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {status === "submitting" ? (
                                    "Sending..."
                                ) : (
                                    <>
                                        Send Message <Send className="w-4 h-4 ml-1" />
                                    </>
                                )}
                            </button>

                            {status === "success" && (
                                <div className="p-4 bg-green-50 border border-green-200 text-green-800 text-sm rounded-sm">
                                    <strong>Success:</strong> Your message has been submitted successfully. We will contact you soon.
                                </div>
                            )}
                            {status === "error" && (
                                <div className="p-4 bg-red-50 border border-red-200 text-red-800 text-sm rounded-sm">
                                    <strong>Error:</strong> There was an error submitting the form. Please try again later.
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
