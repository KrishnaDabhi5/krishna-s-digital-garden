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
    id: "Data Engineering in 2026: What Nobody Told Me When I Started",
    title: "Data Engineering in 2026: What Nobody Told Me When I Started",
    date: "2026-01-23",
    tags: ["Data Engineering", "Opinion", "ETL", "AI", "Freelancing", "Career"],
    excerpt: "Three years of building pipelines, breaking things, and learning what actually matters in modern data engineering. Here is what I have learned working with clients across the US, Canada, and Europe.",
    content: `Data Engineering in 2026: What Nobody Told Me When I Started
I have been building data pipelines since 2022. First as a freelancer, figuring things out client by client. Now as a full-time Data Engineer. And honestly? The field looks nothing like what the YouTube tutorials promised.
Here is what I have actually learned.
 
Everyone's Talking About AI. The Data Is Still Broken.
Every client I have worked with, startups in the US, scale-ups in Europe, has the same problem. They want AI. They want dashboards. They want data-driven decisions.
But their data is sitting in five different places, half of it duplicated, none of it documented.
AI does not fix bad data. It amplifies it.
Before you think about LLMs or ML models, someone has to do the unglamorous work. Cleaning sources, building reliable ingestion pipelines, defining what a customer or an order actually means in your database. That is still the most valuable thing a data engineer does in 2026.
 
The Modern Stack Is Genuinely Good Now
I will give the ecosystem credit. The tooling has gotten really good.
dbt has become the standard for transformation logic and it deserves it. Airflow is still everywhere but people are quietly moving to Prefect and Dagster for simpler orchestration. DuckDB changed how I think about local development. Cloud warehouses like BigQuery and Snowflake have gotten fast enough that a lot of optimization conversations from three years ago are just irrelevant now.
The stack matured. The problem is that most companies are still on the stack from five years ago.
 
Automation Is Eating the Junior Work. Not the Thinking.
People love to say AI will replace data engineers. I disagree, but with a caveat.
AI is absolutely eating the boilerplate. Writing basic SQL transformations, generating schema docs, scaffolding pipeline code. These are tasks I now do in minutes with the right tools. I have built systems using the Claude API that qualify and score leads automatically. I have automated ETL workflows that used to take hours of manual wrangling.
But the thinking, understanding what the business actually needs, why the numbers do not match, which data source to trust, that is not automated. That is the work that matters.
The engineers who will struggle are the ones who only knew how to write the boilerplate.
 
Freelancing Taught Me What No Job Could
Three years of working with international clients taught me something university did not. Data problems are business problems in disguise.
A client in Canada did not need a better pipeline. They needed to stop losing revenue because their sales and product data never talked to each other. A startup in Europe did not need a dashboard. They needed someone to tell them which of their metrics were vanity and which actually predicted growth.
Technical skills got me in the room. Understanding the business kept me there.
 
What I Would Tell Myself Starting Out
• Learn SQL deeply before anything else. Seriously.
• Pick one orchestration tool and build something real with it.
• Document everything. Future you will be grateful.
• The fanciest architecture is useless if nobody trusts the numbers.
• Talk to the people who use the data, not just the people who request it.
 
Final Thoughts
Data engineering in 2026 is more exciting than ever, and more cluttered with hype than ever. The fundamentals still win. Clean data, reliable pipelines, clear documentation, and someone who understands why it all matters.
That is still the job. And I still love it.`,
  },
  {
    id: "ETL Pipeline Best Practices: Lessons From Building Real Pipelines",
    title: "ETL Pipeline Best Practices: Lessons From Building Real Pipelines",
    date: "2026-05-20",
    tags: ["ETL", "Data Engineering", "Python", "Best Practices", "Pipelines"],
    excerpt: "ETL sounds simple until you are three weeks in and your pipeline keeps silently dropping rows. Here are the lessons I learned the hard way building production pipelines for real clients.",
    content: `ETL Pipeline Best Practices: Lessons From Building Real Pipelines
ETL sounds simple on paper. Extract data from somewhere. Transform it. Load it somewhere else. Done.
Then you build your first real pipeline and nothing works the way you expected.
Here is what I have learned after building ETL systems for clients across the US, Canada, and Europe.
 
Never Trust the Source Data
This is rule number one. Always.
I have worked with APIs that returned null where they promised a string. Databases with duplicate primary keys. CSV exports with inconsistent date formats across the same column.
Your first transformation step should always be validation. Check types. Check nulls. Check ranges. Log everything that looks wrong before you touch it.
Silent data corruption is the worst kind. Your pipeline succeeds, your dashboard looks fine, and the numbers are quietly wrong.
 
Idempotency Is Not Optional
Every pipeline you build should be safe to run twice.
If a job fails halfway and you rerun it, you should get the same result without duplicating or corrupting data. This means using upserts instead of inserts, tracking watermarks for incremental loads, and never assuming a job completed just because it did not throw an error.
I learned this the hard way when a client's sales data got doubled after a retry. Not a fun conversation.
 
Log Everything. Monitor More.
A pipeline that runs without alerts is not a healthy pipeline. It is an unmonitored one.
Log row counts at every stage. Log how long each step takes. Set alerts for when a source returns zero rows, because zero rows is almost never correct and almost never raises an exception.
Good observability has saved me from client escalations more times than I can count.
 
Modular Beats Monolithic Every Time
When I started, I wrote pipelines as single long scripts. Extract, transform, and load all in one file.
The moment requirements changed, which they always do, the whole thing needed rewriting.
Now I split every pipeline into clear stages. Each stage has one job. Each stage can be tested independently. When something breaks, I know exactly where to look.
dbt enforces this naturally for transformations. For orchestration, Prefect and Dagster make modularity the default.
 
Keep Business Logic Out of SQL When You Can
SQL is great for querying. It is terrible for version control, testing, and collaboration when it holds all your business logic.
Move complex transformations into dbt models or Python where you can write unit tests, add documentation, and track changes in Git.
Your future self and your clients will thank you.
 
Final Thoughts
Good ETL is boring in the best way. It runs on schedule, loads clean data, and nobody has to think about it.
Getting there takes discipline. Validate early. Build idempotent jobs. Monitor obsessively. Keep things modular.
The pipeline nobody talks about is the one doing its job perfectly.`,
  },
  {
    id: "My Freelance Journey: What Three Years of Working With International Clients Taught Me",
    title: "My Freelance Journey: What Three Years of Working With International Clients Taught Me",
    date: "2026-04-15",
    tags: ["Freelancing", "Career", "AI Engineering", "Personal", "Btechkers"],
    excerpt: "I started freelancing as a second-year engineering student with no portfolio and one project. Three years and clients across three continents later, here is everything I wish I had known on day one.",
    content: `My Freelance Journey: What Three Years of Working With International Clients Taught Me
I started freelancing in 2022. I was a second-year B.Tech student in Surat with no real portfolio, no network, and a lot of confidence I had not yet earned.
Three years later I have worked with startups and businesses across the US, Canada, and Europe. I built Btechkers as the vehicle for this work. And I learned more in those three years than I could have in a decade of classroom education.
Here is what I wish someone had told me at the start.
 
Your First Client Does Not Need to Be Perfect
I spent weeks trying to find the perfect first project. Good budget, interesting problem, clear scope.
That does not exist for someone with no track record.
Take the small project. Do it exceptionally well. That client becomes your first testimonial, your first referral, and your first proof that you can deliver. Everything compounds from there.
 
Scope Creep Will Eat You Alive If You Let It
My biggest early mistakes were all about scope. A client would ask for one thing, I would deliver it, then they would ask for one more thing, and then another. Before I knew it I had tripled the work for the same price.
Now every project starts with a written scope document. Not a long one. Just clear. What is included, what is not, and what happens if requirements change.
Clients who push back on this are telling you something important about how the project will go.
 
Time Zones Are a Skill
Working with US and European clients from India means your mornings are their previous evening and your evenings are their morning. Async communication becomes your superpower.
Write updates that do not need a reply to move forward. Document decisions immediately after calls. Never leave a conversation with unclear next steps.
The clients who trusted me most were the ones who always knew exactly where things stood, even when we had not spoken in two days.
 
Charge for Outcomes, Not Hours
Early on I charged by the hour. Every client wanted to know how long things would take and I spent more time estimating than building.
Switching to project-based pricing changed everything. The client knows their total cost upfront. I have an incentive to work efficiently. And the conversation moves from time to value.
What is this automation worth to your business? That is the right question to be answering.
 
Specialization Gets You Better Clients
When I called myself a general developer I attracted general work at general rates.
When I started positioning around AI engineering, ETL pipelines, and data solutions for international businesses, the quality of enquiries changed completely. Clients came with specific problems that matched my skills. Proposals became easier. Rates improved.
Being known for something specific is more valuable than being available for anything.
 
Final Thoughts
Freelancing is not passive income or easy money. It is running a business, managing clients, delivering quality, and constantly learning, all at the same time.
But the autonomy, the variety of problems, and the direct connection between your skill and your income make it unlike anything else.
Three years in, I am still learning. But I would not trade it.`,
  },
  {
    id: "Python for Data Engineers: The Only Guide You Actually Need",
    title: "Python for Data Engineers: The Only Guide You Actually Need",
    date: "2026-03-10",
    tags: ["Python", "Data Engineering", "ETL", "Pandas", "Beginner", "Career"],
    excerpt: "Python is the language of data engineering. But most tutorials teach you Python the wrong way for this job. Here is exactly what you need to learn and what you can safely skip.",
    content: `Python for Data Engineers: The Only Guide You Actually Need
Every data engineering job description lists Python. Every tutorial teaches you Python for web development or data science. And most of that knowledge does not transfer cleanly to building pipelines.
Here is what you actually need to know as a data engineer.
 
Start With the Fundamentals, But Only These Ones
You do not need to master all of Python. You need to master the parts that show up in data work every single day.
• Data types: strings, integers, floats, booleans, lists, dictionaries, tuples
• Control flow: loops, conditionals, list comprehensions
• Functions: writing clean reusable functions with clear inputs and outputs
• Error handling: try and except blocks, because pipelines fail and you need to handle it gracefully
• File I/O: reading and writing CSV, JSON, and Parquet files
If you are solid on these, you can build real things.
 
Pandas Is Your Most Important Library
Pandas is how you work with tabular data in Python. You will use it constantly.
Learn how to read data from CSV, Excel, and databases. Learn how to filter rows, select columns, and handle missing values. Learn groupby and merge because most real transformations involve aggregation and joining.
Do not try to memorize everything. Learn the concepts and look up the syntax when you need it.
 
SQLAlchemy and Database Connections
Data engineers move data between systems. That means connecting to databases.
SQLAlchemy is the standard Python library for this. Learn how to create a connection string, read a table into a dataframe, and write a dataframe back to a database table.
Once you understand this pattern, connecting to Postgres, MySQL, BigQuery, or Snowflake is just a different connection string.
 
Working With APIs
A huge amount of data engineering involves pulling data from third-party APIs. REST APIs, webhooks, streaming endpoints.
Learn the requests library. Understand how to handle pagination, authentication headers, and rate limits. Learn how to parse JSON responses into dataframes.
Most data you will ever extract from the web comes through an API.
 
Environment Management and Project Structure
This is the part tutorials always skip and it is the part that makes you look professional.
Use virtual environments for every project. Keep your dependencies in a requirements.txt file. Store secrets in environment variables, never hardcoded in your scripts. Structure your project with clear folders for source code, configuration, and tests.
These habits separate someone writing scripts from someone building systems.
 
What You Can Skip for Now
• Advanced object-oriented programming
• Web frameworks like Flask or Django
• Async programming
• Machine learning libraries like scikit-learn or PyTorch
These are useful eventually but they will not make you a better data engineer in your first two years.
 
Final Thoughts
Python for data engineering is not about knowing everything. It is about knowing the right things deeply.
Fundamentals, Pandas, database connections, API calls, and clean project structure will take you further than any advanced framework.
Build something real with each concept you learn. That is the only way it sticks.`,
  },
  {
    id: "Power BI in 2026: Why It Is Still the Best Tool for Business Dashboards",
    title: "Power BI in 2026: Why It Is Still the Best Tool for Business Dashboards",
    date: "2026-02-18",
    tags: ["Power BI", "Data Visualization", "Business Intelligence", "Dashboards", "Analytics"],
    excerpt: "Everyone is talking about AI-powered analytics tools. But after building dashboards for clients across three continents, I keep coming back to Power BI. Here is why it still wins.",
    content: `Power BI in 2026: Why It Is Still the Best Tool for Business Dashboards
Every few months a new analytics tool launches promising to replace dashboards with AI. Ask your data a question in plain English and get an instant answer.
It is impressive in demos. It rarely solves the real problem.
After building reporting solutions for clients in the US, Canada, and Europe, I keep coming back to Power BI. Here is why.
 
The Business User Actually Uses It
The best dashboard is the one people open every morning.
Power BI sits inside Microsoft 365, which is where most businesses already live. It connects to Excel files, SharePoint lists, Teams channels, and Azure data sources without any setup from the user.
When your dashboard is one click away inside Teams, adoption is not a problem. When it is a separate tool with a separate login, it becomes optional. And optional means ignored.
 
DAX Is Painful Until It Is Powerful
I will be honest. DAX, the formula language in Power BI, is confusing at first. The syntax is unlike SQL or Python and the mental model takes time to build.
But once it clicks, you can build calculations that would take dozens of SQL lines and express them cleanly inside a measure. Rolling averages, year-over-year comparisons, dynamic ranking, complex filters. DAX handles all of it.
The learning curve is worth it. Every dashboard I build for clients uses DAX measures for the core business logic.
 
DirectQuery Changed the Game for Live Data
For years the knock on Power BI was that it required importing data into a model, which meant stale reports.
DirectQuery mode changed this. Connect directly to your data warehouse and every visual queries live data on load. No scheduled refresh. No data delay.
Combined with a well-modelled Snowflake or BigQuery dataset, you get real-time business intelligence without building a custom reporting layer.
 
The AI Features Are Actually Useful Now
I was skeptical of Power BI's AI features when they first launched. Most felt like gimmicks.
Smart narratives, anomaly detection, and the Q&A visual have genuinely matured. I now use anomaly detection on time series visuals for clients who want to be alerted when a metric behaves unexpectedly. It works quietly and well.
The key is treating these as supplements to a well-designed dashboard, not replacements for one.
 
What Still Frustrates Me
Power BI is not perfect.
The web version still lags behind the desktop app in design capabilities. Custom visuals from the marketplace are inconsistent in quality. And the licensing model is confusing for smaller clients who do not need a full Microsoft 365 plan.
Tableau still beats it on pure visual flexibility. Looker is better for teams with strong SQL skills who want code-first reporting.
But for most business clients who need reliable dashboards connected to their existing data, Power BI is the right choice.
 
Final Thoughts
The best analytics tool is the one that answers the business question, gets used consistently, and does not require a data team to maintain.
For most of the clients I work with, that is Power BI.
The hype around AI-native analytics is real. But until those tools match Power BI on reliability, ecosystem integration, and adoption, I will keep building in Power BI and sleeping well at night.`,
  },
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
