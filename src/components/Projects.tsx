import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Импорт стилей Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
        <section id="projects" className="section bg-darker py-20">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="section-title gradient-text text-4xl md:text-5xl font-bold">
                        {t("projects.title")}
                    </h2>
                    <p className="section-subtitle text-gray-400 mt-4 max-w-2xl mx-auto">
                        {t("projects.subtitle")}
                    </p>
                </motion.div>

                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    breakpoints={{
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    pagination={{ clickable: true }}
                    navigation={{
                        prevEl: ".swiper-button-prev-custom",
                        nextEl: ".swiper-button-next-custom",
                    }}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    loop={true}
                    className="relative"
                >
                    {projects.map((project, index) => (
                        <SwiperSlide key={index}>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group relative overflow-hidden rounded-2xl bg-gray-900"
                            >
                                <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                </div>

                                {/* Оверлей с текстом */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90" />
                                <div className="absolute bottom-0 left-0 right-0 p-8 text-left">
                                    <h3 className="text-2xl font-semibold text-white mb-3">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-300 text-sm leading-relaxed mb-6">
                                        {project.description}
                                    </p>
                                    <a
                                        href={project.link}
                                        className="inline-flex items-center text-cyan-400 font-medium hover:text-cyan-300 transition-colors"
                                    >
                                        {project.linkText}
                                        <svg
                                            className="ml-2 w-5 h-5"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                            />
                                        </svg>
                                    </a>
                                </div>
                            </motion.div>
                        </SwiperSlide>
                    ))}

                    {/* Кастомные стрелки (опционально, можно скрыть на мобильных) */}
                    <div className="lg:block swiper-button-prev-custom absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black/30 backdrop-blur rounded-full flex items-center justify-center cursor-pointer hover:bg-black/50 transition">
                        <svg
                            className="w-6 h-6 text-white mt-3 ml-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                    </div>
                    <div className="lg:block swiper-button-next-custom absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black/30 backdrop-blur rounded-full flex items-center justify-center cursor-pointer hover:bg-black/50 transition">
                        <svg
                            className="w-6 h-6 text-white mt-3 ml-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </div>
                </Swiper>
            </div>
        </section>
    );
};

export default Projects;
