export interface Question {
  type: 'MCQ' | 'Text';
  question: string;
  options?: string[];
  correctAnswer?: number;
  answer?: string;
}

export interface Topic {
  name: string;
  description: string;
  questions: Question[];
}

export interface Category {
  name: string;
  description: string;
  icon: string;
  topics: Topic[];
}

export const kubernetesData: Category[] = [
  {
    name: "Beginner",
    description: "Start your Kubernetes journey with fundamental concepts and basic operations",
    icon: "🚀",
    topics: [
      {
        name: "Kubernetes Basics",
        description: "Learn the core concepts of Kubernetes",
        questions: [
          {
            type: "MCQ",
            question: "What is Kubernetes primarily used for?",
            options: [
              "Container Orchestration",
              "Web Hosting",
              "Version Control",
              "Cloud Storage"
            ],
            correctAnswer: 0
          },
          {
            type: "Text",
            question: "What is a Kubernetes Pod?",
            answer: "A Pod is the smallest deployable unit in Kubernetes that can contain one or more containers. It represents a single instance of a running process in your cluster."
          }
        ]
      }
    ]
  },
  {
    name: "Intermediate",
    description: "Dive deeper into Kubernetes with advanced concepts and real-world scenarios",
    icon: "⚡",
    topics: [
      {
        name: "GitOps Practices",
        description: "Understanding GitOps workflow with Kubernetes",
        questions: [
          {
            type: "MCQ",
            question: "Which tool is commonly used for GitOps in Kubernetes?",
            options: [
              "Terraform",
              "ArgoCD",
              "Ansible",
              "Docker"
            ],
            correctAnswer: 1
          }
        ]
      }
    ]
  },
  {
    name: "Advanced",
    description: "Master complex Kubernetes concepts and enterprise-level implementations",
    icon: "🎯",
    topics: [
      {
        name: "Service Mesh",
        description: "Advanced networking and service communication",
        questions: [
          {
            type: "Text",
            question: "What is Istio and how does it enhance Kubernetes?",
            answer: "Istio is a service mesh that adds capabilities like traffic management, security, and observability to Kubernetes clusters without changing application code."
          }
        ]
      }
    ]
  }
];