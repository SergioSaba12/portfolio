// components/sections/AIntegraSection.jsx
import { memo } from "react";
import { motion } from "framer-motion";
import Card from "../ui/Card";

const AIntegraSection = memo(function AIntegraSection() {
    const validations = [
        {
            icon: "🏢",
            title: "IAtecUV Incubator",
            description: "Selected by the UV AI/Tech incubator with space at Parc Científic"
        },
        {
            icon: "🛡️",
            title: "Cybersecurity Program",
            description: "Selected for Startup Valencia's Cybersecurity Startup Program"
        },
        {
            icon: "🚀",
            title: "VDS 2025",
            description: "Official stand at Valencia Digital Summit with UV support"
        },
        {
            icon: "🌍",
            title: "Sweden Bootcamp",
            description: "International Innovation Bootcamp representative"
        }
    ];

    return (
        <section id="aintegra" className="py-24 bg-white border-y border-gray-200">
            <div className="container-apple">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    {/* Logo */}
                    <img
                        src="/logos/aintegra.png"
                        alt="AIntegra Limited"
                        className="h-20 md:h-24 mx-auto mb-6"
                    />
                    <div className="eyebrow mb-4">Startup Spotlight</div>
                    <h2 className="text-title mb-4">AIntegra Limited</h2>
                    <p className="text-subtitle max-w-3xl mx-auto">
                        AI-powered accessibility solutions for universal digital inclusion.
                        Enabling computer control through voice and gestures.
                    </p>
                    <a
                        href="https://aintegralimited.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-apple btn-apple-primary inline-flex items-center gap-2 mt-6"
                    >
                        Visit website
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </a>
                </motion.div>

                {/* Validation Badges */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
                >
                    {validations.map((v) => (
                        <Card key={v.title} className="p-6 text-center">
                            <div className="text-3xl mb-3">{v.icon}</div>
                            <div className="font-bold text-lg mb-1 text-gray-900">{v.title}</div>
                            <div className="text-sm text-gray-500">{v.description}</div>
                        </Card>
                    ))}
                </motion.div>

                {/* Mission & Vision */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
                >
                    <Card className="p-8">
                        <div className="eyebrow mb-3">Mission</div>
                        <p className="text-gray-700 leading-relaxed">
                            Develop inclusive AI technologies that allow people with different abilities to interact with devices
                            without traditional keyboard or mouse, using voice, gestures, or other intuitive interaction modes.
                        </p>
                    </Card>

                    <Card className="p-8">
                        <div className="eyebrow mb-3">Vision</div>
                        <p className="text-gray-700 leading-relaxed">
                            Expand universal digital accessibility, ensuring any user can interact with technology
                            regardless of their physical abilities. Technology that adapts to people, not the other way around.
                        </p>
                    </Card>
                </motion.div>

                {/* Location & Team */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-wrap items-center justify-center gap-6 text-sm"
                >
                    <div className="flex items-center gap-2 text-gray-600">
                        <span className="text-lg">📍</span>
                        <span>Based at Parc Científic de la UV</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                        <span className="text-lg">👥</span>
                        <span>Co-founded with Nerea</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                        <span className="text-lg">🎓</span>
                        <span>UVemprén 360° Program</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="inline-block h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                        <span className="text-green-600 font-medium">Active Development</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
});

export default AIntegraSection;
