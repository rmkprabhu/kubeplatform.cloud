import { useParams } from "react-router-dom";
import { kubernetesData } from "@/data/kubernetes";
import { QuestionCard } from "@/components/QuestionCard";

const TopicPage = () => {
  const { categoryName, topicName } = useParams();

  const category = kubernetesData.find(
    (cat) => cat.name.toLowerCase() === categoryName?.toLowerCase()
  );

  const topic = category?.topics.find(
    (t) => t.name.toLowerCase() === decodeURIComponent(topicName || "").toLowerCase()
  );

  if (!topic) {
    return (
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-2xl font-bold">Topic not found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen gradient-bg">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-3xl font-bold mb-4">{topic.name}</h1>
          <p className="text-xl text-muted-foreground">
            {topic.description}
          </p>
        </div>

        <div className="space-y-6">
          {topic.questions.map((question, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <QuestionCard question={question} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopicPage;