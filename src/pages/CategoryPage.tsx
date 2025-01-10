import { useParams, useNavigate } from "react-router-dom";
import { kubernetesData } from "@/data/kubernetes";
import { Card } from "@/components/ui/card";

const CategoryPage = () => {
  const { categoryName } = useParams();
  const navigate = useNavigate();
  
  const category = kubernetesData.find(
    (cat) => cat.name.toLowerCase() === categoryName?.toLowerCase()
  );

  if (!category) {
    return (
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-2xl font-bold">Category not found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen gradient-bg">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-4xl">{category.icon}</span>
            <h1 className="text-3xl font-bold">{category.name}</h1>
          </div>
          <p className="text-xl text-muted-foreground">
            {category.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {category.topics.map((topic) => (
            <Card
              key={topic.name}
              className="p-6 cursor-pointer hover:scale-105 transition-transform duration-300 animate-fade-in"
              onClick={() => navigate(`/category/${categoryName}/topic/${encodeURIComponent(topic.name.toLowerCase())}`)}
            >
              <h3 className="text-xl font-semibold mb-3">{topic.name}</h3>
              <p className="text-muted-foreground">{topic.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;