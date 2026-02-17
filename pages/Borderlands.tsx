import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight, Skull, Brain, Coins, AlertTriangle, Crown, Sparkles, Shield, MapPin, Calendar, Clock } from 'lucide-react';

/* ─────────────────────────────────────────────
   CONSTANTS
   ───────────────────────────────────────────── */
const ACCENT = { // Red / crimson palette
    primary: '#dc2626',
    dark: '#991b1b',
    mid: '#b91c1c',
    glow: 'rgba(220,38,38,0.35)',
    glowStrong: 'rgba(220,38,38,0.55)',
    bg10: 'rgba(220,38,38,0.1)',
    bg20: 'rgba(220,38,38,0.2)',
    border20: 'rgba(220,38,38,0.2)',
    border40: 'rgba(220,38,38,0.4)',
};

const REGISTRATION_URL = 'https://forms.gle/EokRQhkqS3Q39myo7';

// Feb 27 2026 10:00 AM IST (UTC+5:30) → UTC = 04:30
const EVENT_DATE = new Date('2026-02-27T10:00:00+05:30').getTime();

/* ─────────────────────────────────────────────
   REUSABLE SUB-COMPONENTS
   ───────────────────────────────────────────── */

const SectionTitle: React.FC<{ tag?: string; title: string; subtitle?: string }> = ({ tag, title, subtitle }) => (
    <div className="text-center mb-16">
        {tag && (
            <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] mb-4"
                style={{ background: ACCENT.bg10, color: ACCENT.primary, border: `1px solid ${ACCENT.border20}` }}>
                {tag}
            </span>
        )}
        <h2 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500 tracking-tight">
            {title}
        </h2>
        {subtitle && <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">{subtitle}</p>}
    </div>
);

const GlowCard: React.FC<{ children: React.ReactNode; className?: string; accent?: string }> = ({ children, className = '', accent }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [transform, setTransform] = useState('perspective(600px) rotateX(0deg) rotateY(0deg)');

    const handleMouse = (e: React.MouseEvent) => {
        const el = cardRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const rotY = ((x / rect.width) - 0.5) * 14;
        const rotX = ((y / rect.height) - 0.5) * -14;
        setTransform(`perspective(600px) rotateX(${rotX}deg) rotateY(${rotY}deg)`);
    };

    const reset = () => setTransform('perspective(600px) rotateX(0deg) rotateY(0deg)');

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            className={`relative rounded-2xl border bg-[#0d0f0d]/80 backdrop-blur-xl p-6 transition-all duration-300 ${className}`}
            style={{
                transform,
                borderColor: accent ? `${accent}33` : 'rgba(255,255,255,0.1)',
                willChange: 'transform',
            }}
        >
            {children}
        </div>
    );
};

const TokenBadge: React.FC<{ value: string; positive?: boolean }> = ({ value, positive = true }) => (
    <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold border ${positive ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 'bg-red-500/10 text-red-400 border-red-500/20'}`}>
        <Coins size={12} />
        {value}
    </span>
);

const TimelineItem: React.FC<{ phase: string; title: string; desc: string; isLast?: boolean }> = ({ phase, title, desc, isLast = false }) => (
    <div className="relative flex gap-6">
        <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold z-10"
                style={{ background: ACCENT.bg20, border: `2px solid ${ACCENT.primary}`, color: ACCENT.primary, boxShadow: `0 0 15px ${ACCENT.glow}` }}>
                {phase}
            </div>
            {!isLast && (
                <div className="w-0.5 flex-grow mt-2" style={{ background: `linear-gradient(to bottom, ${ACCENT.border40}, transparent)` }} />
            )}
        </div>
        <div className="pb-12">
            <h4 className="text-white font-bold text-lg mb-1">{title}</h4>
            <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
        </div>
    </div>
);

/* ─────────────────────────────────────────────
   COUNTDOWN TIMER
   ───────────────────────────────────────────── */

const CountdownTimer: React.FC = () => {
    const [timeLeft, setTimeLeft] = useState({ d: 0, h: 0, m: 0, s: 0 });

    useEffect(() => {
        const tick = () => {
            const diff = Math.max(0, EVENT_DATE - Date.now());
            setTimeLeft({
                d: Math.floor(diff / 86400000),
                h: Math.floor((diff % 86400000) / 3600000),
                m: Math.floor((diff % 3600000) / 60000),
                s: Math.floor((diff % 60000) / 1000),
            });
        };
        tick();
        const id = setInterval(tick, 1000);
        return () => clearInterval(id);
    }, []);

    const blocks = [
        { label: 'Days', value: timeLeft.d },
        { label: 'Hours', value: timeLeft.h },
        { label: 'Minutes', value: timeLeft.m },
        { label: 'Seconds', value: timeLeft.s },
    ];

    return (
        <div className="flex gap-3 md:gap-4">
            {blocks.map((b) => (
                <div key={b.label} className="flex flex-col items-center">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-black/60 backdrop-blur-sm flex items-center justify-center"
                        style={{ border: `1px solid ${ACCENT.border20}`, boxShadow: `0 0 20px ${ACCENT.glow}` }}>
                        <span className="text-2xl md:text-3xl font-extrabold text-white font-mono tabular-nums">
                            {String(b.value).padStart(2, '0')}
                        </span>
                    </div>
                    <span className="mt-2 text-[10px] uppercase tracking-widest text-gray-500">{b.label}</span>
                </div>
            ))}
        </div>
    );
};

/* ─────────────────────────────────────────────
   FLOATING PARTICLES
   ───────────────────────────────────────────── */

const Particles: React.FC = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {Array.from({ length: 30 }).map((_, i) => (
            <div
                key={i}
                className="particle absolute rounded-full"
                style={{
                    width: `${2 + Math.random() * 4}px`,
                    height: `${2 + Math.random() * 4}px`,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    backgroundColor: `rgba(220,38,38,${0.2 + Math.random() * 0.2})`,
                    animationDelay: `${Math.random() * 8}s`,
                    animationDuration: `${6 + Math.random() * 10}s`,
                }}
            />
        ))}
    </div>
);

/* ─────────────────────────────────────────────
   3D CARD SUIT ICONS (Hearts & Spades)
   ───────────────────────────────────────────── */

const FloatingCardSuit: React.FC<{ suit: '♥' | '♠'; className?: string }> = ({ suit, className = '' }) => (
    <div className={`card-3d absolute pointer-events-none select-none ${className}`} aria-hidden="true">
        <div className="card-3d-inner">
            <div className="w-20 h-28 md:w-24 md:h-32 rounded-xl border flex items-center justify-center text-4xl md:text-5xl font-bold"
                style={{
                    background: 'rgba(10,12,10,0.6)',
                    borderColor: suit === '♥' ? ACCENT.border20 : 'rgba(255,255,255,0.1)',
                    color: suit === '♥' ? ACCENT.primary : '#94a3b8',
                    boxShadow: suit === '♥' ? `0 0 30px ${ACCENT.glow}` : '0 0 30px rgba(148,163,184,0.1)',
                    backdropFilter: 'blur(8px)',
                }}>
                {suit}
            </div>
        </div>
    </div>
);

/* ─────────────────────────────────────────────
   MAIN PAGE COMPONENT
   ───────────────────────────────────────────── */

const BorderlandsPage: React.FC = () => {
    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="relative overflow-hidden bg-background text-gray-100 selection:bg-red-600 selection:text-white">
            {/* Noise overlay */}
            <div className="noise-bg fixed inset-0 pointer-events-none z-[1]" aria-hidden="true" />

            {/* ============================
          SECTION 1 — HERO
          ============================ */}
            <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 py-32 overflow-hidden">
                {/* Background video */}
                <video
                    autoPlay muted loop playsInline
                    className="absolute inset-0 w-full h-full object-cover opacity-30"
                    poster=""
                >
                    <source src="/videos/borderland-bg.mp4" type="video/mp4" />
                </video>

                {/* Fallback dark gradient mesh */}
                <div className="absolute inset-0" style={{ background: 'radial-gradient(at 20% 30%, rgba(220,38,38,0.08) 0, transparent 50%), radial-gradient(at 80% 70%, rgba(220,38,38,0.06) 0, transparent 50%)' }} />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-background" />
                <Particles />

                {/* Radial glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[120px]"
                    style={{ background: 'rgba(220,38,38,0.06)' }} aria-hidden="true" />

                {/* Floating card suits */}
                <FloatingCardSuit suit="♥" className="top-[15%] left-[8%] md:left-[12%] rotate-[-15deg]" />
                <FloatingCardSuit suit="♠" className="top-[20%] right-[8%] md:right-[12%] rotate-[12deg]" />
                <FloatingCardSuit suit="♥" className="bottom-[20%] right-[15%] rotate-[-8deg] hidden md:block" />
                <FloatingCardSuit suit="♠" className="bottom-[25%] left-[10%] rotate-[20deg] hidden md:block" />

                <div className="relative z-10 max-w-4xl mx-auto animate-fade-in-up">
                    <div className="mb-6">
                        <span className="inline-block px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.3em] mb-6"
                            style={{ background: ACCENT.bg10, color: ACCENT.primary, border: `1px solid ${ACCENT.border20}` }}>
                            GFG VIT Bhopal × Advitya Presents
                        </span>
                    </div>

                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white borderland-glow leading-[0.9]">
                        BORDERLAND
                    </h1>
                    <p className="mt-4 text-xl md:text-2xl font-light tracking-wide" style={{ color: ACCENT.primary }}>
                        Survive the Chaos.
                    </p>

                    <p className="mt-8 text-lg md:text-xl text-gray-300 font-medium">
                        40 Minutes. Infinite Pressure. One Winning Team.
                    </p>

                    <div className="mt-4 flex flex-wrap justify-center gap-4 text-sm text-gray-400">
                        <span className="flex items-center gap-1.5"><Calendar size={14} /> Feb 27, 2026</span>
                        <span className="flex items-center gap-1.5"><Clock size={14} /> 10:00 AM – 3:00 PM</span>
                        <span className="flex items-center gap-1.5"><MapPin size={14} /> AB 1 - 303</span>
                    </div>

                    <div className="mt-6 max-w-md mx-auto">
                        <p className="text-gray-500 text-sm md:text-base italic leading-relaxed">
                            You don't win by strength.<br />
                            You win by <span className="font-semibold" style={{ color: ACCENT.primary }}>trust</span>. <span className="text-white font-semibold">Betrayal</span>. <span className="text-gray-300 font-semibold">Adaptation</span>.
                        </p>
                    </div>

                    {/* CTA Buttons */}
                    <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={() => scrollTo('what')}
                            className="group relative px-8 py-3.5 text-white font-bold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105"
                            style={{ background: ACCENT.primary, boxShadow: `0 0 30px ${ACCENT.glow}` }}
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Enter the Chaos <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </span>
                        </button>
                        <a
                            href={REGISTRATION_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-3.5 font-bold rounded-xl backdrop-blur-sm transition-all duration-300 hover:scale-105"
                            style={{ border: `1px solid ${ACCENT.border40}`, color: ACCENT.primary }}
                        >
                            Register Now
                        </a>
                    </div>

                    {/* Countdown */}
                    <div className="mt-14">
                        <p className="text-[10px] uppercase tracking-[0.3em] text-gray-600 mb-4">Event Begins In</p>
                        <div className="flex justify-center">
                            <CountdownTimer />
                        </div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
                    <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1.5">
                        <div className="w-1.5 h-2.5 rounded-full animate-pulse-glow" style={{ background: ACCENT.primary }} />
                    </div>
                </div>
            </section>

            {/* ============================
          SECTION 2 — WHAT IS BORDERLAND
          ============================ */}
            <section id="what" className="relative py-24 md:py-32 px-4">
                <div className="max-w-5xl mx-auto">
                    <SectionTitle tag="The Experience" title="What Is This Game?" />

                    <div className="max-w-3xl mx-auto">
                        <p className="text-gray-300 text-lg leading-relaxed text-center mb-12">
                            <strong className="text-white">Borderland: Survive the Chaos</strong> is a 40–45 minute live survival experience where teams compete under constantly changing chaos rules while playing <span className="font-medium" style={{ color: ACCENT.primary }}>psychological</span> and <span className="text-white font-medium">logical</span> games to earn tokens.
                        </p>

                        {/* Core idea card */}
                        <GlowCard className="text-center relative overflow-hidden" accent={ACCENT.primary}>
                            <div className="absolute inset-0 pointer-events-none" style={{ background: `linear-gradient(135deg, ${ACCENT.bg10} 0%, transparent 50%, ${ACCENT.bg10} 100%)` }} />
                            <div className="relative z-10 space-y-3 py-4">
                                {['Survive chaos.', 'Choose your battles.', 'Protect your team.', 'Finish with the most tokens.'].map((line, i) => (
                                    <p key={i} className="text-xl md:text-2xl font-bold text-white tracking-tight">
                                        {line}
                                    </p>
                                ))}
                            </div>
                            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                                <div className="scan-line absolute left-0 right-0 h-px" style={{ background: `${ACCENT.primary}33` }} />
                            </div>
                        </GlowCard>
                    </div>
                </div>
            </section>

            {/* ============================
          SECTION 3 — 3 LAYERS SYSTEM
          ============================ */}
            <section id="layers" className="relative py-24 md:py-32 px-4">
                <div className="max-w-6xl mx-auto">
                    <SectionTitle tag="Core Mechanics" title="The 3 Layers" subtitle="Every moment in Borderland operates across three interconnected systems." />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Layer 1 — Chaos Room */}
                        <GlowCard accent={ACCENT.primary}>
                            <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl" style={{ background: `linear-gradient(to right, ${ACCENT.primary}, ${ACCENT.dark})` }} />
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: ACCENT.bg10, border: `1px solid ${ACCENT.border20}` }}>
                                    <Skull style={{ color: ACCENT.primary }} size={22} />
                                </div>
                                <div>
                                    <span className="text-[10px] uppercase tracking-widest text-gray-500">Layer 1</span>
                                    <h3 className="text-white font-bold text-lg">Chaos Room</h3>
                                </div>
                            </div>
                            <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                Unpredictable rules activate without warning. Break them, and penalties <strong style={{ color: ACCENT.primary }}>escalate exponentially</strong>. Spend tokens to survive — or gamble and endure.
                            </p>
                            <div className="text-[10px] uppercase tracking-widest font-bold" style={{ color: `${ACCENT.primary}99` }}>Always Active</div>
                        </GlowCard>

                        {/* Layer 2 — Games */}
                        <GlowCard accent="#fff">
                            <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r from-red-600 via-white to-slate-400" />
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                                    <Brain className="text-white" size={22} />
                                </div>
                                <div>
                                    <span className="text-[10px] uppercase tracking-widest text-gray-500">Layer 2</span>
                                    <h3 className="text-white font-bold text-lg">Borderland Games</h3>
                                </div>
                            </div>
                            <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                Two categories of challenges test different survival instincts. <span style={{ color: ACCENT.primary }} className="font-medium">Hearts ♥</span> attack your emotions. <span className="text-slate-300 font-medium">Spades ♠</span> test your logic.
                            </p>
                            <div className="flex gap-2">
                                <span className="text-[10px] px-2 py-0.5 rounded-full border" style={{ background: ACCENT.bg10, color: ACCENT.primary, borderColor: ACCENT.border20 }}>♥ Hearts</span>
                                <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 text-slate-300 border border-white/10">♠ Spades</span>
                            </div>
                        </GlowCard>

                        {/* Layer 3 — Tokens */}
                        <GlowCard accent="#f59e0b">
                            <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-500 opacity-60" />
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                                    <Coins className="text-amber-400" size={22} />
                                </div>
                                <div>
                                    <span className="text-[10px] uppercase tracking-widest text-gray-500">Layer 3</span>
                                    <h3 className="text-white font-bold text-lg">Tokens</h3>
                                </div>
                            </div>
                            <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                Tokens are everything. They decide who survives, who skips rules, who takes risks, and ultimately — <strong className="text-amber-400">who wins</strong>.
                            </p>
                            <div className="flex flex-wrap gap-1.5">
                                {['Survive', 'Skip Rules', 'Take Risks', 'Win'].map((t) => (
                                    <span key={t} className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">{t}</span>
                                ))}
                            </div>
                        </GlowCard>
                    </div>
                </div>
            </section>

            {/* ============================
          SECTION 4 — HEARTS & SPADES (Broad Teasers)
          ============================ */}
            <section id="games" className="relative py-24 md:py-32 px-4">
                <div className="absolute inset-0 pointer-events-none" style={{ background: `linear-gradient(135deg, ${ACCENT.bg10} 0%, transparent 40%, rgba(148,163,184,0.03) 100%)` }} />

                {/* Floating suit decor */}
                <FloatingCardSuit suit="♥" className="top-[10%] right-[5%] rotate-[10deg] hidden lg:block" />
                <FloatingCardSuit suit="♠" className="bottom-[10%] left-[5%] rotate-[-12deg] hidden lg:block" />

                <div className="max-w-5xl mx-auto relative">
                    <SectionTitle tag="Layer 2" title="The Games" subtitle="Two categories. One tests your heart. The other tests your mind." />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Hearts */}
                        <GlowCard accent={ACCENT.primary} className="relative overflow-hidden">
                            <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: `linear-gradient(to right, transparent, ${ACCENT.primary}, transparent)` }} />
                            <div className="text-5xl mb-4">♥</div>
                            <h3 className="text-2xl font-black text-white mb-2">Hearts</h3>
                            <p className="text-xs uppercase tracking-widest mb-4" style={{ color: ACCENT.primary }}>Psychological Warfare</p>
                            <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                Emotional pressure. Social manipulation. Trust and betrayal are your weapons. These games force impossible choices — sacrifice teammates, make silent votes, and bear burdens no one else will carry.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {['Betrayal', 'Sacrifice', 'Leadership', 'Pressure'].map((tag) => (
                                    <span key={tag} className="text-[10px] px-2.5 py-1 rounded-full font-medium border" style={{ background: ACCENT.bg10, color: ACCENT.primary, borderColor: ACCENT.border20 }}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </GlowCard>

                        {/* Spades */}
                        <GlowCard accent="#94a3b8" className="relative overflow-hidden">
                            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-slate-400 to-transparent" />
                            <div className="text-5xl mb-4">♠</div>
                            <h3 className="text-2xl font-black text-white mb-2">Spades</h3>
                            <p className="text-xs uppercase tracking-widest text-slate-400 mb-4">Logic & Intelligence</p>
                            <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                Pure intellect under pressure. Navigate calculated paths, solve deduction puzzles, and make split-second decisions. No emotion — just raw problem-solving skill.
                            </p>
                            <div className="flex gap-3">
                                <TokenBadge value="Win: +3" positive={true} />
                                <TokenBadge value="Fail: -2" positive={false} />
                            </div>
                        </GlowCard>
                    </div>
                </div>
            </section>

            {/* ============================
          SECTION 5 — CHAOS ROOM (Broad, intimidating)
          ============================ */}
            <section id="chaos" className="relative py-24 md:py-32 px-4">
                <div className="absolute inset-0 pointer-events-none" style={{ background: `linear-gradient(to bottom, ${ACCENT.bg10}, transparent 40%)` }} />
                <div className="max-w-5xl mx-auto relative">
                    <SectionTitle tag="Layer 1" title="The Chaos Room" subtitle="Rules change without warning. Break them, and you'll wish you hadn't." />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div>
                            <p className="text-gray-300 text-lg leading-relaxed mb-6">
                                The Chaos Room is <strong className="text-white">always active</strong>. Random rules stack on top of each other — physical, verbal, mental constraints that warp how you play the game.
                            </p>
                            <p className="text-gray-400 leading-relaxed mb-6">
                                You can spend tokens to skip a rule. But penalties for breaking them? They <span className="font-bold" style={{ color: ACCENT.primary }}>escalate exponentially</span>.
                            </p>
                            <p className="text-gray-500 text-sm italic">
                                What the rules are? You'll find out when the chaos begins.
                            </p>
                        </div>

                        {/* Penalty escalation */}
                        <GlowCard accent={ACCENT.primary} className="border-red-500/10">
                            <div className="flex items-center gap-2 mb-6">
                                <AlertTriangle style={{ color: ACCENT.primary }} size={20} />
                                <h3 className="text-white font-bold text-lg">Penalty Escalation</h3>
                            </div>
                            <div className="flex items-center justify-between gap-2">
                                {[
                                    { fail: '1st', penalty: '-1', color: `border-yellow-500/30 text-yellow-400` },
                                    { fail: '2nd', penalty: '-3', color: `border-orange-500/30 text-orange-400` },
                                    { fail: '3rd', penalty: '-5', color: `border-red-500/30 text-red-400` },
                                    { fail: '4th+', penalty: '☠️', color: `border-red-600/40 text-red-500` },
                                ].map((p, i) => (
                                    <React.Fragment key={p.fail}>
                                        <div className={`flex-1 text-center p-3 rounded-xl border ${p.color} bg-black/40`}>
                                            <div className="text-[10px] uppercase tracking-widest text-gray-500 mb-1">{p.fail}</div>
                                            <div className="text-xl font-black">{p.penalty}</div>
                                        </div>
                                        {i < 3 && <ChevronRight className="text-gray-700 flex-shrink-0" size={14} />}
                                    </React.Fragment>
                                ))}
                            </div>
                            <p className="text-center text-gray-600 text-xs mt-4 uppercase tracking-widest">Chaos never forgives</p>
                        </GlowCard>
                    </div>
                </div>
            </section>

            {/* ============================
          SECTION 6 — GAME FLOW TIMELINE
          ============================ */}
            <section id="flow" className="relative py-24 md:py-32 px-4">
                <div className="max-w-3xl mx-auto">
                    <SectionTitle tag="How It Works" title="Game Flow" subtitle="From chaos to climax — here's how the game unfolds." />

                    <div className="mt-12">
                        <TimelineItem phase="1" title="Chaos Only" desc="The game begins with pure chaos. No games, no mercy. Survive the chaos rules as they stack up." />
                        <TimelineItem phase="2" title="Borderland Unlock" desc="Games are unlocked. Teams must complete mandatory Hearts and Spades challenges." />
                        <TimelineItem phase="3" title="Risk Rounds" desc="High-reward, high-risk optional games become available. Go big or play it safe — strategy is everything." />
                        <TimelineItem phase="4" title="Final Token Tally" desc="The chaos ends. All tokens are counted. The team with the highest count claims victory." isLast />
                    </div>
                </div>
            </section>

            {/* ============================
          SECTION 7 — TOKEN ECONOMY
          ============================ */}
            <section id="tokens" className="relative py-24 md:py-32 px-4">
                <div className="max-w-5xl mx-auto">
                    <SectionTitle tag="Economy" title="Token System" subtitle="Every decision costs something. Every risk earns something." />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        {/* Token display */}
                        <div className="flex flex-col items-center">
                            <div className="relative">
                                <div className="w-40 h-40 md:w-48 md:h-48 rounded-full flex items-center justify-center"
                                    style={{ border: `2px solid ${ACCENT.border40}`, background: ACCENT.bg10, boxShadow: `0 0 60px ${ACCENT.glow}` }}>
                                    <div className="text-center">
                                        <div className="text-5xl md:text-6xl font-black font-mono" style={{ color: ACCENT.primary }}>10</div>
                                        <div className="text-[10px] uppercase tracking-[0.3em] text-gray-500 mt-1">Starting Tokens</div>
                                    </div>
                                </div>
                                <div className="absolute inset-0 rounded-full animate-spin" style={{ border: `1px solid ${ACCENT.border20}`, animationDuration: '15s' }} />
                                <div className="absolute -inset-4 rounded-full animate-spin" style={{ border: `1px solid ${ACCENT.bg10}`, animationDuration: '25s', animationDirection: 'reverse' }} />
                            </div>
                        </div>

                        {/* Token actions */}
                        <div className="space-y-4">
                            {[
                                { icon: <Sparkles size={18} />, label: 'Win Games', desc: 'Earn tokens by completing Hearts & Spades challenges', badge: '+2 to +5', positive: true },
                                { icon: <Shield size={18} />, label: 'Skip Chaos Rules', desc: 'Spend tokens to ignore an active chaos rule', badge: '-1 to -3', positive: false },
                                { icon: <AlertTriangle size={18} />, label: 'Penalties Escalate', desc: 'Each failure costs more than the last', badge: '-1 → -5', positive: false },
                                { icon: <Crown size={18} />, label: 'Most Tokens Wins', desc: 'Final tally decides the champion team', badge: '🏆', positive: true },
                            ].map((item) => (
                                <div key={item.label} className="flex items-start gap-4 p-4 rounded-xl border border-white/5 bg-[#0d0f0d] hover:border-red-500/20 transition-all">
                                    <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                                        style={{ background: ACCENT.bg10, border: `1px solid ${ACCENT.border20}`, color: ACCENT.primary }}>
                                        {item.icon}
                                    </div>
                                    <div className="flex-grow">
                                        <div className="flex items-center justify-between">
                                            <h4 className="text-white font-bold text-sm">{item.label}</h4>
                                            <TokenBadge value={item.badge} positive={item.positive} />
                                        </div>
                                        <p className="text-gray-500 text-xs mt-1">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ============================
          SECTION 8 — FINAL CTA
          ============================ */}
            <section id="cta" className="relative py-24 md:py-32 px-4 text-center overflow-hidden">
                <div className="absolute inset-0 pointer-events-none" style={{ background: `linear-gradient(to top, ${ACCENT.bg10}, transparent)` }} />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full blur-[100px]" style={{ background: ACCENT.bg10 }} aria-hidden="true" />
                <Particles />

                <div className="relative z-10 max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight borderland-glow leading-tight">
                        Will You Survive<br />the Chaos?
                    </h2>
                    <p className="mt-6 text-gray-400 text-lg">
                        Assemble your team. Enter the arena. Only the strongest strategy survives.
                    </p>

                    <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href={REGISTRATION_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative px-10 py-4 text-white font-bold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 text-lg"
                            style={{ background: ACCENT.primary, boxShadow: `0 0 40px ${ACCENT.glow}` }}
                        >
                            <span className="relative z-10 flex items-center justify-center gap-2">
                                Register Your Team <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </span>
                        </a>
                    </div>

                    <p className="mt-16 text-gray-700 text-xs uppercase tracking-[0.4em]">
                        Borderland — GFG VIT Bhopal × Advitya
                    </p>
                </div>
            </section>
        </div>
    );
};

export default BorderlandsPage;
