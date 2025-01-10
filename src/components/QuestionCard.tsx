import { useState } from "react";
import { Card } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Question } from "@/data/kubernetes";

interface QuestionCardProps {
  question: Question;
}

export const QuestionCard = ({ question }: QuestionCardProps) => {
  const [showAnswer, setShowAnswer] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number>();

  return (
    <Card className="p-6 mb-4">
      <h4 className="text-lg font-semibold mb-4">{question.question}</h4>
      
      {question.type === "MCQ" ? (
        <div className="space-y-4">
          <RadioGroup
            value={selectedAnswer?.toString()}
            onValueChange={(value) => setSelectedAnswer(parseInt(value))}
          >
            {question.options?.map((option, index) => (
              <div key={index} className="flex items-center space-x-2">
                <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                <Label htmlFor={`option-${index}`}>{option}</Label>
              </div>
            ))}
          </RadioGroup>
          
          {selectedAnswer !== undefined && (
            <div className={`mt-4 p-4 rounded-md ${
              selectedAnswer === question.correctAnswer 
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}>
              {selectedAnswer === question.correctAnswer 
                ? "Correct!" 
                : `Incorrect. The correct answer is: ${question.options?.[question.correctAnswer || 0]}`}
            </div>
          )}
        </div>
      ) : (
        <div>
          <Button 
            variant="outline"
            onClick={() => setShowAnswer(!showAnswer)}
          >
            {showAnswer ? "Hide Answer" : "Show Answer"}
          </Button>
          
          {showAnswer && (
            <div className="mt-4 p-4 bg-muted rounded-md">
              {question.answer}
            </div>
          )}
        </div>
      )}
    </Card>
  );
};