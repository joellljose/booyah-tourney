import { useEffect, useRef } from 'react';

const rounds = {
  quarter: [
    { teams: [{ seed: 1, name: 'Team Phoenix', score: 45, winner: true }, { seed: 8, name: 'Death Squad', score: 22 }] },
    { teams: [{ seed: 4, name: 'Booyah Kings', score: 38, winner: true }, { seed: 5, name: 'Rush Gamers', score: 30 }] },
    { teams: [{ seed: 3, name: 'Headshot Heroes', score: 41, winner: true }, { seed: 6, name: 'Lone Wolves', score: 28 }] },
    { teams: [{ seed: 2, name: 'Fire Demons', score: 50, winner: true }, { seed: 7, name: 'Bermuda Boys', score: 19 }] },
  ],
  semi: [
    { teams: [{ seed: 1, name: 'Team Phoenix', score: 52, winner: true }, { seed: 4, name: 'Booyah Kings', score: 38 }] },
    { teams: [{ seed: 2, name: 'Fire Demons', score: 48, winner: true }, { seed: 3, name: 'Headshot Heroes', score: 44 }] },
  ],
  final: [
    { teams: [{ seed: 1, name: 'Team Phoenix', score: 61, winner: true }, { seed: 2, name: 'Fire Demons', score: 55 }] },
  ],
};

function Match({ match }) {
  return (
    <div className="bracket-match">
      {match.teams.map((team, i) => (
        <div key={i} className={`bracket-team ${team.winner ? 'winner' : ''}`}>
          <div className="team-info">
            <span className="team-seed">{team.seed}</span>
            <span className="team-name">{team.name}</span>
          </div>
          <span className="team-score">{team.score}</span>
        </div>
      ))}
    </div>
  );
}

export default function Showcase() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    const items = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    items?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="showcase" id="showcase" ref={sectionRef}>
      <div className="container">
        <div className="showcase-header animate-on-scroll">
          <div className="section-badge">
            <span className="badge-dot" />
            Live Bracket
          </div>
          <h2 className="section-title">
            Track Your<br />
            <span className="gradient-text">Tournament Bracket</span>
          </h2>
          <p className="section-subtitle">
            Watch squads battle it out in real-time brackets. Every kill counts, every round matters.
          </p>
        </div>

        <div className="bracket-container animate-on-scroll delay-2">
          <div className="bracket-wrapper">
            {/* Quarter Finals */}
            <div className="bracket-round">
              <div className="bracket-round-title">Quarter Finals</div>
              {rounds.quarter.map((m, i) => (
                <Match key={i} match={m} />
              ))}
            </div>

            <div className="bracket-connector"><div /></div>

            {/* Semi Finals */}
            <div className="bracket-round">
              <div className="bracket-round-title">Semi Finals</div>
              {rounds.semi.map((m, i) => (
                <Match key={i} match={m} />
              ))}
            </div>

            <div className="bracket-connector"><div /></div>

            {/* Finals */}
            <div className="bracket-round">
              <div className="bracket-round-title">Grand Final</div>
              {rounds.final.map((m, i) => (
                <Match key={i} match={m} />
              ))}
            </div>

            <div className="bracket-connector"><div /></div>

            {/* Trophy */}
            <div className="bracket-trophy">
              <div className="trophy-icon">🏆</div>
              <div className="trophy-label">Champion</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
