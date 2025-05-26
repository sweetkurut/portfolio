import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Send, Mail, MessageSquare } from "lucide-react";

interface FormData {
    name: string;
    email: string;
    message: string;
}

const Contact: React.FC = () => {
    const { t } = useTranslation();
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        message: "",
    });
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");

        // Simulate form submission
        setTimeout(() => {
            // In a real app, you would send the data to your backend
            console.log("Form submitted:", formData);
            setStatus("success");
            setFormData({ name: "", email: "", message: "" });

            // Reset form status after 3 seconds
            setTimeout(() => {
                setStatus("idle");
            }, 3000);
        }, 1500);
    };

    return (
        <section id="contact" className="section bg-darker">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title gradient-text">{t("contact.title")}</h2>
                    <p className="section-subtitle">{t("contact.subtitle")}</p>

                    <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                        <div>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                                        {t("contact.name")}
                                    </label>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-dark border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary text-light"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                                        {t("contact.email")}
                                    </label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-dark border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary text-light"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                                        {t("contact.message")}
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={5}
                                        required
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-dark border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary text-light resize-none"
                                    />
                                </div>

                                <div>
                                    <button type="submit" disabled={status === "submitting"} className="btn btn-primary w-full">
                                        {status === "submitting" ? (
                                            <span className="flex items-center justify-center">
                                                <svg
                                                    className="animate-spin -ml-1 mr-2 h-5 w-5 text-light"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <circle
                                                        className="opacity-25"
                                                        cx="12"
                                                        cy="12"
                                                        r="10"
                                                        stroke="currentColor"
                                                        strokeWidth="4"
                                                    ></circle>
                                                    <path
                                                        className="opacity-75"
                                                        fill="currentColor"
                                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                    ></path>
                                                </svg>
                                                Processing...
                                            </span>
                                        ) : (
                                            <span className="flex items-center justify-center">
                                                {t("contact.send")} <Send size={16} className="ml-2" />
                                            </span>
                                        )}
                                    </button>

                                    {status === "success" && <p className="mt-4 text-center text-green-500">{t("contact.success")}</p>}

                                    {status === "error" && <p className="mt-4 text-center text-red-500">{t("contact.error")}</p>}
                                </div>
                            </form>
                        </div>

                        <div className="flex flex-col justify-center">
                            <div className="card p-8 space-y-8">
                                <h3 className="text-xl font-semibold mb-4">{t("contact.direct")}</h3>

                                <div className="flex items-start">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                                        <Mail size={20} className="text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-muted mb-1">{t("contact.email_label")}</p>
                                        <a
                                            href="mailto:contact@devportfolio.com"
                                            className="text-light hover:text-primary transition-colors"
                                        >
                                            devxwc@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center mr-4">
                                        <MessageSquare size={20} className="text-secondary" />
                                    </div>
                                    <div>
                                        <p className="text-muted mb-1">{t("contact.telegram")}</p>
                                        <a
                                            href="https://t.me/devxwc"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-light hover:text-secondary transition-colors"
                                        >
                                            @devxwc
                                        </a>
                                    </div>
                                </div>

                                <div className="pt-6 mt-6 border-t border-gray-800">
                                    <p className="text-muted mb-4">Find me on social media:</p>
                                    <div className="flex space-x-4">
                                        <a
                                            href="https://www.instagram.com/uk13ew/"
                                            target="_blank"
                                            className="w-10 h-10 rounded-full bg-dark flex items-center justify-center hover:bg-primary/20 transition-colors"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="20"
                                                height="20"
                                                fill="currentColor"
                                                className="text-primary"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M7.75 2C5.126 2 3 4.126 3 6.75v10.5C3 19.874 5.126 22 7.75 22h8.5C18.874 22 21 19.874 21 17.25V6.75C21 4.126 18.874 2 16.25 2h-8.5zM7.75 3.5h8.5c1.793 0 3.25 1.457 3.25 3.25v10.5c0 1.793-1.457 3.25-3.25 3.25h-8.5C5.957 20.5 4.5 19.043 4.5 17.25V6.75C4.5 4.957 5.957 3.5 7.75 3.5zM12 7a5 5 0 100 10 5 5 0 000-10zm0 1.5a3.5 3.5 0 110 7 3.5 3.5 0 010-7zm5.25-.75a.75.75 0 100-1.5.75.75 0 000 1.5z" />
                                            </svg>
                                        </a>
                                        <a
                                            href="https://t.me/devxwc"
                                            target="_blank"
                                            className="w-10 h-10 rounded-full bg-dark flex items-center justify-center hover:bg-primary/20 transition-colors"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="20"
                                                height="20"
                                                fill="currentColor"
                                                className="text-primary"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M9.993 16.49l-.39 5.485c.56 0 .803-.24 1.09-.526l2.62-2.49 5.437 3.98c.995.55 1.71.262 1.97-.92l3.57-16.74c.315-1.455-.52-2.03-1.48-1.675L1.72 9.408c-1.45.564-1.43 1.36-.25 1.72l5.79 1.81 13.43-8.44c.63-.38 1.2-.17.73.24L9.993 16.49z" />
                                            </svg>
                                        </a>
                                        <a
                                            href="https://www.linkedin.com/in/aidin-ukiev-ba598827a/"
                                            target="_blank"
                                            className="w-10 h-10 rounded-full bg-dark flex items-center justify-center hover:bg-primary/20 transition-colors"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="20"
                                                height="20"
                                                fill="currentColor"
                                                className="text-primary"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                                            </svg>
                                        </a>
                                        <a
                                            href="https://github.com/sweetkurut"
                                            target="_blank"
                                            className="w-10 h-10 rounded-full bg-dark flex items-center justify-center hover:bg-primary/20 transition-colors"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="20"
                                                height="20"
                                                fill="currentColor"
                                                className="text-primary"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
