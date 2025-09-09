import React from "react";
import { motion } from "framer-motion";
import { Portfolio } from "./components/Portfolio";
import { page, fadeUp, staggerContainer, cardHover } from "./utils/animation";

/**
 * Updated App.tsx
 * - Adds premium animations (stagger, fade, slide-up, hover scale+shadow)
 * - Centralized contact form + WhatsApp & Calendly actions
 * - SVG social icons and footer Arch stack reference
 * - Comments: replace placeholder images in /public (hero.jpg, founder.jpg, portfolio1.jpg...)
 *
 * Run:
 *  npm i framer-motion
 *  npm run dev
 */

/* ------------------
   Types & Data
   ------------------ */
/*type PortfolioItem = {
  id: string;
  title: string;
  desc: string;
  images: string[]; // instead of just img
};*/
/*
const PORTFOLIO: PortfolioItem[] = [
  {
    id: "p1",
    title: "Project Alpha",
    desc: "Enterprise rebrand + system",
    images: ["/portfolio1.jpg", "/portfolio1b.jpg", "/portfolio1c.jpg"],
  },
  {
    id: "p2",
    title: "Project Beta",
    desc: "Global logo suite",
    images: ["/portfolio2.jpg", "/portfolio2b.jpg"],
  },
  {
    id: "p3",
    title: "Project Gamma",
    desc: "Product identity & tokens",
    images: ["/portfolio3.jpg", "/portfolio3b.jpg"],
  },
  {
    id: "p4",
    title: "Project Delta",
    desc: "Design system integration",
    images: ["/portfolio4.jpg"],
  },
];*/

const LOGOS = new Array(8)
  .fill(0)
  .map((_, i) => ({ id: `l${i}`, src: `/logo${(i % 9) + 1}.png` })); // place logos in public as logo1.png ...

/* ------------------
   Motion Variants
   ------------------ */
/*const page = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { when: "beforeChildren", staggerChildren: 0.06 } }
};

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12
    }
  }
};

const cardHover = { scale: 1.03, boxShadow: "0 20px 40px rgba(17,17,17,0.12)" };
*/
/* ------------------
   App
   ------------------ */
const App: React.FC = () => {
  return (
    <motion.div initial="hidden" animate="show" variants={page} className="site-root">
      <Style />

      <Header />

      <main>
        <Hero />
        <Trusted />
        <Credibility />
        <Services />
        <Portfolio />
        <About />
        <Contact />
      </main>

      <Footer />
    </motion.div>
  );
};

/* ------------------
   Header
   ------------------ */
const Header: React.FC = () => (
  <header className="site-header" role="banner">
    <div className="container nav-grid">
      <a className="brand" href="#home" aria-label="Home">
        <span className="logo-swatch" aria-hidden />
        <span className="brand-name">GraphicsEnterprise</span>
      </a>

      <nav className="nav" aria-label="Primary">
        <a href="#services">Services</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>

      <div className="nav-actions">
        <a className="btn ghost" href="#contact">Contact</a>
        <a className="btn primary" href="#contact">Book Consult</a>
      </div>
    </div>
  </header>
);

/* ------------------
   Hero (staggered text + image)
   ------------------ */
const Hero: React.FC = () => (
  <section className="hero container" id="home" aria-label="Hero">
    <div className="hero-left">
      <motion.h1 variants={fadeUp} initial="hidden" animate="show">
        Enterprise-grade brand & logo systems that scale.
      </motion.h1>

      <motion.p variants={fadeUp} initial="hidden" animate="show" transition={{ delay: 0.08 }} className="lead">
        We build identity systems, governance, and design tokens so your brand behaves predictably across all teams and touchpoints.
      </motion.p>

      <motion.div className="hero-ctas" variants={staggerContainer} initial="hidden" animate="show">
        <motion.a whileHover={{ scale: 1.03 }} className="btn primary large" href="#portfolio">View Portfolio</motion.a>
        <motion.a whileHover={{ scale: 1.03 }} className="btn ghost" href="#contact">Book a consult</motion.a>
      </motion.div>

      <motion.div className="hero-features" variants={staggerContainer} initial="hidden" animate="show">
        <Feature label="Brand Systems" />
        <Feature label="Design Ops" />
        <Feature label="Tokenized UI" />
      </motion.div>
    </div>

    <motion.aside className="hero-right" variants={fadeUp} initial="hidden" animate="show" aria-hidden>
      {/* Replace /hero.jpg with your real hero artwork in public folder */}
      <div className="hero-card">
        <img src="/Hero.jpg" alt="Hero visual" />
      </div>
    </motion.aside>
  </section>
);

const Feature: React.FC<{ label: string }> = ({ label }) => (
  <div className="pill">{label}</div>
);

/* ------------------
   Trusted logos scroller
   ------------------ */
const Trusted: React.FC = () => (
  <section className="trusted container" aria-label="Trusted by">
    <p className="muted">Trusted by</p>
    <div className="logo-scroller" aria-hidden>
      <div className="track">
        {LOGOS.concat(LOGOS).map((l, idx) => (
          <img key={l.id + "-" + idx} src={l.src} alt={`Client ${idx + 1}`} />
        ))}
      </div>
    </div>
  </section>
);

/* ------------------
   Enterprise Credibility (metrics + story)
   ------------------ */
const Credibility: React.FC = () => (
  <section className="cred container" aria-label="Credibility">
    <motion.div className="cred-grid" variants={staggerContainer} initial="hidden" animate="show">
      <motion.div className="cred-card" variants={fadeUp}>
        <h3>120+</h3>
        <p className="muted">Enterprise projects delivered</p>
      </motion.div>
      <motion.div className="cred-card" variants={fadeUp}>
        <h3>50%</h3>
        <p className="muted">Average brand recognition uplift</p>
      </motion.div>
      <motion.div className="cred-card" variants={fadeUp}>
        <h3>10</h3>
        <p className="muted">Design tokens shipped to codebases</p>
      </motion.div>
    </motion.div>

    <motion.div className="cred-story" variants={fadeUp} initial="hidden" animate="show">
      <h3>Process you can trust</h3>
      <p className="muted">
        We combine research, governance, and design ops to deliver identity systems that survive mergers, scale-ups,
        and global rollouts.
      </p>
    </motion.div>
  </section>
);

/* ------------------
   Services (cards with hover scale + shadow)
   ------------------ */
const Services: React.FC = () => {
  const services = [
    { id: "s1", title: "Logo Systems", desc: "Flexible marks + lockups for multi-channel scale.", icon: "/service-icon-1.svg" },
    { id: "s2", title: "Enterprise Branding", desc: "Positioning, voice, and identity strategy.", icon: "/service-icon-2.svg" },
    { id: "s3", title: "Design Ops", desc: "Tokens, libraries, and handoff-ready assets.", icon: "/service-icon-3.svg" }
  ];

  return (
    <section id="services" className="container" aria-labelledby="services-heading">
      <h2 id="services-heading">Services</h2>
      <p className="muted">Enterprise creative services built for scale.</p>

      <motion.div className="grid" variants={staggerContainer} initial="hidden" animate="show">
        {services.map((s) => (
          <motion.article
            key={s.id}
            className="card service"
            variants={fadeUp}
            whileHover={cardHover}
            transition={{ type: "spring", stiffness: 160 }}
            aria-labelledby={`svc-${s.id}`}
          >
            <div className="icon-placeholder" aria-hidden>
              {/* use svg icon files in /public or replace with inline svg */}
              <img src={s.icon} alt="" style={{ width: 38, height: 38 }} />
            </div>
            <h3 id={`svc-${s.id}`}>{s.title}</h3>
            <p className="muted">{s.desc}</p>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
};

/* ------------------
   Portfolio (staggered reveal on scroll)
   ------------------ */
/*const Portfolio: React.FC = () => (
  <section id="portfolio" className="container" aria-labelledby="portfolio-heading">
    <h2 id="portfolio-heading">Selected Work</h2>
    <p className="muted">Case studies and identity systems for enterprise clients.</p>

    <motion.div
      className="grid portfolio-grid"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
    >
      {PORTFOLIO.map((p) => (
        <motion.div
          key={p.id}
          className="card portfolio-card"
          variants={fadeUp}
          whileHover={{ y: -8, ...cardHover }}
          transition={{ duration: 0.35 }}
        >
          {/* replace images in public/ with real captures *//*}
<img src={p.img} alt={p.title} />
<h4>{p.title}</h4>
<p className="muted">{p.desc}</p>
<a className="link" href="#">
View case study →
</a>
</motion.div>
))}
</motion.div>
</section>
);*/

/* ------------------
   About + Founder (slide-up)
   ------------------ */
const About: React.FC = () => (
  <section id="about" className="container" aria-labelledby="about-heading">
    <motion.div initial="hidden" whileInView="show" variants={staggerContainer} viewport={{ once: true }}>
      <motion.h2 variants={fadeUp} id="about-heading">
        About
      </motion.h2>
      <motion.p variants={fadeUp} className="muted">
        We partner with product & brand teams to deliver consistent, measurable brand systems and creative outcomes.
      </motion.p>

      <div className="about-grid">
        <motion.div className="card" variants={fadeUp}>
          <h4>Enterprise credibility</h4>
          <p className="muted">Process, audit, and governance for brand at scale.</p>
        </motion.div>

        <motion.div className="card founder" variants={fadeUp}>
          {/* add a founder image in public/founder.jpg */}
          <div className="founder-media">
            <img src="/founder.jpg" alt="Founder" />
          </div>
          <div>
            <h4>Founder — Lead Strategist</h4>
            <p className="muted">Ex-product design leader with multi-year enterprise branding experience.</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  </section>
);

/* ------------------
   Contact (centralized, multi-channel)
   ------------------ */
const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement & {
      name: HTMLInputElement;
      email: HTMLInputElement;
      message: HTMLTextAreaElement;
    };
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    if (!name || !email || !message) {
      alert("Please fill required fields");
      return;
    }
    // TODO: replace with API/CRM integration (POST to your endpoint)
    alert("Message sent (mock). Replace with API/CRM integration.");
    form.reset();
  };

  const whatsappNumber = "2348012345678"; // replace with your number in international format, no plus sign (example Nigeria)
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Hi — I want to discuss an enterprise branding project."
  )}`;

  return (
    <section id="contact" className="container" aria-labelledby="contact-heading">
      <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" id="contact-heading">
        Contact
      </motion.h2>

      <motion.p variants={fadeUp} initial="hidden" whileInView="show" className="muted">
        Send a short brief, book a consult, or message us directly. We reply to enterprise inquiries within 48 hours.
      </motion.p>

      <div className="contact-wrap">
        <motion.form className="contact-form card center" onSubmit={handleSubmit} variants={fadeUp} initial="hidden" whileInView="show">
          <div className="row">
            <input name="name" className="input" placeholder="Full name" aria-label="Full name" required />
            <input name="email" type="email" className="input" placeholder="Email" aria-label="Email" required />
          </div>

          <textarea name="message" className="input" placeholder="Brief / message" aria-label="Message" required />

          <div className="row actions">
            <button className="btn primary" type="submit">
              Send message
            </button>

            <a className="btn ghost" href="https://calendly.com/your-link" target="_blank" rel="noreferrer">
              Book a meeting
            </a>

            {/* WhatsApp DM as a professional alternative */}
            <a className="btn whatsapp" href={whatsappLink} target="_blank" rel="noreferrer" aria-label="WhatsApp">
              Message on WhatsApp
            </a>
          </div>
        </motion.form>

        {/* Quick contact cards (center-right) */}
        <motion.aside className="contact-side" variants={fadeUp} initial="hidden" whileInView="show">
          <div className="contact-card">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M2 4v16l4-4h12V4H2z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div>
              <strong>Email</strong>
              <div className="muted">contact@designer.example</div>
            </div>
          </div>

          <div className="contact-card">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M21 8V7a2 2 0 0 0-2-2h-3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M3 21v-6a2 2 0 0 1 2-2h4l4-3 4 3h2a2 2 0 0 1 2 2v6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div>
              <strong>Office</strong>
              <div className="muted">Remote / By appointment</div>
            </div>
          </div>
        </motion.aside>
      </div>
    </section>
  );
};

/* ------------------
   Footer with SVG socials + Arch reference
   ------------------ */
const Footer: React.FC = () => (
  <footer className="site-footer" role="contentinfo">
    <div className="container footer-grid">
      <div>© {new Date().getFullYear()} GraphicsEnterprise</div>

      <div className="socials" role="navigation" aria-label="Social links">
        <a href="#" aria-label="Twitter" title="Twitter" className="social">
          {/* simple twitter svg */}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 12 7v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" fill="currentColor" /></svg>
        </a>
        <a href="#" aria-label="LinkedIn" title="LinkedIn" className="social"> {/* LinkedIn svg */}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M4 4h4v16H4zM8 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4zM14 8v3c0 2 0 6 6 6v-4c0-2-1-4-3-4-2 0-3 1-3 3V8h-0z" fill="currentColor" /></svg>
        </a>
        <a href="#" aria-label="Behance" title="Behance" className="social">B</a>
        <a href="#" aria-label="Dribbble" title="Dribbble" className="social">D</a>
      </div>
    </div>

    <div className="container arch-note">
      <small className="muted">Dev stack: Built with React + TypeScript + Framer Motion • Dev OS: Arch Linux (Arch stack)</small>
    </div>
  </footer>
);

/* ------------------
   Embedded CSS (move to separate files later)
   ------------------ */
const Style: React.FC = () => (
  <style>{`
  :root{
    --sky:#87CEEB; --ocean:#1CA9C9; --white:#ffffff; --dark:#111111; --muted:#6b7280;
    --container:1200px; --radius:14px;
  }
  *{box-sizing:border-box}
  body{margin:0;font-family:Inter,system-ui,-apple-system,'Segoe UI',Roboto,Helvetica,Arial;color:var(--dark);background:var(--white);-webkit-font-smoothing:antialiased}
  .container{max-width:var(--container);margin:0 auto;padding:22px}

  /* Header */
  .site-header{position:sticky;top:0;background:rgba(255,255,255,0.8);backdrop-filter:blur(6px);border-bottom:1px solid rgba(17,17,17,0.04);z-index:50}
  .nav-grid{display:flex;align-items:center;justify-content:space-between;gap:12px}
  .brand{display:flex;gap:10px;align-items:center;text-decoration:none;color:var(--dark)}
  .logo-swatch{width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,var(--sky),var(--ocean));box-shadow:0 10px 30px rgba(28,169,201,0.12)}
  .brand-name{font-weight:700}
  .nav a{margin:0 8px;text-decoration:none;color:var(--dark);padding:8px;border-radius:8px}
  .nav a:hover{background:rgba(28,169,201,0.06)}
  .nav-actions{display:flex;gap:10px}
  .btn{padding:10px 14px;border-radius:12px;text-decoration:none;cursor:pointer;border:1px solid rgba(17,17,17,0.06);background:transparent;display:inline-flex;align-items:center;gap:8px}
  .btn.primary{background:linear-gradient(90deg,var(--ocean),var(--sky));color:var(--white);box-shadow:0 12px 30px rgba(28,169,201,0.14);border:none}
  .btn.ghost{background:transparent;border:1px solid rgba(17,17,17,0.06)}
  .btn.whatsapp{background:linear-gradient(90deg,#25D366,#128C7E);color:white;border:none}

  /* Hero */
  .hero{display:grid;grid-template-columns:1fr 520px;gap:32px;align-items:center;padding:64px 0}
  .hero h1{font-size:clamp(1.6rem,2.6vw,2.8rem);margin:0}
  .lead{color:var(--muted);margin-top:12px}
  .hero-ctas{display:flex;gap:12px;margin-top:18px}
  .hero-features{display:flex;gap:8px;margin-top:18px}
  .pill{background:rgba(28,169,201,0.06);padding:8px 12px;border-radius:999px;color:var(--dark);font-weight:600}
  .hero-right .hero-card{border-radius:16px;overflow:hidden;box-shadow:0 30px 60px rgba(17,17,17,0.06)}
  .hero-right img{display:block;width:100%;height:auto;object-fit:cover}

  /* Trusted */
  .trusted{padding:22px 0}
  .muted{color:var(--muted)}
  .logo-scroller{overflow:hidden;margin-top:12px}
  .logo-scroller .track{display:flex;gap:28px;align-items:center;animation:scroll 18s linear infinite}
  .logo-scroller img{width:160px;height:48px;object-fit:contain;filter:grayscale(15%)}
  @keyframes scroll{0%{transform:translateX(0);}100%{transform:translateX(-50%);}}

  /* Credibility */
  .cred-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin:20px 0}
  .cred-card{background:linear-gradient(180deg,var(--white),rgba(17,17,17,0.01));padding:20px;border-radius:12px;box-shadow:0 8px 28px rgba(17,17,17,0.04);text-align:center}
  .cred-card h3{margin:0;font-size:1.6rem}
  .cred-story{margin-top:12px}

  /* Grid / Cards */
  .grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:20px;margin-top:18px}
  .card{background:linear-gradient(180deg,var(--white),rgba(17,17,17,0.01));padding:18px;border-radius:12px;box-shadow:0 10px 30px rgba(17,17,17,0.04);transition:transform .18s,box-shadow .18s}
  .card h3{margin:10px 0 6px}
  .service .icon-placeholder{width:48px;height:48px;border-radius:10px;background:linear-gradient(135deg,var(--sky),var(--ocean));display:flex;align-items:center;justify-content:center;color:white;font-weight:700}
  .portfolio-card img{width:100%;border-radius:8px;display:block}

  /* About */
  .about-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-top:12px}
  .founder{display:flex;gap:12px;align-items:center}
  .founder .founder-media img{width:88px;height:88px;object-fit:cover;border-radius:12px;box-shadow:0 12px 30px rgba(17,17,17,0.06)}

  /* Contact */
  .contact-wrap{display:grid;grid-template-columns:1fr 320px;gap:24px;align-items:start;margin-top:18px}
  .contact-form.center{margin:0 auto}
  .row{display:flex;gap:12px}
  .input{padding:12px;border-radius:10px;border:1px solid rgba(17,17,17,0.06);flex:1}
  textarea.input{min-height:120px}
  .contact-side{display:flex;flex-direction:column;gap:12px}
  .contact-card{display:flex;gap:12px;align-items:center;padding:12px;border-radius:10px;background:rgba(17,17,17,0.02)}

  /* Footer */
  .site-footer{padding:36px 0;border-top:1px solid rgba(17,17,17,0.03);color:var(--muted)}
  .footer-grid{display:flex;justify-content:space-between;align-items:center}
  .socials{display:flex;gap:12px}
  .social{display:inline-flex;align-items:center;justify-content:center;width:36px;height:36px;border-radius:8px;background:rgba(17,17,17,0.02);color:var(--dark);text-decoration:none}
  .arch-note{margin-top:8px;text-align:center}

  /* Responsive */
  @media (max-width:960px){
    .hero{grid-template-columns:1fr;padding:40px 0}
    .nav{display:none}
    .contact-wrap{grid-template-columns:1fr;gap:12px}
    .cred-grid{grid-template-columns:1fr}
    .about-grid{grid-template-columns:1fr}
  }
  `}</style>
);

export default App;

