import React from "react"
import { Link } from "gatsby"
import plumbingHero from "./hero-photo.jpg"

const plumbingStyles = `
@import url('https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@600;700;800;900&family=Work+Sans:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap');


  :root{
    --ink: #14293D;
    --ink-soft: #1D3854;
    --blue: #2B6E9E;
    --blue-deep: #1D4E73;
    --blue-pale: #DCE9F1;
    --marigold: #F0A93A;
    --marigold-deep: #D6900F;
    --paper: #FBFAF7;
    --fog: #EFF1EC;
    --slate: #4C5A63;
    --slate-light: #7C8891;
    --line: #D8DDD3;
    --white: #FFFFFF;

    --display: 'Big Shoulders Display', sans-serif;
    --body: 'Work Sans', sans-serif;
    --mono: 'IBM Plex Mono', monospace;
  }

  *{ box-sizing: border-box; margin:0; padding:0; }
  html{ scroll-behavior: smooth; }
  body{
    font-family: var(--body);
    background: var(--paper);
    color: var(--ink);
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }
  img{ max-width:100%; display:block; }
  a{ color: inherit; text-decoration: none; }
  .wrap{
    max-width: 1240px;
    margin: 0 auto;
    padding: 0 40px;
  }
  .eyebrow{
    font-family: var(--mono);
    font-size: 13px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--blue);
    font-weight: 500;
  }
  .eyebrow.on-dark{ color: var(--marigold); }
  h1,h2,h3{
    font-family: var(--display);
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.005em;
    line-height: 0.92;
    color: var(--ink);
  }
  .btn{
    display: inline-flex;
    align-items: center;
    gap: 10px;
    font-family: var(--body);
    font-weight: 700;
    font-size: 15.5px;
    padding: 15px 26px;
    border-radius: 3px;
    border: 2px solid transparent;
    cursor: pointer;
    white-space: nowrap;
  }
  .btn-primary{ background: var(--marigold); color: var(--ink); }
  .btn-primary:hover{ background: var(--marigold-deep); }
  .btn-outline{ border-color: rgba(255,255,255,0.4); color: var(--white); }
  .btn-outline:hover{ border-color: var(--white); }
  .btn-outline.on-light{ border-color: var(--ink); color: var(--ink); }
  .btn-outline.on-photo{ border-color: var(--marigold); color: var(--marigold); }
  .btn-outline.on-photo:hover{ border-color: var(--marigold-deep); color: var(--marigold-deep); }

  /* ===== NAV ===== */
  header{
    background: var(--ink);
    position: sticky; top:0; z-index: 50;
    border-bottom: 1px solid rgba(255,255,255,0.08);
  }
  nav{
    display:flex; align-items:center; justify-content: space-between;
    padding: 16px 40px;
    max-width: 1240px; margin:0 auto;
  }
  .logo{
    display:flex; align-items:center; gap:10px;
    font-family: var(--display);
    font-size: 26px; font-weight: 800; color: var(--white);
    text-transform: uppercase; letter-spacing: 0.01em;
  }
  .logo .wrench-icon{
    width: 24px; height: 24px; flex-shrink: 0;
  }
  .navlinks{
    display:flex; gap: 34px; font-size: 14.5px; font-weight: 500; color: rgba(255,255,255,0.8);
  }
  .navlinks a:hover{ color: var(--white); }
  .navcall{
    display:flex; align-items:center; gap:14px;
  }
  .navcall .num{
    font-family: var(--mono); color: var(--white); font-size: 15px; font-weight:500;
  }
  .navcall .num span{ color: var(--marigold-deep); background:var(--marigold); padding: 1px 6px; border-radius:2px; color:var(--ink); font-size:11px; letter-spacing:.08em; margin-right:8px;}

  /* ===== HERO ===== */
  .hero{
    position: relative;
    background-color: var(--ink);
    background-position: center 42%;
    background-size: cover;
    background-repeat: no-repeat;
    padding: 96px 0 120px;
    overflow: hidden;
  }
  .hero::before{
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(100deg, rgba(14,26,38,0.93) 0%, rgba(14,26,38,0.85) 34%, rgba(14,26,38,0.55) 62%, rgba(14,26,38,0.28) 100%);
    z-index: 1;
  }
  .hero .wrap{
    display: grid;
    grid-template-columns: 1.15fr 0.85fr;
    gap: 40px;
    align-items: center;
    position: relative;
  }
  .hero-pipe{
    position:absolute; left: -40px; top:-20px; height: 640px; width:120px;
    pointer-events:none; z-index:2;
  }
  .hero-copy{ position:relative; z-index:2; }
  .hero-copy .eyebrow{ display:block; margin-bottom: 22px; color: var(--marigold); }
  .hero h1{
    font-size: clamp(52px, 6.4vw, 92px);
    margin-bottom: 26px;
    color: var(--white);
  }
  .hero h1 em{
    font-style: normal; color: #7FB6E0;
  }
  .hero p.lede{
    font-size: 19px; color: rgba(255,255,255,0.82); max-width: 460px; margin-bottom: 36px;
    font-weight: 400;
  }
  .hero-ctas{ display:flex; gap:16px; margin-bottom: 44px; flex-wrap:wrap; }
  .hero-trustline{
    display:flex; gap: 28px; flex-wrap:wrap;
    font-family: var(--mono); font-size: 12.5px; color: rgba(255,255,255,0.7); letter-spacing:.03em;
  }
  .hero-trustline span{ display:flex; align-items:center; gap:8px; }
  .hero-trustline b{ color: var(--white); }
  .dot{ width:5px; height:5px; border-radius:50%; background: var(--marigold); display:inline-block; }

  .hero-art{ position: relative; z-index:2; height: 480px; }
  .badge-card{
    position:absolute;
    background: var(--white);
    border: 1px solid var(--line);
    border-radius: 6px;
    padding: 20px 22px;
    box-shadow: 0 14px 34px -12px rgba(20,41,61,0.22);
  }
  .badge-card .num{
    font-family: var(--display); font-weight: 800; font-size: 40px; color: var(--ink);
    line-height:0.9;
  }
  .badge-card .lbl{
    font-family: var(--mono); font-size: 11.5px; color: var(--slate-light);
    text-transform: uppercase; letter-spacing:.08em; margin-top:6px;
  }
  .card-1{ top: 10px; right: 40px; width: 190px; transform: rotate(-2.5deg); }
  .card-2{ top: 190px; right: 190px; width: 168px; transform: rotate(2deg); background: var(--ink); }
  .card-2 .num, .card-2 .lbl{ color: var(--white); }
  .card-2 .num{ color: var(--marigold); }
  .card-3{ top: 340px; right: 20px; width: 210px; transform: rotate(1.5deg); }
  .card-3 .stars{ color: var(--marigold-deep); font-size: 15px; letter-spacing: 2px; }

  /* ===== TRUST STRIP ===== */
  .trust-strip{
    background: var(--blue-pale);
    border-top: 1px solid var(--line); border-bottom: 1px solid var(--line);
    padding: 22px 0;
  }
  .trust-strip .wrap{
    display:flex; justify-content: space-between; flex-wrap:wrap; gap: 18px 40px;
    font-family: var(--mono); font-size: 12.5px; letter-spacing:.05em; color: var(--blue-deep);
    text-transform: uppercase; font-weight:500;
  }
  .trust-strip span{ display:flex; align-items:center; gap:9px; }

  /* ===== SERVICES ===== */
  .services{ padding: 120px 0 100px; position:relative; }
  .section-head{
    display:flex; justify-content: space-between; align-items: flex-end;
    gap: 40px; margin-bottom: 56px;
  }
  .section-head h2{ font-size: clamp(38px, 4vw, 56px); max-width: 560px; }
  .section-head p{ color: var(--slate); max-width: 320px; font-size: 15.5px; padding-bottom: 6px; }

  .svc-grid{
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 22px;
  }
  .svc-card{
    background: var(--white);
    border: 1px solid var(--line);
    border-radius: 6px;
    padding: 34px 30px;
    position: relative;
    transition: transform .15s ease;
  }
  .svc-card:hover{ transform: translateY(-4px); border-color: var(--blue); }
  .svc-card .n{
    font-family: var(--mono); font-size: 12px; color: var(--slate-light); margin-bottom: 22px; display:block;
  }
  .svc-card h3{
    font-size: 26px; margin-bottom: 12px; letter-spacing:0;
  }
  .svc-card p{ color: var(--slate); font-size: 14.5px; }
  .svc-card .tag{
    position:absolute; top: 28px; right: 28px;
    background: var(--marigold); color: var(--ink);
    font-family: var(--mono); font-size: 10.5px; padding: 3px 8px; border-radius: 2px;
    text-transform: uppercase; letter-spacing:.06em; font-weight:600;
  }
  .svc-featured{ grid-column: span 3; grid-row: span 2; background: var(--ink); border-color: var(--ink); padding: 40px; }
  .svc-featured h3{ color: var(--white); font-size: 34px; }
  .svc-featured p{ color: rgba(255,255,255,0.7); font-size: 15px; margin-bottom: 24px; }
  .svc-featured .n{ color: var(--marigold); }
  .svc-b{ grid-column: span 3; }
  .svc-c{ grid-column: span 3; margin-top: -50px; }
  .svc-d{ grid-column: span 2; }
  .svc-e{ grid-column: span 2; }
  .svc-f{ grid-column: span 2; background: var(--fog); border-style: dashed; }

  /* ===== STATS BAND ===== */
  .stats-band{
    background: var(--ink);
    padding: 76px 0;
    position: relative;
    overflow:hidden;
  }
  .stats-band .wrap{
    display:grid; grid-template-columns: repeat(4,1fr); gap: 30px;
  }
  .stat{ border-left: 2px solid rgba(255,255,255,0.15); padding-left: 22px; }
  .stat .num{
    font-family: var(--display); font-weight: 800; font-size: 58px; color: var(--white); line-height:0.9;
  }
  .stat .num span{ color: var(--marigold); }
  .stat .lbl{
    font-family: var(--mono); font-size: 12.5px; color: rgba(255,255,255,0.55);
    text-transform: uppercase; letter-spacing:.06em; margin-top: 10px;
  }

  /* ===== PROCESS ===== */
  .process{ padding: 120px 0; }
  .proc-row{
    display:grid; grid-template-columns: repeat(4, 1fr);
    gap: 0; position: relative; margin-top: 60px;
  }
  .proc-row::before{
    content:'';
    position:absolute; top: 27px; left: 6%; right: 6%; height: 2px;
    background: repeating-linear-gradient(to right, var(--line) 0 10px, transparent 10px 18px);
    z-index:0;
  }
  .proc-step{ position:relative; padding-right: 24px; }
  .proc-step .idx{
    width: 56px; height: 56px; border-radius: 50%;
    background: var(--paper); border: 2px solid var(--blue);
    color: var(--blue); font-family: var(--mono); font-weight:600; font-size: 17px;
    display:flex; align-items:center; justify-content:center;
    margin-bottom: 26px; position: relative; z-index:1;
  }
  .proc-step:nth-child(4) .idx{ background: var(--marigold); border-color: var(--marigold); color: var(--ink); }
  .proc-step h3{ font-size: 24px; margin-bottom: 10px; }
  .proc-step p{ color: var(--slate); font-size: 14.5px; max-width: 240px; }

  /* ===== TESTIMONIALS ===== */
  .testimonials{ background: var(--fog); padding: 120px 0; }
  .test-grid{
    display: grid; grid-template-columns: 1.3fr 1fr; gap: 60px; align-items: start;
  }
  .test-main{ }
  .test-main .stars{ color: var(--marigold-deep); font-size: 20px; letter-spacing: 3px; margin-bottom: 24px; display:block; }
  .test-main blockquote{
    font-family: var(--display); font-weight: 700; text-transform: none;
    font-size: clamp(28px, 3vw, 38px); line-height: 1.18; color: var(--ink); margin-bottom: 28px;
    letter-spacing: 0;
  }
  .test-main .attrib{ font-family: var(--mono); font-size: 13px; color: var(--slate); }
  .test-main .attrib b{ color: var(--ink); font-weight:600; }

  .test-side{ display:flex; flex-direction:column; gap: 22px; }
  .test-mini{ background: var(--white); border: 1px solid var(--line); border-radius: 6px; padding: 24px; }
  .test-mini p{ font-size: 14.5px; color: var(--slate); margin-bottom: 14px; }
  .test-mini .attrib{ font-family: var(--mono); font-size: 12px; color: var(--slate-light); }

  /* ===== CTA BAND ===== */
  .cta-band{
    background: var(--marigold);
    padding: 60px 0;
  }
  .cta-band .wrap{
    display:flex; justify-content: space-between; align-items:center; gap: 30px; flex-wrap: wrap;
  }
  .cta-band h2{ font-size: clamp(30px, 3.4vw, 44px); color: var(--ink); max-width: 480px; }
  .cta-band .callnow{
    display:flex; align-items:center; gap:18px;
  }
  .cta-band .callnow .num{
    font-family: var(--display); font-weight:800; font-size: 34px; color: var(--ink);
  }
  .cta-band .callnow .sub{ font-family: var(--mono); font-size: 12px; color: var(--ink); opacity:0.7; }
  .btn-ink{ background: var(--ink); color: var(--white); }
  .btn-ink:hover{ background: var(--ink-soft); }

  /* ===== FOOTER ===== */
  footer{ background: var(--ink); color: rgba(255,255,255,0.65); padding: 80px 0 30px; }
  .foot-grid{
    display: grid; grid-template-columns: 1.4fr 1fr 1fr 1fr; gap: 40px;
    padding-bottom: 56px; border-bottom: 1px solid rgba(255,255,255,0.1);
  }
  .foot-brand .logo{ margin-bottom: 18px; }
  .foot-brand p{ font-size: 14px; max-width: 260px; color: rgba(255,255,255,0.5); }
  footer h4{
    font-family: var(--mono); font-size: 11.5px; text-transform: uppercase; letter-spacing:.08em;
    color: var(--marigold); margin-bottom: 18px; font-weight:600;
  }
  footer ul{ list-style:none; display:flex; flex-direction:column; gap: 10px; font-size: 14px; }
  footer ul a:hover{ color: var(--white); }
  .foot-bottom{
    display:flex; justify-content: space-between; padding-top: 24px;
    font-family: var(--mono); font-size: 11.5px; color: rgba(255,255,255,0.4); flex-wrap:wrap; gap:10px;
  }

  @media (max-width: 900px){
    .wrap{ padding: 0 22px; }
    nav{ padding: 14px 22px; }
    .navlinks{ display:none; }
    .hero .wrap{ grid-template-columns: 1fr; }
    .hero-art{ display:none; }
    .hero-pipe{ display:none; }
    .svc-grid{ grid-template-columns: 1fr 1fr; }
    .svc-featured{ grid-column: span 2; grid-row: auto; }
    .svc-b,.svc-c,.svc-d,.svc-e,.svc-f{ grid-column: span 2; margin-top:0; }
    .stats-band .wrap{ grid-template-columns: 1fr 1fr; gap: 40px 20px; }
    .proc-row{ grid-template-columns: 1fr; gap: 40px; }
    .proc-row::before{ display:none; }
    .test-grid{ grid-template-columns: 1fr; }
    .foot-grid{ grid-template-columns: 1fr 1fr; }
    .section-head{ flex-direction:column; align-items:flex-start; }
  }

`

export default function MainlinePlumbingPage() {
  return (
    <main>
      <style>{plumbingStyles}</style>


<header>
  <nav>
    <a className="logo"><svg className="wrench-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 2.5a5 5 0 0 0-6.87 5.79L2.9 16.02a2.1 2.1 0 0 0 2.97 2.97l7.73-7.73a5 5 0 0 0 5.79-6.87l-3.02 3.02a1.5 1.5 0 0 1-2.12 0l-.7-.7a1.5 1.5 0 0 1 0-2.12L17.5 2.5Z" fill="#F0A93A"/></svg>Mainline Plumbing</a>
    <div className="navlinks">
      <a href="#services">Services</a>
      <a href="#process">How it works</a>
      <a href="#reviews">Reviews</a>
      <a href="#contact">Service area</a>
    </div>
    <div className="navcall">
      <a href="#" className="num"><span>24/7</span>(727) 555-0148</a>
      <a href="#" className="btn btn-primary">Book a visit</a>
    </div>
  </nav>
</header>

<section className="hero" style={{ backgroundImage: `url(${plumbingHero})` }}>
  <svg className="hero-pipe" viewBox="0 0 120 640" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 0 V 220 Q20 250 50 250 H 90 Q110 250 110 280 V 640" stroke="#7FB6E0" stroke-width="3" stroke-dasharray="1 0" opacity="0.4"/>
    <circle cx="20" cy="220" r="6" fill="#7FB6E0" opacity="0.4"/>
    <circle cx="110" cy="380" r="6" fill="#F0A93A" opacity="0.55"/>
    <circle cx="20" cy="60" r="4" fill="#7FB6E0" opacity="0.35"/>
  </svg>
  <div className="wrap">
    <div className="hero-copy">
      <span className="eyebrow">Licensed · Insured · Tampa Bay, FL</span>
      <h1>We go straight<br/>to the <em>main</em>.</h1>
      <p className="lede">Straight answers, upfront pricing, and plumbers who actually show up when they say they will. Mainline Plumbing Co. has kept Tampa Bay's water running since 1998.</p>
      <div className="hero-ctas">
        <a href="#" className="btn btn-primary">Call (727) 555-0148</a>
        <a href="#" className="btn btn-primary">Get a free estimate</a>
      </div>
      <div className="hero-trustline">
        <span className="dot"></span> <span><b>27 yrs</b> in Pinellas County</span>
        <span className="dot"></span> <span><b>4.9★</b> avg across 1,900+ reviews</span>
        <span className="dot"></span> <span><b>45 min</b> avg emergency response</span>
      </div>
    </div>
    <div className="hero-art">
      <div className="badge-card card-1">
        <div className="num">24/7</div>
        <div className="lbl">Emergency dispatch</div>
      </div>
      <div className="badge-card card-2">
        <div className="num">45<span style={{fontSize: "20px"}}>min</span></div>
        <div className="lbl">Average arrival</div>
      </div>
      <div className="badge-card card-3">
        <div className="stars">★★★★★</div>
        <div className="lbl" style={{marginTop: "10px"}}>"Fixed in one visit, fair price." — Marcus T.</div>
      </div>
    </div>
  </div>
</section>

<div className="trust-strip">
  <div className="wrap">
    <span>◆ FL License #CFC1234567</span>
    <span>◆ $2M Liability Insured</span>
    <span>◆ Background-Checked Techs</span>
    <span>◆ Workmanship Guarantee</span>
    <span>◆ Financing Available</span>
  </div>
</div>

<section className="services" id="services">
  <div className="wrap">
    <div className="section-head">
      <h2>Every job starts with a straight diagnosis.</h2>
      <p>No guesswork billing. We show you what's wrong before we touch a wrench.</p>
    </div>
    <div className="svc-grid">
      <div className="svc-card svc-featured">
        <span className="n">01 — Most requested</span>
        <h3>Drain &amp; Sewer Cleaning</h3>
        <p>Hydro-jetting and camera inspection for clogs that keep coming back. We show you the footage, not just the invoice.</p>
        <a href="#" className="btn btn-outline">See how it works →</a>
      </div>
      <div className="svc-card svc-b">
        <span className="tag">Same-day</span>
        <span className="n">02</span>
        <h3>Water Heater Repair &amp; Install</h3>
        <p>Tank and tankless, gas and electric. Most installs completed same day.</p>
      </div>
      <div className="svc-card svc-c">
        <span className="n">03</span>
        <h3>Leak Detection</h3>
        <p>Acoustic and thermal detection finds slab leaks without tearing up your floor.</p>
      </div>
      <div className="svc-card svc-d">
        <span className="n">04</span>
        <h3>Repipe &amp; Repair</h3>
        <p>Whole-home repiping for older Tampa Bay homes on galvanized or polybutylene.</p>
      </div>
      <div className="svc-card svc-e">
        <span className="n">05</span>
        <h3>Fixture Install</h3>
        <p>Faucets, toilets, garbage disposals — clean installs, no shortcuts.</p>
      </div>
      <div className="svc-card svc-f">
        <span className="n">06</span>
        <h3>Backflow &amp; Inspection</h3>
        <p>Annual testing and county-required backflow certification.</p>
      </div>
    </div>
  </div>
</section>

<section className="stats-band">
  <div className="wrap">
    <div className="stat">
      <div className="num">27<span>yrs</span></div>
      <div className="lbl">Serving Tampa Bay</div>
    </div>
    <div className="stat">
      <div className="num">12<span>,400+</span></div>
      <div className="lbl">Jobs completed</div>
    </div>
    <div className="stat">
      <div className="num">4.9<span>★</span></div>
      <div className="lbl">Average rating, 1,900 reviews</div>
    </div>
    <div className="stat">
      <div className="num">45<span>min</span></div>
      <div className="lbl">Average emergency response</div>
    </div>
  </div>
</section>

<section className="process" id="process">
  <div className="wrap">
    <div className="section-head">
      <h2>What happens when you call.</h2>
      <p>Same four steps, every time — no surprises in between.</p>
    </div>
    <div className="proc-row">
      <div className="proc-step">
        <div className="idx">01</div>
        <h3>You call or book</h3>
        <p>Talk to a real dispatcher, not a call tree. We text you a confirmed arrival window.</p>
      </div>
      <div className="proc-step">
        <div className="idx">02</div>
        <h3>We diagnose on-site</h3>
        <p>Flat-rate pricing shown before any work starts. You approve it, or you don't.</p>
      </div>
      <div className="proc-step">
        <div className="idx">03</div>
        <h3>We fix it right</h3>
        <p>Fully stocked trucks mean most repairs finish in a single visit.</p>
      </div>
      <div className="proc-step">
        <div className="idx">04</div>
        <h3>Guaranteed for 2 years</h3>
        <p>Parts and labor covered. If it fails, we come back at no charge.</p>
      </div>
    </div>
  </div>
</section>

<section className="testimonials" id="reviews">
  <div className="wrap">
    <div className="test-grid">
      <div className="test-main">
        <span className="stars">★★★★★</span>
        <blockquote>"Told me the price before they touched anything, and it didn't change. That alone puts them above every plumber I've called in this county."</blockquote>
        <div className="attrib"><b>Renata Boyd</b> — Dunedin, FL</div>
      </div>
      <div className="test-side">
        <div className="test-mini">
          <p>"Came out at 9pm for a burst pipe and had it patched within the hour. Didn't gouge us on the emergency rate either."</p>
          <div className="attrib">JASON P. — CLEARWATER</div>
        </div>
        <div className="test-mini">
          <p>"Replaced our whole water heater same day. Clean work, no mess left behind."</p>
          <div className="attrib">A. NGUYEN — ST. PETE</div>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="cta-band" id="contact">
  <div className="wrap">
    <h2>Something leaking right now? Don't wait it out.</h2>
    <div className="callnow">
      <div>
        <div className="num">(727) 555-0148</div>
        <div className="sub">Dispatch open 24/7 · Tampa Bay area</div>
      </div>
      <a href="#" className="btn btn-ink">Book online instead</a>
    </div>
  </div>
</section>

<footer>
  <div className="wrap">
    <div className="foot-grid">
      <div className="foot-brand">
        <a className="logo"><svg className="wrench-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 2.5a5 5 0 0 0-6.87 5.79L2.9 16.02a2.1 2.1 0 0 0 2.97 2.97l7.73-7.73a5 5 0 0 0 5.79-6.87l-3.02 3.02a1.5 1.5 0 0 1-2.12 0l-.7-.7a1.5 1.5 0 0 1 0-2.12L17.5 2.5Z" fill="#F0A93A"/></svg>Mainline Plumbing</a>
        <p>Family-owned plumbing serving Pinellas, Hillsborough, and Pasco counties since 1998.</p>
      </div>
      <div>
        <h4>Services</h4>
        <ul>
          <li><a href="#">Drain cleaning</a></li>
          <li><a href="#">Water heaters</a></li>
          <li><a href="#">Leak detection</a></li>
          <li><a href="#">Repiping</a></li>
        </ul>
      </div>
      <div>
        <h4>Company</h4>
        <ul>
          <li><a href="#">About</a></li>
          <li><a href="#">Reviews</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Financing</a></li>
        </ul>
      </div>
      <div>
        <h4>Service area</h4>
        <ul>
          <li>Clearwater</li>
          <li>Dunedin</li>
          <li>St. Petersburg</li>
          <li>Tampa</li>
        </ul>
      </div>
    </div>
    <div className="foot-bottom">
      <span>© 2026 Mainline Plumbing Co. · FL License #CFC1234567</span>
      <span>Privacy · Terms</span>
      <span><Link to="/portfolio">← Back to Ashlyn Studio Portfolio</Link></span>
    </div>
  </div>
</footer>


    </main>
  )
}

export function Head() {
  return <title>Mainline Plumbing Co.</title>
}