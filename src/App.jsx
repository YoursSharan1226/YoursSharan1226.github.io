import { useMemo, useState } from 'react';

const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];

const projects = [
  {
    title: 'Treeni - Document Intelligence RAG System',
    date: 'Ongoing',
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
    flipFooter: 'GitHub link will be shared after project completion.',
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
    company: 'Crytonix Remote Tech | Chennai, INDIA',
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
    company: 'Foyr | Chennai (Remote), INDIA',
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
    title: 'Core Engineering & Data Foundations',
    items: ['Python', 'SQL', 'R', 'C++', 'Bash', 'ETL / ELT Pipelines', 'Data Modeling', 'MySQL'],
  },
  {
    title: 'Intelligent Systems & Applied AI',
    items: [
      'Pandas',
      'NumPy',
      'scikit-learn',
      'Regression',
      'XGBoost',
      'ARIMA / SARIMA / SARIMAX / VAR',
      'Time Series Forecasting',
      'Statistical Analysis',
      'Exploratory Data Analysis',
      'PyTorch',
      'Hugging Face',
      'Sentence-BERT',
      'BERTopic',
      'RAG',
    ],
  },
  {
    title: 'Cloud Architecture & Deployment Stack',
    items: ['FastAPI', 'Docker', 'Kubernetes', 'Databricks'],
  },
  {
    title: 'Insights, Visualization & Collaboration',
    items: ['Tableau', 'Streamlit', 'Excel', 'Git', 'GitHub', 'Jira'],
  },
];

const education = [
  {
    degree: 'Masters in Business Analytics',
    institution: 'University of Texas at Arlington, TX, US',
    year: 'Aug 2024 - May 2026',
    description:
      'Coursework includes Data Science, Data Warehousing, Cloud Computing, Marketing Analytics, Forecasting, and Statistics for Business.',
  },
  {
    degree: 'Post Graduate Program in Data Science and Machine Learning',
    institution: 'National Institute of Information Technology, India',
    year: 'Nov 2022 to Dec 2023',
    description:
      'Focused on SQL, Tableau, Python, ML fundamentals, time series, and NLP.',
  },
];

const skillIconMap = {
  Python: 'fa-brands fa-python',
  SQL: 'fa-solid fa-database',
  R: 'fa-solid fa-chart-line',
  'C++': 'fa-solid fa-code',
  Bash: 'fa-solid fa-terminal',
  'ETL / ELT Pipelines': 'fa-solid fa-diagram-project',
  'Data Modeling': 'fa-solid fa-cubes',
  MySQL: 'fa-solid fa-database',
  Pandas: 'fa-solid fa-table',
  NumPy: 'fa-solid fa-square-root-variable',
  'scikit-learn': 'fa-solid fa-brain',
  Regression: 'fa-solid fa-chart-line',
  XGBoost: 'fa-solid fa-bolt',
  'ARIMA / SARIMA / SARIMAX / VAR': 'fa-solid fa-wave-square',
  'Time Series Forecasting': 'fa-solid fa-clock-rotate-left',
  'Statistical Analysis': 'fa-solid fa-sigma',
  'Exploratory Data Analysis': 'fa-solid fa-magnifying-glass-chart',
  PyTorch: 'fa-solid fa-microchip',
  'Hugging Face': 'fa-solid fa-face-smile',
  'Sentence-BERT': 'fa-solid fa-comment-dots',
  BERTopic: 'fa-solid fa-tags',
  RAG: 'fa-solid fa-link',
  FastAPI: 'fa-solid fa-gauge-high',
  Docker: 'fa-brands fa-docker',
  Kubernetes: 'fa-solid fa-dharmachakra',
  Databricks: 'fa-solid fa-layer-group',
  Tableau: 'fa-solid fa-chart-pie',
  Streamlit: 'fa-solid fa-sliders',
  Excel: 'fa-solid fa-file-excel',
  Git: 'fa-brands fa-git-alt',
  GitHub: 'fa-brands fa-github',
  Jira: 'fa-brands fa-jira',
};

const getSkillIconClass = (item) => skillIconMap[item] || 'fa-solid fa-circle-nodes';

export default function App() {
  const [activeExperience, setActiveExperience] = useState(null);
  const [showToast, setShowToast] = useState(false);

  const year = useMemo(() => new Date().getFullYear(), []);

  const handleContactSubmit = (event) => {
    event.preventDefault();
    setShowToast(true);
    event.currentTarget.reset();
    setTimeout(() => setShowToast(false), 2500);
  };

  return (
    <div className="app-shell">
      <header className="site-nav">
        <div className="container nav-inner">
          <a className="brand" href="#home">
            Sharan Raghavendra
          </a>
          <nav className="nav-links" aria-label="Primary">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="container hero-grid">
            <div>
              <h1 className="hero-title">Sharan Raghavendra Ragothman</h1>
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
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="container">
            <p className="eyebrow">Projects</p>
            <h2 className="section-title">Featured Work</h2>
            <div className="grid two-up">
              {projects.map((project) => (
                project.noRepoLink ? (
                  <div key={project.title} className="project-flip-card project-flip-card-static">
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
                          <p className="flip-repo flip-note">{project.flipFooter}</p>
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
                          <p>{project.description}</p>
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
                          <p className="flip-repo">Open full project on GitHub</p>
                        </div>
                      </article>
                    </div>
                  </a>
                )
              ))}
            </div>
          </div>
        </section>

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
                      <p className="company">{job.company}</p>
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

        <section id="skills" className="section">
          <div className="container">
            <p className="eyebrow">Skills</p>
            <h2 className="section-title">Technical Proficiency</h2>
            <div className="skills-lanes">
              {skills.map((group, index) => (
                <article key={group.title} className="skill-lane">
                  <div className="skill-lane-head">
                    <span className="skill-index">{String(index + 1).padStart(2, '0')}</span>
                    <h3>{group.title}</h3>
                  </div>
                  <ul className="skill-items-list">
                    {group.items.map((item) => (
                      <li key={item}>
                        <i className={getSkillIconClass(item)} aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="education" className="section">
          <div className="container">
            <p className="eyebrow">Education</p>
            <h2 className="section-title">Academic Background</h2>
            <div className="timeline">
              {education.map((item) => (
                <article key={item.degree} className="card timeline-card">
                  <div className="education-card-head">
                    <div className="education-role-group">
                      <h3>{item.degree}</h3>
                      <p className="company">{item.institution}</p>
                    </div>
                    <span className="period-tag">{item.year}</span>
                  </div>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="container contact-grid">
            <div>
              <p className="eyebrow">Contact</p>
              <h2 className="section-title">Get in Touch</h2>
              <p className="hero-copy">
                Open to analytics, business intelligence, and data science opportunities. Reach out for collaboration or consulting.
              </p>
              <div className="contact-links">
                <a href="mailto:sr.raya8623@gmail.com">Email</a>
                <a href="https://linkedin.com/in/sharan8623" target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
                <a href="https://github.com/YoursSharan1226" target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </div>
            </div>
            <form className="card form-card" onSubmit={handleContactSubmit}>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea placeholder="Your Message" rows="5" required />
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">© {year} Sharan Raghavendra. All rights reserved.</div>
      </footer>

      {activeExperience && (
        <div className="modal-backdrop" onClick={() => setActiveExperience(null)}>
          <div className="modal card" onClick={(event) => event.stopPropagation()}>
            <button className="modal-close" onClick={() => setActiveExperience(null)}>
              Close
            </button>
            <h3>{activeExperience.role}</h3>
            <p className="company">{activeExperience.company}</p>
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

      {showToast && <div className="toast card">Message sent successfully!</div>}
    </div>
  );
}
