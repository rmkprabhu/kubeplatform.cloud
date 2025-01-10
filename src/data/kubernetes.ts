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
    "name": "Beginner",
    "description": "Start your Kubernetes journey with fundamental concepts and basic operations",
    "icon": "🚀",
    "topics": [
      {
        "name": "Kubernetes Basics",
        "description": "Learn the core concepts of Kubernetes",
        "questions": [
          {
            "type": "MCQ",
            "question": "What is Kubernetes primarily used for?",
            "options": [
              "Container Orchestration",
              "Web Hosting",
              "Version Control",
              "Cloud Storage"
            ],
            "correctAnswer": 0
          },
          {
            "type": "Text",
            "question": "What is a Kubernetes Pod?",
            "answer": "A Pod is the smallest deployable unit in Kubernetes that can contain one or more containers. It represents a single instance of a running process in your cluster. [1]"
          },
          {
            "type": "MCQ",
            "question": "What is the smallest deployable unit in Kubernetes?",
            "options": [
              "Node",
              "Pod",
              "Service",
              "Container"
            ],
            "correctAnswer": 1
          },
          {
            "type": "Text",
            "question": "Explain the difference between a Deployment and a StatefulSet in Kubernetes.",
            "answer": "Deployments are used to manage stateless applications and provide features like rolling updates and scalability. StatefulSets are used to manage stateful applications that require stable network identifiers and persistent storage. [2]"
          },
          {
            "type": "MCQ",
            "question": "What is the purpose of a Kubernetes Service?",
            "options": [
              "To expose Pods to the network",
              "To manage container images",
              "To store application configurations",
              "To monitor cluster health"
            ],
            "correctAnswer": 0
          }
        ]
      },
      {
        "name": "DevOps Fundamentals",
        "description": "Grasp the essentials of DevOps principles and practices.",
        "questions": [
          {
            "type": "Text",
            "question": "What is DevOps?, and how does it differ from traditional software development methodologies?",
            "answer": "DevOps is a cultural and collaborative approach emphasizing communication, integration, and automation between development and operations teams. Unlike traditional methods, it aims to break down silos and promote continuous feedback. [3]"
          },
          {
            "type": "MCQ",
            "question": "Which of the following is NOT a key aspect of DevOps?",
            "options": [
              "Collaboration",
              "Automation",
              "Silos",
              "Continuous Feedback"
            ],
            "correctAnswer": 2
          },
          {
            "type": "Text",
            "question": "Explain the concept of Infrastructure as Code (IaC) and provide examples of popular IaC tools.",
            "answer": "IaC is setting up and managing infrastructure using code or automation. Popular IaC tools include Terraform, AWS CloudFormation, and Ansible. [4]"
          },
          {
            "type": "MCQ",
            "question": "Which of these is a benefit of Infrastructure as Code (IaC)?",
            "options": [
              "Manual infrastructure management",
              "Increased deployment errors",
              "Improved consistency and repeatability",
              "Slower infrastructure provisioning"
            ],
            "correctAnswer": 2
          }
        ]
      }
    ]
  },
  {
    "name": "Intermediate",
    "description": "Dive deeper into Kubernetes with advanced concepts and real-world scenarios",
    "icon": "⚡",
    "topics": [
      {
        "name": "Kubernetes Deployments",
        "description": "Mastering deployment strategies and updates in Kubernetes",
        "questions": [
          {
            "type": "Text",
            "question": "Your team needs to update the version of an application running in Kubernetes without causing any downtime. How would you perform a rolling update?",
            "answer": "Use Kubernetes Deployments to manage the application lifecycle and perform rolling updates. Gradually increase replicas with the new version while decreasing those with the old version, ensuring a smooth transition without impacting availability. [5]"
          },
          {
            "type": "Text",
            "question": "Explain the concept of Kubernetes rolling updates and rollbacks.",
            "answer": "Rolling updates in Kubernetes allow you to update your containerized applications with minimal downtime. This is done by gradually replacing old pods with new pods one after the other. Rollbacks, on the other hand, allow you to revert to the previous version of your deployment in case of issues with the update. [6, 7]"
          },
          {
            "type": "MCQ",
            "question": "What is the main benefit of using rolling updates in Kubernetes?",
            "options": [
              "To introduce significant downtime during updates",
              "To update all Pods simultaneously",
              "To minimize downtime during updates",
              "To avoid updating applications altogether"
            ],
            "correctAnswer": 2
          }
        ]
      },
      {
        "name": "GitOps Practices",
        "description": "Understanding GitOps workflow with Kubernetes",
        "questions": [
          {
            "type": "MCQ",
            "question": "Which tool is commonly used for GitOps in Kubernetes?",
            "options": [
              "Terraform",
              "ArgoCD",
              "Ansible",
              "Docker"
            ],
            "correctAnswer": 1
          },
          {
            "type": "Text",
            "question": "Your organization follows the immutable infrastructure paradigm and wants to ensure that all changes to application deployments are versioned and reproducible. How would you implement immutable infrastructure in Kubernetes?",
            "answer": "Use declarative Kubernetes manifests (YAML files) to define infrastructure configurations and application deployments. Store these manifests in a version control system like Git and implement CI/CD pipelines to automate deployment workflows. This ensures changes are tracked, tested, and auditable, making them easily reproducible. [8]"
          }
        ]
      }
    ]
  },
  {
    "name": "Advanced",
    "description": "Tackle complex Kubernetes challenges with expert-level knowledge",
    "icon": "🔥",
    "topics": [
      {
        "name": "Troubleshooting Kubernetes Errors",
        "description": "Become proficient in diagnosing and resolving common Kubernetes errors.",
        "questions": [
          {
            "type": "Text",
            "question": "What causes the error 'CrashLoopBackOff' in a Kubernetes Pod, and how do you troubleshoot it?",
            "answer": "This error means the Pod starts, crashes, and Kubernetes repeatedly tries to restart it. To troubleshoot: check Pod logs for errors using 'kubectl logs <pod-name>'; describe the Pod with 'kubectl describe pod <pod-name>' to see events and container states; look for common issues like incorrect environment variables, failed dependencies, or misconfigurations in container commands or arguments. [9]"
          },
          {
            "type": "Text",
            "question": "Why might a Kubernetes Pod be stuck in the 'Pending' state, and how do you resolve it?",
            "answer": "A 'Pending' Pod is waiting for resource allocation. Possible causes and resolutions include: insufficient cluster resources (check with 'kubectl describe nodes'); unschedulable node due to Pod affinity or taints (check node taints and Pod affinity rules); missing PersistentVolumes (ensure the required PV exists and is bound to the PVC). [9]"
          },
          {
            "type": "Text",
            "question": "What does the error 'ImagePullBackOff' indicate, and how do you fix it?",
            "answer": "This error means Kubernetes cannot pull the specified container image. Check for: correct image name, tag, and registry URL in the configuration; access to the registry (ensure accessibility and correct credentials); network issues with the registry. [10]"
          }
        ]
      },
      {
        "name": "Terraform for Infrastructure Management",
        "description": "Leverage Terraform to manage and automate your infrastructure efficiently.",
        "questions": [
          {
            "type": "Text",
            "question": "You have existing infrastructure on AWS, and you want to use Terraform to manage it. How would you import these resources into your Terraform configuration?",
            "answer": "Use the 'terraform import' command to import existing resources. Write a dummy configuration file and run the command with the resource type, local name, and instance ID. Terraform updates its state file and starts managing these resources. [11, 12]"
          },
          {
            "type": "Text",
            "question": "You are working with multiple environments (e.g., dev, prod) and want to avoid duplicating code. How would you structure your Terraform configurations to achieve code reusability?",
            "answer": "Leverage Terraform modules for code reusability and maintainability. Modules allow you to write code once and call it multiple times, parameterizing it based on different environments. [13, 14]"
          },
          {
            "type": "Text",
            "question": "Describe a situation where you might need to use the Terraform remote backend, and what are the advantages it offers in state management?",
            "answer": "Use a remote backend to store the Terraform state file in a remote location (like S3, Azure Storage, or HashiCorp Consul) instead of locally. This enables collaboration, state file sharing, and locking, preventing conflicts when multiple users work on the infrastructure. [15, 16]"
          }
        ]
      }
    ]
  }
];
