import React, { useState, useEffect } from "react";
import { Menu, X, Globe } from "lucide-react";
import { useTranslation } from "react-i18next";

const Header: React.FC = () => {
    const { t, i18n } = useTranslation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
        closeMenu();
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: t("nav.about"), href: "#about" },
        { name: t("nav.services"), href: "#services" },
        { name: t("nav.projects"), href: "#projects" },
        { name: t("nav.reviews"), href: "#reviews" },
        { name: t("nav.contact"), href: "#contact" },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
    ${scrolled ? "bg-darker md:bg-darker/20 md:backdrop-blur-md py-4 shadow-lg" : "bg-darker py-6"}
`}
        >
            <div className="container flex items-center justify-between">
                <a href="#home" className="text-2xl font-bold font-heading">
                    <span className="text-primary">Asman</span>Digital
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-8">
                    <ul className="flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    className="text-light hover:text-primary transition-colors duration-300"
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className="flex items-center space-x-4 border-l border-gray-700 pl-4">
                        <button
                            onClick={() => changeLanguage("en")}
                            className={`px-2 py-1 text-sm rounded ${
                                i18n.language === "en"
                                    ? "bg-primary text-light"
                                    : "text-light hover:text-primary"
                            }`}
                        >
                            EN
                        </button>
                        <button
                            onClick={() => changeLanguage("ru")}
                            className={`px-2 py-1 text-sm rounded ${
                                i18n.language === "ru"
                                    ? "bg-primary text-light"
                                    : "text-light hover:text-primary"
                            }`}
                        >
                            RU
                        </button>
                    </div>
                </nav>

                {/* мобилка - мею */}
                <button className="md:hidden text-light" onClick={toggleMenu} aria-label="Toggle menu">
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* планшет */}
            <div className="hidden md:flex lg:hidden fixed top-0 left-0 w-full z-40 bg-darker shadow-md">
                <div className="container flex items-center justify-between py-4">
                    <a href="#home" className="text-2xl font-bold" onClick={closeMenu}>
                        <span className="text-primary">Aidin</span>Dew
                    </a>

                    <div className="flex items-center space-x-6">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-base text-light hover:text-primary transition-colors duration-300"
                                onClick={closeMenu}
                            >
                                {link.name}
                            </a>
                        ))}

                        {/* Language Switch */}
                        <div className="flex items-center space-x-2 border-l border-gray-800 pl-4">
                            <Globe size={20} className="text-primary" />
                            <button
                                onClick={() => changeLanguage("en")}
                                className={`px-2 py-1 rounded text-sm ${
                                    i18n.language === "en"
                                        ? "bg-primary text-light"
                                        : "text-light hover:text-primary"
                                }`}
                            >
                                EN
                            </button>
                            <button
                                onClick={() => changeLanguage("ru")}
                                className={`px-2 py-1 rounded text-sm ${
                                    i18n.language === "ru"
                                        ? "bg-primary text-light"
                                        : "text-light hover:text-primary"
                                }`}
                            >
                                RU
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* мобильная навигация */}
            <div
                className={`fixed inset-0 bg-darker z-40 transition-transform duration-300 md:hidden ${
                    isMenuOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <div className="container py-8">
                    <div className="flex items-center justify-between mb-8">
                        <a href="#home" className="text-2xl font-bold" onClick={closeMenu}>
                            <span className="text-primary">Aidin</span>Dew
                        </a>
                        <button onClick={closeMenu} aria-label="Close menu">
                            <X size={24} className="text-light" />
                        </button>
                    </div>

                    <nav className="flex flex-col space-y-6">
                        <ul className="flex flex-col space-y-4">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        className="text-xl text-light hover:text-primary transition-colors duration-300"
                                        onClick={closeMenu}
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>

                        <div className="flex items-center space-x-4 pt-4 border-t border-gray-800">
                            <Globe size={20} className="text-primary" />
                            <button
                                onClick={() => changeLanguage("en")}
                                className={`px-3 py-1 rounded ${
                                    i18n.language === "en"
                                        ? "bg-primary text-light"
                                        : "text-light hover:text-primary"
                                }`}
                            >
                                English
                            </button>
                            <button
                                onClick={() => changeLanguage("ru")}
                                className={`px-3 py-1 rounded ${
                                    i18n.language === "ru"
                                        ? "bg-primary text-light"
                                        : "text-light hover:text-primary"
                                }`}
                            >
                                Русский
                            </button>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
