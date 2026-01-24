// components/ui/Section.jsx
import { memo } from "react";
import { motion } from "framer-motion";

function cn(...classes) {
    return classes.filter(Boolean).join(" ");
}

const Section = memo(function Section({ id, eyebrow, title, subtitle, children, className }) {
    return (
        <section id={id} className={cn("section-apple", className)}>
            <div className="container-apple">
                {eyebrow && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="eyebrow"
                    >
                        {eyebrow}
                    </motion.div>
                )}

                {title && (
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-title mt-2"
                    >
                        {title}
                    </motion.h2>
                )}

                {subtitle && (
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15 }}
                        className="text-subtitle mt-4 max-w-3xl"
                    >
                        {subtitle}
                    </motion.p>
                )}

                <div className="mt-12">{children}</div>
            </div>
        </section>
    );
});

export default Section;
