import { ExternalLink } from "lucide-react";

export const ProjectCard: React.FC<{
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
