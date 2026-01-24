// components/sections/AwardsSection.jsx
import { memo } from "react";
import { motion } from "framer-motion";
import Section from "../ui/Section";
import Card from "../ui/Card";
import Pill from "../ui/Pill";

const AwardsSection = memo(function AwardsSection({ awards, onAwardClick }) {
    return (
        <Section
            id="awards"
            eyebrow="Recognition"
            title="Awards & achievements"
            subtitle="Validated through competitions, bootcamps, and professional recognition."
        >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {awards.map((a, i) => (
                    <motion.button
                        key={a.key}
                        type="button"
                        onClick={() => onAwardClick(a)}
                        className="text-left"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.08 }}
                    >
                        <Card hoverable className="overflow-hidden">
                            <div className="aspect-[16/10] overflow-hidden">
                                <img
                                    src={a.cover}
                                    alt={a.title}
                                    className="w-full h-full object-cover img-apple"
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-2">
                                    <div className="text-sm font-semibold text-gray-500">{a.year}</div>
                                    <Pill>{a.tag}</Pill>
                                </div>
                                <h3 className="text-lg font-semibold">{a.title}</h3>
                                <p className="text-sm text-gray-600 mt-2">{a.desc}</p>
                            </div>
                        </Card>
                    </motion.button>
                ))}
            </div>
        </Section>
    );
});

export default AwardsSection;
