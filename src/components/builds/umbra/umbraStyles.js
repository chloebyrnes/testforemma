export const umbraStyles = `
@import url('https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Jost:wght@300;400;500&family=JetBrains+Mono:wght@400;500;700&display=swap');

:root{
    --ink:#2E2015;
    --ink-soft:#4A3627;
    --bone:#FBF7EE;
    --bone-dim:#F3EBD9;
    --ash:#8A7A63;
    --fog:#E4D8BF;
    --signal:#B98A4E;
    --moss:#5E5A44;
    --moss-soft:#726D54;
  }

  *{margin:0;padding:0;box-sizing:border-box;}

  html{scroll-behavior:smooth;}

  body{
    background:var(--bone);
    color:var(--ink);
    font-family:'Jost',sans-serif;
    overflow-x:hidden;
  }

  ::selection{background:var(--signal);color:var(--bone);}

  .mono{
    font-family:'JetBrains Mono',monospace;
    letter-spacing:0.06em;
    text-transform:uppercase;
  }

  .serif{font-family:'Bodoni Moda',serif;}

  a{color:inherit;text-decoration:none;}

  img,svg{display:block;max-width:100%;}

  /* ================= NAV ================= */
  .nav{
    position:fixed;
    top:0;left:0;right:0;
    z-index:100;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:22px 48px;
    background:var(--bone);
    border-bottom:1px solid var(--fog);
    color:var(--ink);
  }
  .nav-logo{
    font-family:'Bodoni Moda',serif;
    font-weight:500;
    font-size:32px;
    letter-spacing:0.02em;
  }
  .nav-links{
    display:flex;
    gap:36px;
    font-size:11px;
  }
  .nav-links a{position:relative;padding-bottom:2px;}
  .nav-links a::after{
    content:'';
    position:absolute;bottom:0;left:0;
    width:0;height:1px;background:var(--signal);
    transition:width .25s ease;
    mix-blend-mode:normal;
  }
  .nav-links a:hover::after{width:100%;}

  /* ================= SEAM LINE (signature motif) ================= */
  .seam-wrap{
    position:absolute;
    top:0;left:0;
    width:100%;height:100%;
    pointer-events:none;
    z-index:2;
  }
  .seam-tag{
    position:absolute;
    font-family:'JetBrains Mono',monospace;
    font-size:10px;
    letter-spacing:0.08em;
    text-transform:uppercase;
    color:var(--signal);
    background:var(--bone);
    padding:3px 8px;
    border:1px solid var(--signal);
    white-space:nowrap;
  }
  .seam-tag.on-dark{background:var(--ink);color:var(--signal);border-color:var(--signal);}

  /* ================= HERO ================= */
  .hero{
    position:relative;
    min-height:100vh;
    background:var(--bone);
    color:var(--ink);
    display:grid;
    grid-template-columns:1fr;
    padding:0 48px;
    overflow:hidden;
  }
  .hero-inner{
    position:relative;
    z-index:3;
    margin-top:auto;
    margin-bottom:5vh;
    padding-top:110px;
    display:grid;
    grid-template-columns:7fr 5fr;
    gap:24px;
    align-items:end;
  }
  .hero-eyebrow{
    font-size:11px;
    color:var(--signal);
    margin-bottom:22px;
    display:block;
  }
  .hero h1{
    font-family:'Bodoni Moda',serif;
    font-size:clamp(48px,7.4vw,112px);
    font-weight:400;
    line-height:0.98;
    letter-spacing:-0.01em;
  }
  .hero h1 em{
    font-style:italic;
    font-weight:300;
    color:var(--ink-soft);
  }
  .hero-side{
    padding-bottom:6px;
  }
  .hero-side p{
    font-family:'Bodoni Moda',serif;
    font-size:16px;
    line-height:1.7;
    color:var(--ink-soft);
    max-width:34ch;
    margin-bottom:28px;
  }
  .hero-cta{
    font-size:11px;
    display:inline-flex;
    align-items:center;
    gap:10px;
    color:var(--ink);
    border-bottom:1px solid var(--signal);
    padding-bottom:6px;
  }
  .hero-cta .arrow{color:var(--signal);}

  .hero-bottom-rule{
    position:relative;
    z-index:3;
    display:flex;
    justify-content:space-between;
    font-size:10px;
    color:var(--ash);
    padding-bottom:26px;
    border-top:1px solid rgba(46,32,21,0.16);
    padding-top:16px;
  }

  /* ================= MARQUEE ================= */
  .marquee{
    background:var(--bone);
    border-top:1px solid var(--ink);
    border-bottom:1px solid var(--ink);
    overflow:hidden;
    white-space:nowrap;
    padding:14px 0;
  }
  .marquee-track{
    display:inline-block;
    animation:scroll 32s linear infinite;
  }
  .marquee-track span{
    font-family:'Bodoni Moda',serif;
    font-style:italic;
    font-size:20px;
    margin:0 28px;
    color:var(--ink);
  }
  .marquee-track span.dim{color:var(--ash);font-style:normal;font-family:'JetBrains Mono',monospace;font-size:11px;text-transform:uppercase;}
  @keyframes scroll{
    from{transform:translateX(0);}
    to{transform:translateX(-50%);}
  }

  /* ================= MANIFESTO ================= */
  .manifesto{
    position:relative;
    padding:90px 48px 100px;
    display:grid;
    grid-template-columns:5fr 6fr 1fr;
    gap:24px;
  }
  .manifesto-quote{
    font-family:'Bodoni Moda',serif;
    font-style:italic;
    font-weight:300;
    font-size:clamp(30px,3.4vw,46px);
    line-height:1.18;
  }
  .manifesto-quote .mark{color:var(--signal);font-style:normal;}
  .manifesto-body{
    padding-top:14px;
    align-self:end;
  }
  .manifesto-body .num{
    font-size:11px;color:var(--signal);display:block;margin-bottom:18px;
  }
  .manifesto-body p{
    font-size:15px;
    line-height:1.8;
    color:var(--ink-soft);
    max-width:46ch;
    margin-bottom:16px;
  }

  /* ================= LOOKBOOK ================= */
  .lookbook-head{
    padding:0 48px;
    display:flex;
    justify-content:space-between;
    align-items:baseline;
    margin-bottom:40px;
  }
  .lookbook-head h2{
    font-family:'Bodoni Moda',serif;
    font-weight:400;
    font-size:clamp(30px,3.2vw,48px);
  }
  .lookbook-head .mono{font-size:11px;color:var(--ash);}

  .lookbook-grid{
    display:grid;
    grid-template-columns:repeat(12,1fr);
    gap:2px;
    background:var(--ink);
    padding:0 48px 80px;
  }
  .look{
    position:relative;
    background:var(--bone-dim);
    overflow:hidden;
    aspect-ratio:3/4;
  }
  .look.landscape{aspect-ratio:4/3;}
  .look:nth-child(1){grid-column:span 4;}
  .look:nth-child(2){grid-column:span 4;}
  .look:nth-child(3){grid-column:span 4;}
  .look:nth-child(4){grid-column:span 6;}
  .look:nth-child(5){grid-column:span 6;}

  .look svg{width:100%;height:100%;}
  .look img{
    width:100%;
    height:100%;
    object-fit:cover;
    object-position:center top;
  }
  .look-cap{
    position:absolute;
    left:14px;bottom:14px;
    font-size:10px;
    color:var(--ink);
    background:var(--bone);
    padding:4px 8px;
    border:1px solid var(--ink);
  }
  .look-idx{
    position:absolute;
    top:14px;right:14px;
    font-size:10px;
    color:var(--signal);
  }

  /* ================= PHILOSOPHY (dark/moss) ================= */
  .philosophy{
    background:var(--bone-dim);
    color:var(--ink);
    padding:90px 48px;
    display:grid;
    grid-template-columns:1fr 8fr 1fr;
  }
  .philosophy-content{grid-column:2;}
  .philosophy .mono{color:var(--signal);font-size:11px;margin-bottom:26px;display:block;}
  .philosophy blockquote{
    font-family:'Bodoni Moda',serif;
    font-style:italic;
    font-weight:300;
    font-size:clamp(28px,4vw,54px);
    line-height:1.24;
    max-width:20ch;
  }
  .philosophy blockquote .mark{color:var(--signal);font-style:normal;}
  .philosophy-foot{
    margin-top:48px;
    display:flex;
    gap:60px;
  }
  .philosophy-foot div{font-size:13px;color:var(--ink-soft);line-height:1.7;max-width:26ch;}
  .philosophy-foot span{color:var(--ink);display:block;font-size:11px;margin-bottom:8px;}

  /* ================= EDIT / SHOP ================= */
  .edit{padding:90px 48px 80px;}
  .edit-head{
    display:grid;
    grid-template-columns:6fr 6fr;
    margin-bottom:44px;
    align-items:end;
    gap:24px;
  }
  .edit-head h2{
    font-family:'Bodoni Moda',serif;
    font-weight:400;
    font-size:clamp(34px,4vw,58px);
    line-height:1.02;
  }
  .edit-head p{
    font-size:14px;
    color:var(--ash);
    line-height:1.7;
    max-width:40ch;
    justify-self:end;
  }

  .edit-grid{
    display:grid;
    grid-template-columns:repeat(3,1fr);
    gap:1px;
    background:var(--fog);
    border-top:1px solid var(--ink);
    border-bottom:1px solid var(--ink);
  }
  .piece{
    background:var(--bone);
    padding:34px 28px 28px;
    display:flex;
    flex-direction:column;
    min-height:420px;
  }
  .piece-figure{flex:1;display:flex;align-items:center;justify-content:center;}
  .piece-figure svg{height:220px;width:auto;}
  .piece-name{
    font-family:'Bodoni Moda',serif;
    font-size:19px;
    font-style:italic;
    margin-bottom:6px;
    margin-top:18px;
  }
  .piece-code{font-size:10px;color:var(--ash);margin-bottom:14px;}
  .piece-row{
    display:flex;
    justify-content:space-between;
    align-items:center;
    border-top:1px solid var(--fog);
    padding-top:14px;
  }
  .piece-price{font-size:13px;}
  .piece-link{font-size:10px;color:var(--signal);border-bottom:1px solid var(--signal);padding-bottom:2px;}

  /* ================= JOURNAL STRIP ================= */
  .journal{
    padding:0 48px 90px;
    display:grid;
    grid-template-columns:repeat(3,1fr);
    gap:40px;
  }
  .journal-item{border-top:1px solid var(--ink);padding-top:22px;}
  .journal-item .mono{font-size:10px;color:var(--signal);display:block;margin-bottom:14px;}
  .journal-item h3{
    font-family:'Bodoni Moda',serif;
    font-weight:400;
    font-style:italic;
    font-size:22px;
    line-height:1.3;
    margin-bottom:12px;
    max-width:22ch;
  }
  .journal-item p{font-size:13px;color:var(--ash);line-height:1.7;max-width:34ch;}

  /* ================= NEWSLETTER BAND ================= */
  .band{
    background:var(--bone-dim);
    color:var(--ink);
    padding:60px 48px;
    display:grid;
    grid-template-columns:5fr 7fr;
    gap:24px;
    align-items:center;
  }
  .band h2{
    font-family:'Bodoni Moda',serif;
    font-style:italic;
    font-weight:300;
    font-size:clamp(26px,3vw,40px);
    line-height:1.2;
  }
  .band-form{
    display:flex;
    border-bottom:1px solid var(--ink);
    padding-bottom:14px;
    max-width:520px;
    justify-self:end;
    width:100%;
  }
  .band-form input{
    background:transparent;
    border:none;
    outline:none;
    color:var(--ink);
    font-family:'Jost',sans-serif;
    font-size:14px;
    flex:1;
  }
  .band-form input::placeholder{color:var(--ash);}
  .band-form button{
    background:none;border:none;color:var(--signal);
    font-family:'JetBrains Mono',monospace;
    font-size:11px;
    letter-spacing:0.06em;
    text-transform:uppercase;
    cursor:pointer;
  }

  /* ================= FOOTER ================= */
  footer{
    background:var(--bone);
    padding:50px 48px 30px;
    display:grid;
    grid-template-columns:2fr 1fr 1fr 1fr 1fr;
    gap:24px;
    font-size:12px;
  }
  footer .fcol span{
    display:block;
    font-size:10px;
    color:var(--signal);
    margin-bottom:16px;
  }
  footer .fcol p, footer .fcol a{
    display:block;
    color:var(--ink-soft);
    line-height:1.9;
  }
  footer .flogo{
    font-family:'Bodoni Moda',serif;
    font-size:26px;
  }
  .foot-bottom{
    grid-column:1/-1;
    margin-top:36px;
    padding-top:20px;
    border-top:1px solid var(--fog);
    display:flex;
    justify-content:space-between;
    font-size:10px;
    color:var(--ash);
  }

  @media (max-width:860px){
    .hero-inner{grid-template-columns:1fr;}
    .hero-side{padding-top:24px;}
    .manifesto{grid-template-columns:1fr;padding:60px 24px;}
    .manifesto-body{margin-top:30px;}
    .lookbook-grid,.lookbook-head{padding-left:24px;padding-right:24px;}
    .look:nth-child(n){grid-column:span 12 !important;margin-top:0 !important;}
    .philosophy{grid-template-columns:1fr;padding:60px 24px;}
    .philosophy-content{grid-column:1;}
    .philosophy-foot{flex-direction:column;gap:24px;}
    .edit{padding:60px 24px;}
    .edit-head{grid-template-columns:1fr;gap:16px;}
    .edit-head p{justify-self:start;}
    .edit-grid{grid-template-columns:1fr;}
    .journal{grid-template-columns:1fr;padding:0 24px 60px;gap:44px;}
    .band{grid-template-columns:1fr;gap:30px;padding:40px 24px;}
    .band-form{justify-self:start;}
    footer{grid-template-columns:repeat(2,1fr);padding:36px 24px 24px;}
    .nav{padding:20px 24px;}
    .nav-links{gap:18px;}
  }

  @media (prefers-reduced-motion:reduce){
    .marquee-track{animation:none;}
  }

/* ================= ACTIVE NAV STATE ================= */
.nav-links a.active{
  color:var(--signal);
}
.nav-links a.active::after{
  width:100%;
}

/* ================= PAGE HEADER (interior pages) ================= */
.page-header{
  padding:150px 48px 40px;
}
.page-header .mono{
  font-size:11px;
  color:var(--signal);
  display:block;
  margin-bottom:18px;
}
.page-header h1{
  font-family:'Bodoni Moda',serif;
  font-weight:400;
  font-style:italic;
  font-size:clamp(38px,5vw,68px);
  line-height:1.05;
  max-width:16ch;
}
.page-header p{
  margin-top:20px;
  font-size:14px;
  color:var(--ink-soft);
  line-height:1.8;
  max-width:52ch;
}

/* ================= JOURNAL PAGE GRID ================= */
.journal-page{
  padding:0 48px 90px;
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:40px;
}
.journal-page .journal-item h3{font-size:24px;max-width:24ch;}

/* ================= STOCKISTS PAGE ================= */
.stockists-grid{
  padding:0 48px 90px;
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:2px;
  background:var(--ink);
}
.stockist-card{
  background:var(--bone);
  padding:34px 28px;
}
.stockist-card span{
  font-size:10px;
  color:var(--signal);
  display:block;
  margin-bottom:14px;
}
.stockist-card h3{
  font-family:'Bodoni Moda',serif;
  font-style:italic;
  font-weight:400;
  font-size:20px;
  margin-bottom:12px;
}
.stockist-card p{
  font-size:13px;
  color:var(--ink-soft);
  line-height:1.85;
}

@media (max-width:860px){
  .page-header{padding:110px 24px 30px;}
  .journal-page{grid-template-columns:1fr;padding:0 24px 60px;gap:44px;}
  .stockists-grid{grid-template-columns:1fr;padding:0 24px 60px;}
}

`