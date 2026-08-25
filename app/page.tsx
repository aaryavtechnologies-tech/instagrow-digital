import Image from "next/image";

export default function Home() {
  return (
    <main>
      <nav className="nav shell" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="InstaGrow Solutions home"><span className="brand-mark"><Image src="/instagrow-logo.png" alt="InstaGrow Solutions" width={540} height={540} priority /></span><span className="brand-name">Insta<span>Grow</span><small>Solutions</small></span></a>
        <div className="nav-links"><a href="#services">Services</a><a href="#work">Work</a><a href="#about">Why us</a></div>
        <a className="nav-cta" href="tel:+916287357549">Let’s talk <span>↗</span></a>
      </nav>
      <section className="hero shell" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><i /> Performance marketing studio</div>
          <h1>We turn attention<br />into <em>growth.</em></h1>
          <p>Bold campaigns. Smarter strategy. Measurable results. We help ambitious brands reach the right people and convert every click into momentum.</p>
          <div className="hero-actions"><a className="button primary" href="tel:+916287357549">Start growing <span>↗</span></a><a className="button ghost" href="#work">See our work <span>↓</span></a></div>
          <div className="proof"><strong>100+</strong><span>brands trust us<br />across India</span><div className="faces"><b>IG</b><b>ROI</b><b>24/7</b></div></div>
        </div>
        <div className="hero-visual" aria-label="Marketing performance overview">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <div className="metric-card main-metric"><div className="metric-top"><span>Campaign performance</span><b>LIVE</b></div><div className="revenue"><small>Return on ad spend</small><strong>5.2<span>x</span></strong><em>+38.4%</em></div><div className="chart"><i /><i /><i /><i /><i /><i /><i /><i /><i /></div><div className="chart-label"><span>Week 1</span><span>Week 4</span></div></div>
          <div className="float-card leads"><span className="float-icon">◎</span><small>Qualified leads</small><strong>1,248</strong><em>+35%</em></div>
          <div className="float-card conversion"><small>Conversion rate</small><strong>8.6%</strong><div><i /><i /><i /><i /><i /></div></div>
          <div className="tag tag-meta">META ADS</div><div className="tag tag-google">GOOGLE ADS</div>
        </div>
      </section>
      <div className="ticker" aria-label="Services overview"><div>STRATEGY <i/> META ADS <i/> GOOGLE ADS <i/> CONTENT <i/> LEAD GENERATION <i/> SOCIAL MEDIA <i/> PERFORMANCE</div></div>

      <section className="services shell section" id="services">
        <div className="section-head"><div><span className="kicker">01 — WHAT WE DO</span><h2>Everything you need<br />to <em>grow online.</em></h2></div><p>Strategy, creative and media working as one focused growth engine for your business.</p></div>
        <div className="service-grid">
          <article className="service-card featured"><div className="service-no">01</div><div className="service-icon">↗</div><h3>Performance Advertising</h3><p>High-intent campaigns across Meta and Google, built to lower acquisition costs and scale what works.</p><div className="chips"><span>Meta Ads</span><span>Google Ads</span><span>Retargeting</span></div></article>
          <article className="service-card"><div className="service-no">02</div><div className="service-icon teal">◎</div><h3>Lead Generation</h3><p>Conversion-first funnels and landing pages that turn the right audience into qualified conversations.</p><div className="chips"><span>Funnels</span><span>Landing pages</span></div></article>
          <article className="service-card"><div className="service-no">03</div><div className="service-icon navy">✦</div><h3>Social Media</h3><p>Scroll-stopping content, consistent publishing and community growth that keeps your brand relevant.</p><div className="chips"><span>Content</span><span>Management</span></div></article>
          <article className="service-card wide"><div className="service-no">04</div><div><h3>Creative that earns attention.</h3><p>From ad posters and short-form video to complete campaign concepts, every asset is designed with a job to do.</p></div><div className="creative-stack"><b>ADS</b><b>VIDEO</b><b>DESIGN</b></div></article>
          <article className="service-card dark-wide"><div className="service-no">05</div><div className="service-icon teal">◫</div><h3>WhatsApp Automation</h3><p>Fast replies, better follow-up and organized lead management—without losing the human touch.</p></article>
        </div>
      </section>

      <section className="results section" id="work">
        <div className="shell">
          <div className="section-head"><div><span className="kicker">02 — PROVEN IMPACT</span><h2>Real campaigns.<br /><em>Real results.</em></h2></div><p>No vanity metrics. Just meaningful outcomes that move businesses forward.</p></div>
          <div className="result-grid">
            <article><span>Solar energy</span><strong>1,248<small>+</small></strong><p>Qualified leads generated</p><footer><b>₹8</b> cost per lead <em>4.62x ROI</em></footer></article>
            <article><span>Education</span><strong>980<small>+</small></strong><p>Admission enquiries</p><footer><b>₹10</b> cost per lead <em>3.91x ROI</em></footer></article>
            <article><span>Retail / e-commerce</span><strong>2,310<small>+</small></strong><p>Orders generated</p><footer><b>₹12</b> cost per order <em>5.23x ROAS</em></footer></article>
          </div>
          <div className="trust-row"><p>Trusted by <strong>100+ businesses</strong> across India</p><div><span>UTKARSH</span><span>NARAYANI</span><span>CAREERPLUS</span><span>VEDICA</span><span>GOODWILL</span></div></div>
        </div>
      </section>

      <section className="why shell section" id="about">
        <div className="why-intro"><span className="kicker">03 — WHY INSTAGROW</span><h2>Your growth is<br />our <em>mission.</em></h2><p>We combine sharp creative thinking, disciplined media buying and transparent reporting to build growth you can actually see.</p><a href="tel:+916287357549">Book a free consultation <span>↗</span></a></div>
        <div className="why-grid">
          <article><b>01</b><h3>Result-oriented</h3><p>Every decision begins with your business goal and ends with a measurable outcome.</p></article>
          <article><b>02</b><h3>Budget smart</h3><p>We optimise every rupee, cut waste and scale the campaigns showing real potential.</p></article>
          <article><b>03</b><h3>Clear & reliable</h3><p>Honest communication, regular updates and reporting you can understand at a glance.</p></article>
          <article><b>04</b><h3>Always improving</h3><p>24/7 monitoring, testing and refinement keep your campaigns moving in the right direction.</p></article>
        </div>
      </section>

      <section className="process section"><div className="shell"><span className="kicker">04 — HOW WE WORK</span><h2>Simple process.<br /><em>Serious momentum.</em></h2><div className="steps"><article><b>01</b><h3>Discover</h3><p>We understand your business, audience and goals.</p></article><article><b>02</b><h3>Build</h3><p>We create the strategy, campaign and content system.</p></article><article><b>03</b><h3>Launch</h3><p>We go live, measure performance and learn fast.</p></article><article><b>04</b><h3>Scale</h3><p>We optimise what works and compound your growth.</p></article></div></div></section>

      <section className="cta shell"><div className="cta-mark">↗</div><span className="kicker">READY WHEN YOU ARE</span><h2>Let’s turn your next<br />click into a <em>customer.</em></h2><p>Tell us where you want to grow. We’ll show you how to get there.</p><a className="button primary" href="tel:+916287357549">Call 6287 357 549 <span>↗</span></a></section>
      <footer className="footer shell"><a className="brand" href="#top"><span className="brand-mark"><Image src="/instagrow-logo.png" alt="" width={540} height={540} /></span><span className="brand-name">Insta<span>Grow</span><small>Solutions</small></span></a><p>Performance marketing for ambitious businesses.</p><div><a href="tel:+916287357549">+91 6287 357 549</a><a href="#top">Back to top ↑</a></div></footer>
    </main>
  );
}
