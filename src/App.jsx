import { useState, useRef, useEffect } from 'react';
import { BackgroundPathsOverlay } from '@/components/ui/background-paths';
import { MeshGradientBackground } from '@/components/ui/mesh-gradient-background';

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#certifications', label: 'Certifications' },
];

const aboutPoints = [
  {
    number: '01',
    title: 'I Design for Auditability',
    text: 'Every model output should trace back to evidence.',
    side: 'left',
  },
  {
    number: '02',
    title: 'I Blend Business + AI',
    text: 'Forecasting meets GenAI. Strategy meets system design.',
    side: 'right',
  },
  {
    number: '03',
    title: 'I Optimize for Real-World Constraints',
    text: 'Latency. Scale. Explainability. Deployment.',
    side: 'left',
  },
  {
    number: '04',
    title: 'I Build for Decision Makers',
    text: 'Not just accuracy - clarity, reliability, and actionability.',
    side: 'right',
  },
];

const projects = [
  {
    title: 'Treeni - Document Intelligence RAG System',
    date: 'Delivered Apr 2026',
    description:
      'Architected a production grade RAG system delivering validated, citation backed intelligence from unstructured PDFs.',
    tags: ['RAG', 'Regex', 'Pydantic', 'Qdrant', 'vLLM'],
    image: '/rag-system.jpeg',
    summaryPoints: [
      'Built an end to end document intelligence pipeline to ingest supplier data, download PDFs, extract text and tables with OCR support, and maintain page level audit traceability.',
      'Engineered a hybrid RAG system combining semantic embeddings, vector search, BM25 keyword retrieval, and fuzzy matching for high precision, supplier scoped evidence retrieval.',
      'Implemented grounded answer generation with strict validation gates, enforcing SUPPORTED / NOT_FOUND logic to eliminate hallucinations and ensure citation-backed outputs.',
      'Designed a production ready AI architecture using FastAPI, vector databases, asynchronous processing, and structured exports to deliver audit ready, client facing results.',
    ],
    flipFooter: 'Built and delivered for Treeni. Client data and implementation details remain confidential.',
    clientLogo: 'treeni',
    noRepoLink: true,
  },
  {
    title: 'Telco Churn Intelligence',
    date: 'Feb 2026',
    description:
      'End-to-end churn prediction system with FastAPI, Streamlit, and executive Tableau analytics.',
    tags: ['Logistic Regression', 'FastAPI', 'Streamlit', 'Tableau', 'EDA'],
    image: '/telco-churn.png',
    summaryPoints: [
      'Built an end-to-end production churn prediction system integrating ML, APIs, interactive visualizations, and executive analytics.',
      'Optimized a Logistic Regression model (ROC-AUC: 0.83, 78% recall) to drive high-impact retention targeting.',
      'Developed a real-time FastAPI inference engine with an interactive Streamlit scoring interface.',
      'Delivered a Tableau dashboard enabling risk segmentation, revenue-at-risk analysis, and data-driven Top-K decision support.',
    ],
    overview:
      'Built a production-ready churn prediction flow combining model scoring APIs, a business-facing app, and leadership dashboards.',
    process:
      'Data understanding -> feature engineering -> model tuning -> API service -> interactive scoring app -> Tableau insights.',
    tools: 'Python, Scikit-learn, FastAPI, Streamlit, Tableau, Pandas',
    outcome:
      'Delivered 0.83 ROC-AUC and high-recall targeting to improve retention prioritization and revenue protection.',
    github: 'https://github.com/YoursSharan1226/telco-churn-intelligence',
  },
  {
    title: 'Airbnb Segmentation with PCA + Clustering',
    date: 'Feb 2025 - Apr 2025',
    description:
      'Unsupervised segmentation of NYC Airbnb listings with geographic and cluster insights.',
    tags: ['PCA', 'K-Means', 'Bisecting K-Means', 'Folium'],
    image: '/airbnb-clustering.png',
    summaryPoints: [
      'Developed an end-to-end unsupervised ML model to segment NYC Airbnb listings by pricing, availability, and host engagement patterns.',
      'Applied advanced preprocessing and PCA (98% variance retained) to enhance clustering efficiency.',
      'Implemented KMeans and Bisecting KMeans, identifying 4 optimal clusters using Elbow and MSE evaluation.',
      'Delivered actionable host segment insights with interactive geographic and cluster-based visualizations.',
    ],
    overview:
      'Segmented listings by price, availability, and host behavior to reveal market positioning opportunities.',
    process:
      'Preprocessing -> PCA (98% variance) -> clustering evaluation -> geo-visual analysis.',
    tools: 'Python, Scikit-learn, Pandas, Folium, Matplotlib',
    outcome:
      'Identified 4 meaningful host/listing segments that support pricing and supply strategy decisions.',
    github: 'https://github.com/YoursSharan1226/Airbnb-Listing-Segmentation-using-Clustering-PCA',
  },
  {
    title: 'Topic Modelling: Social Media Conversations',
    date: 'Oct 2025 - Dec 2025',
    description:
      'Scalable BERTopic pipeline extracting interpretable themes from 70K+ posts across a 65M+ corpus.',
    tags: ['BERTopic', 'SBERT', 'UMAP', 'HDBSCAN', 'NLP'],
    image: '/topic-modelling.png',
    summaryPoints: [
      'Designed an end-to-end unsupervised NLP pipeline to analyze large-scale social media conversations without manual labeling.',
      'Built a scalable topic modeling system (SBERT, UMAP, HDBSCAN, BERTopic) extracting 871 interpretable topics from 70K+ posts within a 65M+ dataset.',
      'Engineered a stance analysis module using PCA, KMeans, contrastive TF-IDF, and sentiment aggregation to uncover opinion diversity.',
      'Delivered an interpretable, reusable embedding-driven framework optimized for noisy real-world domains like geopolitics and crypto discussions.',
    ],
    overview:
      'Designed an unsupervised NLP framework for large, noisy conversations without requiring labels.',
    process:
      'Embedding generation -> dimensionality reduction -> density clustering -> topic interpretation -> stance analytics.',
    tools: 'Python, BERTopic, Sentence Transformers, UMAP, HDBSCAN, PCA, KMeans',
    outcome:
      'Generated 871 interpretable topics and reusable methods for geopolitical and crypto discourse analysis.',
    github:
      'https://github.com/YoursSharan1226/Automated-Intelligence-Topic-Modeling-and-Interpretive-Analysis-of-Global-Social-Media-Conversations',
  },
  {
    title: 'Predictive Marketing Campaign Strategy',
    date: 'Jan 2026',
    description:
      'Response propensity modeling to maximize campaign lift while minimizing spend waste.',
    tags: ['XGBoost', 'Logistic Regression', 'Top-K Metrics', 'Segmentation'],
    image: '/marketing-campaign.png',
    summaryPoints: [
      'Built a predictive marketing framework focused on lift and ROI optimization under budget constraints.',
      'Developed Logistic Regression and XGBoost models to rank customers by response probability for strategic targeting.',
      'Captured ~83% of responders by targeting the top 30%, boosting response rates from 15% to ~42% while reducing campaign waste.',
      'Demonstrated ML-driven resource optimization for real-world, data-backed marketing decisions.',
    ],
    overview:
      'Built a ranking-based decision framework to select high-probability responders under fixed budget constraints.',
    process:
      'Data prep -> baseline model -> boosted model -> Top-K ranking -> business impact simulation.',
    tools: 'Python, XGBoost, Scikit-learn, Pandas, Matplotlib',
    outcome:
      'Captured roughly 83% of responders in the top 30% population, lifting response rate to about 42%.',
    github:
      'https://github.com/YoursSharan1226/Predictive-Analytics-for-Cost-Efficient-Marketing-Campaign-Strategy',
  },
];

const experience = [
  {
    role: 'Junior Business Analyst',
    company: 'Crytonix Remote Tech',
    location: 'Chennai, INDIA',
    period: 'Jan 2024 - July 2024',
    bullets: [
      'Developed and refined business strategies to support successful product releases, aligning with client requirements and market demands.',
      'Created detailed user stories to clearly communicate functionality and end-user needs to development teams.',
      'Designed and mapped module flows, enabling a structured and efficient approach for the development team to implement features.',
      'Facilitated API integration from client systems to access server data, ensuring seamless connectivity and functionality. Conducted thorough testing of APIs to confirm functionality, security, and performance standards.',
      "Performed end-to-end testing of user flows to validate the developed product's usability and alignment with design specifications. Ensured logical implementation of the product flow, verifying that each component worked cohesively within the product framework.",
    ],
    details: {
      responsibilities:
        'Developed product release strategies, translated requirements into user stories, mapped module flows, and validated end-to-end implementation quality.',
      technologies: 'JIRA, API Integration, API Testing, User Story Mapping, QA',
      impact:
        'Improved release readiness and ensured reliable feature delivery through strong business-development alignment.',
    },
  },
  {
    role: 'Business Analyst Intern',
    company: 'Foyr',
    location: 'Hyderabad, INDIA',
    period: 'Feb 2023 - July 2023',
    bullets: [
      'Performed in-depth analysis of customer data, focusing on subscription-based users, to identify trends, patterns, and customer behavior insights.',
      'Maintained and update large-scale dashboards, presenting key metrics and performance indicators to track and monitor customer engagement and subscription growth.',
      'Collaborated with cross-functional teams, including product managers and developers, to develop data-driven strategies for customer retention and acquisition.',
      'Responded to customer queries and concerns through email communication, ensuring prompt and accurate resolutions to maintain high customer satisfaction levels.',
      'Generated reports and presentations, clearly communicating findings and recommendations to internal stakeholders.',
    ],
    details: {
      responsibilities:
        'Analyzed subscription customer behavior, maintained dashboards, and supported retention strategy with cross-functional stakeholders.',
      technologies: 'Excel, Dashboards, Customer Analytics, Reporting, Stakeholder Communication',
      impact:
        'Improved customer health visibility and enabled data-driven decisions for retention and acquisition.',
    },
  },
];

const skills = [
  {
    category: 'Languages & Databases',
    items: ['Python', 'SQL', 'R', 'PostgreSQL', 'MySQL'],
  },
  {
    category: 'ML / Analytics',
    items: [
      'Scikit-learn',
      'Pandas',
      'NumPy',
      'NLTK',
      'SpaCy',
      'BERTopic',
      'SBERT',
      'Logistic Regression',
      'Random Forest',
      'XGBoost',
    ],
  },
  {
    category: 'BI & Visualization',
    items: [
      'Tableau',
      'Power BI',
      'Streamlit',
      'MS Excel',
      'Matplotlib',
      'Seaborn',
      'Google Looker Studio',
      'IBM Cognos',
    ],
  },
  {
    category: 'Tools & Platforms',
    items: ['FastAPI', 'Docker', 'Kubernetes', 'Databricks', 'GitHub', 'Jira', 'Figma', 'AWS', 'DBeaver', 'phpMyAdmin', 'pgAdmin'],
  },
  {
    category: 'Methodologies',
    items: ['Agile / Scrum', 'A/B Testing', 'Stakeholder Management', 'Requirements Gathering', 'API Testing'],
  },
];

const education = [
  {
    degree: 'Masters in Business Analytics',
    field: 'Business Analytics',
    institution: 'University of Texas at Arlington',
    location: 'TX, US',
    year: 'Aug 2024 - May 2026',
    gpa: 'GPA 3.6 / 4.0',
    description:
      'Coursework includes Data Science, Data Warehousing, Cloud Computing, Marketing Analytics, Forecasting, and Statistics for Business.',
  },
  {
    degree: 'Post Graduate Program in Data Science and Machine Learning',
    field: 'Data Science & Machine Learning',
    institution: 'National Institute of Information Technology',
    location: 'India',
    year: 'Nov 2022 to Dec 2023',
    gpa: '87% Overall Grade',
    description:
      'Focused on SQL, Tableau, Python, ML fundamentals, time series, and NLP.',
  },
];

const certifications = [
  {
    name: 'Google Data Analytics',
    issuer: 'Google',
    date: 'Dec 2024',
    url: 'https://www.coursera.org/account/accomplishments/specialization/VKVK6ALE7NLI',
  },
  {
    name: 'SAP Business Analyst',
    issuer: 'SAP',
    date: 'Mar 2026',
    url: 'https://www.coursera.org/account/accomplishments/specialization/UQM6HTYG96ED',
  },
  {
    name: 'AWS AI Practitioner',
    issuer: 'AWS',
    date: 'Mar 2026',
    url: 'https://www.credly.com/earner/earned/badge/0f895c12-fc78-4c89-8759-9bbc2e0cff3f',
  },
  {
    name: 'IBM Data Management',
    issuer: 'IBM',
    date: 'Apr 2026',
    url: 'https://www.coursera.org/account/accomplishments/specialization/DX7ROYK3T7TO',
  },
  {
    name: 'Microsoft AI Product Manager',
    issuer: 'Microsoft',
    date: 'Apr 2026',
    url: 'https://www.coursera.org/account/accomplishments/specialization/B1R6U68TJY1L',
  },
];

const issuerStyles = {
  Google:    { color: '#4285F4', bg: 'rgba(66,133,244,0.12)',  border: 'rgba(66,133,244,0.25)' },
  SAP:       { color: '#F0AB00', bg: 'rgba(240,171,0,0.12)',   border: 'rgba(240,171,0,0.25)' },
  AWS:       { color: '#FF9900', bg: 'rgba(255,153,0,0.12)',   border: 'rgba(255,153,0,0.25)' },
  IBM:       { color: '#00B4D8', bg: 'rgba(0,180,216,0.12)',   border: 'rgba(0,180,216,0.25)' },
  Microsoft: { color: '#00A4EF', bg: 'rgba(0,164,239,0.12)',   border: 'rgba(0,164,239,0.25)' },
};

const skillIconMap = {
  Python: 'fa-brands fa-python',
  SQL: 'fa-solid fa-database',
  R: 'fa-solid fa-chart-line',
  PostgreSQL: 'fa-solid fa-database',
  'C++': 'fa-solid fa-code',
  Bash: 'fa-solid fa-terminal',
  'ETL / ELT Pipelines': 'fa-solid fa-diagram-project',
  'Data Modeling': 'fa-solid fa-cubes',
  MySQL: 'fa-solid fa-database',
  Pandas: 'fa-solid fa-table',
  NumPy: 'fa-solid fa-square-root-variable',
  'scikit-learn': 'fa-solid fa-brain',
  'Scikit-learn': 'fa-solid fa-brain',
  NLP: 'fa-solid fa-comment-dots',
  NLTK: 'fa-solid fa-language',
  SpaCy: 'fa-solid fa-comment-dots',
  Regression: 'fa-solid fa-chart-line',
  'Logistic Regression': 'fa-solid fa-chart-line',
  'Random Forest': 'fa-solid fa-tree',
  'K-Means': 'fa-solid fa-circle-nodes',
  XGBoost: 'fa-solid fa-bolt',
  'ARIMA / SARIMA / SARIMAX / VAR': 'fa-solid fa-wave-square',
  'Time Series Forecasting': 'fa-solid fa-clock-rotate-left',
  'Statistical Analysis': 'fa-solid fa-sigma',
  'Exploratory Data Analysis': 'fa-solid fa-magnifying-glass-chart',
  PyTorch: 'fa-solid fa-microchip',
  'Hugging Face': 'fa-solid fa-face-smile',
  'Sentence-BERT': 'fa-solid fa-comment-dots',
  SBERT: 'fa-solid fa-comment-dots',
  BERTopic: 'fa-solid fa-tags',
  RAG: 'fa-solid fa-link',
  FastAPI: 'fa-solid fa-gauge-high',
  Docker: 'fa-brands fa-docker',
  Kubernetes: 'fa-solid fa-dharmachakra',
  Databricks: 'fa-solid fa-layer-group',
  Tableau: 'fa-solid fa-chart-pie',
  'Power BI': 'fa-solid fa-chart-column',
  Streamlit: 'fa-solid fa-sliders',
  Excel: 'fa-solid fa-file-excel',
  'MS Excel': 'fa-solid fa-file-excel',
  Dashboards: 'fa-solid fa-table-columns',
  Matplotlib: 'fa-solid fa-chart-line',
  Seaborn: 'fa-solid fa-chart-area',
  'Google Looker Studio': 'fa-solid fa-chart-simple',
  'IBM Cognos': 'fa-solid fa-chart-pie',
  Git: 'fa-brands fa-git-alt',
  GitHub: 'fa-brands fa-github',
  Jira: 'fa-brands fa-jira',
  RPA: 'fa-solid fa-robot',
  AWS: 'fa-brands fa-aws',
  'Microsoft Fabric': 'fa-solid fa-layer-group',
  Figma: 'fa-brands fa-figma',
  DBeaver: 'fa-solid fa-database',
  phpMyAdmin: 'fa-solid fa-database',
  pgAdmin: 'fa-solid fa-database',
  'Agile / Scrum': 'fa-solid fa-rotate',
  'A/B Testing': 'fa-solid fa-flask',
  'Stakeholder Management': 'fa-solid fa-people-group',
  'Requirement Analysis': 'fa-solid fa-list-check',
  'Requirements Gathering': 'fa-solid fa-list-check',
  'Process Optimization': 'fa-solid fa-gears',
  'API Testing': 'fa-solid fa-vial-circle-check',
};

const getSkillIconClass = (item) => skillIconMap[item] || 'fa-solid fa-circle-nodes';

export default function App() {
  const [activeExperience, setActiveExperience] = useState(null);
  const aboutRef = useRef(null);

  useEffect(() => {
    const el = aboutRef.current;
    if (!el) return;
    const items = el.querySelectorAll('.about-item');
    const delays = [500, 950, 1400, 1850];
    const timers = [];

    const resetTimeline = () => {
      el.classList.remove('animating');
      items.forEach((item) => item.classList.remove('visible'));
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          resetTimeline();
          void el.offsetWidth;
          el.classList.add('animating');
          items.forEach((item, i) => {
            timers.push(setTimeout(() => item.classList.add('visible'), delays[i]));
          });
        } else {
          timers.forEach((timer) => clearTimeout(timer));
          timers.length = 0;
          resetTimeline();
        }
      });
    }, { threshold: 0.2 });
    observer.observe(el);
    return () => {
      timers.forEach((timer) => clearTimeout(timer));
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!window.location.hash) return;
    const target = document.querySelector(window.location.hash);
    target?.scrollIntoView({ block: 'start' });
  }, []);

  return (
    <div className="app-shell">
      {/* NAVBAR */}
      <header className="site-nav">
        <div className="container nav-inner">
          <a className="brand" href="#home">
            SHARAN RAGHAVENDRA
          </a>
          <nav className="nav-pill-wrap" aria-label="Primary">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}
          </nav>
          <a
            className="resume-btn"
            href="/assets/Sharan_Ragothaman_Resume.pdf"
            download
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Resume
          </a>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section id="home" className="hero section">
          <BackgroundPathsOverlay />
          <div className="container hero-grid">
            <div>
              <h1 className="hero-title">
                <span className="hero-firstline">Sharan Raghavendra</span>
                <span className="hero-lastname">Ragothaman</span>
              </h1>
              <p className="hero-location">Dallas, TX, US</p>
              <p className="hero-role-title">Business &amp; Data Analyst | Growth Strategy &amp; ML Driven Insights</p>
              <div className="cta-row">
                <a className="btn btn-secondary" href="#contact">
                  Contact Me
                </a>
                <a className="btn btn-secondary" href="/assets/Sharan_Ragothaman_Resume.pdf" download>
                  Download Resume
                </a>
              </div>
            </div>
            <div className="hero-visual">
              <p className="hero-photo-kicker">Business Analytics • Data Analytics • Applied ML</p>
              <div className="hero-photo-wrap">
                <img src="/assets/profile.jpg" alt="Sharan Raghavendra portrait" />
              </div>
              <div className="hero-social-stack" aria-label="Social links">
                <a
                  className="hero-social-pill"
                  href="https://linkedin.com/in/sharan8623"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <i className="fa-brands fa-linkedin-in" aria-hidden="true" />
                </a>
                <a
                  className="hero-social-pill"
                  href="https://github.com/YoursSharan1226"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >
                  <i className="fa-brands fa-github" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <div className="boxes-section">
          <MeshGradientBackground />

          {/* ABOUT */}
          <section id="about" className="section about-section">
            <div className="container">
              <p className="eyebrow">About</p>
              <h2 className="section-title">What I Bring to the Table</h2>
              <div className="about-timeline" aria-label="What I bring to the Table" ref={aboutRef}>
                <div className="about-line" aria-hidden="true" />
                {aboutPoints.map((point) => (
                  <article
                    key={`${point.number}-${point.title}`}
                    className={`about-item about-item-${point.side}`}
                  >
                    <span className="about-number">{point.number}</span>
                    <h3>{point.title}</h3>
                    <p>{point.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* PROJECTS */}
          <section id="projects" className="section">
            <div className="container">
              <p className="eyebrow">Projects</p>
              <h2 className="section-title">Featured Work</h2>
              <div className="grid two-up">
                {projects.map((project) => (
                  project.noRepoLink ? (
                    <div key={project.title} className="project-flip-card">
                      <div className="flip-inner">
                        <article className="card flip-face flip-front">
                          <div className="project-image">
                            <span className="project-date-tag">{project.date}</span>
                            <img src={project.image} alt={project.title} />
                          </div>
                          <div className="card-body">
                            <h3>{project.title}</h3>
                            <p className="project-front-note">{project.description}</p>
                            <div className="tags">
                              {project.tags.map((tag) => (
                                <span key={tag}>{tag}</span>
                              ))}
                            </div>
                          </div>
                        </article>
                        <article className="card flip-face flip-back">
                          <div className="card-body">
                            <h3>{project.title}</h3>
                            <ul className="flip-back-points">
                              {project.summaryPoints.map((point) => (
                                <li key={point}>{point}</li>
                              ))}
                            </ul>
                            <div className="flip-card-footer">
                              <p className="flip-repo flip-note">{project.flipFooter}</p>
                              {project.clientLogo === 'treeni' && (
                                <div className="treeni-flip-logo" aria-label="Treeni">
                                  <span className="treeni-wordmark">treeni</span>
                                  <span className="treeni-leaf" aria-hidden="true" />
                                </div>
                              )}
                            </div>
                          </div>
                        </article>
                      </div>
                    </div>
                  ) : (
                    <a
                      key={project.title}
                      className="project-flip-card"
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="flip-inner">
                        <article className="card flip-face flip-front">
                          <div className="project-image">
                            <span className="project-date-tag">{project.date}</span>
                            <img src={project.image} alt={project.title} />
                          </div>
                          <div className="card-body">
                            <h3>{project.title}</h3>
                            <p className="project-front-note">{project.description}</p>
                            <div className="tags">
                              {project.tags.map((tag) => (
                                <span key={tag}>{tag}</span>
                              ))}
                            </div>
                          </div>
                        </article>
                        <article className="card flip-face flip-back">
                          <div className="card-body">
                            <h3>{project.title}</h3>
                            <ul className="flip-back-points">
                              {project.summaryPoints.map((point) => (
                                <li key={point}>{point}</li>
                              ))}
                            </ul>
                            <div className="flip-card-footer">
                              <p className="flip-repo">Open full project on GitHub</p>
                            </div>
                          </div>
                        </article>
                      </div>
                    </a>
                  )
                ))}
              </div>
            </div>
          </section>

          {/* EXPERIENCE */}
          <section id="experience" className="section">
            <div className="container">
              <p className="eyebrow">Experience</p>
              <h2 className="section-title">Career Journey</h2>
              <div className="grid two-up">
                {experience.map((job) => (
                  <button
                    type="button"
                    key={job.role}
                    className="card info-card experience-card"
                    onClick={() => setActiveExperience(job)}
                  >
                    <div className="experience-card-head">
                      <div className="experience-role-group">
                        <h3>{job.role}</h3>
                        <p className="company experience-company-line">
                          <span className="experience-company-name">{job.company}</span>
                          <span className="experience-company-sep" aria-hidden="true">•</span>
                          <span className="experience-location">
                            <i className="fa-solid fa-location-dot" aria-hidden="true" /> {job.location}
                          </span>
                        </p>
                      </div>
                      <span className="period-tag">{job.period}</span>
                    </div>
                    <ul>
                      {job.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* SKILLS — flat tag cloud */}
          <section id="skills" className="section">
            <div className="container">
              <p className="eyebrow">Skills</p>
              <h2 className="section-title">Technical Proficiency</h2>
              <div className="tag-cloud">
                {skills.map((group) => (
                  <div key={group.category} className="tag-row">
                    <div className="tag-cat-wrap">
                      <div className="tag-cat-label">{group.category}</div>
                    </div>
                    <div className="tag-pills">
                      {group.items.map((item) => (
                        <span key={item} className="skill-pill">
                          <i className={getSkillIconClass(item)} aria-hidden="true" />
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CERTIFICATIONS */}
          <section id="certifications" className="section">
            <div className="container">
              <p className="eyebrow">Certifications</p>
              <h2 className="section-title">Licenses &amp; Certifications</h2>
              <div className="cert-grid">
                {certifications.map((cert) => {
                  const s = issuerStyles[cert.issuer] || {};
                  return (
                    <article key={cert.name} className="cert-card">
                      <div className="cert-card-top">
                        <span className="cert-issuer" style={{ color: s.color, background: s.bg, border: `1px solid ${s.border}` }}>
                          {cert.issuer}
                        </span>
                      </div>
                      <h3 className="cert-name">{cert.name}</h3>
                      <div className="cert-card-bottom">
                        <span className="cert-date">{cert.date}</span>
                        <a href={cert.url} target="_blank" rel="noopener noreferrer" className="cert-link">
                          View Certificate ↗
                        </a>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </section>

          {/* EDUCATION */}
          <section id="education" className="section">
            <div className="container">
              <p className="eyebrow">Education</p>
              <h2 className="section-title">Academic Background</h2>
              <div className="edu-list">
                {education.map((item) => (
                  <article key={item.degree} className="edu-card">
                    <div className="edu-icon">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                        <path d="M6 12v5c3 3 9 3 12 0v-5" />
                      </svg>
                    </div>
                    <div className="edu-content">
                      <div className="edu-head">
                        <div className="edu-degree">{item.degree}</div>
                        <span className="edu-year">{item.year}</span>
                      </div>
                      <div className="edu-field">{item.field}</div>
                      <div className="edu-school">{item.institution} · {item.location}</div>
                      <p className="edu-description">{item.description}</p>
                      <div className="edu-footer">
                        <span className="edu-gpa">{item.gpa}</span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* CONTACT */}
          <section id="contact" className="section">
            <div className="container contact-grid">
              <div>
                <p className="eyebrow">Contact</p>
                <h2 className="section-title">Get in Touch</h2>
                <p className="hero-copy">
                  Open to analytics, business intelligence, and data science opportunities. Reach out for collaboration or consulting.
                </p>
                <div className="contact-links">
                  <a href="mailto:sr.raya8623@gmail.com" className="contact-link contact-link-email platform-pill pp-email">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                    <span className="platform-label">Email</span>
                  </a>
                  <a href="https://linkedin.com/in/sharan8623" target="_blank" rel="noreferrer" className="contact-link contact-link-linkedin platform-pill pp-linkedin">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="#2563eb" aria-hidden="true">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect x="2" y="9" width="4" height="12" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                    <span className="platform-label">LinkedIn</span>
                  </a>
                  <a href="https://github.com/YoursSharan1226" target="_blank" rel="noreferrer" className="contact-link contact-link-github platform-pill pp-github">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="#a78bfa" aria-hidden="true">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                    </svg>
                    <span className="platform-label">GitHub</span>
                  </a>
                </div>
              </div>
              <form
                className="card form-card"
                action="https://formsubmit.co/sr.raya8623@gmail.com"
                method="POST"
              >
                <input type="hidden" name="_subject" value="New message from portfolio contact form" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value="https://yourssharan1226.github.io/" />
                <input className="form-input" type="text" name="name" placeholder="Your Name" required />
                <input className="form-input" type="email" name="email" placeholder="Your Email" required />
                <textarea className="form-textarea" name="message" placeholder="Your Message" rows="5" required />
                <button type="submit" className="send-btn">
                  Send Message
                </button>
              </form>
            </div>
            {/* FOOTER inside contact section */}
            <div className="container">
              <div className="footer-bar">
                <span className="footer-name">
                  <span className="footer-name-primary">Sharan Raghavendra</span>{' '}
                  <span className="footer-name-gradient">Ragothaman</span>
                </span>
                <span className="footer-meta">· © 2026, Plano, Texas</span>
              </div>
            </div>
          </section>

        </div>{/* end boxes-section */}

      </main>

      {activeExperience && (
        <div className="modal-backdrop" onClick={() => setActiveExperience(null)}>
          <div className="modal card" onClick={(event) => event.stopPropagation()}>
            <button className="modal-close" onClick={() => setActiveExperience(null)}>
              Close
            </button>
            <h3>{activeExperience.role}</h3>
            <p className="company">
              {activeExperience.company} • {activeExperience.location}
            </p>
            <p>
              <strong>Responsibilities:</strong> {activeExperience.details.responsibilities}
            </p>
            <p>
              <strong>Technologies:</strong> {activeExperience.details.technologies}
            </p>
            <p>
              <strong>Impact:</strong> {activeExperience.details.impact}
            </p>
          </div>
        </div>
      )}

    </div>
  );
}
