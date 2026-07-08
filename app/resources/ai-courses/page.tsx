import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'AI Learning Hub & Strategy Diagnostics | Richard Ewing',
    description: 'AI Learning Hub provides deterministic data for enterprise teams. Audit your R&D capital and block shadow AI exfiltration.',
    keywords: [
        'free AI courses 2026', 'Anthropic courses', 'Claude courses', 'Anthropic Academy',
        'AI fluency course', 'MCP course', 'Claude API course', 'free AI training',
        'AI courses for leaders', 'AI courses for developers', 'Claude Code course',
        'AI governance training', 'Richard Ewing AI courses', 'Stanford AI course',
        'Google AI essentials', 'Microsoft AI course', 'MIT AI course',
    ],
    alternates: { canonical: 'https://www.richardewing.io/resources/ai-courses' },
    openGraph: {
        title: 'AI Learning Hub — 50+ Curated Courses & Resources',
        description: 'The most comprehensive free AI learning hub. 50+ courses curated for leaders, builders, and architects.',
        url: 'https://www.richardewing.io/resources/ai-courses',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'AI Learning Hub — 50+ Curated Resources | Richard Ewing',
        description: '50+ free AI courses curated for technology leaders and developers.',
    },
};

const tracks = [
    {
        id: 'leaders',
        label: 'For Leaders & Executives',
        icon: '🎯',
        color: 'cyan',
        borderColor: 'border-cyan-500/30',
        bgColor: 'bg-cyan-500/10',
        textColor: 'text-cyan-900 font-extrabold font-semibold',
        description: 'Build AI fluency for strategic decision-making. No coding required.',
        courses: [
            { name: 'Claude 101', url: 'https://anthropic.skilljar.com/claude-101', provider: 'Anthropic', description: 'Learn how to use Claude for everyday work tasks and explore resources for advanced learning.', editorial: 'Start here. Every technology leader should understand what Claude can and cannot do before making procurement or build decisions.' },
            { name: 'AI Fluency: Framework & Foundations', url: 'https://anthropic.skilljar.com/ai-fluency-framework-foundations', provider: 'Anthropic', description: 'Learn to collaborate with AI systems effectively, efficiently, ethically, and safely.', editorial: 'The best single course for board directors and C-suite executives. Covers the ethical and safety considerations that matter in governance conversations.' },
            { name: 'Introduction to Claude Cowork', url: 'https://anthropic.skilljar.com/introduction-to-claude-cowork', provider: 'Anthropic', description: 'Learn to work alongside Claude on your real files and projects with the Cowork task loop.', editorial: 'Hands-on course for leaders who want to use Claude as a daily productivity tool — not just understand it theoretically.' },
            { name: 'Google AI Essentials', url: 'https://grow.google/ai-essentials/', provider: 'Google', description: 'Learn how to use AI to boost productivity, from writing prompts to using AI tools for data analysis and content creation.', editorial: 'Google\'s entry-level AI course. Excellent complement to Anthropic\'s offering — gives you vocabulary from both major ecosystems.' },
            { name: 'AI for Everyone', url: 'https://www.deeplearning.ai/courses/ai-for-everyone/', provider: 'DeepLearning.AI', description: 'Andrew Ng\'s famous non-technical course explaining what AI can and cannot do, covering strategy and social impact.', editorial: 'The foundational course that started it all. Still the best for building executive-level AI intuition without any technical background.' },
            { name: 'AI Transformation Playbook', url: 'https://landing.ai/ai-transformation-playbook/', provider: 'Landing AI', description: 'Andrew Ng\'s guide on how to lead an AI transformation in your organization.', editorial: 'Read this before hiring your first ML engineer. It prevents the most common and expensive mistakes in AI adoption.' },
            { name: 'Elements of AI', url: 'https://www.elementsofai.com/', provider: 'University of Helsinki', description: 'A free online course for everyone interested in learning what AI is and how it will affect our lives — 750K+ students enrolled.', editorial: 'The most-enrolled AI course in history. Great for board members who want a rigorous but accessible foundation.' },
        ],
    },
    {
        id: 'builders',
        label: 'For Builders & Developers',
        icon: '🛠️',
        color: 'purple',
        borderColor: 'border-purple-500/30',
        bgColor: 'bg-purple-500/10',
        textColor: 'text-purple-900 font-extrabold font-semibold',
        description: 'Integrate AI into your development workflow. Ship AI-powered features.',
        courses: [
            { name: 'AI Practitioner Certification Pass', url: '/api/buy/practitioner_certification', provider: 'Richard Ewing', description: 'Complete practitioner access to all AI economics, systems mapping, and model arbitrage curriculum modules.', editorial: 'If you are shipping AI features, you must understand their unit economics before deployment. My flagship course designed specifically for engineers.' },
            { name: 'Building with the Claude API', url: 'https://anthropic.skilljar.com/claude-with-the-anthropic-api', provider: 'Anthropic', description: 'Comprehensive course covering API requests, prompt design, and integrating Claude with external services.', editorial: 'Essential for any developer building AI features. Pair this with my AUEB calculator to validate your unit economics before you ship.' },
            { name: 'Claude Code in Action', url: 'https://anthropic.skilljar.com/claude-code-in-action', provider: 'Anthropic', description: 'Integrate Claude Code into your development workflow — read files, run commands, edit code, and automate tasks.', editorial: 'The practical "get things done" course. If your team uses Claude Code, this is required training.' },
            { name: 'Introduction to Agent Skills', url: 'https://anthropic.skilljar.com/introduction-to-agent-skills', provider: 'Anthropic', description: 'Build, configure, and share Skills in Claude Code — reusable markdown instructions for tasks.', editorial: 'Skills are how you scale AI productivity across a team. Eliminates the "everyone prompts differently" problem.' },
            { name: 'Introduction to Subagents', url: 'https://anthropic.skilljar.com/introduction-to-subagents', provider: 'Anthropic', description: 'Use and create sub-agents in Claude Code to manage context and delegate tasks.', editorial: 'Advanced but critical for complex codebases. Subagents keep main conversations clean while delegating specialized work.' },
            { name: 'ChatGPT Prompt Engineering for Developers', url: 'https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/', provider: 'DeepLearning.AI', description: 'Learn prompt engineering best practices from OpenAI — applicable across all LLMs.', editorial: 'Cross-platform prompt engineering fundamentals. The principles apply to Claude, GPT, and Gemini equally.' },
            { name: 'LangChain for LLM Application Development', url: 'https://www.deeplearning.ai/short-courses/langchain-for-llm-application-development/', provider: 'DeepLearning.AI', description: 'Build LLM-powered applications using LangChain\'s framework for chaining, memory, and agents.', editorial: 'Useful for understanding orchestration patterns even if you don\'t use LangChain. The mental models transfer to any framework.' },
            { name: 'Building Systems with the ChatGPT API', url: 'https://www.deeplearning.ai/short-courses/building-systems-with-chatgpt/', provider: 'DeepLearning.AI', description: 'Build multi-step systems using large language models — chains of prompts, evaluation, and guardrails.', editorial: 'The production engineering course. Covers patterns you\'ll need for any serious AI deployment: chains, evaluation, safety.' },
        ],
    },
    {
        id: 'architects',
        label: 'For Architects & Infrastructure',
        icon: '🔌',
        color: 'emerald',
        borderColor: 'border-emerald-500/30',
        bgColor: 'bg-emerald-500/10',
        textColor: 'text-emerald-900 font-extrabold font-semibold',
        description: 'Design production AI systems. MCP, cloud integrations, RAG, and infrastructure.',
        courses: [
            { name: 'Introduction to Model Context Protocol', url: 'https://anthropic.skilljar.com/introduction-to-model-context-protocol', provider: 'Anthropic', description: 'Build MCP servers and clients from scratch. Master tools, resources, and prompts.', editorial: 'MCP is the emerging standard for AI-to-tool communication. Exogram uses MCP. This is the foundation course.' },
            { name: 'MCP: Advanced Topics', url: 'https://anthropic.skilljar.com/model-context-protocol-advanced-topics', provider: 'Anthropic', description: 'Advanced implementation including sampling, notifications, file system access, and transport mechanisms.', editorial: 'Production MCP deployments require understanding sampling and transport — this covers both.' },
            { name: 'Claude with Amazon Bedrock', url: 'https://anthropic.skilljar.com/claude-in-amazon-bedrock', provider: 'Anthropic', description: 'Full training for working with Anthropic models through AWS Bedrock.', editorial: 'If your infrastructure runs on AWS, this is how you deploy Claude at enterprise scale.' },
            { name: 'Claude with Google Cloud Vertex AI', url: 'https://anthropic.skilljar.com/claude-with-google-vertex', provider: 'Anthropic', description: 'Working with Anthropic models through Google Cloud\'s Vertex AI.', editorial: 'The GCP equivalent of the Bedrock course. Choose based on your cloud provider.' },
            { name: 'Building RAG Agents with LLMs', url: 'https://learn.nvidia.com/courses/course-detail?course_id=course-v1:DLI+S-FX-15+V1', provider: 'NVIDIA', description: 'Build production RAG pipelines with NVIDIA\'s enterprise AI tooling.', editorial: 'The enterprise RAG course. Covers retrieval, embedding, reranking, and optimization at scale.' },
            { name: 'LLMOps', url: 'https://www.deeplearning.ai/short-courses/llmops/', provider: 'DeepLearning.AI', description: 'Learn to build LLM pipelines including data prep, training, and deployment with best practices.', editorial: 'ML operations for LLMs. Essential for teams moving from prototype to production AI systems.' },
            { name: 'Vector Databases: from Embeddings to Applications', url: 'https://www.deeplearning.ai/short-courses/vector-databases-embeddings-applications/', provider: 'DeepLearning.AI', description: 'Comprehensive guide to vector databases, embedding models, and similarity search for AI applications.', editorial: 'Understanding vector DBs is essential for RAG economics. This course covers the infrastructure you\'ll be paying for.' },
        ],
    },
    {
        id: 'data-scientists',
        label: 'For Data Scientists & ML Engineers',
        icon: '🧬',
        color: 'rose',
        borderColor: 'border-rose-500/30',
        bgColor: 'bg-rose-500/10',
        textColor: 'text-rose-400',
        description: 'Fine-tuning, evaluation, model comparison, and advanced ML techniques.',
        courses: [
            { name: 'Finetuning Large Language Models', url: 'https://www.deeplearning.ai/short-courses/finetuning-large-language-models/', provider: 'DeepLearning.AI', description: 'Learn when and how to fine-tune LLMs. Covers data preparation, training, and evaluation.', editorial: 'The ROI of fine-tuning is often misunderstood. Take this course, then use AUEB to validate whether fine-tuning is economically justified for your use case.' },
            { name: 'Evaluating and Debugging Generative AI', url: 'https://www.deeplearning.ai/short-courses/evaluating-debugging-generative-ai/', provider: 'DeepLearning.AI', description: 'Learn systematic approaches to evaluating and debugging generative AI models.', editorial: 'Evaluation is where most AI projects fail. This course teaches you to catch problems before they reach production.' },
            { name: 'Building Applications with Vector Databases', url: 'https://www.deeplearning.ai/short-courses/building-applications-vector-databases/', provider: 'DeepLearning.AI', description: 'Hands-on guide to building semantic search, RAG, and recommendation systems with vector databases.', editorial: 'Practical applications of vector databases beyond basic RAG. Worth taking after the architecture track.' },
            { name: 'Stanford CS229: Machine Learning', url: 'https://cs229.stanford.edu/', provider: 'Stanford', description: 'Andrew Ng\'s legendary Stanford ML course. Covers supervised, unsupervised, and reinforcement learning foundations.', editorial: 'The gold standard ML course. If you have time for only one deep technical course, this is it.' },
            { name: 'MIT 6.S191: Introduction to Deep Learning', url: 'http://introtodeeplearning.com/', provider: 'MIT', description: 'MIT\'s fast-paced deep learning course covering neural networks, CNNs, transformers, and generative models.', editorial: 'Condensed but rigorous. Great for ML engineers who want to understand the theory behind the APIs they\'re calling.' },
            { name: 'Hugging Face NLP Course', url: 'https://huggingface.co/learn/nlp-course', provider: 'Hugging Face', description: 'Free NLP course covering transformers, fine-tuning, and deploying models with the Hugging Face ecosystem.', editorial: 'The open-source AI ecosystem course. Essential if you\'re evaluating open-source vs. proprietary model decisions.' },
        ],
    },
    {
        id: 'product-managers',
        label: 'For Product Managers',
        icon: '📋',
        color: 'blue',
        borderColor: 'border-blue-500/30',
        bgColor: 'bg-blue-500/10',
        textColor: 'text-blue-900 font-extrabold font-semibold',
        description: 'AI product strategy, user research with AI, and feature economics.',
        courses: [
            { name: 'AI Practitioner Certification Pass', url: '/api/buy/practitioner_certification', provider: 'Richard Ewing', description: 'Complete practitioner access to all AI economics, systems mapping, and model arbitrage curriculum modules.', editorial: 'My 12-hour certification course showing PMs exactly how to calculate and defend AI feature profitability.' },
            { name: 'AI Product Management', url: 'https://www.deeplearning.ai/courses/ai-for-everyone/', provider: 'DeepLearning.AI', description: 'Foundational AI concepts for product managers including feasibility analysis and team building.', editorial: 'Start here if you\'re a PM building AI features. Understanding feasibility prevents expensive false starts.' },
            { name: 'How Business Thinkers Can Start Building AI Plugins', url: 'https://www.deeplearning.ai/short-courses/chatgpt-building-ai-plugins/', provider: 'DeepLearning.AI', description: 'Non-technical guide to building AI plugins and understanding AI tool integrations.', editorial: 'Perfect for PMs who need to write specs for AI features without deep technical knowledge.' },
            { name: 'AI-Powered Product Development', url: 'https://www.productschool.com/resources/blog/ai-product-management-guide', provider: 'Product School', description: 'Comprehensive guide on integrating AI into product development lifecycle — from ideation to deployment.', editorial: 'The PM playbook for AI features. Covers prioritization, user research, and go-to-market for AI products.' },
            { name: 'Pair Programming with a Large Language Model', url: 'https://www.deeplearning.ai/short-courses/pair-programming-llm/', provider: 'DeepLearning.AI', description: 'Learn to use LLMs as coding assistants — essential for PMs who want to prototype AI features.', editorial: 'PMs who can prototype with AI ship 3x faster. This course makes you dangerous in the best way.' },
        ],
    },
    {
        id: 'security',
        label: 'For Security & Governance',
        icon: '🛡️',
        color: 'orange',
        borderColor: 'border-orange-500/30',
        bgColor: 'bg-orange-500/10',
        textColor: 'text-orange-900 font-extrabold font-semibold',
        description: 'AI safety, red teaming, compliance, and responsible AI deployment.',
        courses: [
            { name: 'Red Teaming LLM Applications', url: 'https://www.deeplearning.ai/short-courses/red-teaming-llm-applications/', provider: 'DeepLearning.AI', description: 'Learn to identify vulnerabilities in LLM applications through systematic red teaming.', editorial: 'Essential before any production AI deployment. The cost of a security incident far exceeds the cost of red teaming.' },
            { name: 'AI Safety Fundamentals', url: 'https://aisafetyfundamentals.com/', provider: 'BlueDot Impact', description: 'Comprehensive AI safety curriculum covering alignment, interpretability, and governance.', editorial: 'The most thorough AI safety course available for free. Critical for teams building AI features with user-facing implications.' },
            { name: 'Responsible AI Practices', url: 'https://ai.google/responsibility/responsible-ai-practices/', provider: 'Google', description: 'Google\'s guidelines for responsible AI including fairness, interpretability, privacy, and security.', editorial: 'Google\'s responsible AI framework. Use this to build your internal AI governance policy.' },
            { name: 'NIST AI Risk Management Framework', url: 'https://www.nist.gov/artificial-intelligence/ai-risk-management-framework', provider: 'NIST', description: 'The U.S. government\'s AI risk management framework — the emerging compliance standard.', editorial: 'If you\'re in a regulated industry or selling to enterprise, you need to understand NIST AI RMF. It\'s becoming the baseline for AI compliance.' },
        ],
    },
    {
        id: 'educators',
        label: 'For Educators & Nonprofits',
        icon: '🎓',
        color: 'amber',
        borderColor: 'border-amber-500/30',
        bgColor: 'bg-amber-500/10',
        textColor: 'text-amber-400',
        description: 'Bring AI fluency into classrooms, teams, and organizations.',
        courses: [
            { name: 'AI Fluency for Educators', url: 'https://anthropic.skilljar.com/ai-fluency-for-educators', provider: 'Anthropic', description: 'Empowers faculty and educational leaders to apply AI Fluency in teaching.', editorial: 'If you\'re responsible for upskilling a team, start here — then use it as a template for your own training programs.' },
            { name: 'Teaching AI Fluency', url: 'https://anthropic.skilljar.com/teaching-ai-fluency', provider: 'Anthropic', description: 'Empowers academic faculty to teach and assess AI Fluency in instructor-led settings.', editorial: 'The "train the trainer" course. For organizations building internal AI education programs.' },
            { name: 'AI Fluency for Students', url: 'https://anthropic.skilljar.com/ai-fluency-for-students', provider: 'Anthropic', description: 'Develop AI Fluency skills that enhance learning, career planning, and academic success.', editorial: 'Recommend to junior engineers and new graduates. Sets the right foundation for AI-augmented work.' },
            { name: 'AI Fluency for Nonprofits', url: 'https://anthropic.skilljar.com/ai-fluency-for-nonprofits', provider: 'Anthropic', description: 'Develop AI fluency to increase organizational impact while staying true to mission.', editorial: 'Purpose-built for mission-driven organizations. Covers ethical considerations unique to nonprofit AI adoption.' },
        ],
    },
    {
        id: 'economics',
        label: 'For AI Economics & Strategy',
        icon: '💰',
        color: 'teal',
        borderColor: 'border-teal-500/30',
        bgColor: 'bg-teal-500/10',
        textColor: 'text-teal-400',
        description: 'AI cost analysis, unit economics, and strategic AI investment decisions.',
        courses: [
            { name: 'AI Unit Economics Benchmark (AUEB)', url: '/tools/aueb', provider: 'Richard Ewing', description: 'Calculate the unit economics of your AI features — cost per interaction, margin analysis, and break-even points.', editorial: 'My free tool. Run your numbers before you ship any AI feature. 73% of AI features are margin-negative.' },
            { name: 'AI Economics Curriculum', url: '/vault/curriculum/tracks', provider: 'Richard Ewing', description: '218 modules across 18 tracks covering engineering economics, AI operations, enterprise architecture, R&D capital management, leadership, M&A integration, and applied practice.', editorial: 'The comprehensive curriculum for understanding engineering as an economic activity. Start with Track 2 for AI economics.' },
            { name: 'AI Economics Deep Dive Guide', url: '/vault/curriculum/tracks', provider: 'Richard Ewing', description: 'Complete guide to AI cost structures: inference, training, fine-tuning, and infrastructure economics.', editorial: 'My most comprehensive guide on AI economics. Covers everything from token pricing to GPU infrastructure costs.' },
            { name: 'How to Calculate Unit Economics for AI Products (Blog)', url: '/blog/ai-unit-economics-30-minutes', provider: 'Richard Ewing', description: 'Step-by-step framework to calculate AI feature profitability in 30 minutes.', editorial: 'The practical companion to the AUEB tool. Walks through the exact calculation with real-world examples.' },
        ],
    },
];

const recommendedReading = [
    { title: 'Prediction Machines', author: 'Ajay Agrawal, Joshua Gans, Avi Goldfarb', description: 'The economics of AI as a prediction technology. Essential framework for understanding AI cost-benefit analysis.', url: 'https://www.amazon.com/dp/1633695670' },
    { title: 'The AI Organization', author: 'David De Cremer', description: 'How to restructure organizations around AI capabilities — org design meets AI strategy.', url: 'https://www.amazon.com/dp/3030574199' },
    { title: 'AI Superpowers', author: 'Kai-Fu Lee', description: 'China, Silicon Valley, and the new world order of AI. Strategic context for anyone making AI investment decisions.', url: 'https://www.amazon.com/dp/132854639X' },
    { title: 'Human Compatible', author: 'Stuart Russell', description: 'The definitive book on AI safety and alignment from a leading AI researcher at UC Berkeley.', url: 'https://www.amazon.com/dp/0525558632' },
    { title: 'Designing Machine Learning Systems', author: 'Chip Huyen', description: 'Production ML systems engineering — the bridge between prototype and production AI.', url: 'https://www.amazon.com/dp/1098107969' },
    { title: 'The Coming Wave', author: 'Mustafa Suleyman', description: 'DeepMind co-founder on AI, synthetic biology, and the challenge of containment. Board-level required reading.', url: 'https://www.amazon.com/dp/0593593952' },
];

const tools = [
    { name: 'LiteLLM', description: 'Unified API gateway for 100+ LLM providers. Essential for model routing optimization.', url: 'https://github.com/BerriAI/litellm', category: 'Cost Optimization' },
    { name: 'Helicone', description: 'Open-source LLM observability platform. Track costs, latency, and usage across providers.', url: 'https://helicone.ai/', category: 'Monitoring' },
    { name: 'Langfuse', description: 'Open-source LLM engineering platform for traces, evaluations, and prompt management.', url: 'https://langfuse.com/', category: 'Monitoring' },
    { name: 'Instructor', description: 'Structured LLM output extraction with Pydantic. Reduces token waste and parsing errors.', url: 'https://github.com/jxnl/instructor', category: 'Efficiency' },
    { name: 'GPTCache', description: 'Semantic caching for LLM queries — cache similar queries to reduce inference costs.', url: 'https://github.com/zilliztech/GPTCache', category: 'Cost Optimization' },
    { name: 'RAGAS', description: 'Framework for evaluating RAG pipeline quality — measures faithfulness, relevance, and context precision.', url: 'https://github.com/explodinggradients/ragas', category: 'Evaluation' },
    { name: 'Phoenix (Arize)', description: 'ML observability for LLMs — trace, evaluate, and debug AI applications in production.', url: 'https://github.com/Arize-ai/phoenix', category: 'Monitoring' },
    { name: 'OpenRouter', description: 'Unified API for accessing multiple LLM providers with automatic model routing and fallbacks.', url: 'https://openrouter.ai/', category: 'Cost Optimization' },
];

export default function AiCoursesPage() {
    const totalCourses = tracks.reduce((acc, t) => acc + t.courses.length, 0);

    return (
        <main className="pt-24 pb-20">
            <div className="page-container">

                {/* Hero */}
                <section className="text-center mb-16 relative">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />
                    <div className="relative">
                        <p className="text-xs font-bold font-mono text-purple-900 font-extrabold font-semibold uppercase tracking-widest mb-4">Curated by Richard Ewing</p>
                        <h1 className="text-4xl md:text-6xl font-grotesk font-bold text-zinc-950 mb-6">
                            The AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Learning Hub.</span>
                        </h1>
                        <p className="text-lg text-zinc-900 max-w-2xl mx-auto mb-4">
                            {totalCourses} curated resources across {tracks.length} learning tracks — from Anthropic, Google, Stanford, MIT, NVIDIA, and more.
                            Each with my editorial commentary on what matters and why.
                        </p>
                        <p className="text-sm font-semibold text-zinc-950 max-w-xl mx-auto">
                            Most courses are free, self-paced, and include completion certificates. Curated for technology leaders, builders, and decision-makers.
                        </p>
                    </div>
                </section>

                {/* Quick Stats */}
                <section className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-16">
                    {[
                        { value: `${totalCourses}+`, label: 'Curated Resources' },
                        { value: `${tracks.length}`, label: 'Learning Tracks' },
                        { value: '8+', label: 'Providers' },
                        { value: '✓', label: 'Editorial Commentary' },
                    ].map((stat) => (
                        <div key={stat.label} className="text-center p-4 rounded-xl bg-white/5 border border-zinc-400">
                            <div className="text-2xl font-bold text-zinc-950 font-mono">{stat.value}</div>
                            <div className="text-xs font-bold text-zinc-900 font-bold uppercase tracking-widest mt-1">{stat.label}</div>
                        </div>
                    ))}
                </section>

                {/* Track Navigation */}
                <section className="max-w-5xl mx-auto mb-12">
                    <div className="flex flex-wrap gap-2 justify-center">
                        {tracks.map(track => (
                            <a key={track.id} href={`#${track.id}`} className={`text-xs font-bold font-mono px-3 py-1.5 rounded-full border ${track.borderColor} ${track.bgColor} ${track.textColor} hover:opacity-80 transition-opacity`}>
                                {track.icon} {track.label}
                            </a>
                        ))}
                        <a href="#reading" className="text-xs font-bold font-mono px-3 py-1.5 rounded-full border border-zinc-500/30 bg-zinc-500/10 text-zinc-900 hover:opacity-80 transition-opacity">
                            📖 Reading
                        </a>
                        <a href="#tools" className="text-xs font-bold font-mono px-3 py-1.5 rounded-full border border-zinc-500/30 bg-zinc-500/10 text-zinc-900 hover:opacity-80 transition-opacity">
                            🔧 Tools
                        </a>
                    </div>
                </section>

                {/* Course Tracks */}
                <div className="space-y-16 max-w-5xl mx-auto">
                    {tracks.map((track) => (
                        <section key={track.id} id={track.id}>
                            <div className="flex items-center gap-3 mb-8">
                                <span className="text-3xl">{track.icon}</span>
                                <div>
                                    <h2 className="text-2xl font-bold text-zinc-950 font-grotesk">{track.label}</h2>
                                    <p className="text-sm font-semibold text-zinc-900 font-medium">{track.description}</p>
                                </div>
                                <span className="ml-auto text-xs font-bold font-mono text-zinc-950">{track.courses.length} resources</span>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                {track.courses.map((course) => {
                                    const isInternal = course.url.startsWith('/');
                                    return (
                                        <a
                                            key={course.name}
                                            href={course.url}
                                            target={isInternal ? undefined : '_blank'}
                                            rel={isInternal ? undefined : 'noopener noreferrer'}
                                            className={`group block p-6 rounded-xl bg-white/[0.03] border ${track.borderColor} hover:bg-white/[0.06] transition-all hover:shadow-lg`}
                                        >
                                            <div className="flex items-start justify-between gap-2 mb-3">
                                                <h3 className={`text-lg font-bold text-zinc-950 group-hover:${track.textColor} transition-colors font-grotesk`}>
                                                    {course.name}
                                                </h3>
                                                <span className="text-zinc-950 font-bold group-hover:text-zinc-900 transition-colors shrink-0 mt-1">{isInternal ? '→' : '↗'}</span>
                                            </div>
                                            <div className="flex items-center gap-2 mb-3">
                                                <span className="text-xs font-bold font-medium font-mono text-zinc-950 font-bold px-2 py-0.5 rounded-full border border-zinc-400 bg-zinc-50">{course.provider}</span>
                                            </div>
                                            <p className="text-sm font-semibold text-zinc-900 font-medium mb-4 leading-relaxed">{course.description}</p>
                                            <div className={`text-xs font-bold ${track.textColor} font-mono leading-relaxed border-t border-zinc-400 pt-3`}>
                                                <span className="font-bold uppercase tracking-widest">Richard&apos;s Take:</span>{' '}
                                                <span className="text-zinc-950 font-bold">{course.editorial}</span>
                                            </div>
                                        </a>
                                    );
                                })}
                            </div>
                        </section>
                    ))}
                </div>

                {/* Recommended Reading */}
                <section id="reading" className="mt-20 max-w-5xl mx-auto">
                    <div className="flex items-center gap-3 mb-8">
                        <span className="text-3xl">📖</span>
                        <div>
                            <h2 className="text-2xl font-bold text-zinc-950 font-grotesk">Recommended Reading</h2>
                            <p className="text-sm font-semibold text-zinc-900 font-medium">Books that shaped my thinking on AI economics and strategy.</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {recommendedReading.map(book => (
                            <a key={book.title} href={book.url} target="_blank" rel="noopener noreferrer"
                                className="group block p-6 rounded-xl bg-white/[0.03] border border-zinc-400 hover:border-zinc-500 hover:bg-white/[0.06] transition-all">
                                <h3 className="text-base font-bold text-zinc-950 group-hover:text-cyan-900 font-extrabold font-semibold transition-colors font-grotesk mb-1">{book.title}</h3>
                                <p className="text-xs font-bold text-zinc-950 mb-3">{book.author}</p>
                                <p className="text-sm font-semibold text-zinc-900 font-medium leading-relaxed">{book.description}</p>
                            </a>
                        ))}
                    </div>
                </section>

                {/* Open-Source Tools */}
                <section id="tools" className="mt-20 max-w-5xl mx-auto">
                    <div className="flex items-center gap-3 mb-8">
                        <span className="text-3xl">🔧</span>
                        <div>
                            <h2 className="text-2xl font-bold text-zinc-950 font-grotesk">AI Cost & Monitoring Tools</h2>
                            <p className="text-sm font-semibold text-zinc-900 font-medium">Open-source tools for managing AI costs, monitoring usage, and optimizing performance.</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {tools.map(tool => (
                            <a key={tool.name} href={tool.url} target="_blank" rel="noopener noreferrer"
                                className="group block p-5 rounded-xl bg-white/[0.03] border border-zinc-400 hover:border-emerald-500/30 hover:bg-white/[0.06] transition-all">
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-sm font-semibold font-bold text-zinc-950 group-hover:text-emerald-900 font-extrabold font-semibold transition-colors font-grotesk">{tool.name}</h3>
                                    <span className="text-zinc-950 group-hover:text-zinc-900 transition-colors">↗</span>
                                </div>
                                <span className="text-xs font-bold font-medium font-mono text-emerald-900 font-extrabold font-semibold px-2 py-0.5 rounded-full border border-emerald-500/20 bg-emerald-500/10">{tool.category}</span>
                                <p className="text-xs font-bold text-zinc-950 leading-relaxed mt-2">{tool.description}</p>
                            </a>
                        ))}
                    </div>
                </section>

                {/* Newsletter Capture */}
                <section className="mt-16 max-w-2xl mx-auto">
                    <div className="card p-8 text-center border-purple-500/30 bg-purple-900/10">
                        <div className="text-xs font-bold text-zinc-900 font-bold uppercase tracking-wide mb-4 font-mono">AI Course Companion</div>
                        <h3 className="text-2xl font-bold text-zinc-950 mb-4 font-grotesk">Get Richard&apos;s AI Course Notes</h3>
                        <p className="text-zinc-900 mb-6 max-w-md mx-auto">
                            Which sections to skip. What to focus on. How each course maps to real capital decisions.
                            <br /><span className="text-zinc-900">One email. No spam.</span>
                        </p>
                        <a href="https://theaieconomist.beehiiv.com/subscribe" target="_blank" rel="noopener noreferrer"
                            className="inline-block px-8 py-4 rounded-lg bg-purple-600 text-zinc-950 font-semibold hover:bg-purple-500 mb-4 transition-colors font-grotesk">
                            Subscribe for Course Notes →
                        </a>
                        <p className="text-zinc-950 text-sm">Join 2,000+ executives. Monthly briefings + course companion notes.</p>
                    </div>
                </section>

                {/* Cross-sell CTA */}
                <section className="mt-12 max-w-3xl mx-auto">
                    <div className="card p-10 border-purple-500/20 bg-gradient-to-br from-purple-500/5 via-transparent to-cyan-500/5 text-center">
                        <p className="text-xs font-bold font-mono text-purple-900 font-extrabold font-semibold uppercase tracking-widest mb-4">After the Courses</p>
                        <h2 className="text-2xl md:text-3xl font-bold text-zinc-950 mb-4 font-grotesk">
                            Courses teach you AI. <span className="text-cyan-900 font-extrabold font-semibold">I teach you the economics.</span>
                        </h2>
                        <p className="text-zinc-900 mb-8 max-w-xl mx-auto">
                            Knowing how to build with AI is necessary. Knowing whether you <em>should</em> build — and at what cost — is what separates winners from margin casualties.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="/api/buy/practitioner_certification" className="px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-zinc-950 font-semibold font-bold rounded-lg hover:opacity-90 transition-opacity text-sm">
                                Unlock AI Practitioner Pass ($249) →
                            </a>
                            <Link href="/tools/aueb" className="px-6 py-3 bg-white/5 border border-zinc-400 text-zinc-950 font-semibold rounded-lg hover:bg-white/10 transition-colors text-sm">
                                Run AUEB Profitability Audit →
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Schema.org */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            '@context': 'https://schema.org',
                            '@type': 'ItemList',
                            name: 'AI Learning Hub — 50+ Curated Resources by Richard Ewing',
                            description: `Curated catalog of ${totalCourses}+ AI courses and resources for technology leaders, developers, and architects.`,
                            numberOfItems: totalCourses,
                            itemListElement: tracks.flatMap((track, ti) =>
                                track.courses.map((course, ci) => ({
                                    '@type': 'ListItem',
                                    position: ti * 10 + ci + 1,
                                    item: {
                                        '@type': 'Course',
                                        name: course.name,
                                        description: course.description,
                                        provider: { '@type': 'Organization', name: course.provider },
                                        url: course.url.startsWith('/') ? `https://www.richardewing.io${course.url}` : course.url,
                                        isAccessibleForFree: true,
                                    },
                                }))
                            ),
                        }),
                    }}
                />
            </div>
        </main>
    );
}
