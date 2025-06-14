import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ProjectCard } from "./ProjectCard";

const Projects: React.FC = () => {
    const { t } = useTranslation();

    const projects = [
        {
            title: t("projects.project1.title"),
            description: t("projects.project1.description"),
            image: "https://images.pexels.com/photos/6956903/pexels-photo-6956903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            link: "#",
            linkText: t("projects.project1.link"),
        },
        {
            title: t("projects.project2.title"),
            description: t("projects.project2.description"),
            image: "https://images.pexels.com/photos/5053740/pexels-photo-5053740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            link: "#",
            linkText: t("projects.project2.link"),
        },
        {
            title: t("projects.project3.title"),
            description: t("projects.project3.description"),
            image: "https://images.pexels.com/photos/8977561/pexels-photo-8977561.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            link: "#",
            linkText: t("projects.project3.link"),
        },
    ];

    return (
        <section id="projects" className="section bg-darker">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title gradient-text">{t("projects.title")}</h2>
                    <p className="section-subtitle">{t("projects.subtitle")}</p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                                <ProjectCard
                                    title={project.title}
                                    description={project.description}
                                    image={project.image}
                                    link={project.link}
                                    linkText={project.linkText}
                                />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
