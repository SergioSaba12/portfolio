// components/sections/SkillsSection.jsx
import { memo } from "react";
import Section from "../ui/Section";
import Pill from "../ui/Pill";

const SkillsSection = memo(function SkillsSection({ skills }) {
    return (
        <Section
            id="skills"
            eyebrow="Expertise"
            title="Technical skills"
            subtitle="Focused stack for building production ML systems."
            className="bg-gray-50"
        >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {skills.map((g) => (
                    <div key={g.group}>
                        <h3 className="text-lg font-semibold mb-4">{g.group}</h3>
                        <div className="flex flex-wrap gap-2">
                            {g.items.map((item) => (
                                <Pill key={item}>{item}</Pill>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
});

export default SkillsSection;
