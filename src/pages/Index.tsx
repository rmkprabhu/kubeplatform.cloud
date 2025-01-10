import { CategoryCard } from "@/components/CategoryCard";
import { kubernetesData } from "@/data/kubernetes";

const Index = () => {
  return (
    <div className="min-h-screen gradient-bg">
      <nav className="border-b border-muted/20">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className="text-2xl">⎈</span>
            <h1 className="text-xl font-bold">KubePlatform</h1>
          </div>
          <div className="flex items-center space-x-4">
            <a href="/" className="text-sm hover:text-primary transition-colors">Home</a>
            <a href="/add-question" className="px-4 py-2 bg-primary rounded-full text-sm font-medium hover:bg-primary/90 transition-colors">
              Admin
            </a>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-24">
        <div className="text-center mb-20 animate-float">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            KubePlatform.tech
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Master DevOps with our comprehensive interview preparation platform
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <CategoryCard
            name="Beginner"
            description="Start your DevOps journey with fundamental concepts"
            icon="👨‍🎓"
            className="gradient-card-beginner"
          />
          <CategoryCard
            name="Intermediate"
            description="Level up with advanced concepts and real-world scenarios"
            icon="⚡"
            className="gradient-card-intermediate"
          />
          <CategoryCard
            name="Advanced"
            description="Master complex architectures and expert-level topics"
            icon="🧠"
            className="gradient-card-advanced"
          />
        </div>
      </div>
    </div>
  );
};

export default Index;