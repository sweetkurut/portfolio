import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const ProjectCard: React.FC<{
    title: string;
    description: string;
    image: string;
    link: string;
    linkText: string;
}> = ({ title, description, image, link, linkText }) => {
    return (
        <div className="group overflow-hidden rounded-xl bg-darker border border-gray-800 hover:border-primary/50 transition-all duration-300">
            <div className="relative overflow-hidden aspect-video">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-darker via-darker/80 to-transparent opacity-70"></div>
            </div>
            <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{title}</h3>
                <p className="text-muted mb-4">{description}</p>
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:text-primary-hover transition-colors"
                >
                    {linkText} <ExternalLink size={16} className="ml-1" />
                </a>
            </div>
        </div>
    );
};

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
