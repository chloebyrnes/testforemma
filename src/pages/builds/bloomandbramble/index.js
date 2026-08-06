import React from "react"
import { Link } from "gatsby"

const bloomStyles = `
@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,400;1,9..144,500&family=Jost:wght@300;400;500;600&display=swap');

  :root{
    --ink:#3B473C;
    --paper:#FBF6EA;
    --paper-deep:#F0E7D2;
    --mauve:#E79897;
    --mauve-deep:#AD7271;
    --plum:#475548;
    --sage:#C6C09C;
    --sage-deep:#8B866D;
    --gold:#FCC88A;
    --bluebell:#B7CBDB;
    --blossom:#FECDBE;
    --line: rgba(59,71,60,0.14);
  }

  *{margin:0;padding:0;box-sizing:border-box;}
  html{scroll-behavior:smooth;}

  body{
    background:var(--paper);
    color:var(--ink);
    font-family:'Jost', sans-serif;
    font-weight:400;
    -webkit-font-smoothing:antialiased;
    overflow-x:hidden;
    position:relative;
  }

  /* subtle paper grain */
  body::before{
    content:"";
    position:fixed; inset:0;
    pointer-events:none;
    z-index:9999;
    opacity:0.045;
    background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  }

  h1,h2,h3,.display{
    font-family:'Fraunces', serif;
    font-weight:500;
    letter-spacing:-0.01em;
    line-height:1.02;
  }

  .italic{font-style:italic; font-weight:400;}

  .eyebrow{
    font-family:'Jost', sans-serif;
    text-transform:uppercase;
    letter-spacing:0.22em;
    font-size:12px;
    font-weight:500;
    color:var(--mauve-deep);
  }

  a{color:inherit; text-decoration:none;}

  .wrap{
    max-width:1320px;
    margin:0 auto;
    padding:0 56px;
  }

  @media(max-width:820px){ .wrap{padding:0 24px;} }

  /* ================= NAV ================= */
  nav{
    position:relative;
    z-index:20;
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:34px 56px 0;
  }
  @media(max-width:820px){ nav{padding:24px 24px 0;} }

  .brand{
    font-family:'Fraunces', serif;
    font-size:22px;
    letter-spacing:0.01em;
  }
  .brand em{font-style:italic; color:var(--mauve-deep);}

  .nav-right{display:flex; align-items:center; gap:16px;}
  @media(max-width:820px){ .nav-right{gap:0;} }

  .navlinks{
    display:flex;
    align-items:center;
    gap:10px;
    font-size:11.5px;
    letter-spacing:0.05em;
    text-transform:uppercase;
  }
  .navlinks a{
    padding:8px 16px;
    border-radius:999px;
    color:var(--ink);
    box-shadow:0 5px 12px -7px rgba(59,71,60,0.5);
    transition:transform .35s cubic-bezier(.34,1.56,.64,1), box-shadow .3s ease;
  }
  .navlinks a:hover{transform:translateY(-3px) rotate(-3deg) scale(1.06); box-shadow:0 10px 16px -8px rgba(59,71,60,0.55);}
  .navlinks a:nth-child(1){background:var(--sage);}
  .navlinks a:nth-child(2){background:var(--gold);}
  .navlinks a:nth-child(3){background:var(--bluebell);}
  .navlinks a:nth-child(4){background:var(--mauve);}
  @media(max-width:820px){ .navlinks{display:none;} }

  .nav-cta{
    background:var(--plum);
    color:var(--paper);
    border:none;
    padding:10px 22px;
    font-size:12px;
    letter-spacing:0.1em;
    text-transform:uppercase;
    border-radius:999px;
    box-shadow:0 6px 14px -7px rgba(59,71,60,0.5);
    transition:background .3s ease, transform .35s cubic-bezier(.34,1.56,.64,1);
  }
  .nav-cta:hover{background:var(--mauve-deep); transform:translateY(-3px) rotate(2deg) scale(1.05);}

  /* ================= HERO ================= */
  .hero{
    position:relative;
    padding:64px 0 0;
    display:grid;
    grid-template-columns:1.05fr 0.95fr;
    align-items:end;
    gap:20px;
    min-height:88vh;
  }
  @media(max-width:980px){
    .hero{grid-template-columns:1fr; min-height:auto; padding-top:36px;}
  }

  .spine{
    position:absolute;
    left:0; top:110px;
    writing-mode:vertical-rl;
    transform:rotate(180deg);
    font-size:12px;
    letter-spacing:0.25em;
    text-transform:uppercase;
    color:var(--sage-deep);
    padding-left:8px;
  }
  @media(max-width:980px){ .spine{display:none;} }

  .hero-copy{
    padding:70px 0 90px 68px;
    max-width:640px;
  }
  @media(max-width:980px){ .hero-copy{padding-left:0; padding-top:10px;} }
  @media(max-width:820px){ .hero-copy{padding:10px 0 40px;} }

  .hero-copy .eyebrow{margin-bottom:22px; display:block;}

  .sprig{
    width:60px;
    height:auto;
    display:block;
    margin-bottom:10px;
    animation:sprig-bob 4.5s ease-in-out infinite;
  }
  @keyframes sprig-bob{
    0%,100%{transform:rotate(-4deg);}
    50%{transform:rotate(4deg);}
  }

  .hero h1{
    font-size:clamp(40px, 5.6vw, 76px);
    margin-bottom:30px;
  }
  .hero h1 span{display:block;}

  .hero p.lede{
    font-size:17px;
    line-height:1.7;
    color:#3B473C;
    max-width:440px;
    margin-bottom:38px;
  }

  .hero-ctas{display:flex; align-items:center; gap:28px; flex-wrap:wrap;}

  .btn-primary{
    background:var(--plum);
    color:var(--paper);
    padding:15px 32px;
    font-size:13px;
    letter-spacing:0.08em;
    text-transform:uppercase;
    border-radius:999px;
    display:inline-block;
    transition:transform .4s cubic-bezier(.34,1.56,.64,1), background .3s ease;
  }
  .btn-primary:hover{background:var(--mauve-deep); transform:translateY(-3px) rotate(-1.5deg) scale(1.03);}

  .btn-ghost{
    font-size:13px;
    letter-spacing:0.06em;
    text-transform:uppercase;
    border-bottom:1px dashed var(--ink);
    padding-bottom:3px;
    display:inline-block;
    transition:transform .3s ease;
  }
  .btn-ghost:hover{transform:rotate(-1deg) translateY(-1px);}

  .hero-art{
    position:relative;
    height:100%;
    min-height:640px;
    display:flex;
    align-items:flex-end;
    justify-content:center;
  }
  @media(max-width:980px){ .hero-art{min-height:420px;} }

  .hero-art svg{width:100%; height:auto; max-width:640px;}

  .bloom-link{
    cursor:pointer;
    transform-box:fill-box;
    transform-origin:center;
    transition:transform .3s ease, filter .3s ease;
  }
  .bloom-link:hover{transform:scale(1.16); filter:drop-shadow(0 8px 10px rgba(62,31,32,0.3));}
  .bloom-link:active{transform:scale(1.08);}
  .bloom-link:focus-visible{outline:2px solid var(--mauve-deep); outline-offset:4px;}

  .bloom-tip{opacity:0; pointer-events:none; transition:opacity .25s ease;}
  .bloom-link:hover + .bloom-tip{opacity:1;}
  .bloom-link:focus-visible + .bloom-tip{opacity:1;}
  .bloom-tip-inner{
    transform-box:fill-box;
    transform-origin:center;
    transform:translateY(6px) scale(.8);
    transition:transform .3s cubic-bezier(.34,1.56,.64,1);
  }
  .bloom-link:hover + .bloom-tip .bloom-tip-inner,
  .bloom-link:focus-visible + .bloom-tip .bloom-tip-inner{transform:translateY(0) scale(1);}
  .tip-bg{fill:var(--plum);}
  .tip-text{
    fill:var(--paper);
    font-family:'Fraunces',serif;
    font-style:italic;
    font-size:11.5px;
  }

  .hero-tag{
    position:absolute;
    top:-20px; right:2%;
    background:var(--sage);
    color:var(--paper);
    padding:18px 22px;
    max-width:190px;
    font-size:13px;
    line-height:1.5;
    border-radius:255px 15px 225px 15px/15px 225px 15px 255px;
    box-shadow:0 18px 30px -18px rgba(35,43,30,0.45);
    animation:gentle-bob 5s ease-in-out infinite;
    z-index:5;
  }
  @keyframes gentle-bob{
    0%,100%{transform:rotate(2.5deg) translateY(0);}
    50%{transform:rotate(-1.5deg) translateY(-6px);}
  }
  .hero-tag em{font-family:'Fraunces',serif; font-style:italic; display:block; font-size:15px; margin-bottom:4px;}
  @media(max-width:640px){ .hero-tag{display:none;} }

  /* running stem divider */
  .stemline{width:100%; display:block; margin:0; opacity:0.85;}
  .stemline path{fill:none; stroke:var(--sage-deep); stroke-width:1.3;}
  .stemline .leaf{fill:var(--sage); stroke:none;}
  .stemline .bud{fill:var(--mauve); stroke:none;}

  .stemline-featured{opacity:1;}
  .stemline-featured path{stroke:var(--mauve-deep); stroke-width:1.6;}
  .stemline-featured .leaf{fill:var(--gold);}
  .stemline-featured .bud{fill:var(--plum); r:6;}

  /* ================= MANIFESTO ================= */
  .manifesto{
    padding:130px 0 120px;
    position:relative;
  }
  .manifesto-grid{
    display:grid;
    grid-template-columns:0.6fr 1fr;
    gap:60px;
  }
  @media(max-width:900px){ .manifesto-grid{grid-template-columns:1fr; gap:30px;} }

  .manifesto h2{
    font-size:clamp(30px,3.4vw,44px);
    position:sticky;
    top:120px;
    align-self:start;
  }

  .principle{
    padding:34px 0;
    border-top:1px solid var(--line);
    display:grid;
    grid-template-columns:70px 1fr;
    gap:24px;
  }
  .principle:last-child{border-bottom:1px solid var(--line);}
  .principle .mark{
    font-family:'Fraunces',serif;
    font-style:italic;
    font-size:15px;
    color:var(--mauve-deep);
    padding-top:4px;
  }
  .principle h3{font-size:23px; margin-bottom:10px; font-weight:500;}
  .principle p{font-size:15.5px; line-height:1.7; color:#3B4432; max-width:520px;}

  /* ================= SERVICES — offset cards ================= */
  .services{padding:60px 0 130px;}
  .services-head{
    display:flex; justify-content:space-between; align-items:flex-end;
    margin-bottom:56px; gap:24px; flex-wrap:wrap;
  }
  .services-head h2{font-size:clamp(30px,3.4vw,46px); max-width:480px;}

  .service-list{display:flex; flex-direction:column;}
  .service-row{
    display:grid;
    grid-template-columns:120px 1fr 1.1fr 90px;
    align-items:center;
    gap:30px;
    padding:30px 0;
    border-top:1px solid var(--line);
    transition:padding-left .35s ease, background .35s ease;
  }
  .service-row:last-child{border-bottom:1px solid var(--line);}
  .service-row:hover{padding-left:16px; background:rgba(169,103,122,0.06);}
  @media(max-width:820px){
    .service-row{grid-template-columns:1fr; gap:8px; padding:26px 0;}
    .service-row .snum{display:none;}
  }

  .snum{font-family:'Fraunces',serif; font-style:italic; color:var(--sage-deep); font-size:15px;}
  .service-row h3{font-size:25px; font-weight:500;}
  .service-row p{font-size:14.5px; color:#3B4432; line-height:1.6;}
  .service-row .sprice{font-size:12.5px; letter-spacing:0.05em; text-transform:uppercase; color:var(--mauve-deep); text-align:right;}
  @media(max-width:820px){ .service-row .sprice{text-align:left; margin-top:6px;} }

  /* ================= PROCESS ================= */
  .process{
    background:var(--ink);
    color:var(--paper);
    padding:120px 0;
    position:relative;
  }
  .process .eyebrow{color:var(--gold);}
  .process h2{font-size:clamp(30px,3.4vw,46px); max-width:560px; margin:20px 0 70px; color:var(--paper);}

  .process-grid{
    display:grid;
    grid-template-columns:repeat(4,1fr);
    gap:0;
  }
  @media(max-width:980px){ .process-grid{grid-template-columns:1fr 1fr; row-gap:50px;} }
  @media(max-width:560px){ .process-grid{grid-template-columns:1fr;} }

  .pstep{
    border-left:1px solid rgba(241,232,214,0.22);
    padding:0 26px;
  }
  .pstep:first-child{border-left:none; padding-left:0;}
  @media(max-width:980px){
    .pstep:nth-child(odd){border-left:none; padding-left:0;}
    .pstep{border-left:1px solid rgba(241,232,214,0.22); padding-left:26px;}
  }
  @media(max-width:560px){ .pstep{border-left:none; padding-left:0;} }

  .pstep .season{
    font-family:'Fraunces',serif; font-style:italic;
    font-size:14px; color:var(--mauve);
    margin-bottom:18px; display:block;
  }
  .pstep h3{font-size:22px; margin-bottom:12px; font-weight:500;}
  .pstep p{font-size:14px; line-height:1.7; color:#BFB89F;}

  /* ================= GALLERY (pinterest masonry) ================= */
  .gallery{padding:130px 0 100px;}
  .gallery-head{margin-bottom:56px; max-width:600px;}
  .gallery-head h2{font-size:clamp(30px,3.4vw,46px); margin-bottom:16px;}
  .gallery-head p{font-size:15.5px; line-height:1.7; color:#3B473C;}

  .masonry{
    columns:4 220px;
    column-gap:22px;
  }
  @media(max-width:980px){ .masonry{columns:3 180px;} }
  @media(max-width:640px){ .masonry{columns:2 150px;} }

  .card{
    break-inside:avoid;
    margin-bottom:22px;
    background:#D8CFAE;
    border:1px solid var(--line);
    border-radius:12px;
    padding:14px 14px 18px;
    transform:rotate(var(--r,0deg));
    box-shadow:0 20px 34px -26px rgba(35,43,30,0.5);
    transition:transform .45s cubic-bezier(.34,1.56,.64,1), box-shadow .35s ease;
  }
  .card:hover{transform:rotate(0deg) translateY(-6px) scale(1.03); box-shadow:0 26px 40px -22px rgba(35,43,30,0.55);}
  .card:nth-child(1){--r:-4.5deg;}
  .card:nth-child(2){--r:3deg;}
  .card:nth-child(3){--r:-2.5deg;}
  .card:nth-child(4){--r:4deg;}
  .card:nth-child(5){--r:-3.5deg;}
  .card:nth-child(6){--r:2.5deg;}
  .card:nth-child(7){--r:-4deg;}
  .card:nth-child(8){--r:3.5deg;}

  .card .swatch{
    width:100%;
    border-radius:8px;
    display:block;
    margin-bottom:12px;
  }
  .card .cap-label{font-size:11px; text-transform:uppercase; letter-spacing:0.12em; color:var(--sage-deep); margin-bottom:4px;}
  .card .cap-title{font-family:'Fraunces',serif; font-style:italic; font-size:16px;}

  /* ================= TESTIMONIAL ================= */
  .testimonial{
    padding:70px 0 140px;
    display:grid;
    grid-template-columns:0.4fr 1fr;
    gap:40px;
    align-items:center;
  }
  @media(max-width:820px){ .testimonial{grid-template-columns:1fr;} }
  .testimonial svg{width:100%; max-width:280px;}
  .testimonial blockquote{
    font-family:'Fraunces',serif;
    font-style:italic;
    font-weight:400;
    font-size:clamp(24px,3vw,38px);
    line-height:1.35;
    color:var(--plum);
  }
  .testimonial cite{
    display:block;
    margin-top:26px;
    font-style:normal;
    font-family:'Jost',sans-serif;
    font-size:13px;
    letter-spacing:0.06em;
    text-transform:uppercase;
    color:var(--sage-deep);
  }

  /* ================= CTA / FOOTER ================= */
  footer{
    background:var(--mauve-deep);
    color:var(--paper);
    padding:100px 0 40px;
  }
  .foot-cta{
    display:grid;
    grid-template-columns:1.2fr 0.8fr;
    gap:40px;
    padding-bottom:80px;
    border-bottom:1px solid rgba(241,232,214,0.25);
  }
  @media(max-width:820px){ .foot-cta{grid-template-columns:1fr;} }
  .foot-cta h2{font-size:clamp(32px,4.4vw,58px); color:var(--paper); max-width:560px;}
  .foot-form{display:flex; flex-direction:column; justify-content:flex-end; gap:16px;}
  .foot-form p{font-size:14.5px; line-height:1.6; color:#F1DDE2;}
  .foot-input-row{display:flex; border-bottom:1px solid var(--paper); padding-bottom:10px; gap:12px;}
  .foot-input-row input{
    background:transparent; border:none; outline:none;
    color:var(--paper); font-family:'Jost',sans-serif; font-size:15px; flex:1;
  }
  .foot-input-row input::placeholder{color:rgba(241,232,214,0.55);}
  .foot-input-row button{
    background:none; border:none; color:var(--paper);
    font-size:13px; letter-spacing:0.08em; text-transform:uppercase; cursor:pointer;
  }

  .foot-bottom{
    padding-top:40px;
    display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:16px;
    font-size:12.5px; letter-spacing:0.04em; color:#F1DDE2;
  }
  .foot-bottom .fbrand{font-family:'Fraunces',serif; font-size:19px; font-style:italic; color:var(--paper);}
  .foot-links{display:flex; gap:26px; text-transform:uppercase; letter-spacing:0.08em;}

  @media (prefers-reduced-motion: reduce){
    *{transition:none !important; scroll-behavior:auto !important;}
  }

`

export default function BloomAndBramblePage() {
  return (
    <main style={{ backgroundColor: "#FBF6EA" }}>
      <style>{bloomStyles}</style>


<nav>
  <div className="brand">Bloom <em>&amp;</em> Bramble</div>
  <div className="nav-right">
    <div className="navlinks">
      <a href="#services">Services</a>
      <a href="#process">Process</a>
      <a href="#gallery">Gallery</a>
      <a href="#footer">Contact</a>
    </div>
    <a href="#footer" className="nav-cta">Inquire</a>
  </div>
</nav>

{/* ================= HERO ================= */}
<section className="hero wrap">
  <div className="spine">Hudson Valley, New York</div>
  <div className="hero-copy">
    <span className="eyebrow">Seasonal Wedding Floristry — Est. 2016</span>
    <h1>
      <span>Grown slow.</span>
      <span className="italic">Gathered by hand.</span>
      <span>Never flown in.</span>
    </h1>
    <p className="lede">We design with what's blooming that week — from our own cutting garden and three neighboring farms — so your flowers look like the season they were married in, not a catalogue.</p>
    <div className="hero-ctas">
      <a href="#footer" className="btn-primary">Inquire About Your Date</a>
      <a href="#gallery" className="btn-ghost">View Recent Weddings</a>
    </div>
  </div>

  <div className="hero-art">
    <div className="hero-tag"><em>This week's bloom</em>Sweet pea, chocolate cosmos &amp; garden rose, cut Tuesday morning.</div>
    <svg viewBox="0 0 520 620" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M260 600 C 250 480, 300 420, 270 320 C 245 235, 290 190, 260 90" stroke="#4F6350" stroke-width="2.2"/>
      <path d="M260 470 C 200 450, 170 400, 150 360" stroke="#4F6350" stroke-width="2"/>
      <path d="M270 400 C 330 385, 360 340, 380 300" stroke="#4F6350" stroke-width="2"/>
      <path d="M255 260 C 195 250, 160 210, 140 170" stroke="#4F6350" stroke-width="2"/>
      <path d="M272 210 C 325 195, 355 155, 375 120" stroke="#4F6350" stroke-width="2"/>
      {/* leaves */}
      <ellipse cx="155" cy="358" rx="26" ry="11" fill="#768E78" transform="rotate(-30 155 358)"/>
      <ellipse cx="378" cy="298" rx="26" ry="11" fill="#768E78" transform="rotate(25 378 298)"/>
      <ellipse cx="145" cy="168" rx="24" ry="10" fill="#768E78" transform="rotate(-25 145 168)"/>
      <ellipse cx="372" cy="118" rx="24" ry="10" fill="#768E78" transform="rotate(30 372 118)"/>
      {/* blooms (each one clickable) */}
      <a href="#gallery" className="bloom-link" aria-label="View recent weddings">
      <g transform="translate(260,90) rotate(0)">
        <g transform="rotate(0)"><ellipse cx="15" cy="0" rx="14" ry="7.5" fill="#E79897"/></g>
        <g transform="rotate(72)"><ellipse cx="15" cy="0" rx="14" ry="7.5" fill="#E79897"/></g>
        <g transform="rotate(144)"><ellipse cx="15" cy="0" rx="14" ry="7.5" fill="#E79897"/></g>
        <g transform="rotate(216)"><ellipse cx="15" cy="0" rx="14" ry="7.5" fill="#E79897"/></g>
        <g transform="rotate(288)"><ellipse cx="15" cy="0" rx="14" ry="7.5" fill="#E79897"/></g>
        <g transform="rotate(36)"><ellipse cx="10" cy="0" rx="9" ry="5" fill="#FECDBE"/></g>
        <g transform="rotate(108)"><ellipse cx="10" cy="0" rx="9" ry="5" fill="#FECDBE"/></g>
        <g transform="rotate(180)"><ellipse cx="10" cy="0" rx="9" ry="5" fill="#FECDBE"/></g>
        <g transform="rotate(252)"><ellipse cx="10" cy="0" rx="9" ry="5" fill="#FECDBE"/></g>
        <g transform="rotate(324)"><ellipse cx="10" cy="0" rx="9" ry="5" fill="#FECDBE"/></g>
        <circle r="7" fill="#3B473C"/>
        <circle cx="-2.5" cy="-2" r="1.3" fill="#FCC88A"/>
        <circle cx="2.5" cy="-2" r="1.3" fill="#FCC88A"/>
        <circle cx="0" cy="3" r="1.3" fill="#FCC88A"/>
      </g>
      </a>
      <g className="bloom-tip" transform="translate(260,90)">
        <g className="bloom-tip-inner">
          <polygon className="tip-bg" points="-7,-14 7,-14 0,-4"/>
          <rect className="tip-bg" x="-58" y="-40" width="116" height="26" rx="13"/>
          <text className="tip-text" x="0" y="-23" text-anchor="middle">Garden rose</text>
        </g>
      </g>
      <a href="#gallery" className="bloom-link" aria-label="View recent weddings">
      <g transform="translate(140,170) rotate(20)">
        <g transform="rotate(0)"><ellipse cx="12" cy="0" rx="11" ry="6" fill="#FCC88A"/></g>
        <g transform="rotate(72)"><ellipse cx="12" cy="0" rx="11" ry="6" fill="#FCC88A"/></g>
        <g transform="rotate(144)"><ellipse cx="12" cy="0" rx="11" ry="6" fill="#FCC88A"/></g>
        <g transform="rotate(216)"><ellipse cx="12" cy="0" rx="11" ry="6" fill="#FCC88A"/></g>
        <g transform="rotate(288)"><ellipse cx="12" cy="0" rx="11" ry="6" fill="#FCC88A"/></g>
        <g transform="rotate(36)"><ellipse cx="8" cy="0" rx="7" ry="4" fill="#FCD3A1"/></g>
        <g transform="rotate(108)"><ellipse cx="8" cy="0" rx="7" ry="4" fill="#FCD3A1"/></g>
        <g transform="rotate(180)"><ellipse cx="8" cy="0" rx="7" ry="4" fill="#FCD3A1"/></g>
        <g transform="rotate(252)"><ellipse cx="8" cy="0" rx="7" ry="4" fill="#FCD3A1"/></g>
        <g transform="rotate(324)"><ellipse cx="8" cy="0" rx="7" ry="4" fill="#FCD3A1"/></g>
        <circle r="5.5" fill="#3B473C"/>
        <circle cx="-2" cy="-1.6" r="1.1" fill="#E79897"/>
        <circle cx="2" cy="-1.6" r="1.1" fill="#E79897"/>
        <circle cx="0" cy="2.4" r="1.1" fill="#E79897"/>
      </g>
      </a>
      <g className="bloom-tip" transform="translate(140,170)">
        <g className="bloom-tip-inner">
          <polygon className="tip-bg" points="-7,-14 7,-14 0,-4"/>
          <rect className="tip-bg" x="-58" y="-40" width="116" height="26" rx="13"/>
          <text className="tip-text" x="0" y="-23" text-anchor="middle">Ranunculus</text>
        </g>
      </g>
      <a href="#gallery" className="bloom-link" aria-label="View recent weddings">
      <g transform="translate(380,120) rotate(-15)">
        <g transform="rotate(0)"><ellipse cx="13" cy="0" rx="12" ry="6.5" fill="#B7CBDB"/></g>
        <g transform="rotate(72)"><ellipse cx="13" cy="0" rx="12" ry="6.5" fill="#B7CBDB"/></g>
        <g transform="rotate(144)"><ellipse cx="13" cy="0" rx="12" ry="6.5" fill="#B7CBDB"/></g>
        <g transform="rotate(216)"><ellipse cx="13" cy="0" rx="12" ry="6.5" fill="#B7CBDB"/></g>
        <g transform="rotate(288)"><ellipse cx="13" cy="0" rx="12" ry="6.5" fill="#B7CBDB"/></g>
        <g transform="rotate(36)"><ellipse cx="9" cy="0" rx="8" ry="4.5" fill="#D9E4EC"/></g>
        <g transform="rotate(108)"><ellipse cx="9" cy="0" rx="8" ry="4.5" fill="#D9E4EC"/></g>
        <g transform="rotate(180)"><ellipse cx="9" cy="0" rx="8" ry="4.5" fill="#D9E4EC"/></g>
        <g transform="rotate(252)"><ellipse cx="9" cy="0" rx="8" ry="4.5" fill="#D9E4EC"/></g>
        <g transform="rotate(324)"><ellipse cx="9" cy="0" rx="8" ry="4.5" fill="#D9E4EC"/></g>
        <circle r="6" fill="#3B473C"/>
        <circle cx="-2.2" cy="-1.8" r="1.2" fill="#AD7271"/>
        <circle cx="2.2" cy="-1.8" r="1.2" fill="#AD7271"/>
        <circle cx="0" cy="2.6" r="1.2" fill="#AD7271"/>
      </g>
      </a>
      <g className="bloom-tip" transform="translate(380,120)">
        <g className="bloom-tip-inner">
          <polygon className="tip-bg" points="-7,-14 7,-14 0,-4"/>
          <rect className="tip-bg" x="-58" y="-40" width="116" height="26" rx="13"/>
          <text className="tip-text" x="0" y="-23" text-anchor="middle">Sweet pea</text>
        </g>
      </g>
      <a href="#gallery" className="bloom-link" aria-label="View recent weddings">
      <g transform="translate(150,360) rotate(10)">
        <g transform="rotate(0)"><ellipse cx="14" cy="0" rx="13" ry="7" fill="#C6C09C"/></g>
        <g transform="rotate(72)"><ellipse cx="14" cy="0" rx="13" ry="7" fill="#C6C09C"/></g>
        <g transform="rotate(144)"><ellipse cx="14" cy="0" rx="13" ry="7" fill="#C6C09C"/></g>
        <g transform="rotate(216)"><ellipse cx="14" cy="0" rx="13" ry="7" fill="#C6C09C"/></g>
        <g transform="rotate(288)"><ellipse cx="14" cy="0" rx="13" ry="7" fill="#C6C09C"/></g>
        <g transform="rotate(36)"><ellipse cx="10" cy="0" rx="9" ry="5" fill="#E3DCC5"/></g>
        <g transform="rotate(108)"><ellipse cx="10" cy="0" rx="9" ry="5" fill="#E3DCC5"/></g>
        <g transform="rotate(180)"><ellipse cx="10" cy="0" rx="9" ry="5" fill="#E3DCC5"/></g>
        <g transform="rotate(252)"><ellipse cx="10" cy="0" rx="9" ry="5" fill="#E3DCC5"/></g>
        <g transform="rotate(324)"><ellipse cx="10" cy="0" rx="9" ry="5" fill="#E3DCC5"/></g>
        <circle r="6.5" fill="#3B473C"/>
        <circle cx="-2.4" cy="-1.9" r="1.3" fill="#FCC88A"/>
        <circle cx="2.4" cy="-1.9" r="1.3" fill="#FCC88A"/>
        <circle cx="0" cy="2.8" r="1.3" fill="#FCC88A"/>
      </g>
      </a>
      <g className="bloom-tip" transform="translate(150,360)">
        <g className="bloom-tip-inner">
          <polygon className="tip-bg" points="-7,-14 7,-14 0,-4"/>
          <rect className="tip-bg" x="-58" y="-40" width="116" height="26" rx="13"/>
          <text className="tip-text" x="0" y="-23" text-anchor="middle">Dahlia</text>
        </g>
      </g>
      <a href="#gallery" className="bloom-link" aria-label="View recent weddings">
      <g transform="translate(380,300) rotate(-25)">
        <g transform="rotate(0)"><ellipse cx="13" cy="0" rx="12" ry="6.5" fill="#AD7271"/></g>
        <g transform="rotate(72)"><ellipse cx="13" cy="0" rx="12" ry="6.5" fill="#AD7271"/></g>
        <g transform="rotate(144)"><ellipse cx="13" cy="0" rx="12" ry="6.5" fill="#AD7271"/></g>
        <g transform="rotate(216)"><ellipse cx="13" cy="0" rx="12" ry="6.5" fill="#AD7271"/></g>
        <g transform="rotate(288)"><ellipse cx="13" cy="0" rx="12" ry="6.5" fill="#AD7271"/></g>
        <g transform="rotate(36)"><ellipse cx="9" cy="0" rx="8" ry="4.5" fill="#E79897"/></g>
        <g transform="rotate(108)"><ellipse cx="9" cy="0" rx="8" ry="4.5" fill="#E79897"/></g>
        <g transform="rotate(180)"><ellipse cx="9" cy="0" rx="8" ry="4.5" fill="#E79897"/></g>
        <g transform="rotate(252)"><ellipse cx="9" cy="0" rx="8" ry="4.5" fill="#E79897"/></g>
        <g transform="rotate(324)"><ellipse cx="9" cy="0" rx="8" ry="4.5" fill="#E79897"/></g>
        <circle r="6" fill="#3B473C"/>
        <circle cx="-2.2" cy="-1.8" r="1.2" fill="#FECDBE"/>
        <circle cx="2.2" cy="-1.8" r="1.2" fill="#FECDBE"/>
        <circle cx="0" cy="2.6" r="1.2" fill="#FECDBE"/>
      </g>
      </a>
      <g className="bloom-tip" transform="translate(380,300)">
        <g className="bloom-tip-inner">
          <polygon className="tip-bg" points="-7,-14 7,-14 0,-4"/>
          <rect className="tip-bg" x="-72" y="-40" width="144" height="26" rx="13"/>
          <text className="tip-text" x="0" y="-23" text-anchor="middle">Chocolate cosmos</text>
        </g>
      </g>
    </svg>
  </div>
</section>

<svg className="stemline stemline-featured" viewBox="0 0 1320 40" preserveAspectRatio="none">
  <path d="M0 20 C 110 2, 150 38, 260 20 S 370 2, 480 20 S 590 38, 700 20 S 810 2, 920 20 S 1030 38, 1140 20 S 1250 2, 1320 20"/>
  <circle className="bud" cx="150" cy="6" r="6"/>
  <circle className="bud" cx="480" cy="6" r="5"/>
  <circle className="bud" cx="810" cy="6" r="6"/>
  <circle className="bud" cx="1140" cy="6" r="5"/>
  <ellipse className="leaf" cx="260" cy="30" rx="12" ry="5" transform="rotate(20 260 30)"/>
  <ellipse className="leaf" cx="590" cy="30" rx="12" ry="5" transform="rotate(-20 590 30)"/>
  <ellipse className="leaf" cx="920" cy="30" rx="12" ry="5" transform="rotate(20 920 30)"/>
  <ellipse className="leaf" cx="1250" cy="30" rx="12" ry="5" transform="rotate(-20 1250 30)"/>
</svg>

{/* ================= MANIFESTO ================= */}
<section className="manifesto wrap">
  <div className="manifesto-grid">
    <h2>Three things we won't compromise on.</h2>
    <div>
      <div className="principle">
        <span className="mark">i.</span>
        <div>
          <h3>Local, or it doesn't go in the vase.</h3>
          <p>Every stem is grown within sixty miles or foraged the same week — no imports, no cold storage, no flowers pretending to be in season when they're not.</p>
        </div>
      </div>
      <div className="principle">
        <span className="mark">ii.</span>
        <div>
          <h3>One wedding at a time.</h3>
          <p>We cap each weekend at a single event, so the arch we build for you gets the same attention as the boutonnière — not a rushed leftover of a busy Saturday.</p>
        </div>
      </div>
      <div className="principle">
        <span className="mark">iii.</span>
        <div>
          <h3>Designed to be touched, not just photographed.</h3>
          <p>Loose, gathered, slightly imperfect — the way flowers actually grow. Nothing wired into submission or sprayed stiff for the aisle.</p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* ================= SERVICES ================= */}
<section className="services wrap" id="services">
  <div className="services-head">
    <h2>What we design.</h2>
    <p className="lede" style={{maxWidth: "360px", fontSize: "15px"}}>Four ways to work with us, from a single bouquet to a full installation.</p>
  </div>
  <div className="service-list">
    <div className="service-row">
      <span className="snum">01</span>
      <h3>Full-Service Design</h3>
      <p>Bouquets, boutonnières, ceremony &amp; reception florals, planned start to finish with your florist on-site all day.</p>
      <span className="sprice">From $6,800</span>
    </div>
    <div className="service-row">
      <span className="snum">02</span>
      <h3>Elopement &amp; Micro-Wedding</h3>
      <p>A pared-back bundle for gatherings under 30 — bouquet, boutonnière, and a single ceremony moment.</p>
      <span className="sprice">From $950</span>
    </div>
    <div className="service-row">
      <span className="snum">03</span>
      <h3>Installations &amp; Arches</h3>
      <p>Structural, oversized, built to be walked through — arbors, suspended moments, and reception statement pieces.</p>
      <span className="sprice">From $2,400</span>
    </div>
    <div className="service-row">
      <span className="snum">04</span>
      <h3>DIY Bucket Flowers</h3>
      <p>Farm-fresh, hand-conditioned stems delivered by the bucket for the couple who wants to arrange it themselves.</p>
      <span className="sprice">From $480</span>
    </div>
  </div>
</section>

{/* ================= PROCESS ================= */}
<section className="process" id="process">
  <div className="wrap">
    <span className="eyebrow">How a season with us unfolds</span>
    <h2>Your flowers follow the calendar, not the other way around.</h2>
    <div className="process-grid">
      <div className="pstep">
        <span className="season">First Bloom</span>
        <h3>Inquiry</h3>
        <p>Tell us your date, venue, and the feeling you're after. We'll confirm availability and send a starting estimate within a week.</p>
      </div>
      <div className="pstep">
        <span className="season">Full Bud</span>
        <h3>Design Consult</h3>
        <p>An in-person or video walkthrough of your palette, textures, and what will actually be growing that week of the year.</p>
      </div>
      <div className="pstep">
        <span className="season">Bloom</span>
        <h3>Build &amp; Install</h3>
        <p>We cut the morning of, condition overnight, and arrive early to build on-site — arch first, tablescape last.</p>
      </div>
      <div className="pstep">
        <span className="season">Aftercare</span>
        <h3>Preservation</h3>
        <p>Optional bouquet pressing or freeze-drying, so one piece of the day keeps for good.</p>
      </div>
    </div>
  </div>
</section>

{/* ================= GALLERY ================= */}
<section className="gallery wrap" id="gallery">
  <div className="gallery-head">
    <span className="eyebrow">Recent Weddings</span>
    <h2 style={{marginTop: "16px"}}>A season, pressed flat.</h2>
    <p>A working record of what we've cut and built, month by month — not a styled shoot.</p>
  </div>

  <div className="masonry">
    <div className="card">
      <svg className="swatch" viewBox="0 0 200 240" width="100%"><rect width="200" height="240" fill="#D8CFAE"/><circle cx="60" cy="70" r="26" fill="#E79897"/><circle cx="120" cy="100" r="20" fill="#AD7271"/><circle cx="90" cy="150" r="18" fill="#FECDBE"/><ellipse cx="150" cy="60" rx="30" ry="12" fill="#768E78" transform="rotate(25 150 60)"/></svg>
      <div className="cap-label">June · Rhinebeck Barn</div>
      <div className="cap-title">Garden rose &amp; sweet pea</div>
    </div>
    <div className="card">
      <svg className="swatch" viewBox="0 0 200 300" width="100%"><rect width="200" height="300" fill="#EBDEC0"/><circle cx="100" cy="90" r="30" fill="#3B473C"/><circle cx="70" cy="160" r="22" fill="#E79897"/><circle cx="140" cy="190" r="20" fill="#FECDBE"/><ellipse cx="60" cy="230" rx="26" ry="10" fill="#4F6350" transform="rotate(-20 60 230)"/></svg>
      <div className="cap-label">May · Private Orchard</div>
      <div className="cap-title">Chocolate cosmos, dark &amp; loose</div>
    </div>
    <div className="card">
      <svg className="swatch" viewBox="0 0 200 210" width="100%"><rect width="200" height="210" fill="#F1E7CE"/><circle cx="90" cy="80" r="28" fill="#FCC88A"/><circle cx="140" cy="120" r="18" fill="#C6C09C"/><ellipse cx="60" cy="140" rx="22" ry="9" fill="#768E78" transform="rotate(15 60 140)"/></svg>
      <div className="cap-label">September · Hudson Riverhouse</div>
      <div className="cap-title">Dahlia &amp; late-season grass</div>
    </div>
    <div className="card">
      <svg className="swatch" viewBox="0 0 200 260" width="100%"><rect width="200" height="260" fill="#D8CFAE"/><circle cx="70" cy="90" r="24" fill="#3B473C"/><circle cx="120" cy="130" r="26" fill="#E79897"/><circle cx="150" cy="70" r="16" fill="#FCC88A"/></svg>
      <div className="cap-label">June · Rhinebeck Barn</div>
      <div className="cap-title">Ceremony arch, side profile</div>
    </div>
    <div className="card">
      <svg className="swatch" viewBox="0 0 200 220" width="100%"><rect width="200" height="220" fill="#F1E7CE"/><circle cx="100" cy="100" r="30" fill="#C6C09C"/><circle cx="60" cy="150" r="18" fill="#FCC88A"/><circle cx="150" cy="150" r="18" fill="#AD7271"/></svg>
      <div className="cap-label">October · Kingston Vineyard</div>
      <div className="cap-title">Bittersweet &amp; amaranth</div>
    </div>
    <div className="card">
      <svg className="swatch" viewBox="0 0 200 280" width="100%"><rect width="200" height="280" fill="#EBDEC0"/><circle cx="90" cy="100" r="26" fill="#3B473C"/><circle cx="130" cy="160" r="20" fill="#E79897"/><ellipse cx="60" cy="210" rx="24" ry="10" fill="#4F6350" transform="rotate(-15 60 210)"/></svg>
      <div className="cap-label">July · Catskill Farmstead</div>
      <div className="cap-title">Bridal bouquet, backyard light</div>
    </div>
    <div className="card">
      <svg className="swatch" viewBox="0 0 200 200" width="100%"><rect width="200" height="200" fill="#F5EDDA"/><circle cx="100" cy="100" r="28" fill="#FCC88A"/><circle cx="60" cy="70" r="14" fill="#C6C09C"/><circle cx="140" cy="130" r="16" fill="#E79897"/></svg>
      <div className="cap-label">May · Private Orchard</div>
      <div className="cap-title">Boutonnière, ranunculus</div>
    </div>
    <div className="card">
      <svg className="swatch" viewBox="0 0 200 250" width="100%"><rect width="200" height="250" fill="#D8CFAE"/><circle cx="80" cy="90" r="26" fill="#E79897"/><circle cx="130" cy="140" r="24" fill="#3B473C"/><ellipse cx="150" cy="80" rx="26" ry="11" fill="#768E78" transform="rotate(20 150 80)"/></svg>
      <div className="cap-label">September · Hudson Riverhouse</div>
      <div className="cap-title">Tablescape runner, detail</div>
    </div>
  </div>
</section>

<svg className="stemline" viewBox="0 0 1320 40" preserveAspectRatio="none">
  <path d="M0 20 C 110 38, 150 2, 260 20 S 370 38, 480 20 S 590 2, 700 20 S 810 38, 920 20 S 1030 2, 1140 20 S 1250 38, 1320 20"/>
  <circle className="bud" cx="150" cy="34" r="5"/>
  <circle className="bud" cx="480" cy="34" r="4"/>
  <circle className="bud" cx="810" cy="34" r="5"/>
  <circle className="bud" cx="1140" cy="34" r="4"/>
  <ellipse className="leaf" cx="260" cy="10" rx="12" ry="5" transform="rotate(-20 260 10)"/>
  <ellipse className="leaf" cx="590" cy="10" rx="12" ry="5" transform="rotate(20 590 10)"/>
  <ellipse className="leaf" cx="920" cy="10" rx="12" ry="5" transform="rotate(-20 920 10)"/>
  <ellipse className="leaf" cx="1250" cy="10" rx="12" ry="5" transform="rotate(20 1250 10)"/>
</svg>

{/* ================= TESTIMONIAL ================= */}
<section className="testimonial wrap">
  <svg viewBox="0 0 260 320" fill="none">
    <path d="M130 300 C 122 200, 150 160, 128 80" stroke="#4F6350" stroke-width="2"/>
    <ellipse cx="95" cy="150" rx="22" ry="9" fill="#768E78" transform="rotate(-25 95 150)"/>
    <ellipse cx="165" cy="110" rx="22" ry="9" fill="#768E78" transform="rotate(25 165 110)"/>
    <g transform="translate(128,75) rotate(0)">
      <g transform="rotate(0)"><ellipse cx="14" cy="0" rx="13" ry="7" fill="#E79897"/></g>
      <g transform="rotate(72)"><ellipse cx="14" cy="0" rx="13" ry="7" fill="#E79897"/></g>
      <g transform="rotate(144)"><ellipse cx="14" cy="0" rx="13" ry="7" fill="#E79897"/></g>
      <g transform="rotate(216)"><ellipse cx="14" cy="0" rx="13" ry="7" fill="#E79897"/></g>
      <g transform="rotate(288)"><ellipse cx="14" cy="0" rx="13" ry="7" fill="#E79897"/></g>
      <g transform="rotate(36)"><ellipse cx="9.5" cy="0" rx="8.5" ry="4.7" fill="#FECDBE"/></g>
      <g transform="rotate(108)"><ellipse cx="9.5" cy="0" rx="8.5" ry="4.7" fill="#FECDBE"/></g>
      <g transform="rotate(180)"><ellipse cx="9.5" cy="0" rx="8.5" ry="4.7" fill="#FECDBE"/></g>
      <g transform="rotate(252)"><ellipse cx="9.5" cy="0" rx="8.5" ry="4.7" fill="#FECDBE"/></g>
      <g transform="rotate(324)"><ellipse cx="9.5" cy="0" rx="8.5" ry="4.7" fill="#FECDBE"/></g>
      <circle r="6.5" fill="#3B473C"/>
      <circle cx="-2.4" cy="-1.9" r="1.3" fill="#FCC88A"/>
      <circle cx="2.4" cy="-1.9" r="1.3" fill="#FCC88A"/>
      <circle cx="0" cy="2.8" r="1.3" fill="#FCC88A"/>
    </g>
  </svg>
  <div>
    <blockquote>"We told them we didn't want anything that looked 'done.' They showed up with flowers still a little wet from the garden — it was exactly right."</blockquote>
    <cite>Priya &amp; Nate — Married June, Rhinebeck Barn</cite>
  </div>
</section>

{/* ================= FOOTER ================= */}
<footer id="footer">
  <div className="wrap">
    <div className="foot-cta">
      <h2>Let's talk about what's growing on your wedding date.</h2>
      <div className="foot-form">
        <p>We take a limited number of dates each season — reach out early, especially for June and September weekends.</p>
        <div className="foot-input-row">
          <input type="email" placeholder="your@email.com" />
          <button>Send Inquiry →</button>
        </div>
      </div>
    </div>
    <div className="foot-bottom">
      <div className="fbrand">Bloom &amp; Bramble</div>
      <div className="foot-links">
        <a href="#">Instagram</a>
        <a href="#">Pinterest</a>
        <a href="#">hello@bloomandbramble.co</a>
      </div>
      <div>Rhinebeck, NY · By appointment</div>
      <div><Link to="/portfolio">← Back to Ashlyn Studio Portfolio</Link></div>
    </div>
  </div>
</footer>


    </main>
  )
}

export function Head() {
  return <title>Bloom &amp; Bramble — Hudson Valley Wedding Florist</title>
}