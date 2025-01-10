import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Topic } from "@/data/kubernetes";
import { QuestionCard } from "./QuestionCard";

interface TopicSectionProps {
  topic: Topic;
}

export const TopicSection = ({ topic }: TopicSectionProps) => {
  return (
    <Accordion type="single" collapsible className="mb-6">
      <AccordionItem value="topic">
        <AccordionTrigger className="text-xl font-semibold">
          {topic.name}
        </AccordionTrigger>
        <AccordionContent>
          <div className="p-4">
            <p className="text-muted-foreground mb-6">{topic.description}</p>
            {topic.questions.map((question, index) => (
              <QuestionCard key={index} question={question} />
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};