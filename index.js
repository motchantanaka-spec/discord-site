import { useState, useEffect, useRef } from "react";
import { Star, Users, ShoppingBag, ChevronDown, MessageCircle, Award, Sparkles, ArrowRight, Cloud, Snowflake, Sun } from "lucide-react";

var _0x3f2a=['\x68\x74\x74\x70\x73\x3a\x2f\x2f\x64\x69\x73\x63\x6f\x72\x64\x2e\x67\x67\x2f\x64\x63\x75\x73'];
var _0xb1c2=function(_0x4d1e){return _0x3f2a[_0x4d1e];};
const _lnk=_0xb1c2(0x0);

const T = {
  ja: {
    nav_join:"参加する", hero_sub:"信頼と実績が積み重なる、上質なDiscordコミュニティ",
    hero_detail:"詳細を見る", hero_join:"参加する →",
    stats_deals:"取引実績", stats_members:"コミュニティメンバー", stats_satisfaction:"満足度", stats_rating:"平均評価",
    shop_badge:"実績 40件以上", shop_title:"積み重ねた信頼が、\n品質を証明する。",
    shop_desc:"「美味しいコミュニティ」のショップは、40件を超える取引実績を誇ります。一つひとつの取引を誠実に積み重ね、メンバーからの信頼を得てきました。",
    shop_p1:"丁寧かつ迅速な対応", shop_p2:"40件超えの確かな実績", shop_p3:"安心できる取引環境",
    ratio_title:"チャンネル構成", ratio_shop:"ショップ", ratio_chat:"雑談",
    voices_label:"— Voice —", voices_title:"サーバー民の声",
    cta_label:"Join Us", cta_title:"今すぐ参加しよう",
    cta_desc:"美味しいコミュニティで、信頼できる仲間と繋がろう。\n40件以上の実績があなたを待っています。",
    cta_btn:"参加する", footer:"© 2025 美味しいコミュニティ — All Rights Reserved",
    section_shop:"— Shop —", section_shop_title:"ショップ紹介", lang_label:"EN",
    w_clear:"晴れ", w_rain:"雨", w_snow:"雪",
  },
  en: {
    nav_join:"Join", hero_sub:"A premium Discord community built on trust and proven results.",
    hero_detail:"Learn More", hero_join:"Join Now →",
    stats_deals:"Deals Done", stats_members:"Members", stats_satisfaction:"Satisfaction", stats_rating:"Avg Rating",
    shop_badge:"40+ Deals", shop_title:"Trust earned through\nevery transaction.",
    shop_desc:"Oishii Community's shop boasts over 40 completed transactions. Each deal is handled with care and integrity, earning the trust of our growing member base.",
    shop_p1:"Prompt and courteous support", shop_p2:"40+ verified transactions", shop_p3:"Safe and reliable trading",
    ratio_title:"Channel Breakdown", ratio_shop:"Shop", ratio_chat:"Chat",
    voices_label:"— Voice —", voices_title:"Community Voices",
    cta_label:"Join Us", cta_title:"Join Us Today",
    cta_desc:"Connect with trusted members in Oishii Community.\n40+ deals are waiting for you.",
    cta_btn:"Join Now", footer:"© 2025 Oishii Community — All Rights Reserved",
    section_shop:"— Shop —", section_shop_title:"Shop", lang_label:"日本語",
    w_clear:"Clear", w_rain:"Rain", w_snow:"Snow",
  }
};

const voices = [
  { name:"ゆずぴー", role:{ja:"常連メンバー",en:"Regular"}, text:{ja:"実績40件以上ってマジで安心感が違う。最初は半信半疑だったけど、丁寧な対応に感動しました。",en:"40+ deals really sets them apart. The careful service totally won me over."}, stars:5, av:"Y" },
  { name:"いくすわ", role:{ja:"新規参加者",en:"New Member"}, text:{ja:"サーバーの雰囲気が良くて、分からないことも気軽に聞けます。参加して本当によかった！",en:"Great vibe — easy to ask anything. So glad I joined!"}, stars:5, av:"I" },
  { name:"だくにる", role:{ja:"リピーター",en:"Repeat Buyer"}, text:{ja:"他のコミュニティと比べて、信頼性が圧倒的に高い。また利用したいと思えるクオリティです。",en:"Far more trustworthy than other servers. Quality that keeps me coming back."}, stars:5, av:"D" },
  { name:"ここたん", role:{ja:"ベテランメンバー",en:"Veteran"}, text:{ja:"40件以上の実績が証明する通り、安定したサービスが魅力。コミュニティの質が他と違います。",en:"The 40+ track record speaks for itself. Community quality is on another level."}, stars:5, av:"K" },
  { name:"しちみ", role:{ja:"アクティブ勢",en:"Active Member"}, text:{ja:"雑談チャンネルも活発で毎日楽しい！ショップの対応も神対応すぎて感謝しかないです。",en:"Chat is lively every day! Shop support is top-notch — so grateful."}, stars:5, av:"S" },
  { name:"ゆきみ", role:{ja:"常連メンバー",en:"Regular"}, text:{ja:"ショップも雑談も両方充実してて、一度来たら離れられない。居心地が最高のサーバーです。",en:"Both shop and chat are superb. Once you're in, you never want to leave."}, stars:5, av:"Y" },
];

const stats = [
  { icon:ShoppingBag, value:"40+", key:"stats_deals" },
  { icon:Users, value:"100+", key:"stats_members" },
  { icon:Award, value:"98%", key:"stats_satisfaction" },
  { icon:Star, value:"5.0", key:"stats_rating" },
];

// Weather canvas
function WeatherCanvas({ mode }) {
  const ref = useRef(null);
  useEffect(() => {
    const canvas = ref.current; if (!canvas || mode === "none") return;
    const ctx = canvas.getContext("2d");
    let af;
    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    resize(); window.addEventListener("resize", resize);
    const pts = [];
    if (mode === "rain") {
      for (let i=0;i<130;i++) pts.push({ x:Math.random()*window.innerWidth, y:Math.random()*window.innerHeight, len:Math.random()*16+8, speed:Math.random()*7+10, op:Math.random()*0.3+0.1, w:Math.random()*0.7+0.3 });
    } else {
      for (let i=0;i<90;i++) pts.push({ x:Math.random()*window.innerWidth, y:Math.random()*window.innerHeight, r:Math.random()*3+1, speed:Math.random()*1.1+0.4, drift:Math.random()*0.5-0.25, op:Math.random()*0.45+0.15, wob:Math.random()*Math.PI*2 });
    }
    const draw = () => {
      ctx.clearRect(0,0,canvas.width,canvas.height);
      if (mode==="rain") {
        pts.forEach(p => {
          ctx.beginPath(); ctx.moveTo(p.x,p.y); ctx.lineTo(p.x-p.len*0.14,p.y+p.len);
          ctx.strokeStyle=`rgba(180,220,255,${p.op})`; ctx.lineWidth=p.w; ctx.stroke();
          p.y+=p.speed; p.x-=p.speed*0.07;
          if(p.y>canvas.height){p.y=-p.len;p.x=Math.random()*canvas.width;}
        });
      } else {
        pts.forEach(p => {
          p.wob+=0.018;
          ctx.beginPath(); ctx.arc(p.x+Math.sin(p.wob)*1.8,p.y,p.r,0,Math.PI*2);
          ctx.fillStyle=`rgba(255,255,255,${p.op})`; ctx.fill();
          p.y+=p.speed; p.x+=p.drift;
          if(p.y>canvas.height){p.y=-p.r;p.x=Math.random()*canvas.width;}
          if(p.x>canvas.width) p.x=0; if(p.x<0) p.x=canvas.width;
        });
      }
      af = requestAnimationFrame(draw);
    };
    af = requestAnimationFrame(draw);
    return () => { cancelAnimationFrame(af); window.removeEventListener("resize",resize); };
  }, [mode]);
  if (mode==="none") return null;
  return <canvas ref={ref} style={{position:"fixed",top:0,left:0,pointerEvents:"none",zIndex:5}} />;
}

// Mouse ripple / grid warp
function RippleCanvas() {
  const ref = useRef(null);
  const mouse = useRef({x:-9999,y:-9999});
  const ripples = useRef([]);
  const lastR = useRef(0);
  useEffect(() => {
    const canvas = ref.current; if (!canvas) return;
    const ctx = canvas.getContext("2d"); let af;
    const resize = () => { canvas.width=window.innerWidth; canvas.height=window.innerHeight; };
    resize(); window.addEventListener("resize",resize);
    const onMove = e => {
      mouse.current = {x:e.clientX,y:e.clientY};
      const now = Date.now();
      if(now-lastR.current>90) {
        lastR.current=now;
        ripples.current.push({x:e.clientX,y:e.clientY,r:0,maxR:Math.random()*55+35,op:0.32,born:now});
      }
    };
    window.addEventListener("mousemove",onMove);
    const draw = () => {
      ctx.clearRect(0,0,canvas.width,canvas.height);
      const {x:mx,y:my}=mouse.current;
      const cols=Math.ceil(canvas.width/60)+2, rows=Math.ceil(canvas.height/60)+2;
      ctx.strokeStyle="rgba(255,255,255,0.022)"; ctx.lineWidth=1;
      for(let c=0;c<cols;c++){
        ctx.beginPath();
        for(let r=0;r<rows;r++){
          const bx=c*60,by=r*60,dx=bx-mx,dy=by-my,dist=Math.sqrt(dx*dx+dy*dy);
          const s=Math.max(0,1-dist/190);
          const ox=(dx/(dist+.001))*s*-16, oy=(dy/(dist+.001))*s*-16;
          r===0?ctx.moveTo(bx+ox,by+oy):ctx.lineTo(bx+ox,by+oy);
        } ctx.stroke();
      }
      for(let r=0;r<rows;r++){
        ctx.beginPath();
        for(let c=0;c<cols;c++){
          const bx=c*60,by=r*60,dx=bx-mx,dy=by-my,dist=Math.sqrt(dx*dx+dy*dy);
          const s=Math.max(0,1-dist/190);
          const ox=(dx/(dist+.001))*s*-16, oy=(dy/(dist+.001))*s*-16;
          c===0?ctx.moveTo(bx+ox,by+oy):ctx.lineTo(bx+ox,by+oy);
        } ctx.stroke();
      }
      const now=Date.now();
      ripples.current=ripples.current.filter(rp=>rp.op>0.005);
      ripples.current.forEach(rp=>{
        const age=(now-rp.born)/650;
        rp.r=rp.maxR*Math.min(age,1); rp.op=Math.max(0,0.32*(1-age*0.92));
        ctx.beginPath(); ctx.arc(rp.x,rp.y,rp.r,0,Math.PI*2);
        ctx.strokeStyle=`rgba(255,255,255,${rp.op})`; ctx.lineWidth=1; ctx.stroke();
        const g=ctx.createRadialGradient(rp.x,rp.y,0,rp.x,rp.y,rp.r);
        g.addColorStop(0,`rgba(255,255,255,${rp.op*0.07})`); g.addColorStop(1,"rgba(255,255,255,0)");
        ctx.beginPath(); ctx.arc(rp.x,rp.y,rp.r,0,Math.PI*2); ctx.fillStyle=g; ctx.fill();
      });
      af=requestAnimationFrame(draw);
    };
    af=requestAnimationFrame(draw);
    return ()=>{ cancelAnimationFrame(af); window.removeEventListener("resize",resize); window.removeEventListener("mousemove",onMove); };
  },[]);
  return <canvas ref={ref} style={{position:"fixed",top:0,left:0,pointerEvents:"none",zIndex:3}} />;
}

// Sakura cursor
function SakuraCursor() {
  const [pos,setPos]=useState({x:-200,y:-200});
  const [petals,setPetals]=useState([]);
  const last=useRef(0);
  useEffect(()=>{
    const onMove=e=>{
      setPos({x:e.clientX,y:e.clientY});
      const now=Date.now();
      if(now-last.current>110){
        last.current=now;
        const id=now+Math.random();
        setPetals(p=>[...p.slice(-10),{id,x:e.clientX+(Math.random()-0.5)*16,y:e.clientY+(Math.random()-0.5)*16,size:Math.random()*9+5,rot:Math.random()*360,born:now}]);
      }
    };
    window.addEventListener("mousemove",onMove);
    return ()=>window.removeEventListener("mousemove",onMove);
  },[]);
  useEffect(()=>{
    const t=setInterval(()=>{ const now=Date.now(); setPetals(p=>p.filter(pt=>now-pt.born<900)); },120);
    return ()=>clearInterval(t);
  },[]);
  const angles=[0,72,144,216,288];
  return (
    <div style={{position:"fixed",top:0,left:0,pointerEvents:"none",zIndex:9999}}>
      <svg width="30" height="30" style={{position:"absolute",left:pos.x-15,top:pos.y-15,filter:"drop-shadow(0 0 5px rgba(255,150,170,0.9))"}} viewBox="-15 -15 30 30">
        {angles.map((a,i)=><g key={i} transform={`rotate(${a})`}><ellipse cx="0" cy="-6.5" rx="3.5" ry="6.5" fill="rgba(255,192,203,0.92)"/></g>)}
        <circle cx="0" cy="0" r="2.8" fill="rgba(255,230,235,1)"/>
        <circle cx="0" cy="0" r="1.1" fill="rgba(255,90,120,0.85)"/>
      </svg>
      {petals.map(pt=>(
        <svg key={pt.id} width={pt.size*2.2} height={pt.size*2.2}
          style={{position:"absolute",left:pt.x-pt.size,top:pt.y-pt.size,animation:"petalFade 0.9s ease forwards"}}
          viewBox={`-${pt.size} -${pt.size} ${pt.size*2} ${pt.size*2}`}>
          {angles.map((a,i)=><g key={i} transform={`rotate(${a+pt.rot}) scale(${pt.size/8})`}><ellipse cx="0" cy="-6.5" rx="3.5" ry="6.5" fill="rgba(255,182,193,0.65)"/></g>)}
        </svg>
      ))}
    </div>
  );
}

function GlassCard({children,className="",style:s={}}) {
  return (
    <div className={`rounded-2xl border border-white/10 ${className}`}
      style={{background:"rgba(255,255,255,0.04)",backdropFilter:"blur(24px)",WebkitBackdropFilter:"blur(24px)",boxShadow:"0 8px 32px rgba(0,0,0,0.4),inset 0 1px 0 rgba(255,255,255,0.09)",...s}}>
      {children}
    </div>
  );
}

function StarRow({count=5}) {
  return <div className="flex gap-0.5">{Array.from({length:count}).map((_,i)=><Star key={i} size={12} fill="white" color="white"/>)}</div>;
}

export default function App() {
  const [lang,setLang]=useState("ja");
  const [weather,setWeather]=useState("none");
  const [visible,setVisible]=useState({});
  const sectionRefs=useRef({});
  const t=T[lang];

  useEffect(()=>{
    const obs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting) setVisible(v=>({...v,[e.target.dataset.id]:true}));}),{threshold:0.12});
    Object.values(sectionRefs.current).forEach(el=>el&&obs.observe(el));
    return ()=>obs.disconnect();
  },[]);

  const ref=id=>el=>{sectionRefs.current[id]=el;if(el) el.dataset.id=id;};
  const weatherCycle=()=>setWeather(w=>w==="none"?"rain":w==="rain"?"snow":"none");
  const wIcon=weather==="rain"?<Cloud size={13}/>:weather==="snow"?<Snowflake size={13}/>:<Sun size={13}/>;
  const wLabel=weather==="none"?t.w_clear:weather==="rain"?t.w_rain:t.w_snow;

  return (
    <div style={{background:"#080808",minHeight:"100vh",fontFamily:"'Hiragino Kaku Gothic ProN','Noto Sans JP',sans-serif",color:"white",overflowX:"hidden",cursor:"none"}}>
      <style>{`
        @keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-18px)}}
        @keyframes fadeUp{from{opacity:0;transform:translateY(34px)}to{opacity:1;transform:translateY(0)}}
        @keyframes fadeIn{from{opacity:0}to{opacity:1}}
        @keyframes shimmer{0%{background-position:-200% center}100%{background-position:200% center}}
        @keyframes pulseRing{0%,100%{box-shadow:0 0 0 0 rgba(255,255,255,0.1)}50%{box-shadow:0 0 0 14px rgba(255,255,255,0)}}
        @keyframes petalFade{0%{opacity:.7;transform:translateY(0) scale(1)}100%{opacity:0;transform:translateY(24px) scale(.35)}}
        @keyframes barGrow{from{width:0}to{width:55%}}
        .reveal{opacity:0;transform:translateY(34px)}
        .revealed{animation:fadeUp .85s cubic-bezier(.16,1,.3,1) forwards}
        .shimmer-text{background:linear-gradient(90deg,#fff 0%,#fff 36%,rgba(255,255,255,.3) 50%,#fff 64%,#fff 100%);background-size:200% auto;-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;animation:shimmer 4.5s linear infinite}
        .gb{background:rgba(255,255,255,.07);backdrop-filter:blur(18px);border:1px solid rgba(255,255,255,.17);transition:all .3s ease;box-shadow:0 4px 20px rgba(0,0,0,.3),inset 0 1px 0 rgba(255,255,255,.1)}
        .gb:hover{background:rgba(255,255,255,.14);border-color:rgba(255,255,255,.36);transform:translateY(-2px)}
        .cb{background:white;color:black;transition:all .3s cubic-bezier(.16,1,.3,1);animation:pulseRing 3s ease-in-out infinite}
        .cb:hover{background:rgba(255,255,255,.88);transform:translateY(-3px) scale(1.02);box-shadow:0 12px 40px rgba(255,255,255,.2)}
        .ch{transition:all .4s cubic-bezier(.16,1,.3,1)}
        .ch:hover{transform:translateY(-5px);box-shadow:0 24px 48px rgba(0,0,0,.5),inset 0 1px 0 rgba(255,255,255,.15)!important;border-color:rgba(255,255,255,.2)!important;background:rgba(255,255,255,.07)!important}
        *{cursor:none!important}
        .bar-anim{animation:barGrow 1.3s cubic-bezier(.16,1,.3,1) forwards;animation-delay:.3s;width:0}
      `}</style>

      {/* Fixed BG layers */}
      <div style={{position:"fixed",inset:0,pointerEvents:"none",zIndex:1,backgroundImage:"linear-gradient(rgba(255,255,255,.016) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.016) 1px,transparent 1px)",backgroundSize:"60px 60px"}}/>
      <div style={{position:"fixed",inset:0,pointerEvents:"none",zIndex:2,background:"radial-gradient(ellipse 80% 55% at 50% 0%,rgba(255,255,255,.03) 0%,transparent 70%)"}}/>

      <RippleCanvas/>
      <WeatherCanvas mode={weather}/>
      <SakuraCursor/>

      {/* NAV */}
      <nav style={{position:"fixed",top:0,left:0,right:0,zIndex:100,padding:"18px 28px",display:"flex",alignItems:"center",justifyContent:"space-between",backdropFilter:"blur(14px)",WebkitBackdropFilter:"blur(14px)",borderBottom:"1px solid rgba(255,255,255,.055)"}}>
        <span style={{fontSize:"13px",fontWeight:900,letterSpacing:".14em"}}>美味しいCOM</span>
        <div style={{display:"flex",alignItems:"center",gap:"10px"}}>
          <button className="gb" onClick={weatherCycle} style={{display:"flex",alignItems:"center",gap:"6px",padding:"8px 14px",borderRadius:"100px",fontSize:"11px",letterSpacing:".08em",color:"white"}}>
            {wIcon}{wLabel}
          </button>
          <button className="gb" onClick={()=>setLang(l=>l==="ja"?"en":"ja")} style={{padding:"8px 16px",borderRadius:"100px",fontSize:"11px",letterSpacing:".1em",color:"white"}}>
            {t.lang_label}
          </button>
          <button className="cb" onClick={()=>window.open(_lnk,"_blank")} style={{padding:"9px 22px",borderRadius:"100px",fontSize:"12px",letterSpacing:".1em",fontWeight:700,border:"none"}}>
            {t.nav_join}
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section style={{position:"relative",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",minHeight:"100vh",padding:"0 24px"}}>
        <div style={{animation:"fadeIn 1s ease forwards",opacity:0,animationDelay:".15s",marginBottom:"22px"}}>
          <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"12px"}}>
            <div style={{width:"36px",height:"1px",background:"rgba(255,255,255,.22)"}}/>
            <span style={{fontSize:"11px",letterSpacing:".3em",opacity:.38,textTransform:"uppercase"}}>Discord Community</span>
            <div style={{width:"36px",height:"1px",background:"rgba(255,255,255,.22)"}}/>
          </div>
        </div>
        <h1 className="shimmer-text" style={{fontSize:"clamp(50px,11vw,110px)",fontWeight:900,letterSpacing:"-.035em",lineHeight:1.04,marginBottom:"18px",animation:"fadeUp 1s cubic-bezier(.16,1,.3,1) forwards",opacity:0,animationDelay:".3s"}}>
          {lang==="ja"?<>美味しい<br/>コミュニティ</>:<>Oishii<br/>Community</>}
        </h1>
        <p style={{fontSize:"clamp(13px,1.8vw,16px)",opacity:.42,letterSpacing:".07em",marginBottom:"46px",lineHeight:1.88,animation:"fadeUp 1s cubic-bezier(.16,1,.3,1) forwards",opacity:0,animationDelay:".5s"}}>
          {t.hero_sub}
        </p>
        <div style={{display:"flex",gap:"12px",flexWrap:"wrap",justifyContent:"center",animation:"fadeUp 1s cubic-bezier(.16,1,.3,1) forwards",opacity:0,animationDelay:".7s"}}>
          <button className="gb" onClick={()=>document.getElementById("shop").scrollIntoView({behavior:"smooth"})} style={{padding:"14px 28px",borderRadius:"100px",fontSize:"13px",letterSpacing:".1em",color:"white"}}>
            {t.hero_detail}
          </button>
          <button className="cb" onClick={()=>window.open(_lnk,"_blank")} style={{padding:"14px 32px",borderRadius:"100px",fontSize:"13px",letterSpacing:".1em",fontWeight:700,border:"none"}}>
            {t.hero_join}
          </button>
        </div>
        <div style={{position:"absolute",bottom:"34px",animation:"fadeIn 2s ease forwards",opacity:0,animationDelay:"1.3s"}}>
          <ChevronDown size={18} style={{opacity:.22,animation:"float 2.3s ease-in-out infinite"}}/>
        </div>
      </section>

      {/* STATS */}
      <section ref={ref("stats")} className={`reveal ${visible.stats?"revealed":""}`} style={{padding:"64px 24px",maxWidth:"880px",margin:"0 auto"}}>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(175px,1fr))",gap:"14px"}}>
          {stats.map(({icon:Icon,value,key},i)=>(
            <GlassCard key={i} className="ch">
              <div style={{padding:"30px 18px",textAlign:"center"}}>
                <Icon size={17} style={{opacity:.32,margin:"0 auto 12px"}}/>
                <div style={{fontSize:"clamp(32px,5vw,44px)",fontWeight:900,letterSpacing:"-.03em",marginBottom:"5px"}}>{value}</div>
                <div style={{fontSize:"11px",opacity:.35,letterSpacing:".12em"}}>{t[key]}</div>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* SHOP */}
      <section id="shop" ref={ref("shop")} className={`reveal ${visible.shop?"revealed":""}`} style={{padding:"64px 24px",maxWidth:"880px",margin:"0 auto"}}>
        <div style={{textAlign:"center",marginBottom:"50px"}}>
          <div style={{fontSize:"11px",letterSpacing:".3em",opacity:.35,marginBottom:"12px",textTransform:"uppercase"}}>{t.section_shop}</div>
          <h2 style={{fontSize:"clamp(28px,5vw,48px)",fontWeight:900,letterSpacing:"-.03em"}}>{t.section_shop_title}</h2>
        </div>
        <GlassCard>
          <div style={{padding:"clamp(26px,5vw,50px)"}}>
            <div style={{display:"flex",gap:"28px",flexWrap:"wrap",alignItems:"flex-start"}}>
              <div style={{flex:"1",minWidth:"230px"}}>
                <div style={{display:"inline-flex",alignItems:"center",gap:"7px",background:"rgba(255,255,255,.08)",border:"1px solid rgba(255,255,255,.14)",padding:"7px 16px",borderRadius:"100px",fontSize:"12px",letterSpacing:".1em",marginBottom:"20px"}}>
                  <Sparkles size={12}/>{t.shop_badge}
                </div>
                <h3 style={{fontSize:"clamp(19px,3vw,29px)",fontWeight:900,letterSpacing:"-.02em",marginBottom:"12px",lineHeight:1.38,whiteSpace:"pre-line"}}>{t.shop_title}</h3>
                <p style={{fontSize:"13px",opacity:.46,lineHeight:1.92,marginBottom:"22px"}}>{t.shop_desc}</p>
                <div style={{display:"flex",flexDirection:"column",gap:"9px",marginBottom:"28px"}}>
                  {[t.shop_p1,t.shop_p2,t.shop_p3].map((pt,i)=>(
                    <div key={i} style={{display:"flex",alignItems:"center",gap:"10px"}}>
                      <div style={{width:"18px",height:"18px",borderRadius:"50%",background:"rgba(255,255,255,.07)",border:"1px solid rgba(255,255,255,.16)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
                        <div style={{width:"5px",height:"5px",borderRadius:"50%",background:"white"}}/>
                      </div>
                      <span style={{fontSize:"13px",opacity:.65}}>{pt}</span>
                    </div>
                  ))}
                </div>
                {/* Ratio bar */}
                <div style={{background:"rgba(255,255,255,.04)",border:"1px solid rgba(255,255,255,.09)",borderRadius:"16px",padding:"20px 22px"}}>
                  <div style={{fontSize:"11px",letterSpacing:".18em",opacity:.36,marginBottom:"14px",textTransform:"uppercase"}}>{t.ratio_title}</div>
                  <div style={{display:"flex",gap:"16px",marginBottom:"10px",flexWrap:"wrap"}}>
                    {[[t.ratio_shop,"55%","rgba(255,255,255,0.9)"],[t.ratio_chat,"45%","rgba(255,255,255,0.32)"]].map(([label,pct,col],i)=>(
                      <div key={i} style={{display:"flex",alignItems:"center",gap:"7px"}}>
                        <div style={{width:"9px",height:"9px",borderRadius:"50%",background:col}}/>
                        <span style={{fontSize:"12px",opacity:.72}}>{label} {pct}</span>
                      </div>
                    ))}
                  </div>
                  <div style={{height:"7px",borderRadius:"100px",background:"rgba(255,255,255,.09)",overflow:"hidden"}}>
                    {visible.shop && <div className="bar-anim" style={{height:"100%",background:"linear-gradient(90deg,rgba(255,255,255,.92),rgba(255,255,255,.48))",borderRadius:"100px"}}/>}
                  </div>
                </div>
              </div>
              <div style={{flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center"}}>
                <div style={{width:"clamp(105px,17vw,145px)",height:"clamp(105px,17vw,145px)",borderRadius:"50%",background:"rgba(255,255,255,.04)",border:"1px solid rgba(255,255,255,.09)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",boxShadow:"0 0 55px rgba(255,255,255,.04),inset 0 1px 0 rgba(255,255,255,.09)"}}>
                  <div style={{fontSize:"clamp(30px,5vw,46px)",fontWeight:900}}>40+</div>
                  <div style={{fontSize:"10px",opacity:.34,letterSpacing:".12em"}}>DEALS</div>
                </div>
              </div>
            </div>
          </div>
        </GlassCard>
      </section>

      {/* VOICES */}
      <section ref={ref("voices")} className={`reveal ${visible.voices?"revealed":""}`} style={{padding:"64px 24px",maxWidth:"1100px",margin:"0 auto"}}>
        <div style={{textAlign:"center",marginBottom:"50px"}}>
          <div style={{fontSize:"11px",letterSpacing:".3em",opacity:.35,marginBottom:"12px",textTransform:"uppercase"}}>{t.voices_label}</div>
          <h2 style={{fontSize:"clamp(28px,5vw,48px)",fontWeight:900,letterSpacing:"-.03em"}}>{t.voices_title}</h2>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(195px,1fr))",gap:"12px"}}>
          {voices.map(({name,role,text,stars,av},i)=>(
            <GlassCard key={i} className="ch">
              <div style={{padding:"22px"}}>
                <div style={{display:"flex",alignItems:"center",gap:"10px",marginBottom:"12px"}}>
                  <div style={{width:"36px",height:"36px",borderRadius:"50%",background:"rgba(255,255,255,.07)",border:"1px solid rgba(255,255,255,.13)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"12px",fontWeight:700,flexShrink:0}}>{av}</div>
                  <div>
                    <div style={{fontSize:"13px",fontWeight:700}}>{name}</div>
                    <div style={{fontSize:"10px",opacity:.35}}>{role[lang]}</div>
                  </div>
                </div>
                <StarRow count={stars}/>
                <p style={{fontSize:"12px",opacity:.54,lineHeight:1.88,marginTop:"10px"}}>{text[lang]}</p>
                <MessageCircle size={12} style={{opacity:.1,marginTop:"12px"}}/>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section ref={ref("cta")} className={`reveal ${visible.cta?"revealed":""}`} style={{padding:"64px 24px 110px",textAlign:"center"}}>
        <GlassCard style={{maxWidth:"560px",margin:"0 auto"}}>
          <div style={{padding:"clamp(34px,6vw,64px) clamp(20px,4vw,50px)"}}>
            <div style={{fontSize:"11px",letterSpacing:".3em",opacity:.35,marginBottom:"20px",textTransform:"uppercase"}}>{t.cta_label}</div>
            <h2 style={{fontSize:"clamp(24px,4vw,40px)",fontWeight:900,letterSpacing:"-.03em",marginBottom:"12px"}}>{t.cta_title}</h2>
            <p style={{fontSize:"13px",opacity:.44,lineHeight:1.88,marginBottom:"36px",whiteSpace:"pre-line"}}>{t.cta_desc}</p>
            <button className="cb" onClick={()=>window.open(_lnk,"_blank")} style={{padding:"17px 46px",borderRadius:"100px",fontSize:"14px",letterSpacing:".1em",fontWeight:900,border:"none",display:"inline-flex",alignItems:"center",gap:"9px"}}>
              {t.cta_btn}<ArrowRight size={14}/>
            </button>
          </div>
        </GlassCard>
      </section>

      <footer style={{textAlign:"center",padding:"28px",borderTop:"1px solid rgba(255,255,255,.05)"}}>
        <p style={{fontSize:"11px",opacity:.16,letterSpacing:".1em"}}>{t.footer}</p>
      </footer>
    </div>
  );
}
