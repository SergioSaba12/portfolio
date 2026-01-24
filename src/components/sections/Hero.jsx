// components/sections/Hero.jsx
import { memo } from "react";
import { motion } from "framer-motion";
import Card from "../ui/Card";
import Pill from "../ui/Pill";

const Hero = memo(function Hero({ prefersReduced, chips, proof, profileImage }) {
    return (
        <main id="top" className="pt-16 pb-20 md:pt-24 md:pb-28">
            <div className="container-apple">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left */}
                    <div>
                        <motion.h1
                            className="text-hero"
                            initial={prefersReduced ? false : { opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            Building applied AI products.
                        </motion.h1>

                        <motion.p
                            className="text-subtitle mt-6"
                            initial={prefersReduced ? false : { opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1, duration: 0.5 }}
                        >
                            AI Engineer and startup co-founder focused on real-world ML across NLP, computer vision, and accessibility. Award-winning projects validated through datathons and startup ecosystems.
                        </motion.p>

                        <motion.div
                            className="flex flex-wrap gap-2 mt-6"
                            initial={prefersReduced ? false : { opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            {chips.map((chip) => (
                                <Pill key={chip}>{chip}</Pill>
                            ))}
                        </motion.div>

                        <motion.div
                            className="flex flex-wrap gap-3 mt-8"
                            initial={prefersReduced ? false : { opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            <a href="#work" className="btn-apple btn-apple-primary">
                                View case studies
                            </a>
                            <a href="#awards" className="btn-apple btn-apple-secondary">
                                Awards & proof
                            </a>
                            <a
                                href="https://www.linkedin.com/in/sergio-sabater-ruiz-562753268/"
                                target="_blank"
                                rel="noopener"
                                className="btn-apple btn-apple-secondary"
                            >
                                LinkedIn
                            </a>
                        </motion.div>

                        <motion.div
                            className="mt-4"
                            initial={prefersReduced ? false : { opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            <a
                                href="/Sergio_Sabater_Ruiz_CV.pdf"
                                download
                                className="text-sm link-apple"
                            >
                                Download CV →
                            </a>
                        </motion.div>
                    </div>

                    {/* Right - Photo */}
                    <motion.div
                        initial={prefersReduced ? false : { opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        <div className="relative overflow-hidden rounded-3xl shadow-lg">
                            <img
                                src={profileImage}
                                alt="Sergio Sabater"
                                className="w-full aspect-[4/5] object-cover object-[center_18%]"
                            />
                        </div>
                    </motion.div>
                </div>

                {/* Proof Grid */}
                <motion.div
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                >
                    {proof.map((p) => (
                        <Card key={p.label} className="p-6 text-center">
                            <div className="text-sm text-gray-500">{p.label}</div>
                            <div className="text-3xl font-semibold mt-2">{p.value}</div>
                            <div className="text-xs text-gray-500 mt-2">{p.desc}</div>
                        </Card>
                    ))}
                </motion.div>
            </div>
        </main>
    );
});

export default Hero;
