import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Globe, Layout, Database, Palette, Server, Smartphone, Settings } from "lucide-react";
import { ServiceCard } from "./ServiceCard";

const Services: React.FC = () => {
    const { t } = useTranslation();
    const [activeTab, setActiveTab] = useState<string>("fullCycle");

    const tabs = [
        { id: "fullCycle", label: t("services.tabs.fullCycle"), icon: <Globe size={24} /> },
        { id: "frontend", label: t("services.tabs.frontend"), icon: <Layout size={24} /> },
        { id: "backend", label: t("services.tabs.backend"), icon: <Database size={24} /> },
        { id: "software", label: t("services.tabs.software"), icon: <Settings size={24} /> },
        { id: "design", label: t("services.tabs.design"), icon: <Palette size={24} /> },
        { id: "mobile", label: t("services.tabs.mobile"), icon: <Smartphone size={24} /> },
    ];

    const getTabContent = (tabId: string) => {
        switch (tabId) {
            case "fullCycle":
                return (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <ServiceCard
                            icon={<Globe size={36} />}
                            title={t("services.fullCycle.title1")}
                            description={t("services.fullCycle.desc1")}
                        />
                        <ServiceCard
                            icon={<Server size={36} />}
                            title={t("services.fullCycle.title3")}
                            description={t("services.fullCycle.desc3")}
                        />
                    </div>
                );

            case "frontend":
                return (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <ServiceCard
                            icon={<Layout size={36} />}
                            title={t("services.frontend.title1")}
                            description={t("services.frontend.desc1")}
                        />
                        <ServiceCard
                            icon={<Layout size={36} />}
                            title={t("services.frontend.title2")}
                            description={t("services.frontend.desc2")}
                        />
                        <ServiceCard
                            icon={<Layout size={36} />}
                            title={t("services.frontend.title3")}
                            description={t("services.frontend.desc3")}
                        />
                        <ServiceCard
                            icon={<Layout size={36} />}
                            title={t("services.frontend.title4")}
                            description={t("services.frontend.desc4")}
                        />
                    </div>
                );

            case "backend":
                return (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <ServiceCard
                            icon={<Database size={36} />}
                            title={t("services.backend.title1")}
                            description={t("services.backend.desc1")}
                        />
                        <ServiceCard
                            icon={<Database size={36} />}
                            title={t("services.backend.title2")}
                            description={t("services.backend.desc2")}
                        />
                        <ServiceCard
                            icon={<Database size={36} />}
                            title={t("services.backend.title3")}
                            description={t("services.backend.desc3")}
                        />
                    </div>
                );

            case "software":
                return (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <ServiceCard
                            icon={<Settings size={36} />}
                            title={t("services.software.title1")}
                            description={t("services.software.desc1")}
                        />
                        <ServiceCard
                            icon={<Settings size={36} />}
                            title={t("services.software.title2")}
                            description={t("services.software.desc2")}
                        />
                        <ServiceCard
                            icon={<Settings size={36} />}
                            title={t("services.software.title3")}
                            description={t("services.software.desc3")}
                        />
                    </div>
                );

            case "design":
                return (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <ServiceCard
                            icon={<Palette size={36} />}
                            title={t("services.design.title1")}
                            description={t("services.design.desc1")}
                        />
                    </div>
                );

            case "mobile":
                return (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <ServiceCard
                            icon={<Smartphone size={36} />}
                            title={t("services.mobile.title1")}
                            description={t("services.mobile.desc1")}
                        />
                    </div>
                );

            default:
                return null;
        }
    };

    return (
        <section id="services" className="section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title gradient-text">{t("services.title")}</h2>
                    <p className="section-subtitle">{t("services.subtitle")}</p>

                    <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center px-4 py-3 rounded-lg border transition-all duration-300 ${
                                    activeTab === tab.id
                                        ? "tab-active border-primary"
                                        : "border-gray-700 hover:border-primary/50 text-muted hover:text-light"
                                }`}
                            >
                                <span className="mr-2">{tab.icon}</span>
                                <span>{tab.label}</span>
                            </button>
                        ))}
                    </div>

                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {getTabContent(activeTab)}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
