import React, { useEffect, useMemo, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Card,
  Button,
  Form,
  FloatingLabel,
  Modal,
  Carousel,
  ProgressBar,
  Stack,
  Offcanvas,
} from "react-bootstrap";
import {
  FiGithub,
  FiExternalLink,
  FiMail,
  FiPhone,
  FiMapPin,
  FiDownload,
  FiArrowUp,
  FiLinkedin,
  FiGlobe,
  FiCalendar,
  FiClock,
  FiBriefcase,
  FiUser,
  FiAward,
  FiTrendingUp,
  FiZap,
  FiUsers,
  FiShield,
  FiLayers,
  FiCheckCircle,
} from "react-icons/fi";
import {
  SiJavascript,
  SiReact,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiMysql,
  SiGit,
  SiGithub as SiGithubLogo,
} from "react-icons/si";
import Galaxy from "./Galaxy";
import Dock from "./components/Dock";
import myLogo from "./assets/logo.png";
import cert1 from "./assets/CCNAv7.jpg";
import cert2 from "./assets/Cybersecurity.jpg";
import cert3 from "./assets/EnglishIT.jpg";
import cert4 from "./assets/Cyberthreat.jpg";
import cert5 from "./assets/Dataanalytics.jpg";
import cert6 from "./assets/ConflictResolution.png";
import cert7 from "./assets/ExcelInAnHour.png";
import cert8 from "./assets/PythonForDataScience.png";
import cert9 from "./assets/PythonForDataAnalysis.png";
import resumepdf from "./assets/Sigua_Resume.pdf";
import myPhoto from "./assets/1X1_Updated.jpg";

const SKILLS = [
  { name: "JavaScript / TypeScript", level: 80 },
  { name: "React & React-Bootstrap", level: 85 },
  { name: "Node.js & Express", level: 70 },
  { name: "Python", level: 75 },
  { name: "SQL / NoSQL", level: 65 },
  { name: "Git & GitHub", level: 85 },
];

const SKILL_ICONS = [
  { label: "JavaScript", Icon: SiJavascript },
  { label: "React", Icon: SiReact },
  { label: "Bootstrap", Icon: SiBootstrap },
  { label: "Node.js", Icon: SiNodedotjs },
  { label: "Express", Icon: SiExpress },
  { label: "Python", Icon: SiPython },
  { label: "MySQL", Icon: SiMysql },
  { label: "Git", Icon: SiGit },
  { label: "GitHub", Icon: SiGithubLogo },
];

/* Certificates */
const CERTIFICATES = [
  {
    title: "CCNAv7: Introduction to Networks",
    issuer: "Cisco Networking Academy Program",
    year: "May 21, 2024",
    image: cert1,
  },
  {
    title: "Cybersecurity Essentials",
    issuer: "Cisco Networking Academy Program",
    year: "September 18, 2024",
    image: cert2,
  },
  {
    title: "English for IT 1",
    issuer: "Cisco Networking Academy Program",
    year: `October 22, 2024`,
    image: cert3,
  },
  {
    title: "Cyber Threat Management",
    issuer: "Cisco Networking Academy Program",
    year: `October 25, 2024`,
    image: cert4,
  },
  {
    title: " Data Analytics Essentials",
    issuer: "Cisco Networking Academy Program",
    year: `October 25, 2024`,
    image: cert5,
  },
  {
    title: "Conflict Resolution for Professionals",
    issuer: "Goskills",
    year: `February 12, 2026`,
    image: cert6,
  },
  {
    title: "Excel in an Hour",
    issuer: "Goskills",
    year: `February 12, 2026`,
    image: cert7,
  },
  {
    title: "Python 101 For Data Science",
    issuer: "Cognitive Class",
    year: `February 14, 2026`,
    image: cert8,
  },
  {
    title: "Python 101 For Data Analysis",
    issuer: "Cognitive Class",
    year: `February 14, 2026`,
    image: cert9,
  },
];

const PROJECTS = [
  {
    title: "FreedFromWalls",
    description:
      "A personal journal app where you can freely log your goals, track what you want to do, and express how you feel — all in one place. Built to give you a space to reflect, plan, and stay in tune with yourself.",
    tags: ["React", "JavaScript", "CSS"],
    repo: "https://github.com/ptrcksg/freedfromwalls.git",
  },
  {
    title: "ArniScore",
    description:
      "Detects valid strikes for Arnis using a Hybrid CNN-LSTM and YOLO model — a computer vision system for sports officiating.",
    tags: ["Python", "YOLO", "CNN", "LSTM", "Computer Vision"],
    repo: "https://github.com/ptrcksg/ArniScore.git",
  },
  {
    title: "BenIbeFl123owers System",
    description:
      "A flower shop management system for BenIbe Flowers handling inventory and orders.",
    tags: ["JavaScript", "MySQL", "Node.js"],
    repo: "https://github.com/ptrcksg/BenIbeFlowers.git",
  },
];

const chunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  );

export default function Portfolio() {
  const [showHire, setShowHire] = useState(false);
  const [showTop, setShowTop] = useState(false);

  const [activeCert, setActiveCert] = useState(null);

  const [submitStatus, setSubmitStatus] = useState("idle");
  const [submitMsg, setSubmitMsg] = useState("");

  useEffect(() => {
    document.documentElement.setAttribute("data-bs-theme", "dark");
  }, []);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const year = useMemo(() => new Date().getFullYear(), []);

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus("loading");
    setSubmitMsg("");

    const form = e.currentTarget;
    const data = {
      name: form.name.value.trim(),
      email: form.email.value.trim(),
      message: form.message.value.trim(),
    };

    if (!data.name || !data.email || !data.message) {
      setSubmitStatus("error");
      setSubmitMsg("Please complete all fields.");
      return;
    }

    try {
      const res = await fetch("https://formspree.io/f/xreobore", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setSubmitStatus("success");
        setSubmitMsg("Thanks! Your message has been sent.");
        form.reset();
      } else {
        const err = await res.json().catch(() => ({}));
        setSubmitStatus("error");
        setSubmitMsg(
          err?.errors?.[0]?.message ||
            "Sorry, something went wrong while sending. Please try again."
        );
      }
    } catch {
      setSubmitStatus("error");
      setSubmitMsg("Network error. Please check your connection and try again.");
    }
  };

  const slides = chunk(SKILL_ICONS, 6);

  return (
    <div style={{ scrollBehavior: "smooth" }}>
      <div className="unreal-layers" aria-hidden>
        <div className="stars" />
        <div className="aurora a1" />
        <div className="aurora a2" />
        <div className="aurora a3" />
        <div className="noise" />
        <svg width="0" height="0">
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </svg>
      </div>

      {/* Styles */}
      <style>{`
        [data-bs-theme='dark']{
          --ink:#F2E9E3; --muted:#CDBDB0;
          --bg-1:#171717; --bg-2:#1f1f1f;
          --brand:#7FB0C2; --brand-2:#F07B71;
          --border:rgba(255,255,255,.14);
        }

        :root{
          --fs-title: 3.0rem;
          --fs-h2: 2.0rem;
          --fs-body: 1rem;
          --fs-lead: 1.125rem;
          --space-section: 3.5rem;
          --hero-min: 560px;
          --radius-card: 20px;
        }

        html, body{ margin:0; padding:0; overflow-x:hidden; }
        body{
          color:var(--ink);
          background: radial-gradient(1200px 700px at 10% -10%, color-mix(in oklab, var(--bg-2) 70%, #000 30%), var(--bg-1));
          text-rendering: optimizeLegibility;
        }

        .container-narrow{ width:min(100%,1120px); margin:0 auto; padding:0 1rem; }
        .muted{ color:var(--muted); }
        .layer-1{ position:relative; z-index:5; }
        .break{ overflow-wrap:anywhere; word-break:break-word; }

        .unreal-layers{ position:fixed; inset:0; pointer-events:none; z-index:0; max-width:100vw; overflow:hidden; }
        .unreal-layers > *{ max-width:100vw; overflow:hidden; }
        .stars{ position:absolute; inset:-10%; opacity:.2;
          background:
            radial-gradient(1px 1px at 20% 30%, #fff90, transparent 2px),
            radial-gradient(1px 1px at 40% 70%, #fff60, transparent 2px),
            radial-gradient(1px 1px at 80% 50%, #fff80, transparent 2px),
            radial-gradient(2px 2px at 60% 20%, #fff50, transparent 3px);
          animation: drift 120s linear infinite;
        }
        .aurora{ position:absolute; width:60vw; height:60vh; filter:blur(80px) saturate(120%); opacity:.35; mix-blend-mode:screen; }
        .a1{ top:-10vh; left:-10vw; background: radial-gradient(45% 45% at 50% 50%, #7FB0C240, transparent 60%); animation: orbit1 40s ease-in-out infinite; }
        .a2{ bottom:-10vh; right:-15vw; background: radial-gradient(45% 45% at 50% 50%, #F07B7140, transparent 60%); animation: orbit2 46s ease-in-out infinite; }
        .a3{ top:30vh; right:10vw; background: radial-gradient(45% 45% at 50% 50%, #9FC3D540, transparent 60%); animation: orbit3 52s ease-in-out infinite; }
        .noise{ position:absolute; inset:0; opacity:.06; background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='220' height='220'><filter id='n'><feTurbulence baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.2'/></svg>"); background-size:200px 200px; mix-blend-mode:overlay; }
        @keyframes drift { to{ transform: translate3d(10px,-10px,0);} }
        @keyframes orbit1 { 50%{ transform: translate3d(8vw,4vh,0) scale(1.05);} }
        @keyframes orbit2 { 50%{ transform: translate3d(-6vw,-3vh,0) scale(1.08);} }
        @keyframes orbit3 { 50%{ transform: translate3d(-4vw,6vh,0) scale(1.03);} }

        .center-nav{
          position: fixed;
          top: calc(env(safe-area-inset-top, 0px));
          left: 0; right: 0;
          z-index: 50;
          display: flex; justify-content: center;
          padding: .5rem 0;
          pointer-events: none;
          --nav-h: 72px;
        }
        .nav-shell{ pointer-events: auto; }

        .nav-shell{
          width:min(960px,92vw);
          border-radius:9999px;
          border:1px solid color-mix(in oklab, var(--ink) 14%, transparent);
          background:
            linear-gradient(180deg, #ffffff0d, #ffffff05),
            radial-gradient(120% 200% at 50% -60%, #ffffff10, transparent 60%),
            #0b0b0b33;
          backdrop-filter: blur(18px) saturate(160%);
          -webkit-backdrop-filter: blur(18px) saturate(160%);
          box-shadow:
            inset 0 1px 0 #ffffff0f,
            0 10px 30px #00000050,
            0 2px 10px #00000040;
          position: relative;
          overflow: hidden;
          max-width:100vw;
        }
        .nav-shell::after{
          content:"";
          position:absolute; inset:0;
          background: linear-gradient(to bottom, #ffffff1a, transparent 40%);
          pointer-events:none; mix-blend-mode:overlay; opacity:.6;
        }
        .nav-shell .navbar-brand,
        .nav-shell .nav-link{ color:var(--ink)!important; }
        .nav-shell .nav-link{ border-radius:9999px; padding:.45rem .8rem; }
        .nav-shell .nav-link:hover{
          color:var(--brand)!important;
          background:#ffffff12; backdrop-filter: blur(4px) saturate(130%);
        }
        .nav-shell.scrolled{
          background:
            linear-gradient(180deg, #ffffff14, #ffffff08),
            radial-gradient(120% 200% at 50% -60%, #ffffff18, transparent 60%),
            #0b0b0b55;
          border-color: color-mix(in oklab, var(--ink) 22%, transparent);
          box-shadow:
            inset 0 1px 0 #ffffff14,
            0 14px 36px #00000066,
            0 3px 12px #00000055;
        }
        .navbar-toggler{ padding:.6rem .8rem; border-width:1px; }

        .brand-logo{
          width: 28px; height: 28px; display:block; object-fit: contain;
          border-radius: 9999px;
          background: #ffffff0d;
          border: 1px solid color-mix(in oklab, var(--ink) 16%, transparent);
          padding: 4px;
        }
        @media (max-width: 767.98px){
          .brand-logo{ width: 24px; height: 24px; padding: 3px; }
        }

        .nav-spacer{ height: calc(var(--nav-h) + 12px); }
        .hero{ padding:0; }
        .section{ padding: var(--space-section) 0; }

        .hero-wrap{ position:relative; min-height: var(--hero-min); isolation:isolate; }
        .hero-bg{ position:absolute; inset:0; z-index:1; mask-image: radial-gradient(120% 120% at 50% 0%, black 55%, transparent 100%); }
        .hero-bg canvas{ display:block; width:100% !important; height:100% !important; max-width:100vw !important; }
        .hero-contents{ position:relative; z-index:2; padding-top:calc(var(--space-section) + 2rem); padding-bottom:2.5rem; }
        .hero-fade{ position:absolute; inset:auto 0 0 0; height:120px; z-index:1;
          background: linear-gradient(to bottom, transparent, color-mix(in oklab, var(--bg-1) 92%, #000 8%));
        }

        .unreal-title{
          font-size: 32px;
          line-height:1.08; letter-spacing:.01em; color: var(--ink); font-weight: 800;
        }
        .unreal-title::after, .sparkle::after{ content:none; }
        .ink-underline{ position:relative; display:inline-block; }
        .ink-underline::after{
          content:""; position:absolute; left:0; right:0; bottom:-2px; height:2px;
          background: currentColor; opacity:.25; border-radius:2px;
        }
        .lead{ font-size: var(--fs-lead); }

        .glass-card, .hero-card{
          background: color-mix(in oklab, var(--bg-2) 55%, #222 45%);
          border:1px solid var(--border); border-radius: var(--radius-card);
          box-shadow: 0 1px 0 rgba(255,255,255,.06) inset, 0 20px 60px rgba(0,0,0,.4);
          transition: transform .18s ease, box-shadow .3s ease;
          overflow:hidden;
        }
        .glass-card:hover, .hero-card:hover{ transform: translateY(-2px); box-shadow: 0 1px 0 rgba(255,255,255,.06) inset, 0 30px 80px rgba(0,0,0,.55); }

        .u-btn, .u-outline{ min-height:44px; }
        .u-btn{
          --b1: var(--brand); --b2: var(--brand-2);
          border:none; color:#0b0b0b !important; font-weight:700; letter-spacing:.02em;
          background: linear-gradient(135deg, var(--b1), var(--b2));
          border-radius: 9999px; padding:.65rem 1rem;
          box-shadow: 0 8px 22px rgba(0,0,0,.35);
        }
        .u-outline{
          color: var(--brand)!important; background: transparent; border:2px solid currentColor;
          border-radius:9999px; padding:.6rem 1rem; font-weight:700;
        }

        a.ink-link{ color:var(--ink); text-decoration:none; position:relative; font-weight:600; }
        a.ink-link::after{ content:""; position:absolute; left:0; right:100%; bottom:-3px; height:2px; background: currentColor; transition:right .25s ease; opacity:.35; }
        a.ink-link:hover::after{ right:0; }

        .chip{ padding:.35rem .6rem; border-radius:9999px; border:1px solid var(--border); font-size:.8rem; color: var(--ink); background:#15151599; }
        .border-top{ border-color:var(--border)!important; }

        .carousel{ overflow:hidden; }
        .carousel-control-prev, .carousel-control-next { width: 12%; }
        .carousel-control-prev-icon, .carousel-control-next-icon { filter: invert(1) opacity(.85); }

        .tech-strip{
          background: color-mix(in oklab, var(--bg-2) 55%, #222 45%);
          border:1px solid var(--border);
          border-radius: 20px;
          box-shadow: 0 1px 0 rgba(255,255,255,.06) inset, 0 20px 60px rgba(0,0,0,.4);
        }
        .tech-grid{
          display:flex; flex-wrap:wrap; justify-content:center; align-items:center; gap:1.25rem;
          padding: 1.25rem;
        }
        .tech-item{
          display:flex; flex-direction:column; align-items:center; justify-content:center;
          width: clamp(88px, 18vw, 140px);
          height: clamp(72px, 14vw, 110px);
          border-radius:16px;
          border:1px solid var(--border);
          background:#0b0b0b22;
          transition: transform .15s ease, box-shadow .2s ease, background .2s ease, filter .2s ease;
        }
        .tech-item:hover{
          transform: translateY(-2px);
          background:#ffffff10;
          box-shadow: 0 10px 26px rgba(0,0,0,.35);
        }
        .tech-icon{ font-size: clamp(28px, 6.2vw, 42px); filter: grayscale(.2) contrast(1.1) brightness(1.05); }
        .tech-label{ margin-top: .4rem; font-size: .85rem; color: var(--muted); text-align:center; }

        @media (max-width: 991.98px){
          :root{
            --fs-title: 2.4rem; --fs-h2: 1.6rem; --fs-body: .975rem; --fs-lead: 1.05rem;
            --space-section: 3rem; --hero-min: 560px; --radius-card: 18px;
          }
          .center-nav{ --nav-h: 64px; }
          .container-narrow{ padding: 0 0.875rem; }
          .nav-shell{ width:min(100%, 96vw); }
          .hero-contents{ padding-top: calc(var(--space-section) + 1.5rem); }
          .actions{ gap:.6rem !important; }
          .carousel-control-prev, .carousel-control-next { width: 14%; }
        }

        @media (max-width: 767.98px){
          :root{
            --fs-title: 2rem; --fs-h2: 1.35rem; --fs-body: .95rem; --fs-lead: 1rem;
            --space-section: 2.5rem; --hero-min: 520px; --radius-card: 16px;
          }
          .center-nav{ --nav-h: 56px; }
          body{ line-height:1.5; }
          .container-narrow{ padding: 0 0.75rem; }
          .nav-shell{ border-radius:16px; }
          .hero-card{ margin-top:.25rem; }
          .chip{ font-size:.75rem; }
          .actions{ gap:.5rem !important; }
          .actions > *{ flex:1 1 100%; width:100%; }
          .carousel-control-prev, .carousel-control-next { width: 18%; }
        }

        .back-to-top{
          position:fixed; right:16px;
          bottom: calc(16px + env(safe-area-inset-bottom));
          border-radius:9999px; z-index:40;
        }

        .container-narrow > .row{
          --bs-gutter-x: 1.5rem;
          margin-left: calc(var(--bs-gutter-x) * -0.5);
          margin-right: calc(var(--bs-gutter-x) * -0.5);
        }
        .container-narrow{
          padding-left: max(0.75rem, calc(var(--bs-gutter-x) * 0.5));
          padding-right: max(0.75rem, calc(var(--bs-gutter-x) * 0.5));
        }

        .avatar{
          width:120px; height:120px; border-radius:9999px; object-fit:cover; display:block;
          border:1px solid var(--border);
          background:#0b0b0b22;
        }
      `}</style>

      {/* NAVBAR */}
      <div className="center-nav">
        <div className={`nav-shell border rounded-pill shadow-sm ${showTop ? "scrolled" : ""}`}>
          <Navbar expand="md" className="rounded-pill px-2">
            <Container fluid className="px-2">
              <Navbar.Brand href="#top" className="fw-semibold d-flex align-items-center gap-2">
                <img src={myLogo} alt="Logo" className="brand-logo" />
                <span>Portfolio</span>
              </Navbar.Brand>
              <Navbar.Toggle className="ms-auto" />
              <Navbar.Collapse>
                <Nav className="ms-auto align-items-center gap-2">
                  <Nav.Link href="#about">About</Nav.Link>
                  <Nav.Link href="#projects">Projects</Nav.Link>
                  <Nav.Link href="#resume">Resume</Nav.Link>
                  <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </div>

      <div className="nav-spacer" aria-hidden />

      {/* HERO */}
      <header id="top" className="hero layer-1">
        <div className="hero-wrap">
          <Galaxy
            className="hero-bg"
            mouseRepulsion={true}
            mouseInteraction={true}
            density={1.3}
            glowIntensity={0.55}
            saturation={0.8}
            hueShift={205}
            speed={1.0}
            twinkleIntensity={0.35}
            rotationSpeed={0.06}
            transparent={true}
          />

          <div className="hero-contents">
            <div className="container-narrow">
              <Row className="g-4 align-items-center">
                <Col lg={7}>
                  <div className="chip mb-3" style={{ borderColor: "transparent" }}>
                    <span>OJT-Ready</span> <span className="muted">Computer Science · React</span>
                  </div>
                  <h1 className="unreal-title">Hi! I am <span className="ink-underline">Patrick Gabriel Sigua</span></h1>
                  <p className="lead mt-3 muted">
                    A 4th-year CS student who turns ideas into clean, usable interfaces.
                    Open to internship / On-the-Job-Training roles.
                  </p>
                  <Stack direction="horizontal" gap={2} className="actions flex-wrap mt-3">
                    <button onClick={() => setShowHire(true)} className="u-btn">Hire Me</button>
                    <a className="u-outline" href="#resume">See Resume</a>
                    <a className="u-outline" href="#contact"><FiExternalLink className="me-2" />Contact</a>
                  </Stack>

                  <div className="d-flex gap-2 mt-4 flex-wrap">
                    <span className="chip">React / Node focus</span>
                    <span className="chip">Loves UX details</span>
                  </div>
                </Col>

                <Col lg={5}>
                  <div className="hero-card p-3 p-md-4">
                    <div className="d-flex align-items-center gap-3">
                      {/* Pic */}
                      <img
                        src={myPhoto}
                        alt="Patrick Sigua"
                        className="avatar"
                        width={64}
                        height={64}
                      />
                      <div>
                        <div className="fw-semibold">Patrick Gabriel T. Sigua</div>
                        <div className="small muted">Computer Science</div>
                      </div>
                    </div>
                    <hr className="border-secondary-subtle" />
                    <div className="small d-grid gap-2">
                      <span className="d-flex align-items-center gap-2"><FiMapPin /> Based in: <strong>Angeles City, Pampanga</strong></span>
                      <span className="d-flex align-items-center gap-2"><FiMail /> <a className="ink-link break" href="mailto:patricksigua007@gmail.com">patricksigua007@gmail.com</a></span>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>

          <div className="hero-fade" aria-hidden />
        </div>
      </header>

      {/* SKILLS CAROUSEL */}
      <section className="section pt-4 layer-1" aria-label="Skills Logos">
        <div className="container-narrow">
          <div className="tech-strip">
            <Carousel
              controls={false}
              indicators={false}
              interval={2200}
              pause={false}
              wrap
              touch
              keyboard={false}
              fade={false}
            >
              {slides.map((group, idx) => (
                <Carousel.Item key={idx}>
                  <div className="tech-grid">
                    {group.map(({ label, Icon }) => (
                      <div className="tech-item" key={label} title={label} aria-label={label}>
                        <Icon className="tech-icon" />
                        <small className="tech-label">{label}</small>
                      </div>
                    ))}
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section layer-1">
        <div className="container-narrow">
          <h2 className="unreal-title mb-4" style={{ fontSize: "var(--fs-h2)" }}>
            Projects
          </h2>
          <Row className="g-4">
            {PROJECTS.map((p) => (
              <Col md={4} key={p.title}>
                <Card className="glass-card h-100">
                  <Card.Body className="p-4 d-flex flex-column gap-3">
                    <div>
                      <h5 className="fw-semibold mb-1">{p.title}</h5>
                      <p className="muted small mb-0">{p.description}</p>
                    </div>
                    <div className="d-flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span key={t} className="chip">{t}</span>
                      ))}
                    </div>
                    <div className="mt-auto">
                      
                      <a  href={p.repo}
                        target="_blank"
                        rel="noreferrer"
                        className="u-outline d-inline-flex align-items-center gap-2"
                        style={{ fontSize: ".875rem" }}
                      >
                        <FiGithub /> View Repo
                      </a>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      {/* ABOUT tsaka SKILLS */}
      <section id="about" className="section layer-1">
        <div className="container-narrow">
          <Row className="g-4">
            <Col lg={6}>
              <Card className="glass-card h-100 p-1">
                <Card.Body className="p-4 p-md-5">
                  <h2 className="unreal-title" style={{ fontSize: "var(--fs-h2)" }}>About</h2>
                  <p className="muted">
                    I enjoy solving problems with code and designing intuitive UI. I’m comfortable with Agile,
                    Git, and code reviews—and I’m eager to learn from mentors during OJT.
                  </p>

                  <div className="small d-grid gap-2 mt-3">
                    <div className="d-flex align-items-center gap-2">
                      <span className="chip">🎯 Goal-oriented</span>
                      <span className="chip">🧩 Team player</span>
                      <span className="chip">🧪 Test-minded</span>
                    </div>
                    <div className="d-flex align-items-center gap-2 flex-wrap">
                      <span className="chip">⌛ Meets deadlines</span>
                      <span className="chip">🧠 Problem-solving</span>
                      <span className="chip">🧭 Detail-oriented</span>
                    </div>
                  </div>

                  <Row className="g-3 mt-3">
                    <Col sm={6}>
                      <h6 className="ink-underline m-0">Education</h6>
                      <small className="muted d-block">BS Computer Science</small>
                      <small className="muted d-block">Holy Angel University</small>
                      <small className="muted">2022 — {year}</small>
                    </Col>
                    <Col sm={6}>
                      <h6 className="ink-underline m-0">Strengths</h6>
                      <ul className="m-0 mt-1 muted small">
                        <li>Clean, readable code</li>
                        <li>UX-first mindset</li>
                        <li>Good communicator</li>
                      </ul>
                    </Col>
                  </Row>

                  <div className="d-flex gap-2 flex-wrap mt-3">
                    {["Accessibility", "Responsiveness", "Performance", "DX / Tooling"].map((c) => (
                      <span key={c} className="chip">{c}</span>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={6}>
              <Card className="glass-card h-100 p-1">
                <Card.Body className="p-4 p-md-5">
                  <h2 className="unreal-title" style={{ fontSize: "var(--fs-h2)" }}>Skills</h2>
                  <div className="d-grid gap-3">
                    {SKILLS.map((s) => (
                      <div key={s.name}>
                        <div className="d-flex justify-content-between small mb-1">
                          <span className="ink-underline">{s.name}</span><span>{s.level}%</span>
                        </div>
                        <ProgressBar now={s.level} style={{"--bs-progress-bar-bg":"var(--brand)"}} />
                      </div>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </section>

      {/* RESUME */}
      <section id="resume" className="section layer-1">
        <div className="container-narrow">
          <Row className="g-4">
            <Col md={7}>
              <Card className="glass-card h-100">
                <Card.Body className="p-4 p-md-5">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <h2 className="unreal-title" style={{ fontSize: "var(--fs-h2)" }}>Resume</h2>
                    <a className="u-outline" href={resumepdf} download><FiDownload className="me-2" />Download PDF</a>
                  </div>

                  {/* Certificates list */}
                  <div className="position-relative">
                    <h5 className="fw-semibold mb-3">Certificates</h5>
                    <div className="d-grid gap-3">
                      {CERTIFICATES.map((c) => (
                        <div key={c.title}>
                          <button
                            type="button"
                            className="as-link ink-underline m-0"
                            onClick={() => setActiveCert(c)}
                            aria-label={`Open certificate: ${c.title}`}
                            title="Click to view certificate"
                          >
                            <h6 className="m-0">{c.title}</h6>
                          </button>
                          <small className="muted d-block">{c.issuer} • {c.year}</small>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col md={5}>
              <Card className="glass-card h-100">
                <Card.Body className="p-4 p-md-5">
                  <h5 className="fw-semibold">Quick Info</h5>

                  <div className="mt-3 d-grid gap-2 small">
                    <span className="d-flex align-items-center gap-2">
                      <FiMapPin /> Based in: <strong>Angeles City, Pampanga</strong>
                    </span>
                    <span className="d-flex align-items-center gap-2">
                      <FiPhone /> Phone: <a className="ink-link" href="tel:+639055549979">+63 905 554 9979</a>
                    </span>
                    <span className="d-flex align-items-center gap-2">
                      <FiMail /> Email: <a className="ink-link break" href="mailto:patricksigua007@gmail.com">patricksigua007@gmail.com</a>
                    </span>

                    <span className="d-flex align-items-center gap-2">
                      <FiCalendar /> Availability: <strong>Available Starting June 2026</strong>
                    </span>
                    <span className="d-flex align-items-center gap-2">
                      <FiClock /> Timezone: <strong>Asia/Manila (UTC+8)</strong>
                    </span>

                    <span className="d-flex align-items-center gap-2">
                      <FiUser /> Languages: <strong>English, Filipino</strong>
                    </span>

                    <span className="d-flex align-items-center gap-2">
                      <FiGlobe /> Website:{" "}
                      <a className="ink-link break" href="#top">https://sigua-portfolio.vercel.app/</a>
                    </span>
                    <span className="d-flex align-items-center gap-2">
                      <FiGithub /> GitHub:{" "}
                      <a className="ink-link break" href="https://github.com/ptrcksg" target="_blank" rel="noreferrer">
                        ptrcksg <FiExternalLink />
                      </a>
                    </span>
                    <span className="d-flex align-items-center gap-2">
                      <FiLinkedin /> LinkedIn:{" "}
                      <a className="ink-link break" href="https://www.linkedin.com/in/patrick-gabriel-sigua-8a4b15349/" target="_blank" rel="noreferrer">
                        patrick-gabriel-sigua-8a4b15349 <FiExternalLink />
                      </a>
                    </span>
                  </div>

                  <hr />
                  <h6 className="text-uppercase muted">Tech Stack</h6>
                  <div className="d-flex flex-wrap gap-2">
                    {["HTML", "CSS", "JavaScript", "React", "Bootstrap", "Node.js", "Python"].map((t) => (
                      <span key={t} className="chip">{t}</span>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </section>

      {/* CTA */}
      <section className="section layer-1">
        <div className="container-narrow">
          <Card className="glass-card">
            <Card.Body className="p-4 p-md-5 d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3">
              <div>
                <h3 className="unreal-title" style={{ fontSize: "calc(var(--fs-h2) - .25rem)" }}>
                  Open to OJT / internship opportunities
                </h3>
                <div className="muted">Let’s talk about how I can help your team ship faster.</div>
              </div>
              <div className="text-md-end">
                <a className="u-btn me-2" href="#contact">Contact Me</a>
                <a className="u-outline" href={resumepdf}><FiDownload className="me-1" />Resume</a>
              </div>
            </Card.Body>
          </Card>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section layer-1">
        <div className="container-narrow">
          <Row className="g-4">
            <Col lg={6}>
              <Card className="glass-card h-100">
                <Card.Body className="p-4 p-md-5">
                  <h2 className="unreal-title" style={{ fontSize: "var(--fs-h2)" }}>Contact</h2>
                  <p className="muted">Looking for OJT / internship opportunities. Send me a message — I’ll reply as soon as I can.</p>

                  <Form onSubmit={handleContactSubmit} className="mt-3" noValidate>
                    <Row className="g-3">
                      <Col md={6}>
                        <FloatingLabel controlId="name" label="Your name">
                          <Form.Control type="text" name="name" placeholder="Lance Cabe" required />
                        </FloatingLabel>
                      </Col>
                      <Col md={6}>
                        <FloatingLabel controlId="email" label="Email address">
                          <Form.Control type="email" name="email" placeholder="cabelance@email.com" required />
                        </FloatingLabel>
                      </Col>
                      <Col xs={12}>
                        <FloatingLabel controlId="message" label="Your message">
                          <Form.Control as="textarea" name="message" placeholder="Hi! I'm interested in..." style={{ height: 140 }} required />
                        </FloatingLabel>
                      </Col>

                      <Col xs={12}>
                        {submitStatus === "success" && (
                          <div className="alert alert-success mb-0" role="alert">
                            {submitMsg || "Thanks! Your message has been sent."}
                          </div>
                        )}
                        {submitStatus === "error" && (
                          <div className="alert alert-danger mb-0" role="alert">
                            {submitMsg || "Something went wrong. Please try again."}
                          </div>
                        )}
                      </Col>

                      <Col xs={12}>
                        <button
                          type="submit"
                          className="u-btn w-100"
                          disabled={submitStatus === "loading"}
                        >
                          {submitStatus === "loading" ? "Sending..." : "Send Message"}
                        </button>
                      </Col>
                    </Row>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={6}>
              <Card className="glass-card h-100">
                <Card.Body className="p-4 p-md-5">
                  <h5 className="fw-semibold">Why me?</h5>

                  <div className="d-flex flex-wrap gap-2 mt-2">
                    <span className="chip d-inline-flex align-items-center gap-1">
                      <FiZap /> Learns fast
                    </span>
                    <span className="chip d-inline-flex align-items-center gap-1">
                      <FiShield /> Reliable
                    </span>
                    <span className="chip d-inline-flex align-items-center gap-1">
                      <FiUsers /> Team player
                    </span>
                    <span className="chip d-inline-flex align-items-center gap-1">
                      <FiLayers /> Clean code
                    </span>
                  </div>

                  <ul className="mt-3 mb-0 muted small">
                    <li className="mb-1 d-flex align-items-start gap-2">
                      <FiAward className="mt-1" />
                      Delivered UI features with accessibility in mind (semantic HTML, keyboard focus, color contrast).
                    </li>
                    <li className="mb-1 d-flex align-items-start gap-2">
                      <FiTrendingUp className="mt-1" />
                      Optimized React components (memoization + lighter renders) for smoother UX on mobile devices.
                    </li>
                    <li className="mb-1 d-flex align-items-start gap-2">
                      <FiShield className="mt-1" />
                      Comfortable with Git flow and code reviews; keeps branches tidy and changes well-scoped.
                    </li>
                  </ul>

                  <hr className="my-3" />

                  <h6 className="fw-semibold mb-2">How I work</h6>
                  <ul className="mt-0 mb-0 muted small">
                    <li className="mb-1 d-flex align-items-start gap-2">
                      <FiCheckCircle className="mt-1" />
                      Communicate early, ask clarifying questions, and document decisions.
                    </li>
                    <li className="mb-1 d-flex align-items-start gap-2">
                      <FiCheckCircle className="mt-1" />
                      Break tasks into small deliverables; ship iteratively with visible progress.
                    </li>
                    <li className="mb-1 d-flex align-items-start gap-2">
                      <FiCheckCircle className="mt-1" />
                      Prioritize usability, performance, and responsive behavior across devices.
                    </li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-4 border-top layer-1">
        <div className="container-narrow d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-2">
          <div className="small muted">© {year} Patrick Sigua — All rights reserved.</div>
          <div className="d-flex align-items-center gap-3">
            <a className="ink-link small d-flex align-items-center gap-1" href="mailto:patricksigua007@gmail.com"><FiMail /> Email</a>
            <a className="ink-link small d-flex align-items-center gap-1" href="https://github.com/cspatrick-hau"><FiGithub /> GitHub</a>
            <a className="ink-link small d-flex align-items-center gap-1" href="https://www.linkedin.com/in/patrick-sigua-8a4b15349/"><FiLinkedin /> LinkedIn</a>
          </div>
        </div>
      </footer>

      {/* Modal para hire tabalu */}
      <Modal show={showHire} onHide={() => setShowHire(false)} centered>
        <Modal.Header closeButton><Modal.Title>Hire Me for OJT</Modal.Title></Modal.Header>
        <Modal.Body>
          <p className="text-secondary">
            Thanks for your interest! You can reach me at
            <br />
            <a href="mailto:patricksigua007@gmail.com">patricksigua007@gmail.com</a> or call <a href="tel:+639055549979">+63 905 554 9979</a>.
          </p>
          <div className="d-flex gap-2">
            <a className="u-btn" href="#resume" onClick={() => setShowHire(false)}>View Resume</a>
            <a className="u-outline" href="#contact" onClick={() => setShowHire(false)}>Contact</a>
          </div>
        </Modal.Body>
      </Modal>

      {/* Modal para Certi */}
      <Modal show={!!activeCert} onHide={() => setActiveCert(null)} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title className="small">
            {activeCert?.title}
            <div className="text-secondary fw-normal small">
              {activeCert?.issuer} • {activeCert?.year}
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-0">
          {activeCert && (
            <img
              src={activeCert.image}
              alt={`${activeCert.title} certificate`}
              className="img-fluid w-100"
              style={{ display: "block", borderRadius: "0 0 .5rem .5rem" }}
            />
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
}
