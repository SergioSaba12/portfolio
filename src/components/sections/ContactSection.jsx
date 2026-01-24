// components/sections/ContactSection.jsx
import { memo } from "react";
import Section from "../ui/Section";
import Card from "../ui/Card";

const ContactSection = memo(function ContactSection() {
    return (
        <Section
            id="contact"
            eyebrow="Contact"
            title="Let's build something"
            subtitle="Open to AI roles, startup collaboration, and applied research."
        >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="p-6">
                    <div className="text-xs font-semibold text-gray-500 uppercase mb-2">Email</div>
                    <a href="mailto:sabaterruizs@gmail.com" className="link-apple font-semibold">
                        sabaterruizs@gmail.com
                    </a>
                    <div className="text-sm text-gray-500 mt-2">Fastest way to reach me</div>
                </Card>

                <Card className="p-6">
                    <div className="text-xs font-semibold text-gray-500 uppercase mb-2">Phone</div>
                    <a href="tel:+34722273036" className="link-apple font-semibold">
                        +34 722 273 036
                    </a>
                    <div className="text-sm text-gray-500 mt-2">Valencia, Spain</div>
                </Card>

                <Card className="p-6">
                    <div className="text-xs font-semibold text-gray-500 uppercase mb-2">Availability</div>
                    <div className="flex items-center gap-2 font-semibold text-green-600 mb-1">
                        <span className="inline-block h-2.5 w-2.5 rounded-full bg-green-500 animate-pulse"></span>
                        Open to opportunities
                    </div>
                    <div className="text-sm text-gray-500 mt-2">Response within 24h</div>
                    <div className="text-sm text-gray-500">Valencia, Spain (GMT+1)</div>
                </Card>
            </div>

            <div className="text-center text-sm text-gray-500 mt-16">
                © {new Date().getFullYear()} Sergio Sabater Ruiz
            </div>
        </Section>
    );
});

export default ContactSection;
