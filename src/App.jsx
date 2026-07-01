import { useState, useEffect } from "react";
import { Phone, Mail, Smartphone, FileText, MapPin, Copy, Check } from "lucide-react";

// ─── Custom Brand Icons ────────────────────────────────────────────────────
export function InstagramIcon({ size = 24, color = "currentColor" }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke={color} 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}
function LinkedinIcon({ size = 20, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" />
    </svg>
  );
}
export function InstaPayIcon({ size = 24, color = "currentColor" }) {
  // If color is "currentColor", we use InstaPay's official gradient colors.
  // Gradient range: #e11d48 (Pink/Red) to #7c3aed (Purple)
  const useBrandGradient = color === "currentColor";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={useBrandGradient ? "url(#instapay-grad)" : color}
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {useBrandGradient && (
        <defs>
          <linearGradient id="instapay-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e11d48" />
            <stop offset="100%" stopColor="#7c3aed" />
          </linearGradient>
        </defs>
      )}
      {/* The lightning bolt geometric path */}
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  );
}
function GithubIcon({ size = 20, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}
function XIcon({ size = 20, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4l11.733 16h4.267l-11.733-16z" />
      <path d="M4 20l6.768-6.768m2.46-2.46l6.772-6.772" />
    </svg>
  );
}
export function PortfolioIcon({ size = 24, color = "currentColor" }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke={color} 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}
export function WhatsAppIcon({ size = 24, color = "currentColor" }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill={color} 
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
export function FacebookIcon({ size = 24, color = "currentColor" }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill={color}
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

// ─── Profile Data ──────────────────────────────────────────────────────────
const PROFILE = {
  name: "Ahmed Abdelelah",
  role: "Full-Stack Developer",
  location: "Mansoura, Egypt",
  bio: "Building elegant, production-ready web apps with React · Node.js · MongoDB.",
  initials: "AA",
  taps: 248,
  rawPhone: "+201090949310",
  rawEmail: "ahmedabdelelah909493@gmail.com",
  cvUrl: "/resume.pdf",
  contacts: [
    { id: "phone",    label: "Phone",    Icon: Phone,        href: "tel:+201090949310",         value: "+20 109 094 9310" },
    { id: "whatsapp", label: "WhatsApp", Icon: WhatsAppIcon, href: "https://wa.me/201090949310", value: "Open WhatsApp Chat" },
    { id: "email",    label: "Email",    Icon: Mail,         href: "mailto:ahmed@example.com",   value: "ahmed@example.com" },
  ],
  socials: [
    { id: "phone",    label: "Phone",    Icon: Phone,        href: "tel:+201090949310",         value: "+20 109 094 9310" },
    { id: "linkedin",  label: "LinkedIn",  Icon: LinkedinIcon,  href: "https://linkedin.com/in/ahmed-dev", color: "#0A66C2" },
    { id: "instagram", label: "Instagram", Icon: InstagramIcon, href: "https://instagram.com/ahmed.dev",   color: "#E4405F" },
    { id: "github",    label: "GitHub",    Icon: GithubIcon,    href: "https://github.com/ahmedabdelelah22", color: "#F0F0F0" },
    { id: "x",         label: "X",         Icon: XIcon,         href: "https://x.com/ahmed_dev",           color: "#E7E7E7" },
    { id: "whatsapp",  label: "WhatsApp",  Icon: WhatsAppIcon,  href: "https://wa.me/201000000000",        color: "#25D366" },
    { id: "portfolio", label: "Portfolio", Icon: PortfolioIcon, href: "https://vercel.com/ahmed-abdelelahs-projects/my-portfolio-after-update-2", color: "#D4AF6A" },
    { id: "portfolio", label: "Facebook", Icon: FacebookIcon, href: "https://vercel.com/ahmed-abdelelahs-projects/my-portfolio-after-update-2", color: "#D4AF6A" },
    { id: "email",    label: "Email",    Icon: Mail,         href: "mailto:ahmed@example.com",   value: "ahmedabdelelah909493@gmail.com" },

  ],
  payments: [
    {
      id: "instapay",
      label: "InstaPay",
      link: "https://ipn.eg/S/ahmedabdelelah909493/instapay/4gnHsD",
      handle: "ahmedabdelelah909493@instapay",
      copyValue: "ahmedabdelelah909493@instapay",
      icon: "instapay",
      gradient: ["#1A6FBF", "#0D4FA3"],
      badge: "Instant",
    },
    {
      id: "vodafone",
      link: "https://web.vodafone.com.eg/ar/vodafone-cash?id=mt&qrId=lnCK3r",
      label: "Vodafone Cash",
      handle: "01090949310",
      copyValue: "01090949310",
      icon: "vodafone",
      gradient: ["#CC0000", "#A30000"],
      badge: "Cash",
    },
  ],
};

// ─── Tokens ────────────────────────────────────────────────────────────────
const C = {
  bg:          "#070708",
  card:        "#111113",
  cardBorder:  "rgba(212,175,106,0.13)",
  divider:     "rgba(255,255,255,0.055)",
  gold:        "#D4AF6A",
  goldDim:     "rgba(212,175,106,0.28)",
  goldBg:      "rgba(212,175,106,0.07)",
  text:        "#F5F2EC",
  textSub:     "#9C9690",
  textMuted:   "#5C5853",
  pill:        "#18181A",
  pillBorder:  "rgba(255,255,255,0.07)",
  green:       "#4ADE80",
};

// ─── Pulse rings animation ─────────────────────────────────────────────────
function TapRing() {
  return (
    <>
      <style>{`
        @keyframes tapPulse {
          0%   { transform:scale(0.96); opacity:0.55; }
          65%  { transform:scale(1.34); opacity:0; }
          100% { transform:scale(1.34); opacity:0; }
        }
        .tap-ring { position:absolute; inset:0; border-radius:50%; border:1px solid ${C.gold}; animation:tapPulse 3s cubic-bezier(0.16,1,0.3,1) infinite; }
        .tap-ring.r2 { animation-delay:1.1s; }
      `}</style>
      <div className="tap-ring" />
      <div className="tap-ring r2" />
    </>
  );
}

// ─── Section label ─────────────────────────────────────────────────────────
function SectionLabel({ children }) {
  return (
    <p style={{
      fontFamily:"'Inter',sans-serif", fontSize:10, fontWeight:700,
      color:C.textMuted, textTransform:"uppercase", letterSpacing:"0.12em",
      marginBottom:12,
    }}>
      {children}
    </p>
  );
}

// ─── Main ──────────────────────────────────────────────────────────────────
export default function ProfileCard() {
  const [mounted, setMounted] = useState(false);
  const [copied, setCopied]   = useState(null);

  useEffect(() => { setMounted(true); }, []);

  const handleCopy = (id, val) => {
    navigator.clipboard?.writeText(val);
    setCopied(id);
    setTimeout(() => setCopied(null), 1800);
  };

  const handleSaveContact = () => {
    const vcard = [
      "BEGIN:VCARD","VERSION:3.0",
      `FN:${PROFILE.name}`, `TITLE:${PROFILE.role}`,
      `TEL;TYPE=CELL:${PROFILE.rawPhone}`,
      `EMAIL;TYPE=INTERNET:${PROFILE.rawEmail}`,
      "END:VCARD",
    ].join("\n");
    const blob = new Blob([vcard], { type:"text/vcard;charset=utf-8;" });
    const url  = URL.createObjectURL(blob);
    const a    = document.createElement("a");
    a.href = url; a.download = `${PROFILE.name.replace(/\s+/g,"_")}.vcf`;
    document.body.appendChild(a); a.click();
    document.body.removeChild(a); URL.revokeObjectURL(url);
  };

  return (
    <main style={{ minHeight:"100vh", background:C.bg, display:"flex", justifyContent:"center", padding:"20px 16px 56px", fontFamily:"'Inter',sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap');
        *,*::before,*::after { box-sizing:border-box; margin:0; padding:0; }
        ::-webkit-scrollbar { display:none; }
        body { background:${C.bg}; }

        @keyframes statusPulse {
          0%,100% { transform:scale(1); opacity:0.7; }
          50%     { transform:scale(1.5); opacity:0; }
        }
        .status-ring { position:absolute; inset:0; border-radius:50%; background:${C.green}; animation:statusPulse 2s ease-in-out infinite; }

        .soc { transition:all 0.2s cubic-bezier(0.16,1,0.3,1); }
        .soc:hover { transform:translateY(-3px) scale(1.07); }
        .contact-row { transition:background 0.15s; }
        .contact-row:hover { background:rgba(255,255,255,0.03); }
        .pay-card { transition:all 0.2s; }
        .pay-card:hover { transform:translateY(-2px); }
        .save-btn:hover { background:#E9C991 !important; }
        .cv-btn:hover { background:${C.goldBg} !important; border-color:${C.gold} !important; }
        .cv-btn:hover span { color:${C.gold} !important; }
      `}</style>

      <div style={{ width:"100%", maxWidth:400 }}>

        {/* ════ CARD ════ */}
        <div style={{
          background:C.card,
          border:`1px solid ${C.cardBorder}`,
          borderRadius:24, overflow:"hidden",
          boxShadow:"0 28px 56px -12px rgba(0,0,0,0.65)",
        }}>

          {/* Gold top stripe */}
          <div style={{ height:3, background:`linear-gradient(90deg,transparent,${C.gold},transparent)` }} />

          {/* ── HEADER ── */}
          <header style={{ padding:"40px 24px 28px", textAlign:"center" }}>

            {/* Avatar */}
            <div style={{ width:96, height:96, margin:"0 auto 20px", position:"relative" }}>
              {mounted && <TapRing />}
              <div style={{
                width:"100%", height:"100%", borderRadius:"50%",
                background:"linear-gradient(135deg,#221D16 0%,#0A0A0B 100%)",
                border:`1px solid ${C.cardBorder}`,
                display:"flex", alignItems:"center", justifyContent:"center",
                position:"relative", zIndex:2,
              }}>
                <span style={{ fontFamily:"'Space Grotesk',sans-serif", fontSize:30, fontWeight:600, color:C.gold }}>
                  {PROFILE.initials}
                </span>
              </div>
            </div>

            {/* Name */}
            <h1 style={{ fontFamily:"'Space Grotesk',sans-serif", fontSize:26, fontWeight:700, color:C.text, letterSpacing:"-0.02em", marginBottom:5 }}>
              {PROFILE.name}
            </h1>

            {/* Role */}
            <p style={{ fontFamily:"'Inter',sans-serif", fontSize:12, fontWeight:700, color:C.gold, letterSpacing:"0.08em", textTransform:"uppercase", marginBottom:10 }}>
              {PROFILE.role}
            </p>

            {/* Location + Status */}
            <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:14, marginBottom:16 }}>
              <span style={{ fontSize:12, color:C.textMuted, display:"flex", alignItems:"center", gap:4 }}>
                <MapPin size={11} strokeWidth={2}/> {PROFILE.location}
              </span>
              <span style={{ width:1, height:10, background:C.divider }} />
              <div style={{ display:"flex", alignItems:"center", gap:5 }}>
                <div style={{ width:7, height:7, background:C.green, borderRadius:"50%", position:"relative" }}>
                  <div className="status-ring" />
                </div>
                <span style={{ fontSize:11, fontWeight:600, color:C.green }}>Available</span>
              </div>
            </div>

            {/* Bio */}
            {/* <p style={{ fontFamily:"'Inter',sans-serif", fontSize:13, color:C.textSub, lineHeight:1.65, maxWidth:300, margin:"0 auto" }}>
              {PROFILE.bio}
            </p> */}
          </header>

          {/* ── CTAs ── */}
          <div style={{ padding:"0 20px 24px", display:"flex", gap:10 }}>
            <button className="save-btn" onClick={handleSaveContact} style={{
              flex:1, display:"flex", alignItems:"center", justifyContent:"center", gap:7,
              background:C.gold, border:"none", borderRadius:12,
              padding:"14px 0", cursor:"pointer", transition:"background 0.2s",
            }}>
              <Smartphone size={15} strokeWidth={2.2} color="#0A0A0A" />
              <span style={{ fontFamily:"'Inter',sans-serif", fontSize:13, fontWeight:700, color:"#0A0A0A" }}>Save Contact</span>
            </button>

            <a href={PROFILE.cvUrl} download className="cv-btn" style={{
              flex:1, display:"flex", alignItems:"center", justifyContent:"center", gap:7,
              background:C.pill, border:`1px solid ${C.pillBorder}`, borderRadius:12,
              padding:"14px 0", cursor:"pointer", textDecoration:"none", transition:"all 0.2s",
            }}>
              <FileText size={15} strokeWidth={2} color={C.textSub} />
              <span style={{ fontFamily:"'Inter',sans-serif", fontSize:13, fontWeight:600, color:C.textSub }}>Download CV</span>
            </a>
          </div>

          {/* ── SOCIAL GRID ── */}
          <div style={{ padding:"20px 20px 20px", borderTop:`1px solid ${C.divider}` }}>
            <SectionLabel>Find me on</SectionLabel>
            <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:8 }}>
              {PROFILE.socials.map((s, idx) => (
                <a key={idx} href={s.href} target="_blank" rel="noreferrer"
                  className="soc" aria-label={s.label}
                  style={{
                    aspectRatio:"1", borderRadius:14,
                    background:C.pill, border:`1px solid ${C.pillBorder}`,
                    display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:5,
                    textDecoration:"none",
                  }}
                >
                  <s.Icon size={20} color={C.textSub} />
                  <span style={{ fontFamily:"'Inter',sans-serif", fontSize:8.5, fontWeight:600, color:C.textMuted, letterSpacing:"0.04em", textAlign:"center", lineHeight:1 }}>
                    {s.label}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* ── CONTACT ── */}
          {/* <div style={{ padding:"4px 20px 20px", borderTop:`1px solid ${C.divider}` }}>
            <SectionLabel>Contact</SectionLabel>
            <div style={{ background:"rgba(0,0,0,0.18)", border:`1px solid ${C.pillBorder}`, borderRadius:16, overflow:"hidden" }}>
              {PROFILE.contacts.map((item, i) => (
                <a key={item.id} href={item.href} target="_blank" rel="noreferrer"
                  className="contact-row"
                  style={{
                    display:"flex", alignItems:"center", gap:14,
                    padding:"14px 14px",
                    borderBottom: i < PROFILE.contacts.length-1 ? `1px solid ${C.divider}` : "none",
                    textDecoration:"none", cursor:"pointer",
                  }}
                >
                  <div style={{
                    width:38, height:38, borderRadius:11,
                    background:C.goldBg, border:`1px solid ${C.cardBorder}`,
                    display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0,
                  }}>
                    <item.Icon size={16} strokeWidth={1.8} color={C.gold} />
                  </div>
                  <div style={{ flex:1, minWidth:0, display:"flex", flexDirection:"column", justifyContent:"center" ,alignItems:"flex-start" }}>
                    <div style={{ fontFamily:"'Inter',sans-serif", fontSize:10, fontWeight:700, color:C.textMuted, textTransform:"uppercase", letterSpacing:"0.08em", marginBottom:2 }}>
                      {item.label}
                    </div>
                    <div style={{ fontFamily:"'Inter',sans-serif", fontSize:13.5, fontWeight:500, color:C.text, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>
                      {item.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div> */}

          {/* ── PAYMENT ── */}
          <div style={{ padding:"4px 20px 28px", borderTop:`1px solid ${C.divider}` }}>
            <SectionLabel>Pay me</SectionLabel>
            <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
              {PROFILE.payments.map(p => (
                <a href={p.link}
                 key={p.id} className="pay-card" style={{
                  underline:"none", textDecoration:"none", color:"inherit",
                  borderRadius:16, overflow:"hidden",
                  border:`1px solid rgba(255,255,255,0.07)`,
                  transition:"all 0.2s",
                }}>
                  {/* Colored top stripe per payment */}
                  <div style={{ height:3, background:`linear-gradient(90deg,${p.gradient[0]},${p.gradient[1]})` }} />

                  <div style={{
                    background:"rgba(0,0,0,0.22)",
                    display:"flex", alignItems:"center", justifyContent:"space-between",
                    padding:"14px 16px",
                  }}>
                    <div style={{ display:"flex", alignItems:"center", gap:12 }}>
                      {/* Logo circle */}
                      <div style={{
                        width:40, height:40, borderRadius:12,
                        background:"white",
                        display:"flex", alignItems:"center", justifyContent:"center",
                        flexShrink:0,
                        overflow:"hidden",
                      }}>
                       <img src={`./${p.icon}.jpeg`} alt={p.label} width={35}  />
                      </div>
                      <div>
                        <div style={{ display:"flex", alignItems:"center", gap:6, marginBottom:2 }}>
                          <span style={{ fontFamily:"'Inter',sans-serif", fontSize:13, fontWeight:700, color:C.text }}>
                            {p.label}
                          </span>
                          <span style={{
                            fontFamily:"'Inter',sans-serif", fontSize:9, fontWeight:700,
                            color:`${p.gradient[0]}`, background:`${p.gradient[0]}22`,
                            border:`1px solid ${p.gradient[0]}44`,
                            padding:"1px 6px", borderRadius:99, letterSpacing:"0.06em",
                          }}>
                            {p.badge}
                          </span>
                        </div>
                        <div style={{ fontFamily:"'Inter',sans-serif", fontSize:13, color:C.textSub, fontWeight:500, textAlign:"start"}}>
                          {p.handle}
                        </div>
                      </div>
                    </div>

                    {/* Copy button */}
                    <button
                      onClick={() => handleCopy(p.id, p.copyValue)}
                      style={{
                        width:36, height:36, borderRadius:10,
                        background:copied===p.id ? `${p.gradient[0]}22` : C.pill,
                        border:`1px solid ${copied===p.id ? p.gradient[0]+"44" : C.pillBorder}`,
                        display:"flex", alignItems:"center", justifyContent:"center",
                        cursor:"pointer", transition:"all 0.2s", flexShrink:0,
                      }}
                      aria-label={`Copy ${p.label}`}
                    >
                      {copied === p.id
                        ? <Check size={14} strokeWidth={2.5} color={p.gradient[0]} />
                        : <Copy size={14} strokeWidth={1.8} color={C.textMuted} />
                      }
                    </button>
                  </div>
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* ── Footer ── */}
        <footer style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:8, padding:"20px 0 0" }}>
          <span style={{ fontFamily:"'Inter',sans-serif", fontSize:11, color:C.textMuted }}>{PROFILE.taps} taps</span>
          <span style={{ color:C.textMuted }}>·</span>
          <span style={{ fontFamily:"'Inter',sans-serif", fontSize:11, color:C.textMuted }}>NFC Powered</span>
          <span style={{ color:C.textMuted }}>·</span>
          <span style={{ fontFamily:"'Inter',sans-serif", fontSize:11, color:C.goldDim }}>Ahmed Abdelelah</span>
        </footer>

      </div>
    </main>
  );
}