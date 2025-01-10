import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

interface CategoryCardProps {
  name: string;
  description: string;
  icon: string;
  className?: string;
}

export const CategoryCard = ({ name, description, icon, className }: CategoryCardProps) => {
  const navigate = useNavigate();

  return (
    <Card 
      className={cn(
        "p-8 cursor-pointer card-hover border-0",
        "group relative overflow-hidden",
        "animate-in fade-in-50 duration-1000",
        className
      )}
      onClick={() => navigate(`/category/${name.toLowerCase()}`)}
    >
      <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:opacity-0" />
      <div className="relative z-10">
        <div className="text-4xl mb-6">{icon}</div>
        <h3 className="text-2xl font-bold mb-4 text-white">{name}</h3>
        <p className="text-white/90">{description}</p>
      </div>
    </Card>
  );
};