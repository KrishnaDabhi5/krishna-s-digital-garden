export interface Post {
  id: string;
  title: string;
  date: string;
  tags: string[];
  excerpt?: string;
  content: string;
  featured?: boolean;
}

export const posts: Post[] = [
  {
    id: "kl-divergence-diffusion",
    title: "Understanding KL Divergence in Diffusion Generative Models and Beyond",
    date: "13 November 2025",
    tags: ["deep-learning", "diffusion", "generative-models"],
    excerpt: "A deep dive into KL divergence and its role in diffusion models.",
    content: `I've been trying to get into rabbit holes of diffusion generative modelling from quite some time. I started drafting this blog few months back but didn't get time to finish it up. This is some raw effort to understand KLD in diffusion generative models from ground up and beyond.

## Introducing DGMs..

DGMs take as input a large collection of real-world examples (e.g., images, text) drawn from an unknown and complex distribution $p_{data}$ and output a trained neural network that parameterizes an approximate distribution $p_{\\phi}$.

Before we can learn from data, we must first decide what "learning" even means.

Consider the fundamental challenge: you observe a finite set of samples— images, sentences or molecular structures drawn from some unknown process. Your task is to build a model that **captures** this process well enough to generate new, plausible samples. But what does "well enough" mean? How do you measure the gap between your model and reality when reality itself is inaccessible, known only through its samples?

This is not merely a practical challenge but an epistemological one. You cannot directly compare your **model's distribution** $p_{\\phi}(x)$ against the true **data distribution** $p_{data}(x)$ because $p_{data}(x)$ exists only as an abstraction.

## The KL Divergence

The Kullback-Leibler divergence, or KL divergence, measures how one probability distribution differs from another:

$$D_{KL}(P \\| Q) = \\sum_{x} P(x) \\log \\frac{P(x)}{Q(x)}$$

This is the foundation for training many generative models.`,
  },
  {
    id: "llama-4-hype",
    title: "Initial thoughts on Llama 4 - Hype?",
    date: "14 April 2025",
    tags: ["AI", "Model Review"],
    excerpt: "Breaking down the Llama 4 release and separating hype from reality.",
    content: `Meta's latest release has generated quite the buzz. Let's break down what's actually new and what's marketing.

## What's New

The architecture improvements are genuine - the attention mechanism updates lead to better long-context performance.

## The Hype

Claims of "10x better reasoning" need to be taken with a grain of salt...`,
  },
  {
    id: "transfer-learning-101",
    title: "Transfer Learning 101",
    date: "14 April 2025",
    tags: ["ML", "Deep Learning"],
    content: `Transfer learning is one of the most powerful techniques in modern machine learning. This guide covers the fundamentals.

## What is Transfer Learning?

Transfer learning is the technique of using a pre-trained model as a starting point for a new task...`,
  },
  {
    id: "generative-modelling-hard",
    title: "Why Generative Modelling is so Hard?",
    date: "28 Feb 2025",
    tags: ["AI", "Deep Learning", "generative-models"],
    excerpt: "A brief overview of generative modelling and its challenges.",
    content: `Generative models are some of the most challenging models to train correctly. Here's why.

## The Distribution Problem

Unlike discriminative models, generative models must learn the entire data distribution...`,
  },
];

export const allTags = ["All", "Medium", "AI", "ML", "Model Review", "Deep Learning", "Architecture"];
