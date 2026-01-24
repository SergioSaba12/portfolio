// components/sections/WorkSection.jsx
import { memo } from "react";
import { motion } from "framer-motion";
import Section from "../ui/Section";
import Card from "../ui/Card";
import Pill from "../ui/Pill";

const WorkSection = memo(function WorkSection({ caseStudies, onCaseClick }) {
    return (
        <Section
            id="work"
            eyebrow="Work"
            title="Featured case studies"
            subtitle="Real-world AI solutions validated through challenges and enterprise needs."
            className="bg-gray-50"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {caseStudies.map((c, i) => (
                    <motion.button
                        key={c.title}
                        type="button"
                        onClick={() => onCaseClick(c)}
                        className="text-left"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                    >
                        <Card hoverable className="p-8 h-full flex flex-col">
                            <div className="flex items-start justify-between gap-4 mb-6">
                                <div>
                                    <div className="text-xs text-gray-500 uppercase font-semibold tracking-wide">{c.tag}</div>
                                    <h3 className="text-2xl font-semibold mt-2">{c.title}</h3>
                                    <p className="text-sm text-gray-600 mt-1">{c.subtitle}</p>
                                </div>
                                {c.logo && (
                                    <img src={c.logo} alt="" className="h-10 w-auto opacity-80" />
                                )}
                            </div>

                            <div className="space-y-4 flex-1">
                                <div>
                                    <div className="text-xs font-semibold text-gray-500 uppercase">Problem</div>
                                    <p className="text-sm text-gray-700 mt-1 line-clamp-2">{c.problem}</p>
                                </div>
                                <div>
                                    <div className="text-xs font-semibold text-gray-500 uppercase">Solution</div>
                                    <p className="text-sm text-gray-700 mt-1 line-clamp-2">{c.solution}</p>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-2 mt-6">
                                {c.stack.slice(0, 6).map((s) => (
                                    <Pill key={s}>{s}</Pill>
                                ))}
                            </div>

                            <div className="text-sm link-apple mt-4">View details →</div>
                        </Card>
                    </motion.button>
                ))}
            </div>
        </Section>
    );
});

export default WorkSection;
