import { useEffect, useRef } from 'react';

const features = [
  {
    icon: '⚔️',
    title: 'Squad & Solo Matches',
    desc: 'Jump into Solo, Duo, or Squad tournaments across all Free Fire modes. Custom room codes delivered instantly.',
    iconBg: 'rgba(255,106,0,0.1)',
    iconBorder: 'rgba(255,106,0,0.2)',
  },
  {
    icon: '🏆',
    title: 'Live Leaderboards',
    desc: 'Real-time kill tracking, squad rankings, and match stats updated live. See your rise to the top instantly.',
    iconBg: 'rgba(255,214,0,0.08)',
    iconBorder: 'rgba(255,214,0,0.2)',
  },
  {
    icon: '💰',
    title: 'Win Real Rewards',
    desc: 'Cash prizes, diamonds, exclusive bundles, and emotes. Withdraw your winnings directly to UPI or wallet.',
    iconBg: 'rgba(34,197,94,0.08)',
    iconBorder: 'rgba(34,197,94,0.2)',
  },
  {
    icon: '📊',
    title: 'Match Analytics',
    desc: 'Deep dive into your performance — K/D ratio, headshot %, survival time, and damage dealt across matches.',
    iconBg: 'rgba(0,229,255,0.08)',
    iconBorder: 'rgba(0,229,255,0.2)',
  },
  {
    icon: '🛡️',
    title: 'Anti-Cheat System',
    desc: 'Advanced cheat detection ensures fair gameplay. Verified player IDs and automated result validation.',
    iconBg: 'rgba(229,57,53,0.08)',
    iconBorder: 'rgba(229,57,53,0.2)',
  },
  {
    icon: '🔔',
    title: 'Instant Notifications',
    desc: 'Get notified about upcoming tournaments, match starts, results, and prize disbursements in real-time.',
    iconBg: 'rgba(139,92,246,0.08)',
    iconBorder: 'rgba(139,92,246,0.2)',
  },
];

export default function Features() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15 }
    );

    const items = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    items?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="features" id="features" ref={sectionRef}>
      <div className="container">
        <div className="features-header animate-on-scroll">
          <div className="section-badge">
            <span className="badge-dot" />
            Loaded with Power
          </div>
          <h2 className="section-title">
            Everything You Need to<br />
            <span className="gradient-text">Dominate Free Fire</span>
          </h2>
          <p className="section-subtitle">
            From matchmaking to payouts, we've built the complete tournament ecosystem for Free Fire warriors.
          </p>
        </div>

        <div className="features-grid">
          {features.map((f, i) => (
            <div
              key={i}
              className={`feature-card animate-on-scroll delay-${i + 1}`}
            >
              <div
                className="feature-icon"
                style={{
                  background: f.iconBg,
                  border: `1px solid ${f.iconBorder}`,
                }}
              >
                {f.icon}
              </div>
              <h3 className="feature-title">{f.title}</h3>
              <p className="feature-desc">{f.desc}</p>
              <a href="#download" className="feature-link">
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
