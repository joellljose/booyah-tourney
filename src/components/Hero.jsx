import { useEffect, useRef, useState } from 'react';

function AnimatedCounter({ target, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const animated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;
          let start = 0;
          const duration = 2000;
          const step = (timestamp) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(ease * target));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

function Embers() {
  const embers = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    bottom: `${Math.random() * 20}%`,
    size: `${2 + Math.random() * 4}px`,
    duration: `${4 + Math.random() * 6}s`,
    delay: `${Math.random() * 5}s`,
    tx: `${-30 + Math.random() * 60}px`,
    ty: `${-150 - Math.random() * 200}px`,
    color: ['#ff6a00', '#ff9500', '#ffd600', '#e53935'][Math.floor(Math.random() * 4)],
  }));

  return (
    <div className="embers-container">
      {embers.map((e) => (
        <div
          key={e.id}
          className="ember"
          style={{
            left: e.left,
            bottom: e.bottom,
            '--size': e.size,
            '--duration': e.duration,
            '--delay': e.delay,
            '--tx': e.tx,
            '--ty': e.ty,
            background: e.color,
            boxShadow: `0 0 6px ${e.color}`,
          }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-bg">
        <img src="./hero-bg.png" alt="Free Fire Battle" />
      </div>

      <div className="hero-gradient-orb orb-1" />
      <div className="hero-gradient-orb orb-2" />
      <div className="hero-gradient-orb orb-3" />

      <Embers />

      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="live-dot" />
            Free Fire Tournaments Live
          </div>

          <h1 className="hero-title">
            Dominate the<br />
            <span className="gradient-text">Battleground</span><br />
            Win <span className="highlight">Real Rewards</span>
          </h1>

          <p className="hero-description">
            Join the ultimate Free Fire tournament platform. Compete in Squad, Duo & Solo
            matches, climb the leaderboard, and earn exclusive rewards. Your Booyah moment awaits!
          </p>

          <div className="hero-buttons">
            <a href="#download" className="btn-primary">
              🔥 Download Now
            </a>
            <a href="#showcase" className="btn-secondary">
              ⚔️ View Tournaments
            </a>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <div className="stat-number">
                <AnimatedCounter target={50000} suffix="+" />
              </div>
              <div className="stat-label">Active Players</div>
            </div>
            <div className="hero-stat">
              <div className="stat-number">
                <AnimatedCounter target={1200} suffix="+" />
              </div>
              <div className="stat-label">Tournaments</div>
            </div>
            <div className="hero-stat">
              <div className="stat-number">
                ₹<AnimatedCounter target={25} suffix="L+" />
              </div>
              <div className="stat-label">Prize Pool</div>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-phone-glow" />
          <div className="hero-phone">
            <img src="./app-mockup.png" alt="Booyah Tourney App" />
          </div>

          <div className="hero-floating-card card-1">
            <div className="floating-card-header">
              <span className="fc-dot" />
              <span>Live Match</span>
            </div>
            <div className="floating-card-body">
              🎯 Squad Match • Bermuda
            </div>
          </div>

          <div className="hero-floating-card card-2">
            <div className="floating-card-header">
              <span className="fc-dot" />
              <span>Winner</span>
            </div>
            <div className="floating-card-body">
              🏆 Team Phoenix • Booyah!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
