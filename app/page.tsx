import { useEffect, useState, type FormEvent, type ImgHTMLAttributes } from "react";

function Image({ priority = false, src, ...props }: ImgHTMLAttributes<HTMLImageElement> & { priority?: boolean }) {
  const resolvedSrc = typeof src === "string" && src.startsWith("/") ? `${import.meta.env.BASE_URL}${src.slice(1)}` : src;
  return <img src={resolvedSrc} loading={priority ? "eager" : "lazy"} {...props} />;
}

const PHONE = "918862831050";
const PHONE_DISPLAY = "+91 88628 31050";
const TEL = "tel:+918862831050";
const EMAIL = "instagrowcare@gmail.com";
const ADDRESS = "Raxaul Dhala, Near Custom Chowk, In Front of Jockey Store, Raxaul, Bihar – 845305";
const INSTAGRAM = "https://www.instagram.com/instagrow.solutions?igsi=MWhzdzMzeTR4dW0xYg==";
const WA_MESSAGE = "Hi InstaGrow Solutions, I’m interested in your services. Please share more details";
const WHATSAPP = `https://wa.me/${PHONE}?text=${encodeURIComponent(WA_MESSAGE)}`;

const clients = ["Utkarsh Solar Energy", "Narayani Oil Mill", "X Machinery", "Tetraclean", "CareerPlus Academy", "Vedica Home Planner", "Seth Trading Company", "Goodwill Financial Services", "Zivanta Premium Agarbatti"];
const services = [
  { icon: "M", title: "Meta Ads", copy: "Reach the right customers on Facebook & Instagram.", crop: 0 },
  { icon: "G", title: "Google Ads", copy: "Show your business to people actively searching for your services.", crop: 1 },
  { icon: "↗", title: "Lead Generation", copy: "Get more enquiries from potential customers.", crop: 2 },
  { icon: "●", title: "Social Media Management", copy: "Keep your social media active and professional.", crop: 3 },
  { icon: "✦", title: "Creative & Video Ads", copy: "Posters, videos and ad creatives that get attention.", crop: 4 },
  { icon: "▶", title: "AI UGC Ads", copy: "Create engaging UGC-style videos for your advertising campaigns.", crop: 5 },
  { icon: "▤", title: "Landing Page Development", copy: "Landing pages designed to turn visitors into enquiries.", crop: 6 },
  { icon: "G", title: "Google Business Profile", copy: "Setup, optimization, local SEO and location integration to improve your visibility on Google.", crop: 7 },
];
const reasons = [
  ["01", "Built Around Your Business", "We understand your offer, audience and goals before building the strategy."],
  ["02", "Audience-Focused Campaigns", "Every campaign is designed to reach people most relevant to your business."],
  ["03", "Data-Driven Improvement", "We monitor signals, test ideas and improve campaigns based on what works."],
  ["04", "Creative + Advertising", "Strategy, campaign management and creative execution work together under one team."],
  ["05", "Transparent Communication", "Clear updates, practical recommendations and no unrealistic promises."],
  ["06", "Focused on Real Enquiries", "We prioritize meaningful customer opportunities over empty impressions."],
  ["07", "Regular Optimization", "Campaigns are reviewed and refined as performance and market conditions change."],
  ["08", "Serving Businesses Across India", "Remote-first support for ambitious businesses across industries and locations."],
];
const teamCapabilities = [
  ["01", "Strategy & Planning", "We understand your business, goals and audience, then create the right plan."],
  ["02", "Advertising & Campaign Management", "We create, manage and improve campaigns to reach the right customers."],
  ["03", "Creative & Content", "We create posters, videos and content that help your brand get noticed."],
  ["04", "Lead & Customer Support", "We help manage enquiries and make it easier for potential customers to connect with your business."],
  ["05", "Tracking & Improvement", "We monitor campaign performance and make regular improvements based on what works."],
];
const projects = [
  ["Meta Advertising · Lead Generation", "Utkarsh Solar Energy", "Campaign planning and lead-focused advertising support for a solar energy business.", "solar"],
  ["Lead Generation · Education", "CareerPlus Academy", "Audience targeting and campaign creative designed around student admissions enquiries.", "education"],
  ["Creative Campaigns · Local Business", "Narayani Oil Mill", "Product-led campaign communication created to improve discovery and customer interest.", "retail"],
  ["Lead Generation · Real Estate", "Vedica Home Planner", "Property campaign positioning focused on relevant enquiries and site-visit interest.", "estate"],
];
const solutions = [
  ["Need More Leads?", "We create campaigns focused on generating relevant customer enquiries."],
  ["Want More Local Customers?", "We combine advertising and Google Business Profile strategies to improve local visibility."],
  ["Want Better Brand Visibility?", "We use consistent creative content and targeted advertising to help your brand get noticed."],
  ["Launching a New Business?", "We can help with advertising, social presence, creatives and landing pages."],
  ["Need Better Ad Creatives?", "We create performance-focused posters, videos and UGC-style content."],
];
const process = [
  ["01", "Understand Your Business", "We learn about your business, customers, goals and current challenges."],
  ["02", "Build the Strategy", "We choose the right platforms, audiences, creatives and campaign approach."],
  ["03", "Launch the Campaign", "We set up and launch campaigns with proper targeting and tracking."],
  ["04", "Monitor & Optimize", "We continuously review campaign performance and improve what works."],
  ["05", "Scale Responsibly", "Once strong opportunities are identified, we refine and scale the strategy responsibly."],
];
const faqs = [
  ["What services does InstaGrow Solutions provide?", "We provide Meta Ads, Google Ads, lead generation, social media management, creative and video ads, AI UGC ads, landing pages and Google Business Profile services."],
  ["Do you work with businesses outside Bihar?", "Yes. InstaGrow Solutions serves businesses across India."],
  ["Do you guarantee leads or sales?", "No responsible agency can guarantee specific results. Performance depends on the offer, industry, budget, competition, customer demand and other market factors. We focus on sound strategy, careful execution and continuous improvement."],
  ["How much advertising budget do I need?", "The suitable budget depends on your business type, target market and campaign goals. We discuss a practical starting point during the consultation."],
  ["Can you manage my Facebook and Instagram ads?", "Yes. Meta Ads management for Facebook and Instagram is one of our core services."],
  ["Can you create ad creatives as well?", "Yes. We create posters, videos and UGC-style creatives depending on the campaign requirement."],
  ["Do you create landing pages?", "Yes. We design conversion-focused landing pages specifically for lead generation and customer enquiries."],
  ["Can I contact you on WhatsApp?", "Yes. Use any WhatsApp button on this page to start a conversation with our team."],
];

function Logo() {
  return <a className="brand" href="#home" aria-label="InstaGrow Solutions home"><span className="brand-mark"><Image src="/instagrow-logo.png" alt="" width={540} height={540} priority /></span><span className="brand-name">Insta<span>Grow</span><small>Solutions</small></span></a>;
}
function SectionTitle({ eyebrow, title, copy, align = "center" }: { eyebrow: string; title: string; copy?: string; align?: "center" | "left" }) {
  return <div className={`section-title ${align === "left" ? "left" : ""}`}><span>{eyebrow}</span><h2>{title}</h2>{copy && <p>{copy}</p>}</div>;
}
function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 16); onScroll(); window.addEventListener("scroll", onScroll, { passive: true }); return () => window.removeEventListener("scroll", onScroll); }, []);
  const close = () => setOpen(false);
  return <header className={`site-header ${scrolled ? "scrolled" : ""}`}><nav className="nav shell" aria-label="Main navigation"><Logo /><div className={`nav-menu ${open ? "open" : ""}`} id="mobile-navigation"><a href="#home" onClick={close}>Home</a><a href="#services" onClick={close}>Services</a><a href="#why" onClick={close}>Why Us</a><a href="#founder" onClick={close}>Founder</a><a href="#team" onClick={close}>Team</a><a href="#work" onClick={close}>Work</a><a href="#process" onClick={close}>Process</a><a href="#faq" onClick={close}>FAQ</a><a href="#contact" onClick={close}>Contact</a></div><a className="btn orange nav-cta" href="#contact">Get Free Consultation</a><button className="menu-toggle" type="button" aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}><span /><span /><span /></button></nav></header>;
}
function ContactForm() {
  const [status, setStatus] = useState("");
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); const form = event.currentTarget;
    if (!form.checkValidity()) { form.reportValidity(); setStatus("Please complete all required fields."); return; }
    const data = new FormData(form); const subject = `Free consultation request from ${data.get("fullName")}`;
    const body = [`Full Name: ${data.get("fullName")}`, `Phone: ${data.get("phone")}`, `Business: ${data.get("business")}`, `Service: ${data.get("service")}`, `Monthly Ad Budget: ${data.get("budget")}`, `Message: ${data.get("message") || "Not provided"}`].join("\n");
    setStatus("Your email app is opening with the consultation details."); window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };
  return <form className="contact-form" onSubmit={submit} noValidate><div className="field-grid"><label>Full Name<input name="fullName" autoComplete="name" required /></label><label>Phone Number<input name="phone" type="tel" autoComplete="tel" inputMode="tel" pattern="[0-9+() -]{10,18}" required /></label></div><label>Business Name<input name="business" autoComplete="organization" required /></label><div className="field-grid"><label>Service Interested In<select name="service" defaultValue="" required><option value="" disabled>Select a service</option>{services.map(s => <option key={s.title}>{s.title}</option>)}</select></label><label>Monthly Advertising Budget<select name="budget" defaultValue="" required><option value="" disabled>Select a range</option><option>Under ₹15,000</option><option>₹15,000 – ₹30,000</option><option>₹30,000 – ₹75,000</option><option>₹75,000+</option><option>Need guidance</option></select></label></div><label>Message<textarea name="message" rows={4} placeholder="Tell us about your goals and current challenges." /></label><button className="btn orange" type="submit">Request Free Consultation</button><p className="form-status" role="status" aria-live="polite">{status}</p></form>;
}

export default function Home() {
  const year = new Date().getFullYear();
  return <><a className="skip-link" href="#main-content">Skip to main content</a><Header /><main id="main-content">
    <section className="hero" id="home"><div className="shell hero-grid"><div className="hero-copy"><span className="eyebrow">META ADS · LEAD GENERATION · BUSINESS GROWTH</span><h1>Get more leads &amp; sales with <em>high-converting Meta Ads</em></h1><p>We help businesses scale with data-driven Meta advertising strategies that deliver real results and measurable ROI.</p><div className="hero-actions"><a className="btn orange" href="#contact">Get Free Consultation</a><a className="btn outline" href={WHATSAPP} target="_blank" rel="noreferrer">WhatsApp Us</a></div><small>Helping businesses across India grow through smarter advertising.</small></div><div className="hero-visual"><div className="visual-orbit" aria-hidden="true" /><Image src="/hero-laptop-v2.png" alt="Marketing dashboard displayed on a laptop" width={1536} height={1024} priority /><div className="visual-chip chip-a"><b>Audience</b><span>Focused targeting</span></div><div className="visual-chip chip-b"><b>Creative</b><span>Test and improve</span></div><div className="visual-chip chip-c"><b>Campaigns</b><span>Measured responsibly</span></div></div></div></section>
    <section className="trust" aria-labelledby="trust-title"><div className="shell"><div className="trust-heading"><span>TRUSTED BY BUSINESSES ACROSS INDIA</span><p id="trust-title">Helping businesses reach the right audience and grow with smart advertising.</p></div><div className="client-grid">{clients.map(client => <span key={client}>{client}</span>)}</div><p className="many-more">And many more businesses across India.</p></div></section>
    <section className="section services" id="services"><div className="shell"><SectionTitle eyebrow="OUR SERVICES" title="Everything You Need to Reach More Customers" copy="Strategy, advertising, creative and conversion support brought together for business growth." /><div className="service-grid">{services.map((service, index) => <article key={service.title}><div className="service-top"><i aria-hidden="true">{service.icon}</i><span>{String(index + 1).padStart(2, "0")}</span></div><h3>{service.title}</h3><p>{service.copy}</p><div className={`service-art crop-${service.crop}`} aria-hidden="true"><Image src="/services-reference.png" alt="" width={1536} height={1024} /></div><a href={WHATSAPP} target="_blank" rel="noreferrer" aria-label={`Ask about ${service.title} on WhatsApp`}>Discuss this service <span aria-hidden="true">↗</span></a></article>)}</div></div></section>
    <section className="section why" id="why"><div className="shell why-grid"><div className="why-intro"><span className="eyebrow">WHY CHOOSE INSTAGROW</span><h2>Advertising should create <em>real opportunities</em> for growth.</h2><p>Advertising should do more than generate impressions. It should help your business reach the right customers and create real opportunities for growth.</p><a className="text-link" href="#contact">Build your strategy <span aria-hidden="true">↗</span></a></div><div className="reason-grid">{reasons.map(reason => <article key={reason[1]}><span>{reason[0]}</span><h3>{reason[1]}</h3><p>{reason[2]}</p></article>)}</div></div></section>
    <section className="section founder" id="founder"><div className="shell founder-grid"><div className="founder-photo"><Image src="/founder-rajesh-aryan.png" alt="Rajesh Aryan, Founder of InstaGrow Solutions" width={1024} height={1536} /><div><span>Founder</span><strong>Rajesh Aryan</strong></div></div><div className="founder-copy"><span className="eyebrow">MEET THE FOUNDER</span><h2>Rajesh Aryan</h2><p className="founder-role">Founder, InstaGrow Solutions™</p><p className="experience">25 Years Old <i /> 3+ Years of Experience</p><h3>A Vision for Businesses Across India</h3><blockquote>“I believe good advertising is about reaching the right people with the right message. It should help businesses get more customers and grow with confidence.”</blockquote><p>InstaGrow Solutions was started with a simple goal — to help businesses across India reach more customers through smart advertising.</p><p>With 3+ years of experience in advertising and campaign management, my focus is to build an agency that understands each business, reaches the right audience and creates advertising strategies focused on real business growth.</p><p>I believe every business is different. That’s why we first understand the business and its goals, then create a strategy that fits.</p><div className="vision-note"><span>Our Vision</span><strong>To help businesses across India reach more customers through smart advertising.</strong><em>One Team. One Strategy. Your Growth.</em></div></div></div></section>
    <section className="section team" id="team"><div className="shell"><div className="team-heading"><SectionTitle eyebrow="OUR TEAM" title="The Team Behind InstaGrow" copy="Behind every campaign is a team working together to understand the business, reach the right audience and create better advertising." align="left" /><div className="team-image"><Image src="/instagrow-team.png" alt="The InstaGrow Solutions team collaborating on advertising strategy" width={1536} height={1024} /></div></div><div className="capability-grid">{teamCapabilities.map(item => <article key={item[1]}><span>{item[0]}</span><h3>{item[1]}</h3><p>{item[2]}</p></article>)}</div><div className="team-lines"><strong>Serving Businesses Across India 🇮🇳</strong><span>Ideas That Work Together.</span></div></div></section>
    <section className="section work" id="work"><div className="shell"><SectionTitle eyebrow="OUR WORK" title="Strategy Shaped Around Real Businesses" copy="A selection of campaign directions created for businesses across different industries." /><div className="work-grid">{projects.map(project => <article key={project[1]}><div className={`case-cover ${project[3]}`}><span>{project[0]}</span><strong>{project[1]}</strong></div><div><p>{project[2]}</p><a href="#contact">Discuss Your Campaign <span aria-hidden="true">↗</span></a></div></article>)}</div></div></section>
    <section className="section solutions" id="solutions"><div className="shell"><SectionTitle eyebrow="OUR SOLUTIONS" title="Start With What Your Business Needs" copy="Choose the outcome you want to improve. We will help shape the right combination of strategy, platforms and creative." /><div className="solution-grid">{solutions.map((item, index) => <article key={item[0]}><span>{String(index + 1).padStart(2, "0")}</span><h3>{item[0]}</h3><p>{item[1]}</p><a href="#contact" aria-label={`Discuss: ${item[0]}`}>Explore the solution ↗</a></article>)}</div></div></section>
    <section className="section process" id="process"><div className="shell"><SectionTitle eyebrow="HOW WE WORK" title="A Clear Process. Built for Better Decisions." copy="From understanding your business to responsible scaling, every step has a purpose." /><ol className="process-list">{process.map(item => <li key={item[0]}><span>{item[0]}</span><div><h3>{item[1]}</h3><p>{item[2]}</p></div></li>)}</ol></div></section>
    <section className="section testimonials" id="testimonials"><div className="shell testimonial-layout"><SectionTitle eyebrow="TESTIMONIALS" title="What Businesses Say About Working With Us" copy="We only publish client feedback with permission and never create or exaggerate testimonials." align="left" /><div className="testimonial-note"><span aria-hidden="true">“</span><p>Verified client stories will appear here as they are approved. Until then, talk directly with our team about the approach we can build for your business.</p><a className="btn outline" href="#contact">Start a Conversation</a></div></div></section>
    <section className="section faq" id="faq"><div className="shell faq-layout"><SectionTitle eyebrow="FREQUENTLY ASKED QUESTIONS" title="Clear Answers Before You Start" copy="Everything you need to know about working with InstaGrow Solutions." align="left" /><div className="faq-list">{faqs.map((faq, index) => <details key={faq[0]} open={index === 0}><summary><span>{faq[0]}</span><i aria-hidden="true">+</i></summary><p>{faq[1]}</p></details>)}</div></div></section>
    <section className="final-cta"><div className="shell final-cta-inner"><div><span className="eyebrow">LET’S GROW SMARTER</span><h2>Ready to Reach More Customers?</h2><p>Tell us about your business and let’s build an advertising strategy focused on your growth.</p></div><div><a className="btn orange" href="#contact">Get Free Consultation</a><a className="btn outline" href={WHATSAPP} target="_blank" rel="noreferrer">Chat on WhatsApp</a></div></div></section>
    <section className="section contact" id="contact"><div className="shell contact-grid"><div className="contact-copy"><span className="eyebrow">CONTACT INSTAGROW</span><h2>Tell us about your business.</h2><p>Share your goals and challenges. We’ll help you understand the next practical step for your advertising.</p><div className="contact-list"><a href={TEL}><i aria-hidden="true">☎</i><span>Phone<strong>{PHONE_DISPLAY}</strong></span></a><a href={`mailto:${EMAIL}`}><i aria-hidden="true">✉</i><span>Email<strong>{EMAIL}</strong></span></a><div><i aria-hidden="true">⌖</i><span>Office<strong>{ADDRESS}</strong></span></div><a href={INSTAGRAM} target="_blank" rel="noreferrer"><i aria-hidden="true">◎</i><span>Instagram<strong>@instagrow.solutions</strong></span></a></div><a className="btn whatsapp" href={WHATSAPP} target="_blank" rel="noreferrer">Chat on WhatsApp</a></div><ContactForm /></div></section>
  </main><footer className="footer"><div className="shell footer-grid"><div><Logo /><p>Helping businesses across India reach more customers through smart advertising.</p><strong>Serving Businesses Across India 🇮🇳</strong></div><div><h3>Quick Links</h3><a href="#services">Services</a><a href="#founder">Founder</a><a href="#team">Team</a><a href="#work">Work</a><a href="#faq">FAQ</a><a href="#contact">Contact</a></div><div><h3>Contact</h3><a href={TEL}>{PHONE_DISPLAY}</a><a href={`mailto:${EMAIL}`}>{EMAIL}</a><p>{ADDRESS}</p></div><div><h3>Social</h3><a href={INSTAGRAM} target="_blank" rel="noreferrer">Instagram ↗</a><a href={WHATSAPP} target="_blank" rel="noreferrer">WhatsApp ↗</a></div></div><div className="shell copyright"><span>© {year} InstaGrow Solutions™. All rights reserved.</span><a href="#home">Back to top ↑</a></div></footer><a className="floating-whatsapp" href={WHATSAPP} target="_blank" rel="noreferrer" aria-label="Chat with InstaGrow Solutions on WhatsApp"><span aria-hidden="true">●</span><b>WhatsApp</b></a></>;
}
