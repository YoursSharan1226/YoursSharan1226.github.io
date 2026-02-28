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
    title: 'Telco Churn Intelligence',
    description:
      'End-to-end churn prediction system with FastAPI, Streamlit, and executive Tableau analytics.',
    tags: ['Logistic Regression', 'FastAPI', 'Streamlit', 'Tableau', 'EDA'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop',
    summary:
      'Production churn intelligence platform combining ML scoring, API inference, and leadership dashboards for retention strategy.',
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
    title: 'Topic Modelling: Social Media Conversations',
    description:
      'Scalable BERTopic pipeline extracting interpretable themes from 70K+ posts across a 65M+ corpus.',
    tags: ['BERTopic', 'SBERT', 'UMAP', 'HDBSCAN', 'NLP'],
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1200&h=800&fit=crop',
    summary:
      'Large-scale unsupervised NLP workflow that turns noisy social conversations into interpretable topics and stance patterns.',
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
    description:
      'Response propensity modeling to maximize campaign lift while minimizing spend waste.',
    tags: ['XGBoost', 'Logistic Regression', 'Top-K Metrics', 'Segmentation'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop',
    summary:
      'Propensity modeling framework that ranks high-value responders and improves campaign performance under fixed budgets.',
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
  {
    title: 'Airbnb Segmentation with PCA + Clustering',
    description:
      'Unsupervised segmentation of NYC Airbnb listings with geographic and cluster insights.',
    tags: ['PCA', 'K-Means', 'Bisecting K-Means', 'Folium'],
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=800&fit=crop',
    summary:
      'Clustering-driven market segmentation of Airbnb inventory to surface pricing and host behavior opportunity groups.',
    overview:
      'Segmented listings by price, availability, and host behavior to reveal market positioning opportunities.',
    process:
      'Preprocessing -> PCA (98% variance) -> clustering evaluation -> geo-visual analysis.',
    tools: 'Python, Scikit-learn, Pandas, Folium, Matplotlib',
    outcome:
      'Identified 4 meaningful host/listing segments that support pricing and supply strategy decisions.',
    github: 'https://github.com/YoursSharan1226/Airbnb-Listing-Segmentation-using-Clustering-PCA',
  },
];

const experience = [
  {
    role: 'Junior Business Analyst',
    company: 'Crytonix Remote Tech',
    period: 'Recent',
    bullets: [
      'Drove product strategy and release planning with user-story clarity for engineering teams.',
      'Mapped module flows and validated end-to-end product behavior through QA cycles.',
      'Enabled secure client API integrations and validated performance and functionality.',
    ],
    details: {
      responsibilities:
        'Translated stakeholder needs into implementation-ready stories and coordinated quality validation across features.',
      technologies: 'Jira, API Testing, Product Analytics, User Story Mapping, QA Flows',
      impact:
        'Improved delivery consistency and reduced ambiguity between business and engineering teams.',
    },
  },
  {
    role: 'Business Analyst Intern',
    company: 'Foyr',
    period: 'Earlier',
    bullets: [
      'Analyzed subscription customer behavior and engagement trends.',
      'Maintained KPI dashboards and shared performance narratives with stakeholders.',
      'Produced actionable recommendations from reporting and customer communication data.',
    ],
    details: {
      responsibilities:
        'Owned recurring analytics and reporting workflows to support customer success and growth decisions.',
      technologies: 'Excel, Pivot Tables, Dashboarding, Reporting, Customer Analytics',
      impact:
        'Improved visibility into subscription health and strengthened data-informed stakeholder discussions.',
    },
  },
];

const skills = [
  { title: 'Languages', items: ['Python', 'SQL', 'R', 'JavaScript'] },
  { title: 'Analytics & BI', items: ['Tableau', 'Power BI', 'Excel', 'Streamlit', 'Databricks'] },
  {
    title: 'ML & Data Science',
    items: ['Supervised ML', 'Unsupervised ML', 'NLP', 'Forecasting', 'Feature Engineering'],
  },
  { title: 'Delivery Stack', items: ['FastAPI', 'GitHub', 'Docker', 'Jira', 'ETL'] },
];

const education = [
  {
    degree: 'Masters in Business Analytics',
    institution: 'University of Texas at Arlington',
    year: 'Aug 2024 - May 2026',
    description:
      'Coursework includes Data Science, Data Warehousing, Cloud Computing, Marketing Analytics, Forecasting, and Statistics for Business.',
  },
  {
    degree: 'Post Graduate Program in Data Science and Machine Learning',
    institution: 'National Institute of Information Technology',
    year: 'Completed',
    description:
      'Focused on SQL, Tableau, Python, ML fundamentals, time series, and NLP.',
  },
];

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
              <h1 className="hero-title">Sharan Raghavendra Ragothaman</h1>
              <p className="hero-copy hero-copy-small">Dallas, TX, US</p>
              <p className="eyebrow">Business Data Analyst</p>
              <p className="hero-copy">
                I turn complex business data into actionable insights and measurable growth.
              </p>
              <div className="cta-row">
                <a className="btn btn-primary" href="#projects">
                  View Projects
                </a>
                <a className="btn btn-secondary" href="#contact">
                  Contact Me
                </a>
                <a className="btn btn-secondary" href="/assets/Sharan_Ragothaman_Resume.pdf" download>
                  Download Resume
                </a>
              </div>
              <p className="hero-copy hero-copy-small">
                Dallas, TX | <a href="mailto:sr.raya8623@gmail.com">sr.raya8623@gmail.com</a>
              </p>
            </div>
            <div className="hero-photo-wrap">
              <img src="/assets/profile.jpg" alt="Sharan Raghavendra portrait" />
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="container">
            <p className="eyebrow">Projects</p>
            <h2 className="section-title">Featured Work</h2>
            <div className="grid two-up">
              {projects.map((project) => (
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
                        <p>{project.summary}</p>
                        <p className="flip-repo">Open full project on GitHub</p>
                      </div>
                    </article>
                  </div>
                </a>
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
                  className="card info-card"
                  onClick={() => setActiveExperience(job)}
                >
                  <span className="meta">{job.period}</span>
                  <h3>{job.role}</h3>
                  <p className="company">{job.company}</p>
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
            <div className="grid two-up">
              {skills.map((group) => (
                <div key={group.title} className="card info-card">
                  <h3>{group.title}</h3>
                  <div className="tags">
                    {group.items.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </div>
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
                  <span className="meta">{item.year}</span>
                  <h3>{item.degree}</h3>
                  <p className="company">{item.institution}</p>
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
