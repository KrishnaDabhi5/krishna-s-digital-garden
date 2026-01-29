export interface Project {
  id: string;
  title: string;
  description: string;
  problem: string;
  approach: string;
  result: string;
  techStack: string[];
  githubUrl?: string;
  demoUrl?: string;
}

export const projects: Project[] = [
  {
    id: "Review Generator",
    title: "Google Review Generator",
    description: "An AI-powered system that generates natural, human-like Google reviews based on business type, service quality, and user input to improve online presence.",
    problem: "Many small businesses struggle to get consistent, well-written Google reviews, which directly affects trust, visibility, and customer conversion.",
    approach: "Collected and trained on 10,000+ restaurant reviews using NLP techniques. Built a custom ML text-generation model that learns review structure, tone, and sentiment without using any external LLM APIs.",
    result: "Generated high-quality, non-repetitive reviews that improved engagement and reduced manual review writing time by over 80%.",
    techStack: ["Python", "NLP", "FastAPI", "Machine Learning", "Sklearn"],
    githubUrl: "https://github.com/KrishnaDabhi5/review-generator.git",
    demoUrl: "https://review-generator-production-e204.up.railway.app/",
  },
  {
    id: "traffic-sign-detection",
    title: "Object Detection of Traffic Signs",
    description: "A complete traffic sign object detection project using YOLOv8 and the German Traffic Sign Recognition Benchmark (GTSRB) dataset.",
    problem: "Traffic sign detection is critical for autonomous vehicles and driver assistance systems.",
    approach: "Implemented YOLOv8 architecture with CNN feature extraction and transfer learning.",
    result: "Achieved 94% detection accuracy on test set with real-time inference capabilities.",
    techStack: ["Python", "PyTorch", "OpenCV", "CNN", "NumPy"],
    githubUrl: "https://github.com/KrishnaDabhi5/object-detection-of-traffic-sign-",
    demoUrl: "https://object-detection-traffic.streamlit.app/",
  },
  {
    id: "music-recommendation",
    title: "Music Recommendation System",
    description: "Created a hybrid recommender using content-based and collaborative filtering to personalize music suggestions.",
    problem: "Users need personalized music recommendations based on their listening habits and preferences.",
    approach: "Combined cosine similarity for content-based filtering with user profiling for collaborative recommendations.",
    result: "Improved recommendation relevance by 40% compared to baseline system.",
    techStack: ["Python", "Pandas", "Scikit-learn"],
    githubUrl: "https://github.com/KrishnaDabhi5/music-recommendation-system-",
    demoUrl: "https://8vvuxebonapgrqbjdjd96p.streamlit.app/",
  },
  {
    id: "spotify-dashboard",
    title: "Spotify Dashboard (Power BI)",
    description: "Designed an interactive Power BI dashboard analyzing Spotify trends and listener behavior.",
    problem: "Need visual insights into music trends, artist popularity, and listener preferences.",
    approach: "Created dynamic dashboards with DAX calculations and time-based analytics.",
    result: "Enabled stakeholders to identify top performers and track trends in real-time.",
    techStack: ["Power BI", "DAX", "Data Visualization"],
    githubUrl: "https://github.com/KrishnaDabhi5/Spotify-Dashboard-",
    demoUrl: "https://drive.google.com/file/d/12Ybjga0S62DTmaMy-9RAK_UvhnFvYox6/view",
  },
  {
    id: "dsa-chatbot",
    title: "DSA Instructor Chatbot",
    description: "Developed an AI chatbot that helps students learn Data Structures & Algorithms interactively.",
    problem: "Students need personalized guidance and interactive practice for learning DSA concepts.",
    approach: "Integrated Google Gemini API for intelligent query handling with topic recommendations.",
    result: "Helped so many students with 95% satisfaction rate in beta testing.",
    techStack: ["Python", "NLP", "Google Gemini", "Streamlit"],
    githubUrl: "https://github.com/KrishnaDabhi5/DSA-instructor.git",
    demoUrl: "https://dsa-instructor-vvlobvgfo4vfkxowraieay.streamlit.app/",
  },
  {
    id: "job-hunt-automation",
    title: "Job Hunt Automation (n8n)",
    description: "Automated job search workflow using n8n - filters jobs based on skills, location, and sends updates via Telegram.",
    problem: "Manual job searching is time-consuming and error-prone.",
    approach: "Built automated workflow with n8n, integrated Airtable for data storage and Telegram for notifications.",
    result: "Reduced manual effort by 90% and automated 500+ job postings monthly.",
    techStack: ["n8n", "Airtable", "Automation", "APIs"],
    githubUrl: "https://github.com/KrishnaDabhi5/Job-hunt",
    demoUrl: "https://data459.app.n8n.cloud/workflow/owILLsypt6vS9u5w",
  },
];
