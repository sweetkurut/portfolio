import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Code } from "lucide-react";
import LightRays from "../ui/LightRays/LightRays";

const Hero: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section id="home" className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-dark">
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-primary/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 left-1/4 w-1/3 h-1/3 bg-secondary/15 rounded-full blur-[100px]" />
                <div className="absolute top-1/2 right-1/4 w-1/4 h-1/4 bg-accent/10 rounded-full blur-[80px]" />
            </div>

            <div className="absolute inset-0 z-0 pointer-events-none">
                <LightRays
                    raysOrigin="top-center"
                    raysColor="#00ffff"
                    raysSpeed={1.2}
                    lightSpread={0.6}
                    rayLength={1}
                    followMouse={true}
                    mouseInfluence={0.08}
                    noiseAmount={0.08}
                    distortion={0.03}
                    className="w-full h-full"
                />
            </div>

            <div className="container relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center justify-center mb-6 bg-darker/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-800">
                            <Code size={18} className="text-primary mr-2" />
                            <span className="text-light">{t("hero.greeting")}</span>
                        </div>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-text"
                    >
                        {t("hero.title")}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-xl text-muted mb-8 max-w-2xl mx-auto"
                    >
                        {t("hero.subtitle")}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        <a href="#contact" className="btn btn-primary">
                            {t("hero.cta")}
                        </a>
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 1.5,
                    delay: 1,
                    repeat: Infinity,
                    repeatType: "reverse",
                }}
            >
                <div className="w-6 h-10 border-2 border-muted rounded-full flex justify-center">
                    <div className="w-1.5 h-3 bg-primary rounded-full mt-2"></div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
