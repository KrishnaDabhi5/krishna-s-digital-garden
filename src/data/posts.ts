export interface Post {
  id: string;
  title: string;
  date: string;
  tags: string[];
  excerpt?: string;
  externalUrl?: string;
  content: string;
  featured?: boolean;
}

export const posts: Post[] = [
  {
    id: "Building ML Models from Scratch",
    title: "Building ML Models from Scratch",
    date: "2025-12-13",
    tags: ["ML", "python", "ml-from-scratch", "model-training", "data-preprocessing"],
    excerpt: "A clear, step-by-step guide to building machine learning models from scratch using Python, covering data preparation, training, evaluation, and optimization with real-world examples.",
    content: `Machine Learning sounds complex, but when you break it into steps, it becomes clear and manageable.
In this blog, I explain how to build machine learning models from scratch using Python, without hiding behind heavy libraries.

The goal is simple: understand what is happening inside the model.

Step 1: Understanding the Problem

Before writing any code, you must be clear about:

• What problem you are solving (prediction, classification, clustering)

• What input data you have

• What output you expect

Example:

• Predict house prices → Regression

• Detect spam emails → Classification

A clear problem definition saves time later.

Step 2: Data Collection and Loading

Data is the foundation of any ML model.

Typical steps:

• Load data using Python (CSV, Excel, database)

• Inspect rows, columns, and data types

• Check for missing or incorrect values

If data is poor, even the best model will fail.

Step 3: Data Preparation (Most Important Step)

This step decides model quality.

Key tasks:

• Handle missing values (remove or fill)

• Convert categorical data into numbers

• Normalize or scale numerical features

• Split data into training and testing sets

Clean and well-prepared data makes models learn faster and better.

Step 4: Implementing the Model from Scratch

Instead of directly using ready-made models, start with the logic.

Example models you can build from scratch:

• Linear Regression

• Logistic Regression

• K-Nearest Neighbors

Here you manually write:

• Mathematical formula

• Loss function

• Update rules (like gradient descent)

This helps you understand how models actually learn.

Step 5: Model Training

Training means teaching the model using data.

Process:

• Pass input data into the model

• Calculate predictions

• Measure error using a loss function

• Update model parameters to reduce error

This loop runs many times until the model improves.

Step 6: Model Evaluation

After training, you must test performance.

Common evaluation metrics:

• Accuracy (for classification)

• Mean Squared Error (for regression)

• Precision and Recall (for imbalanced data)

Never evaluate on training data only.
Always test on unseen data.

Step 7: Optimization and Improvement

Initial results are rarely perfect.

Ways to improve:

• Tune learning rate

• Increase training iterations

• Select better features

• Reduce overfitting

Optimization is about balancing performance and simplicity.

Step 8: Real-World Example

A simple real-world flow:

1. Load dataset

2. Clean and preprocess data

3. Build model logic

4. Train the model

5. Evaluate results

6. Optimize parameters

This is the same process used in real industry projects.

Final Thoughts

• Building ML models from scratch:

• Strengthens core understanding

• Removes dependency on black-box libraries

• Makes debugging easier

• Prepares you for advanced models later

If you truly want to master Machine Learning, start from scratch first—then scale up.`,
  },
  {
    id: "AI in Real Life: How Artificial Intelligence Is Solving Everyday Problems",
    title: "AI in Real Life: How Artificial Intelligence Is Solving Everyday Problems",
    date: "2025-10-14",
    tags: ["AI", "AI in Business", "AI Applications", "Technology", "Future of AI", "Automation"],
    excerpt: "Artificial Intelligence is no longer just a future idea. It is already changing how we work, build products, and solve real-world problems. This blog explains AI in simple terms, its key types, and how it is used in everyday life and business.",
    content: `Artificial Intelligence (AI) is no longer a future concept. It is already part of our daily life. From mobile apps to business systems, AI is helping people work faster, make better decisions, and solve real problems.

This blog explains AI in simple words, with clear examples you can easily understand.

What Is Artificial Intelligence?

Artificial Intelligence means building systems that can think, learn, and make decisions like humans.
Instead of following fixed rules, AI learns from data and improves over time.

In simple terms:

• Data goes in

• Model learns patterns

• AI gives predictions or decisions

Common Types of AI

1. Machine Learning (ML)
AI learns from past data to predict future outcomes.
Example: spam email detection, price prediction.

2. Deep Learning (DL)
Uses neural networks to handle complex data like images, audio, and text.
Example: face recognition, speech-to-text.

3. Natural Language Processing (NLP)
Helps machines understand human language.
Example: chatbots, review analysis, sentiment detection.

Real-World Uses of AI

AI is already active in many industries:

• Healthcare: disease prediction, medical image analysis

• Business: customer insights, sales forecasting

• Marketing: personalized ads, content recommendation

• Restaurants & Retail: review analysis, demand prediction

• Finance: fraud detection, credit scoring

These systems save time, reduce errors, and improve accuracy.

Why AI Is Important Today

• Handles large data easily

• Automates repetitive work

• Improves decision-making

• Scales business operations

• Reduces manual effort

AI gives a strong competitive advantage when used correctly.

Skills Needed to Work With AI

If you want to build AI systems, focus on:

• Python programming

• Data analysis

• Machine learning basics

• Model training and evaluation

• Real-world problem solving

Tools change, but core concepts remain the same.

Final Thoughts

AI is not about replacing humans.
It is about assisting humans with smarter tools.

Those who understand AI today will lead tomorrow’s technology-driven world.`,
  },
  {
    id: "YOLOv8 Model Review: A Simple and Practical Overview",
    title: "YOLOv8 Model Review: A Simple and Practical Overview",
    date: "2025-12-13",
    excerpt: "YOLOv8 is a fast and accurate computer vision model used for real-time object detection and image analysis. This review explains what YOLOv8 is, its key features, strengths, limitations, and why it is a strong choice for modern AI and production-level computer vision systems.",
    tags: ["ML","Computer Vision","YOLOv8","Model Review","Deep Learning"],
    content: `What is YOLOv8?

YOLOv8 is a modern computer vision model developed by Ultralytics.
It is used for object detection, image classification, instance segmentation, and pose estimation.
YOLO stands for You Only Look Once, meaning it detects objects in a single pass, making it very fast.

Why YOLOv8 is Popular

• High accuracy

• Real-time performance

• Easy to train and deploy

• Works well on small and large datasets

It is widely used in traffic analysis, surveillance, retail analytics, medical imaging, and automation systems.

Key Features

• Anchor-free detection – simpler and more accurate bounding boxes

• Improved backbone & head – better feature extraction

• Lightweight models – runs on low-end GPUs and edge devices

• Unified framework – detection, segmentation, and classification in one library

Model Variants

• YOLOv8 comes in different sizes based on speed and accuracy needs:

• YOLOv8n (nano) – very fast, low resource

• YOLOv8s (small) – balanced

• YOLOv8m (medium) – higher accuracy

• YOLOv8l / YOLOv8x – best accuracy, higher compute

Training Experience

Training YOLOv8 is simple:

• Supports custom datasets

• Clear configuration

• Strong default hyperparameters

• Fast convergence
Even beginners can train a model with few commands

Performance Review

1. Pros

• Excellent speed–accuracy tradeoff

• Stable results on real-world data

• Good documentation and community support

2. Cons

• Large models need strong GPUs

• Fine-tuning is required for complex edge cases

Real-World Use Cases

• Traffic vehicle detection

• Face and person detection

• Industrial defect detection

• Smart city surveillance

• Retail footfall analysis

Final Verdict

YOLOv8 is one of the best AI models for real-time computer vision tasks today.
If you want speed, accuracy, and easy deployment, YOLOv8 is a strong choice for both research and production.

Rating: 9/10
Best for: Developers, AI engineers, startups, and production systems`,
  },
  {
    id: "medium-a531a0a766ac",
    title: "Deep Learning Architectures Explained: CNN, RNN, Transformers",
    date: "2026-01-09",
    excerpt: "A simple, practical explanation of CNNs, RNNs, and Transformers — what they are, how they work, and where to use them.",
    tags: ["Medium", "Deep Learning", "Architecture", "cnn", "rnn", "transformers"],
    externalUrl: "https://medium.com/@krishnadabhi59/deep-learning-architectures-explained-cnn-rnn-transformers-a531a0a766ac",
    content: "",
  },
  {
    id: "medium-da66f2ceb24c",
    title: "Top 10 AI Tools Every Beginner Should Use (With Real Use-Cases)",
    date: "2025-11-18",
    excerpt: "A curated list of 10 AI tools beginners can use in 2025 to learn faster, build faster, and execute faster — with real use-cases.",
    tags: ["Medium", "AI", "ai-tools"],
    externalUrl: "https://medium.com/@krishnadabhi59/top-10-ai-tools-every-beginner-should-use-with-real-use-cases-da66f2ceb24c",
    content: "",
  },
  {
    id: "medium-2348217d381d",
    title: "The Inner Workings of Python — What Really Happens When You Run Your Code",
    date: "2025-11-06",
    excerpt: "A behind-the-scenes look at how Python executes your code — from .py to bytecode, and the role of the Python Virtual Machine.",
    tags: ["Medium", "python"],
    externalUrl: "https://medium.com/@krishnadabhi59/the-inner-workings-of-python-what-really-happens-when-you-run-your-code-2348217d381d",
    content: "",
  },
  {
    id: "medium-fa7392dc0dcd",
    title: "How I Stopped Drowning in “Little Tasks” (Thanks to viaSocket)",
    date: "2025-09-13",
    excerpt: "A practical story about automating repetitive glue-work between apps using viaSocket — and getting back calm focus.",
    tags: ["Medium", "automation", "workflow-automation", "automationssystem"],
    externalUrl: "https://medium.com/@krishnadabhi59/how-i-stopped-drowning-in-little-tasks-thanks-to-viasocket-fa7392dc0dcd",
    content: "",
  },
  {
    id: "medium-a544419b36f9",
    title: "Let’s talk about NLP",
    date: "2025-08-05",
    excerpt: "An introduction to Natural Language Processing (NLP), common applications, tasks, and approaches — in simple terms.",
    tags: ["Medium", "AI", "nlp"],
    externalUrl: "https://medium.com/@krishnadabhi59/lets-talk-about-nlp-a544419b36f9",
    content: "",
  },
];

export const allTags = ["All", "Medium", "AI", "ML", "Model Review", "Deep Learning", "Architecture"];
