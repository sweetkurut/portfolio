import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Code2, Workflow, LayoutGrid, Database } from "lucide-react";

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
                    className="max-w-6xl mx-auto"
                >
                    <h2 className="section-title gradient-text">{t("about.title")}</h2>

                    <div className="flex flex-col lg:flex-row gap-10">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:w-1/2">
                            <div className="card card-hover p-6 text-center">
                                <div className="w-14 h-14 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                                    <Code2 size={28} className="text-primary" />
                                </div>
                                <h3 className="text-lg font-medium mb-2">Frontend</h3>
                                <p className="text-muted text-sm leading-relaxed">
                                    HTML / CSS, Sass / Scss, JavaScript, TypeScript, React, React Native,
                                    TailwindCSS
                                </p>
                            </div>

                            <div className="card card-hover p-6 text-center">
                                <div className="w-14 h-14 mx-auto rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                                    <Workflow size={28} className="text-secondary" />
                                </div>
                                <h3 className="text-lg font-medium mb-2">Backend</h3>
                                <p className="text-muted text-sm leading-relaxed">
                                    Node.js, NestJS, Express, TypeORM, PostgreSQL, Python, Django, Java
                                </p>
                            </div>

                            <div className="card card-hover p-6 text-center">
                                <div className="w-14 h-14 mx-auto rounded-full bg-accent/10 flex items-center justify-center mb-4">
                                    <LayoutGrid size={28} className="text-accent" />
                                </div>
                                <h3 className="text-lg font-medium mb-2">UI / UX Design</h3>
                                <p className="text-muted text-sm">Figma, Design Systems, Prototypes</p>
                            </div>

                            <div className="card card-hover p-6 text-center">
                                <div className="w-14 h-14 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                                    <Database size={28} className="text-primary" />
                                </div>
                                <h3 className="text-lg font-medium mb-2">CRM / LMS / Software</h3>
                                <p className="text-muted text-sm leading-relaxed">{t("lms.text")}</p>
                            </div>
                        </div>

                        <div className="lg:w-1/2 flex flex-col justify-between">
                            <p className="text-lg leading-relaxed mb-8">{t("about.description")}</p>

                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
                                <div className="bg-dark p-5 rounded-lg">
                                    <h4 className="text-4xl font-bold text-primary mb-1">2+</h4>
                                    <p className="text-muted">{t("about.card.year")}</p>
                                </div>
                                <div className="bg-dark p-5 rounded-lg">
                                    <h4 className="text-4xl font-bold text-secondary mb-1">10+</h4>
                                    <p className="text-muted">{t("about.card.project")}</p>
                                </div>
                                <div className="bg-dark p-5 rounded-lg">
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
