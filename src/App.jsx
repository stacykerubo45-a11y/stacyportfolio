import { useState } from 'react';
import './App.css';
import ServicesPage from './ServicesPage.jsx';
const BASE_URL = import.meta.env.BASE_URL;
const BASE_PATH = BASE_URL.replace(/\/$/, '');

// TODO: Replace this with your real WhatsApp number in international format.
// Example: const WHATSAPP_LINK = 'https://wa.me/2547XXXXXXXX';
const WHATSAPP_LINK = 'https://wa.me/254717024521?text=Hello%20Stacy,%20I%20want%20to%20discuss%20a%20project%20with%20you.'; // Replace with your WhatsApp number before publishing.
const GITHUB_LINK = 'https://github.com/stacykerubo45-a11y';
const LINKEDIN_LINK = 'https://www.linkedin.com/in/stacy-gekara-8a3b95398/';

function Icon({ name, size = 18 }) {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
  };

  const paths = {
    arrow: <><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></>,
    down: <path d="m6 9 6 6 6-6" />,
    github: <><path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 19 4.77 5.07 5.07 0 0 0 18.91 1S17.73.65 15 2.48a13.38 13.38 0 0 0-7 0C5.27.65 4.09 1 4.09 1A5.07 5.07 0 0 0 4 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 8 18.13V22" /></>,
    linkedin: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></>,
    menu: <><path d="M4 6h16" /><path d="M4 12h16" /><path d="M4 18h16" /></>,
    close: <><path d="m18 6-12 12" /><path d="m6 6 12 12" /></>,
    code: <><path d="m8 17-5-5 5-5" /><path d="m16 7 5 5-5 5" /><path d="m14 4-4 16" /></>,
    monitor: <><rect x="3" y="4" width="18" height="13" rx="2" /><path d="M8 21h8" /><path d="M12 17v4" /></>,
    spark: <><path d="m12 3 1.9 5.8L20 11l-6.1 2.2L12 19l-1.9-5.8L4 11l6.1-2.2L12 3Z" /><path d="m19 14 1 2.5 2 1-2 1-1 2.5-1-2.5-2-1 2-1 1-2.5Z" /></>,
  };

  return <svg {...common}>{paths[name] || paths.arrow}</svg>;
}

const projects = [
  {
    number: '01',
    type: 'WEB APPLICATION · NODE.JS',
    title: 'Messaging & Logistics Dashboard',
    description:
      'A web application for managing contacts, SMS messaging, scheduling, templates, and messaging activity.',
    tags: ['React', 'Node.js', 'MongoDB'],
    image: `${BASE_URL}images/salhiya.webp`,
    imageAlt: 'Cargo messaging application dashboard',
  },
  {
    number: '02',
    type: 'BUSINESS WEBSITE · E-COMMERCE',
    title: 'Dheer Distributors',
    description:
      'A responsive product catalogue designed to help customers browse products and enquire about available items.',
    tags: ['React', 'SQL', 'Responsive Design'],
    image: `${BASE_URL}images/dheer.webp`,
    imageAlt: 'Dheer Distributors product catalogue website',
  },
  {
    number: '03',
    type: 'RESTAURANT WEBSITE · CONCEPT',
    title: 'Akira Restaurant',
    description:
      'A restaurant website concept featuring an elegant visual identity, menu highlights, and clear customer calls to action.',
    tags: ['React', 'JavaScript', 'CSS'],
    image: `${BASE_URL}images/akira.webp`,
    imageAlt: 'Akira Restaurant website design',
  },
];

const services = [
  {
    icon: 'monitor',
    title: 'Business Websites',
    text: 'Modern, responsive websites that help businesses present their services clearly and build trust online.',
  },
  {
    icon: 'code',
    title: 'React Development',
    text: 'Interactive landing pages and web interfaces built with reusable components and clean, maintainable code.',
  },
  {
    icon: 'spark',
    title: 'WordPress & Support',
    text: 'WordPress website setup, content updates, responsive improvements, and ongoing website support.',
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);
 const navItems = [
  ['Home', BASE_URL],
  ['Services', `${BASE_URL}services/`],
  ['Selected Work', `${BASE_URL}#work`],
  ['About', `${BASE_URL}#about`],
  ['Contact', `${BASE_URL}#contact`],
];
  // A dedicated Services page is served at /services.
  const currentPath = window.location.pathname
  .replace(BASE_PATH, '')
  .replace(/\/$/, '') || '/';

if (currentPath === '/services') {
  return <ServicesPage />;
}
  return (
    <div className="site-shell">
      <div className="top-strip">
        <div className="top-strip-inner">
          <a className="top-location" href={GITHUB_LINK} target="_blank" rel="noreferrer">
            <Icon name="github" size={16} /> <span>github.com/stacykerubo45-a11y</span>
          </a>
          <a className="top-location" href={LINKEDIN_LINK} target="_blank" rel="noreferrer">
            <Icon name="linkedin" size={15} /> <span>linkedin.com/in/stacy-gekara-8a3b95398</span>
                      </a>
                      
          <div className="top-note">NAIROBI, KENYA <span className="top-dot" /> OPEN TO SELECT PROJECTS</div>
          <a className="top-cta" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
            Let's work together <Icon name="arrow" size={15} />
          </a>
        </div>
      </div>

      <header className="main-header">
        <a className="brand" href={BASE_URL} aria-label="Stacy Gekara home" onClick={closeMenu}>
          <span className="brand-mark">S<span>G</span></span>
          <span className="brand-copy"><strong>STACY GEKARA</strong><small>WEB DEVELOPER</small></span>
        </a>

        <button
          className="mobile-menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <Icon name={menuOpen ? 'close' : 'menu'} size={23} />
        </button>

        <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
          {navItems.map(([label, href]) => (
            <a key={label} href={href} onClick={closeMenu}>{label}</a>
          ))}
          <a className="nav-cta" href={`${BASE_URL}#contact`} onClick={closeMenu} >Let's Talk <Icon name="arrow" size={16} /></a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <div className="hero-eyebrow"><span className="eyebrow-line" /> WEB DEVELOPMENT · NAIROBI, KENYA</div>
            <h1>I build websites that help <span>businesses grow.</span></h1>
            <p className="hero-description">I’m Stacy, a web developer creating responsive business websites, landing pages, and web applications with thoughtful design and practical functionality.</p>
            <div className="hero-actions">
              <a className="button button-dark" href={`${BASE_URL}#work`}>Explore my work <Icon name="arrow" size={17} /></a>
              <a className="button button-outline" href={`${BASE_URL}#contact`}>Let's talk</a>
            </div>
            <div className="hero-bottom-row">
              <div className="social-links" aria-label="Social links">
                <a href={GITHUB_LINK} target="_blank" rel="noreferrer" aria-label="GitHub"><Icon name="github" size={18} /></a>
               
                <a href={LINKEDIN_LINK} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Icon name="linkedin" size={17} /></a>
               <p>phone: +254 717 024 521</p>
              </div>
              <a className="scroll-cue" href={`${BASE_URL}#services`}><span className="scroll-cue-circle"><Icon name="down" size={15} /></span> SCROLL TO EXPLORE</a>
            </div>
          </div>

          <div className="hero-image-panel" aria-label="A developer workspace with a laptop">
            <img
              className="hero-image"
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=85"
              alt="Laptop and workspace used for web development"
            />
            <div className="image-shade" />
            <div className="image-caption"><span className="caption-kicker">FROM IDEA</span><span className="caption-arrow">→</span><span className="caption-kicker">TO LAUNCH</span></div>
            <div className="floating-note"><span className="status-indicator" /><div><strong>Building for the web</strong><small>Design · Develop · Improve</small></div></div>
            <div className="image-index">01 <span>/</span> 03</div>
          </div>
          <div className="hero-vertical-label">DESIGN WITH PURPOSE · BUILD WITH CARE</div>
        </section>

        <section className="tech-band" aria-label="Technologies">
          <span>WHAT I WORK WITH</span>
          <div className="tech-list"><b>React</b><i /> <b>JavaScript</b><i /> <b>Node.js</b><i /> <b>WordPress</b><i /> <b>SQL & MongoDB</b></div>
        </section>

        <section className="section services-section" id="services">
          <div className="section-heading">
            <div><span className="section-kicker">HOW I CAN HELP</span><h2>Useful websites.<br /><em>Thoughtful execution.</em></h2></div>
            <p>I work with businesses and teams to create clear, accessible digital experiences that look good and work well on the devices people use every day.</p>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <article className="service-card" key={service.title}>
                <div className="service-card-top"><span className="service-icon"><Icon name={service.icon} size={21} /></span><span className="service-number">0{index + 1}</span></div>
                <h3>{service.title}</h3><p>{service.text}</p>
                <a href="#contact" className="text-link">Discuss a project <Icon name="arrow" size={16} /></a>
              </article>
            ))}
          </div>
        </section>

        <section className="section work-section" id="work">
          <div className="section-heading work-heading">
            <div><span className="section-kicker">SELECTED WORK</span><h2>A few things<br /><em>I’ve been building.</em></h2></div>
            <p>A selection of website and application work that reflects my interest in solving real business problems through practical development.</p>
          </div>
          <div className="projects-grid">
  {projects.map((project) => (
    <article className="project-card" key={project.number}>
      <div className="project-visual">
        <img
          className="project-screenshot"
          src={project.image}
          alt={project.imageAlt}
          loading="lazy"
        />
      </div>

      <div className="project-info">
        <div className="project-type">
          <span>{project.type}</span>
          <span>{project.number}</span>
        </div>

        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <div className="project-tags">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </article>
  ))}
</div>
          <p className="project-note">Project details can be shared in more depth during a conversation. Private client information and credentials are not displayed here.</p>
        </section>

        <section className="about-section" id="about">
          <div className="about-accent"><span>ABOUT ME</span><span className="about-mark">SG.</span></div>
          <div className="about-content"><span className="section-kicker">A PRACTICAL, CURIOUS DEVELOPER</span><h2>Good work starts with <em>understanding the problem.</em></h2><p>I’m a Nairobi-based web developer who enjoys turning ideas into useful digital experiences. My work spans responsive frontends, business websites, and web applications. I value clear communication, considered design, and building things that are straightforward to use and maintain.</p><a href="#contact" className="button button-light">Tell me about your project <Icon name="arrow" size={17} /></a></div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-main"><span className="section-kicker">HAVE A PROJECT IN MIND?</span><h2>Let's build something<br /><em>useful together.</em></h2><p>Tell me what you’re working on, what you need, and where you’d like to go next.</p><a className="button button-orange" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">Start a conversation <Icon name="arrow" size={17} /></a></div>
          <div className="contact-side"><div className="contact-item"><span>LOCATION</span><strong>Nairobi, Kenya</strong></div><div className="contact-item"><span>CONNECT</span><a href={GITHUB_LINK} target="_blank" rel="noreferrer">GitHub <Icon name="arrow" size={15} /></a><a href={LINKEDIN_LINK} target="_blank" rel="noreferrer">LinkedIn <Icon name="arrow" size={15} /></a><p>phone: +254 717 024 521</p></div> <div className="contact-item"><span>FOCUS</span><strong>Business websites · React · Web apps</strong></div></div>
        </section>
      </main>

      <footer className="site-footer"><a className="footer-brand" href="#home">STACY GEKARA<span> / WEB DEVELOPER</span></a><span>Designed and built with care · © {new Date().getFullYear()}</span><a href="#home" className="back-top">BACK TO TOP ↑</a></footer>
    </div>
  );
}

export default App;
