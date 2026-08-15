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
    --u-max:1080px;
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
  a,button{cursor:pointer;transition:opacity .2s ease,color .2s ease,background-color .2s ease,transform .2s ease;}
  a:hover,button:hover:not(:disabled){opacity:0.65;}

  img,svg{display:block;max-width:100%;}

  .page-fade-in{animation:umbraFadeIn 0.45s ease forwards;}
  @keyframes umbraFadeIn{
    from{opacity:0;transform:translateY(8px);}
    to{opacity:1;transform:translateY(0);}
  }

  /* ================= NAV ================= */
  .nav{
    position:fixed;
    top:0;left:0;right:0;
    z-index:100;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:18px 32px;
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
    gap:32px;
    font-size:13px;
    align-items:center;
  }
  .nav-links a{position:relative;padding-bottom:2px;}
  .nav-links a::after{
    content:'';
    position:absolute;bottom:0;left:0;
    width:0;height:1px;background:var(--signal);
    transition:width .25s ease;
  }
  .nav-links a:hover{opacity:1;}
  .nav-links a:hover::after{width:100%;}
  .nav-links a.active{color:var(--signal);}
  .nav-links a.active::after{width:100%;}

  .nav-toggle{
    display:none;
    background:none;
    border:none;
    flex-direction:column;
    gap:5px;
    width:26px;
    padding:4px;
  }
  .nav-toggle span{
    display:block;
    height:1.5px;
    background:var(--ink);
    transition:transform .25s ease,opacity .25s ease;
  }
  .nav-toggle.open span:nth-child(1){transform:translateY(6.5px) rotate(45deg);}
  .nav-toggle.open span:nth-child(2){opacity:0;}
  .nav-toggle.open span:nth-child(3){transform:translateY(-6.5px) rotate(-45deg);}

  .nav-mobile-panel{display:none;}

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
    min-height:64vh;
    background:var(--bone);
    color:var(--ink);
    display:grid;
    grid-template-columns:1fr;
    padding:0 32px;
    overflow:hidden;
  }
  .hero-inner{
    position:relative;
    z-index:3;
    max-width:var(--u-max);
    margin:auto auto 48px;
    padding-top:96px;
    width:100%;
    display:grid;
    grid-template-columns:7fr 5fr;
    gap:16px;
    align-items:end;
  }
  .hero-eyebrow{
    font-size:11px;
    color:var(--signal);
    margin-bottom:10px;
    display:block;
  }
  .hero h1{
    font-family:'Bodoni Moda',serif;
    font-size:clamp(32px,4.6vw,64px);
    font-weight:400;
    line-height:1.05;
    letter-spacing:-0.01em;
    white-space:nowrap;
  }
  .hero h1 em{
    font-style:italic;
    font-weight:300;
    color:var(--ink-soft);
  }
  .hero-side{padding-bottom:6px;}
  .hero-side p{
    font-family:'Bodoni Moda',serif;
    font-size:15px;
    line-height:1.7;
    color:var(--ink-soft);
    max-width:34ch;
    margin-bottom:24px;
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
    max-width:var(--u-max);
    margin:0 auto;
    width:100%;
    display:flex;
    justify-content:space-between;
    font-size:10px;
    color:var(--ash);
    padding-bottom:22px;
    border-top:1px solid rgba(46,32,21,0.16);
    padding-top:14px;
  }

  /* ================= MARQUEE ================= */
  .marquee{
    background:var(--bone);
    border-top:1px solid var(--ink);
    border-bottom:1px solid var(--ink);
    overflow:hidden;
    white-space:nowrap;
    padding:12px 0;
  }
  .marquee-track{display:inline-block;animation:scroll 32s linear infinite;}
  .marquee-track span{
    font-family:'Bodoni Moda',serif;
    font-style:italic;
    font-size:18px;
    margin:0 24px;
    color:var(--ink);
  }
  .marquee-track span.dim{color:var(--ash);font-style:normal;font-family:'JetBrains Mono',monospace;font-size:11px;text-transform:uppercase;}
  @keyframes scroll{
    from{transform:translateX(0);}
    to{transform:translateX(-50%);}
  }

  /* ================= MANIFESTO ================= */
  .manifesto{position:relative;padding:64px 32px;}
  .manifesto-inner{
    max-width:var(--u-max);
    margin:0 auto;
    display:grid;
    grid-template-columns:5fr 6fr;
    gap:32px;
  }
  .manifesto-quote{
    font-family:'Bodoni Moda',serif;
    font-style:italic;
    font-weight:300;
    font-size:clamp(26px,3vw,40px);
    line-height:1.18;
  }
  .manifesto-quote .mark{color:var(--signal);font-style:normal;}
  .manifesto-body{padding-top:8px;align-self:end;}
  .manifesto-body .num{font-size:11px;color:var(--signal);display:block;margin-bottom:16px;}
  .manifesto-body p{
    font-size:14px;
    line-height:1.8;
    color:var(--ink-soft);
    max-width:46ch;
    margin-bottom:14px;
  }

  /* ================= LOOKBOOK ================= */
  .lookbook-head{
    max-width:var(--u-max);
    margin:0 auto 28px;
    padding:0 32px;
    display:flex;
    justify-content:space-between;
    align-items:baseline;
  }
  .lookbook-head h2{
    font-family:'Bodoni Moda',serif;
    font-weight:400;
    font-size:clamp(26px,2.6vw,38px);
  }
  .lookbook-head .mono{font-size:11px;color:var(--ash);}

  .lookbook-grid{
    max-width:var(--u-max);
    margin:0 auto;
    display:grid;
    grid-template-columns:repeat(3,1fr);
    gap:16px;
    padding:0 32px 56px;
  }
  .look{
    position:relative;
    background:var(--bone-dim);
    overflow:hidden;
    aspect-ratio:3/4;
    border:1px solid var(--fog);
  }
  .look.landscape{aspect-ratio:4/3;}
  .look svg{width:100%;height:100%;}
  .look img{
    width:100%;
    height:100%;
    object-fit:cover;
    object-position:center top;
  }
  .look-cap{
    position:absolute;
    left:10px;bottom:10px;
    font-size:9px;
    color:var(--ink);
    background:var(--bone);
    padding:3px 7px;
    border:1px solid var(--ink);
  }
  .look-idx{
    position:absolute;
    top:10px;right:10px;
    font-size:9px;
    color:var(--signal);
  }

  /* ================= PHILOSOPHY ================= */
  .philosophy{background:var(--bone-dim);color:var(--ink);padding:64px 32px;}
  .philosophy-content{max-width:var(--u-max);margin:0 auto;}
  .philosophy .mono{color:var(--signal);font-size:11px;margin-bottom:22px;display:block;}
  .philosophy blockquote{
    font-family:'Bodoni Moda',serif;
    font-style:italic;
    font-weight:300;
    font-size:clamp(24px,3.4vw,44px);
    line-height:1.24;
    max-width:22ch;
  }
  .philosophy blockquote .mark{color:var(--signal);font-style:normal;}
  .philosophy-foot{margin-top:40px;display:flex;gap:48px;}
  .philosophy-foot div{font-size:13px;color:var(--ink-soft);line-height:1.7;max-width:26ch;}
  .philosophy-foot span{color:var(--ink);display:block;font-size:11px;margin-bottom:8px;}

  /* ================= EDIT / SHOP ================= */
  .edit{padding:64px 32px;}
  .edit-inner{max-width:var(--u-max);margin:0 auto;}
  .edit-head{
    display:grid;
    grid-template-columns:6fr 6fr;
    margin-bottom:36px;
    align-items:end;
    gap:24px;
  }
  .edit-head h2{
    font-family:'Bodoni Moda',serif;
    font-weight:400;
    font-size:clamp(28px,3.2vw,44px);
    line-height:1.05;
  }
  .edit-head p{
    font-size:13px;
    color:var(--ash);
    line-height:1.7;
    max-width:40ch;
    justify-self:end;
  }

  .edit-grid{
    display:grid;
    grid-template-columns:repeat(3,1fr);
    gap:16px;
  }
  .piece{
    background:var(--bone);
    border:1px solid var(--fog);
    padding:22px 20px 20px;
    display:flex;
    flex-direction:column;
  }
  .piece-figure{width:100%;}
  .piece-name{
    font-family:'Bodoni Moda',serif;
    font-size:17px;
    font-style:italic;
    margin-bottom:4px;
    margin-top:16px;
  }
  .piece-code{font-size:10px;color:var(--ash);margin-bottom:12px;}
  .piece-row{
    display:flex;
    justify-content:space-between;
    align-items:center;
    border-top:1px solid var(--fog);
    padding-top:12px;
    margin-top:auto;
  }
  .piece-price{font-size:13px;}
  .piece-link{font-size:10px;color:var(--signal);border-bottom:1px solid var(--signal);padding-bottom:2px;}

  /* ================= JOURNAL STRIP ================= */
  .journal{
    max-width:var(--u-max);
    margin:0 auto;
    padding:0 32px 64px;
    display:grid;
    grid-template-columns:repeat(3,1fr);
    gap:28px;
  }
  .journal-item{border-top:1px solid var(--ink);padding-top:18px;}
  .journal-item .mono{font-size:10px;color:var(--signal);display:block;margin-bottom:12px;}
  .journal-item h3{
    font-family:'Bodoni Moda',serif;
    font-weight:400;
    font-style:italic;
    font-size:20px;
    line-height:1.3;
    margin-bottom:10px;
    max-width:22ch;
  }
  .journal-item p{font-size:13px;color:var(--ash);line-height:1.7;max-width:34ch;}

  /* ================= NEWSLETTER BAND ================= */
  .band{background:var(--bone-dim);color:var(--ink);padding:48px 32px;}
  .band-inner{
    max-width:var(--u-max);
    margin:0 auto;
    display:grid;
    grid-template-columns:5fr 7fr;
    gap:24px;
    align-items:center;
  }
  .band h2{
    font-family:'Bodoni Moda',serif;
    font-style:italic;
    font-weight:300;
    font-size:clamp(22px,2.6vw,32px);
    line-height:1.2;
  }
  .band-form{
    display:flex;
    border-bottom:1px solid var(--ink);
    padding-bottom:12px;
    max-width:480px;
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
  }

  /* ================= FOOTER ================= */
  footer{background:var(--bone);padding:40px 32px 24px;font-size:12px;}
  .foot-inner{
    max-width:var(--u-max);
    margin:0 auto;
    display:grid;
    grid-template-columns:1.6fr 1fr 1fr 1fr 1fr;
    gap:24px;
  }
  footer .fcol span{display:block;font-size:10px;color:var(--signal);margin-bottom:14px;}
  footer .fcol p, footer .fcol a{display:block;color:var(--ink-soft);line-height:1.9;}
  footer .fcol a:hover{color:var(--signal);opacity:1;}
  footer .flogo{font-family:'Bodoni Moda',serif;font-size:24px;color:var(--ink);}
  .foot-bottom{
    max-width:var(--u-max);
    margin:32px auto 0;
    padding-top:18px;
    border-top:1px solid var(--fog);
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
    gap:8px;
    font-size:10px;
    color:var(--ash);
  }
  .foot-bottom a:hover{color:var(--signal);}

  @media (max-width:860px){
    .nav-links{display:none;}
    .nav-toggle{display:flex;}
    .nav-mobile-panel.open{
      display:flex;
      flex-direction:column;
      position:fixed;
      top:62px;left:0;right:0;
      background:var(--bone);
      border-bottom:1px solid var(--fog);
      z-index:99;
      padding:8px 0 16px;
    }
    .nav-mobile-panel a{padding:14px 32px;font-size:12px;border-top:1px solid var(--fog);}
    .nav-mobile-panel a.active{color:var(--signal);}

    .hero-inner{grid-template-columns:1fr;padding-top:80px;}
    .hero h1{white-space:normal; font-size:clamp(30px,8vw,44px);}
    .hero-side{padding-top:20px;}
    .manifesto{padding:48px 24px;}
    .manifesto-inner{grid-template-columns:1fr;}
    .manifesto-body{margin-top:24px;}
    .lookbook-grid{grid-template-columns:1fr;padding-left:24px;padding-right:24px;}
    .lookbook-head{padding-left:24px;padding-right:24px;}
    .philosophy{padding:48px 24px;}
    .philosophy-foot{flex-direction:column;gap:20px;}
    .edit{padding:48px 24px;}
    .edit-head{grid-template-columns:1fr;gap:14px;}
    .edit-head p{justify-self:start;}
    .edit-grid{grid-template-columns:1fr;}
    .journal{grid-template-columns:1fr;padding:0 24px 48px;gap:32px;}
    .band-inner{grid-template-columns:1fr;gap:24px;}
    .band-form{justify-self:start;}
    .band{padding:36px 24px;}
    .foot-inner{grid-template-columns:repeat(2,1fr);}
    footer{padding:32px 24px 20px;}
    .foot-bottom{flex-direction:column;}
    .nav{padding:16px 24px;}
  }

  @media (prefers-reduced-motion:reduce){
    .marquee-track{animation:none;}
  }

/* ================= PAGE HEADER (interior pages) ================= */
.page-header{
  max-width:var(--u-max);
  margin:0 auto;
  padding:120px 32px 32px;
}
.page-header .mono{font-size:11px;color:var(--signal);display:block;margin-bottom:16px;}
.page-header h1{
  font-family:'Bodoni Moda',serif;
  font-weight:400;
  font-style:italic;
  font-size:clamp(32px,4vw,54px);
  line-height:1.05;
  max-width:18ch;
}
.page-header p{margin-top:18px;font-size:14px;color:var(--ink-soft);line-height:1.8;max-width:52ch;}

/* ================= JOURNAL PAGE GRID ================= */
.journal-page{
  max-width:var(--u-max);
  margin:0 auto;
  padding:0 32px 64px;
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:28px;
}
.journal-page .journal-item h3{font-size:21px;max-width:24ch;}

/* ================= LOCATIONS PAGE ================= */
.stockists-grid{
  max-width:var(--u-max);
  margin:0 auto;
  padding:0 32px 64px;
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:16px;
}
.stockist-card{background:var(--bone);border:1px solid var(--fog);padding:26px 22px;}
.stockist-card span{font-size:10px;color:var(--signal);display:block;margin-bottom:12px;}
.stockist-card h3{font-family:'Bodoni Moda',serif;font-style:italic;font-weight:400;font-size:19px;margin-bottom:10px;}
.stockist-card p{font-size:13px;color:var(--ink-soft);line-height:1.85;}

@media (max-width:860px){
  .page-header{padding:96px 24px 24px;}
  .journal-page{grid-template-columns:1fr;padding:0 24px 48px;gap:32px;}
  .stockists-grid{grid-template-columns:1fr;padding:0 24px 48px;}
}

`