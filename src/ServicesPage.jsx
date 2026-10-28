import { useState } from 'react';
import './Services.css';
const BASE_URL = import.meta.env.BASE_URL;


const WHATSAPP_LINK = 'https://wa.me/254717024521?text=Hello%20Stacy,%20I%20want%20to%20discuss%20a%20project%20with%20you.'; // Replace with your WhatsApp number before publishing.
const GITHUB_LINK = 'https://github.com/stacykerubo45-a11y';
const LINKEDIN_LINK = 'https://www.linkedin.com/in/stacy-gekara-8a3b95398/';


function ServiceIcon({ name, size = 22 }) {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.7,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
  };

  const paths = {
    web: <><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 9h18" /><path d="M7 6.5h.01M10 6.5h.01" /><path d="m9 14 2 2 4-4" /></>,
    landing: <><rect x="4" y="3" width="16" height="18" rx="2" /><path d="M8 8h8M8 12h5M8 16h8" /><path d="m16 11 2 2-2 2" /></>,
    code: <><path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 5l-4 14" /></>,
    wordpress: <><circle cx="12" cy="12" r="9" /><path d="m7 8 4 10 2-5 2 5 3-8" /><path d="M5.5 10h3M15.5 8h3" /></>,
    app: <><rect x="3" y="3" width="8" height="8" rx="1.5" /><rect x="13" y="3" width="8" height="5" rx="1.5" /><rect x="13" y="10" width="8" height="11" rx="1.5" /><rect x="3" y="13" width="8" height="8" rx="1.5" /></>,
    support: <><path d="M12 3 19 6v5c0 4.5-3 7.5-7 10-4-2.5-7-5.5-7-10V6l7-3Z" /><path d="m9 12 2 2 4-4" /></>,
    arrow: <><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></>,
    menu: <><path d="M4 6h16M4 12h16M4 18h16" /></>,
    close: <><path d="m18 6-12 12M6 6l12 12" /></>,
    github: <><path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 19 4.77 5.07 5.07 0 0 0 18.91 1S17.73.65 15 2.48a13.38 13.38 0 0 0-7 0C5.27.65 4.09 1 4.09 1A5.07 5.07 0 0 0 4 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 8 18.13V22" /></>,
    linkedin: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></>,
  };

  return <svg {...common}>{paths[name] || paths.arrow}</svg>;
}

const serviceItems = [
  {
    number: '01',
    icon: 'web',
    title: 'Business Websites',
    description: 'Professional, responsive websites that explain what your business does, build credibility and make it easy for customers to get in touch.',
    includes: ['Responsive page layouts', 'Services and contact sections', 'WhatsApp and enquiry links', 'Basic on-page SEO setup'],
    label: 'FOR SMALL & GROWING BUSINESSES',
  },
  {
    number: '02',
    icon: 'landing',
    title: 'Landing Pages',
    description: 'Focused pages for a service, product, campaign or event, designed to guide visitors toward one clear next step.',
    includes: ['Clear value proposition', 'Call-to-action placement', 'Mobile-first design', 'Contact or enquiry flow'],
    label: 'FOR CAMPAIGNS & OFFERS',
  },
  {
    number: '03',
    icon: 'code',
    title: 'React Frontend Development',
    description: 'Interactive, reusable web interfaces built with React and JavaScript, with attention to usability, responsive behaviour and maintainability.',
    includes: ['Reusable React components', 'Responsive interfaces', 'API integration where required', 'Frontend fixes and improvements'],
    label: 'FOR WEB PRODUCTS & TEAMS',
  },
  {
    number: '04',
    icon: 'wordpress',
    title: 'WordPress Websites',
    description: 'WordPress website setup, page building and improvements for organisations that need a content-managed website they can update.',
    includes: ['Page layout and styling', 'Mobile responsiveness', 'Content and image updates', 'Practical handover guidance'],
    label: 'FOR CONTENT-LED WEBSITES',
  },
  {
    number: '05',
    icon: 'app',
    title: 'Web Applications',
    description: 'Practical web tools and dashboards that bring workflows, forms or data into one place, scoped to the actual problem the business needs to solve.',
    includes: ['Frontend and API integration', 'Forms and data workflows', 'Database-backed features', 'Testing and deployment support'],
    label: 'FOR SPECIFIC BUSINESS WORKFLOWS',
  },
  {
    number: '06',
    icon: 'support',
    title: 'Website Support & Improvements',
    description: 'Ongoing help for an existing website, from small content changes and layout fixes to agreed maintenance tasks.',
    includes: ['Content and image changes', 'Responsive issue fixes', 'Basic performance checks', 'Agreed monthly support'],
    label: 'FOR EXISTING WEBSITES',
  },
];

const processSteps = [
  { number: '01', title: 'Understand', text: 'We discuss your business, audience, goals, timeline and must-have features.' },
  { number: '02', title: 'Plan the scope', text: 'You receive a clear outline of deliverables, responsibilities, cost and milestones.' },
  { number: '03', title: 'Build & review', text: 'I share progress at agreed points and make the revisions included in the scope.' },
  { number: '04', title: 'Launch & hand over', text: 'We test the agreed functionality, confirm approval and plan any ongoing support.' },
];

function SiteHeader({ menuOpen, setMenuOpen }) {
  const closeMenu = () => setMenuOpen(false);
  return (
    <>
      <div className="top-strip">
        <div className="top-strip-inner">
          <a className="top-location" href={GITHUB_LINK} target="_blank" rel="noreferrer">
            <ServiceIcon name="github" size={16} /> <span>github.com/stacykerubo45-a11y</span>
          </a>
          <div className="top-note">NAIROBI, KENYA <span className="top-dot" /> OPEN TO SELECT PROJECTS</div>
          <a className="top-cta" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
            Let's work together <ServiceIcon name="arrow" size={15} />
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
          <ServiceIcon name={menuOpen ? 'close' : 'menu'} size={23} />
        </button>
        <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
          <a href={BASE_URL} onClick={closeMenu}>Home</a>
          <a className="is-active" href={`${BASE_URL}services/`} aria-current="page" onClick={closeMenu}>Services</a>
          <a href={`${BASE_URL}#work`} onClick={closeMenu}>Selected Work</a>
          <a href={`${BASE_URL}#about`} onClick={closeMenu}>About</a>
          <a href={`${BASE_URL}#contact`} onClick={closeMenu}>Contact</a>
          <a className="nav-cta" href={`${BASE_URL}#service-contact`} onClick={closeMenu}>Let's Talk <ServiceIcon name="arrow" size={16} /></a>
        </nav>
      </header>
    </>
  );
}

function ServicesPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="site-shell services-page" id="top">
      <SiteHeader menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main>
        <section className="services-hero">
          <div className="services-hero-copy">
            <div className="hero-eyebrow"><span className="eyebrow-line" /> SERVICES · WEB DEVELOPMENT</div>
            <h1>Digital services,<br /><span>built around your goals.</span></h1>
            <p>I help businesses and teams turn ideas into useful, responsive websites and web experiences—from a clear first page to practical application features.</p>
            <div className="hero-actions">
              <a className="button button-dark" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
                Discuss a project <ServiceIcon name="arrow" size={17} />
              </a>
              <a className="button button-outline" href={`${BASE_URL}#work`}>View selected work</a>
            </div>
            <div className="services-hero-foot"><span>01 / DISCOVER</span><span>02 / DESIGN & BUILD</span><span>03 / IMPROVE</span></div>
          </div>
          <div className="services-hero-visual">
            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=85" alt="Website analytics displayed on a laptop in a modern workspace" />
            <div className="services-visual-shade" />
            <div className="services-floating-card"><span className="services-card-mark"><ServiceIcon name="code" size={18} /></span><div><strong>Thoughtful development</strong><small>Responsive · Practical · Maintainable</small></div><span className="status-indicator" /></div>
            <div className="services-visual-caption">FROM BUSINESS NEED<br />TO DIGITAL SOLUTION</div>
          </div>
        </section>

        <section className="service-intro-band">
          <span>WHAT I CAN HELP WITH</span>
          <p>Clear scope. Useful functionality. A thoughtful experience on every screen.</p>
        </section>

        <section className="service-listing section" id="service-list">
          <div className="section-heading">
            <div><span className="section-kicker">SERVICES</span><h2>Choose what you<br /><em>need to move forward.</em></h2></div>
            <p>Every project is different. We can start with a defined service or discuss the problem you are trying to solve, then agree on a scope that fits.</p>
          </div>
          <div className="service-detail-grid">
            {serviceItems.map((service) => (
              <article className="service-detail-card" key={service.number}>
                <div className="service-detail-top"><span className="service-detail-icon"><ServiceIcon name={service.icon} /></span><span>{service.number}</span></div>
                <span className="service-detail-label">{service.label}</span>
                <h3>{service.title}</h3>
                <p className="service-detail-description">{service.description}</p>
                <div className="service-includes-title">MAY INCLUDE</div>
                <ul>{service.includes.map((item) => <li key={item}><span className="include-tick">✓</span>{item}</li>)}</ul>
                <a className="text-link" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
                  Discuss this service <ServiceIcon name="arrow" size={16} />
                </a>
              </article>
            ))}
          </div>
          <p className="service-scope-note">The final deliverables, cost and timeline are agreed before work begins. Hosting, domains, paid tools, third-party subscriptions and ongoing maintenance are quoted separately when applicable.</p>
        </section>

        <section className="services-process-section">
          <div className="services-process-inner">
            <div className="services-process-heading"><span className="section-kicker">A CLEAR PROCESS</span><h2>From first conversation<br /><em>to finished work.</em></h2><p>You will know what is included, what happens next and what I need from you before the project gets underway.</p></div>
            <div className="process-steps">
              {processSteps.map((step) => <article className="process-step" key={step.number}><span>{step.number}</span><div><h3>{step.title}</h3><p>{step.text}</p></div></article>)}
            </div>
          </div>
        </section>

        <section className="service-fit-section section">
          <div className="service-fit-copy"><span className="section-kicker">WORKING TOGETHER</span><h2>A good project<br /><em>starts with clarity.</em></h2><p>Before I start building, we align on your goal, the people the website needs to serve, the features that matter, and a realistic budget and delivery plan.</p><a href={`${BASE_URL}#work`} className="text-link">Explore selected work <ServiceIcon name="arrow" size={16} /></a></div>
          <div className="service-fit-points">
            <article><span>01</span><div><h3>Clear deliverables</h3><p>We agree on the pages, features and final handover in writing.</p></div></article>
            <article><span>02</span><div><h3>Practical communication</h3><p>Progress, questions and decisions are handled at agreed checkpoints.</p></div></article>
            <article><span>03</span><div><h3>No unnecessary complexity</h3><p>The solution is shaped around the actual need, not features you do not require.</p></div></article>
          </div>
        </section>

        <section className="service-contact-section" id="service-contact">
          <div className="service-contact-mark">SG<span>.</span></div>
          <div className="service-contact-copy"><span className="section-kicker">HAVE SOMETHING IN MIND?</span><h2>Let's talk about<br /><em>your project.</em></h2><p>Share a little about your business, your idea or the website you want to improve. We can discuss the scope and the best next step.</p><a className="button button-orange" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">Start a conversation <ServiceIcon name="arrow" size={17} /></a><small>Remember to update the WhatsApp link with your number before publishing.</small></div>
        </section>
      </main>
      <footer className="site-footer"><a className="footer-brand" href={BASE_URL}>STACY GEKARA<span> / WEB DEVELOPER</span></a><span>Designed and built with care · © {new Date().getFullYear()}</span><a href="#top" className="back-top">BACK TO TOP ↑</a></footer>
    </div>
  );
}

export default ServicesPage;
