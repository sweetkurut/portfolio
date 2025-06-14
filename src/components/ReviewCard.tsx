import { Quote } from "lucide-react";


interface ReviewProps {
  text: string;
  author: string;
  position: string;
}


export const ReviewCard: React.FC<ReviewProps> = ({ text, author, position }) => {
    return (
        <div className="card h-full flex flex-col">
            <div className="text-primary mb-6">
                <Quote size={36} />
            </div>
            <p className="text-lg flex-grow mb-6">{text}</p>
            <div>
                <h4 className="font-medium text-lg">{author}</h4>
                <p className="text-muted">{position}</p>
            </div>
        </div>
    );
};
