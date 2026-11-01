import React, { useEffect, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  BrainCircuit,
  Braces,
  Cpu,
  Database,
  Menu,
  X,
} from "lucide-react";

const interests = [
  { icon: Braces, index: "A", title: "UI / UX", note: "Making software feel intuitive" },
  { icon: Cpu, index: "B", title: "Games", note: "Playful worlds and systems" },
  { icon: Database, index: "C", title: "Design", note: "Where logic meets expression" },
  { icon: BrainCircuit, index: "D", title: "AI / ML", note: "Models for real-world problems" },
];

const skillGroups = [
  { label: "LANGUAGES", items: ["Python", "Java", "C", "JavaScript", "HTML"] },
  { label: "WEB", items: ["React", "Vite", "Tailwind CSS"] },
  { label: "BACKEND / DATA", items: ["FastAPI", "scikit-learn", "Firebase", "Cloud Firestore"] },
  { label: "SECURITY", items: ["Web Crypto API", "PBKDF2", "AES-GCM"] },
  { label: "FOUNDATIONS", items: ["OOP", "Data structures & algorithms"] },
];

const certifications = [
  {
    issuer: "INFOSYS SPRINGBOARD",
    items: [
      "Java Fundamentals",
      "Introduction to Modern AI",
      "Security and Connectivity Support",
      "Endpoint Security",
      "Network Defense",
    ],
  },
  {
    issuer: "MONGODB",
    items: [
      "MongoDB Basics",
      "Vector Search Fundamentals",
      "Building RAG Apps",
      "Building AI Agents",
      "AI and Innovation: How MongoDB Enables a Resilient AI Strategy",
    ],
  },
];

const hackathons = [
  "HackNova '26 — National-Level Inter-College Hackathon organized by the IEEE Student Branch, Rajalakshmi Institute of Technology, Chennai — Participant",
  "TechFest IGNITE '26 — TechSavvy Club, Department of Information Technology, Easwari Engineering College — Participant, March 12, 2026",
  "Webify-AI, Datronix '26 National-Level Technical Symposium — Participant, February 2026",
  "Global AI Hackathon 2026 — Participant",
  "Startup Thedal — Idea-Level Hackathon, Easwari Engineering College — Participant, November 5–6, 2025",
];

const projects = [
  {
    name: "Cipher Chat",
    category: "MESSAGING / PRIVACY",
    status: "DEPLOYED",
    description: "A messaging app with account authentication, custom chat rooms and DMs, and end-to-end encryption. Password-derived room keys use PBKDF2 and AES-GCM via the Web Crypto API; temporary rooms and DMs are cleaned up after a participant is inactive for one minute.",
    contribution: "SOLO PROJECT",
    technologies: ["JavaScript", "Firebase Authentication", "Cloud Firestore", "Web Crypto API"],
    links: [{ label: "OPEN APP", href: "https://cipherchat-dbd35.web.app/" }],
  },
  {
    name: "UrbanAI",
    category: "URBAN SUSTAINABILITY / AI",
    status: "DEPLOYED",
    description: "A decision-support platform helping urban authorities prioritize sustainability interventions across city wards. It combines ward-level risk scoring and a Random Forest flood-risk model with intervention simulation and resource optimization.",
    contribution: "GROUP PROJECT / MAIN DEVELOPMENT, AI/ML & DESIGN LIBRARY",
    technologies: ["React", "Vite", "Tailwind CSS", "Python", "FastAPI", "scikit-learn"],
    links: [
      { label: "LIVE SITE", href: "https://urbanai123.netlify.app/" },
      { label: "SOURCE", href: "https://github.com/arunsmod/UrbanAI" },
    ],
  },
  {
    name: "Attendosphere",
    category: "EDUCATION / CLASSROOM",
    status: "IN PROGRESS",
    description: "A classroom-focused project designed to monitor more than attendance and help improve attendance across the whole class.",
    contribution: "GROUP PROJECT / UI/UX & CORE FUNCTIONS",
    links: [],
  },
  {
    name: "SirenSync",
    category: "HARDWARE / ESP32",
    status: "HARDWARE PROJECT",
    description: "An intelligent emergency-vehicle priority and adaptive traffic-control system built as a hardware project using an ESP32 microcontroller.",
    contribution: "GROUP PROJECT",
    links: [],
  },
  {
    name: "AuraNutri AI",
    category: "HEALTH / WELLNESS",
    status: "IN PROGRESS",
    description: "A health-monitoring and calorie-tracking app that is currently in development.",
    contribution: "PROJECT IN PROGRESS",
    links: [],
  },
  {
    name: "Sentinel Tickets",
    category: "BLOCKCHAIN / TICKETING",
    status: "NOT DEPLOYED",
    description: "A blockchain-based ticket-verification system.",
    contribution: "PROJECT",
    links: [],
  },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <nav className="nav-shell section-shell" aria-label="Main navigation">
        <a className="wordmark" href="#home" aria-label="Back to top" onClick={closeMenu}>
          <span>//</span> ARUN VARSHAN
        </a>
        <span className="nav-note">COMPUTER SCIENCE / PERSONAL SITE</span>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-menu"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={19} /> : <Menu size={19} />}
        </button>
        <div className={`nav-menu${menuOpen ? " is-open" : ""}`} id="primary-menu">
          <a href="#work" onClick={closeMenu}>WORK <span>01</span></a>
          <a href="#about" onClick={closeMenu}>ABOUT <span>02</span></a>
          <a href="#interests" onClick={closeMenu}>INTERESTS <span>03</span></a>
          <a href="#credentials" onClick={closeMenu}>CREDENTIALS <span>04</span></a>
          <a className="nav-contact" href="#contact" onClick={closeMenu}>SAY HELLO <ArrowUpRight size={13} /></a>
        </div>
      </nav>
    </header>
  );
}

function HeroGraphic() {
  return (
    <div className="hero-graphic"     aria-label="Abstract diagram showing a computer science idea moving through questions, models, building, and learning" role="img">
      <span className="graphic-label">FIG. 001 / THOUGHT → THING</span>
      <div className="graphic-grid" />
      <svg className="graphic-lines" viewBox="0 0 420 450" aria-hidden="true">
        <path d="M75 310 176 185 315 115M176 185l145 132M75 310l190 76M176 185 265 386M315 115l6 202" />
      </svg>
      <span className="graphic-node node-a"><i>01</i> QUESTION</span>
      <span className="graphic-node node-b"><i>02</i> MODEL</span>
      <span className="graphic-node node-c"><i>03</i> BUILD</span>
      <span className="graphic-node node-d"><i>04</i> LEARN</span>
      <span className="graphic-core">&lt; / &gt;</span>
      <span className="graphic-index">ITERATION<br />IS THE POINT.</span>
      <span className="graphic-coordinate">A—001 / CS</span>
    </div>
  );
}

function App() {
  useEffect(() => {
    const revealItems = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            currentObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );
    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <section className="hero" id="home">
          <div className="hero-shell section-shell">
            <div className="hero-top"><span>COMPUTER SCIENCE & DESIGN / SOFTWARE DEVELOPER</span><span>CLASS OF 2029</span></div>
            <div className="hero-copy">
              <span className="hero-kicker">HELLO, WORLD. I’M I S ARUN VARSHAN.</span>
              <h1>Code meets<br /><em>creativity.</em></h1>
              <p>I’m a second-year Computer Science and Design student exploring the space between software, user experience, games, and visual design.</p>
              <div className="hero-actions">
                <a className="hero-button" href="#about">GET TO KNOW ME <ArrowDownRight size={16} /></a>
                <a className="hero-secondary" href="https://github.com/arunsmod" target="_blank" rel="noreferrer">GITHUB <ArrowUpRight size={13} /></a>
              </div>
            </div>
            <HeroGraphic />
            <div className="hero-bottom">
              <span>CODE → DESIGN → PLAY → REPEAT</span>
              <span><i /> OPEN TO INTERNSHIPS & OPPORTUNITIES</span>
            </div>
            <span className="hero-side-note">NO. 001 — A WORK IN PROGRESS</span>
          </div>
        </section>

        <section className="work-section section-shell section-space" id="work">
          <div className="section-lead" data-reveal>
            <span className="section-index">01 / SELECTED PROJECTS</span>
            <h2>Things I’ve<br /><em>been building.</em></h2>
            <p>A growing collection of solo experiments and team projects across software, design, AI, and hardware.</p>
          </div>
          <div className="projects-grid">
            {projects.map(({ name, category, status, description, contribution, technologies, links }, index) => (
              <article className="project-card" data-reveal key={name}>
                <div className="project-card-top">
                  <span>{String(index + 1).padStart(2, "0")} / {category}</span>
                  <span className={`project-status${status === "DEPLOYED" ? " is-live" : ""}`}>
                    <i />{status}
                  </span>
                </div>
                <div className="project-card-info">
                  <h3>{name}</h3>
                  <p>{description}</p>
                  {technologies && (
                    <div className="project-tech" aria-label="Technologies used">
                      {technologies.map((technology) => <span key={technology}>{technology}</span>)}
                    </div>
                  )}
                  <div className="project-card-bottom">
                    <span className="project-contribution">{contribution}</span>
                    {links.length > 0 && (
                      <div className="project-links">
                        {links.map(({ label, href }) => (
                          <a href={href} key={href} target="_blank" rel="noreferrer">
                            {label}<ArrowUpRight size={13} />
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="about-section" id="about">
          <div className="about-shell section-shell">
            <div className="about-display" data-reveal>
              <span className="section-index">02 / A QUICK INTRO</span>
              <div className="about-mark" aria-hidden="true">
                <div className="about-mark-top"><span>ISAV / 001</span><i /></div>
                <div className="about-mark-center"><strong>CS<span>&amp;</span>D</strong></div>
                <div className="about-mark-bottom"><span>COMPUTER SCIENCE</span><span>DESIGN</span></div>
              </div>
              <span className="about-display-caption">STILL LEARNING.<br />ALWAYS BUILDING.</span>
            </div>
            <div className="about-copy" data-reveal>
              <span className="about-label">THE SHORT VERSION / HE·HIM</span>
              <h2>Designing how<br />software <em>feels.</em></h2>
              <p>
                I’m I S Arun Varshan, a second-year B.E. Computer Science and Design
                student at Easwari Engineering College, graduating in 2029. I’m interested
                in how software works under the hood and how people experience it on screen.
              </p>
              <p>
                Outside my coursework, I’m drawn to AI/ML, UI/UX, games, and design—the
                places where technical thinking meets curiosity and play.
              </p>
              <div className="about-facts">
                <div><span>DEGREE</span><b>B.E. Computer Science & Design</b><small>EASWARI ENGINEERING COLLEGE</small></div>
                <div><span>GRADUATION</span><b>2029</b><small>SECOND YEAR</small></div>
              </div>
              <div className="social-links">
                <a href="https://github.com/arunsmod" target="_blank" rel="noreferrer">GITHUB <ArrowUpRight size={13} /></a>
                <a href="https://www.linkedin.com/in/arun-varshan-i-s-7aa853381/" target="_blank" rel="noreferrer">LINKEDIN <ArrowUpRight size={13} /></a>
              </div>
            </div>
          </div>
        </section>

        <section className="interests-section section-shell section-space" id="interests">
          <div className="interests-heading" data-reveal>
            <span className="section-index">03 / CURRENTLY INTO</span>
            <h2>Code, play<br />& <em>pixel craft.</em></h2>
          </div>
          <div className="interest-list">
            {interests.map(({ icon: Icon, index, title, note }) => (
              <article className="interest-row" data-reveal key={index}>
                <span className="interest-index">{index}</span>
                <Icon size={19} strokeWidth={1.5} />
                <strong>{title}</strong>
                <span>{note}</span>
                <ArrowUpRight size={15} />
              </article>
            ))}
            <div className="skill-groups">
              {skillGroups.map(({ label, items }) => (
                <div className="skill-group" key={label}>
                  <span>{label}</span>
                  <div className="skill-tags">
                    {items.map((skill) => <b key={skill}>{skill}</b>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="credentials-section section-shell section-space" id="credentials">
          <div className="credentials-heading" data-reveal>
            <span className="section-index">04 / LEARNING & EVENTS</span>
            <h2>Curiosity,<br /><em>in practice.</em></h2>
          </div>
          <div className="credentials-content">
            <div className="certification-grid">
              {certifications.map(({ issuer, items }) => (
                <article className="credential-card" data-reveal key={issuer}>
                  <span className="credential-label">CERTIFICATIONS / {issuer}</span>
                  <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>
                </article>
              ))}
            </div>
            <article className="events-card" data-reveal>
              <span className="credential-label">HACKATHONS / PARTICIPATION</span>
              <ul>{hackathons.map((event) => <li key={event}>{event}</li>)}</ul>
            </article>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-shell section-shell">
            <span className="section-index">05 / SAY HELLO</span>
            <div className="contact-main" data-reveal>
              <span className="contact-kicker">&gt; OPEN TO INTERNSHIPS & OPPORTUNITIES</span>
              <h2>Let’s make<br /><em>something.</em></h2>
              <div className="contact-bottom">
                <p>Interested in internship opportunities, thoughtful collaborations, or just talking about tech, games, and design?</p>
                <a href="mailto:arunvarshan62@gmail.com">ARUNVARSHAN62@GMAIL.COM <ArrowUpRight size={17} /></a>
              </div>
            </div>
            <span className="contact-mark" aria-hidden="true">AVAILABLE<br />TO CONNECT<br />↗</span>
          </div>
        </section>
      </main>
      <footer className="site-footer section-shell">
        <a className="wordmark" href="#home"><span>//</span> ARUN VARSHAN</a>
        <span>BUILT FROM CURIOSITY / {new Date().getFullYear()}</span>
        <a href="#home">BACK UP ↑</a>
      </footer>
    </>
  );
}

export default App;
