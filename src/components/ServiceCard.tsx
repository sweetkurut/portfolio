export const ServiceCard: React.FC<{
    icon: React.ReactNode;
    title: string;
    description: string;
}> = ({ icon, title, description }) => {
    return (
        <div className="card card-hover group">
            <div className="mb-6 text-primary group-hover:scale-110 transition-transform duration-300">{icon}</div>
            <h3 className="text-xl font-semibold mb-3">{title}</h3>
            <p className="text-muted">{description}</p>
        </div>
    );
};
