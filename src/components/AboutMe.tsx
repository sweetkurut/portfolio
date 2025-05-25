import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Code2, Workflow, LayoutGrid } from "lucide-react";

const AboutMe: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section id="about" className="section bg-darker">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="section-title gradient-text">{t("about.title")}</h2>

                    <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                        <div className="w-full md:w-1/3 flex flex-col gap-6">
                            <div className="card card-hover p-6 flex flex-col items-center text-center">
                                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                                    <Code2 size={28} className="text-primary" />
                                </div>
                                <h3 className="text-xl font-medium mb-2">Frontend</h3>
                                <p className="text-muted">
                                    Html/Css, Sass/Scss, JavaScript, TypeScript, React, React-Native, TailwindCss
                                </p>
                            </div>

                            <div className="card card-hover p-6 flex flex-col items-center text-center">
                                <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                                    <Workflow size={28} className="text-secondary" />
                                </div>
                                <h3 className="text-xl font-medium mb-2">Backend</h3>
                                <p className="text-muted">Node.js, Express, Nest Js, TypeOrm, PostgresSQL</p>
                            </div>

                            <div className="card card-hover p-6 flex flex-col items-center text-center">
                                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                                    <LayoutGrid size={28} className="text-accent" />
                                </div>
                                <h3 className="text-xl font-medium mb-2">Design</h3>
                                <p className="text-muted">Figma</p>
                            </div>
                        </div>

                        <div className="w-full md:w-2/3">
                            <p className="text-lg leading-relaxed mb-6">{t("about.description")}</p>

                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
                                <div className="bg-dark p-4 rounded-lg">
                                    <h4 className="text-4xl font-bold text-primary mb-1">2+</h4>
                                    <p className="text-muted">{t("about.card.year")}</p>
                                </div>
                                <div className="bg-dark p-4 rounded-lg">
                                    <h4 className="text-4xl font-bold text-secondary mb-1">10+</h4>
                                    <p className="text-muted">{t("about.card.project")}</p>
                                </div>
                                <div className="bg-dark p-4 rounded-lg">
                                    <h4 className="text-4xl font-bold text-accent mb-1">10+</h4>
                                    <p className="text-muted">{t("about.card.client")}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutMe;
