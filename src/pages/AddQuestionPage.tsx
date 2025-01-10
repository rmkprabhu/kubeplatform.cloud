import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { kubernetesData, Question } from "@/data/kubernetes";

const AddQuestionPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [category, setCategory] = useState("");
  const [isNewTopic, setIsNewTopic] = useState(false);
  const [topic, setTopic] = useState("");
  const [newTopicName, setNewTopicName] = useState("");
  const [newTopicDescription, setNewTopicDescription] = useState("");
  const [questionType, setQuestionType] = useState<"MCQ" | "Text">("Text");
  const [questionText, setQuestionText] = useState("");
  const [options, setOptions] = useState(["", "", "", ""]);
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [textAnswer, setTextAnswer] = useState("");

  const handleOptionChange = (index: number, value: string) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real application, this would make an API call to save the question
    toast({
      title: "Question Added",
      description: "The question has been successfully added to the platform.",
    });

    // Reset form
    setQuestionText("");
    setOptions(["", "", "", ""]);
    setCorrectAnswer(0);
    setTextAnswer("");
  };

  return (
    <div className="min-h-screen gradient-bg">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-2xl font-bold mb-6">Add New Question</h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div>
                <Label>Category</Label>
                <Select value={category} onValueChange={(value) => {
                  setCategory(value);
                  setTopic(""); // Reset topic when category changes
                }}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {kubernetesData.map((cat) => (
                      <SelectItem key={cat.name} value={cat.name.toLowerCase()}>
                        {cat.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Label>Topic</Label>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setIsNewTopic(!isNewTopic);
                      setTopic("");
                      setNewTopicName("");
                      setNewTopicDescription("");
                    }}
                  >
                    {isNewTopic ? "Select Existing Topic" : "Add New Topic"}
                  </Button>
                </div>

                {isNewTopic ? (
                  <div className="space-y-4">
                    <div>
                      <Label>New Topic Name</Label>
                      <Input
                        value={newTopicName}
                        onChange={(e) => setNewTopicName(e.target.value)}
                        placeholder="Enter new topic name"
                      />
                    </div>
                    <div>
                      <Label>Topic Description</Label>
                      <Textarea
                        value={newTopicDescription}
                        onChange={(e) => setNewTopicDescription(e.target.value)}
                        placeholder="Enter topic description"
                      />
                    </div>
                  </div>
                ) : (
                  <Select value={topic} onValueChange={setTopic}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select topic" />
                    </SelectTrigger>
                    <SelectContent>
                      {category &&
                        kubernetesData
                          .find((cat) => cat.name.toLowerCase() === category)
                          ?.topics.map((t) => (
                            <SelectItem key={t.name} value={t.name}>
                              {t.name}
                            </SelectItem>
                          ))}
                    </SelectContent>
                  </Select>
                )}
              </div>

              <div>
                <Label>Question Type</Label>
                <Select
                  value={questionType}
                  onValueChange={(value: "MCQ" | "Text") => setQuestionType(value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select question type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="MCQ">Multiple Choice</SelectItem>
                    <SelectItem value="Text">Text Answer</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>Question</Label>
                <Textarea
                  value={questionText}
                  onChange={(e) => setQuestionText(e.target.value)}
                  placeholder="Enter your question"
                  className="min-h-[100px]"
                />
              </div>

              {questionType === "MCQ" ? (
                <>
                  <div className="space-y-4">
                    {options.map((option, index) => (
                      <div key={index}>
                        <Label>Option {index + 1}</Label>
                        <Input
                          value={option}
                          onChange={(e) => handleOptionChange(index, e.target.value)}
                          placeholder={`Enter option ${index + 1}`}
                        />
                      </div>
                    ))}
                    <div>
                      <Label>Correct Answer</Label>
                      <Select
                        value={correctAnswer.toString()}
                        onValueChange={(value) => setCorrectAnswer(parseInt(value))}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select correct answer" />
                        </SelectTrigger>
                        <SelectContent>
                          {options.map((_, index) => (
                            <SelectItem key={index} value={index.toString()}>
                              Option {index + 1}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </>
              ) : (
                <div>
                  <Label>Answer</Label>
                  <Textarea
                    value={textAnswer}
                    onChange={(e) => setTextAnswer(e.target.value)}
                    placeholder="Enter the answer"
                    className="min-h-[100px]"
                  />
                </div>
              )}
            </div>

            <Button type="submit" className="w-full">
              Add Question
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddQuestionPage;