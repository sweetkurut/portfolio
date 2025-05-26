import React from "react";
import { useTranslation } from "react-i18next";
import { Code } from "lucide-react";

const Footer: React.FC = () => {
    const { t } = useTranslation();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-12 bg-dark border-t border-gray-800">
            <div className="container">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-6 md:mb-0">
                        <a href="#home" className="text-2xl font-bold font-heading">
                            <span className="text-primary">Aidin</span>Dew
                        </a>
                    </div>

                    <nav className="flex flex-wrap justify-center mb-6 md:mb-0">
                        <a href="#home" className="px-4 py-2 text-muted hover:text-light transition-colors">
                            {t("nav.home")}
                        </a>
                        <a href="#about" className="px-4 py-2 text-muted hover:text-light transition-colors">
                            {t("nav.about")}
                        </a>
                        <a href="#services" className="px-4 py-2 text-muted hover:text-light transition-colors">
                            {t("nav.services")}
                        </a>
                        <a href="#projects" className="px-4 py-2 text-muted hover:text-light transition-colors">
                            {t("nav.projects")}
                        </a>
                        <a href="#contact" className="px-4 py-2 text-muted hover:text-light transition-colors">
                            {t("nav.contact")}
                        </a>
                    </nav>
                </div>

                <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-muted text-sm mb-4 md:mb-0">{t("footer.copyright").replace("2025", currentYear.toString())}</p>

                    <p className="text-muted text-sm flex items-center">
                        <span>{t("footer.made")}</span>
                        <Code size={16} className="ml-2 text-primary" />
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
