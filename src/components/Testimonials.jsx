import { useEffect, useRef } from 'react';

const testimonials = [
  {
    text: "Best Free Fire tournament app I've ever used! Won ₹5000 in my first week. The instant withdrawal to UPI is a game changer.",
    name: 'Arjun Patel',
    role: 'Grandmaster Player',
    avatar: '🎯',
    avatarBg: 'rgba(255,106,0,0.15)',
    stars: 5,
  },
  {
    text: "The anti-cheat system is solid — no hackers, fair matches. Our squad has been grinding here daily. Love the live leaderboard!",
    name: 'Priya Sharma',
    role: 'Squad Leader',
    avatar: '👑',
    avatarBg: 'rgba(255,214,0,0.12)',
    stars: 5,
  },
  {
    text: "Custom room codes are delivered instantly and the bracket tracking is insane. This is what competitive FF needed all along.",
    name: 'Rahul Gaming',
    role: 'Content Creator • 50K Subs',
    avatar: '🔥',
    avatarBg: 'rgba(229,57,53,0.12)',
    stars: 5,
  },
  {
    text: "From Bronze to Heroic, I improved so much by playing in these tournaments. The match analytics helped me fix my weak spots.",
    name: 'Sneha Verma',
    role: 'Diamond Rank Player',
    avatar: '💎',
    avatarBg: 'rgba(0,229,255,0.1)',
    stars: 5,
  },
  {
    text: "Withdrew ₹15,000 in a single month! The tournaments run smoothly and customer support is actually responsive. 10/10.",
    name: 'Vikram Singh',
    role: 'Tournament Regular',
    avatar: '💰',
    avatarBg: 'rgba(34,197,94,0.1)',
    stars: 5,
  },
  {
    text: "My guild runs weekly practice scrims here. The private tournament feature is perfect for organizing community events.",
    name: 'Rohan FF',
    role: 'Guild Master',
    avatar: '🛡️',
    avatarBg: 'rgba(139,92,246,0.1)',
    stars: 4,
  },
];

export default function Testimonials() {
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
    <section className="testimonials" id="testimonials" ref={sectionRef}>
      <div className="container">
        <div className="testimonials-header animate-on-scroll">
          <div className="section-badge">
            <span className="badge-dot" />
            Player Reviews
          </div>
          <h2 className="section-title">
            Trusted by<br />
            <span className="gradient-text">50,000+ Warriors</span>
          </h2>
          <p className="section-subtitle">
            Hear from the Free Fire community that trusts FF Arena for competitive matches.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div key={i} className={`testimonial-card animate-on-scroll delay-${i + 1}`}>
              <div className="testimonial-stars">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <span key={j}>⭐</span>
                ))}
              </div>
              <div className="quote-icon">❝</div>
              <p className="testimonial-text">{t.text}</p>
              <div className="testimonial-author">
                <div
                  className="testimonial-avatar"
                  style={{ background: t.avatarBg }}
                >
                  {t.avatar}
                </div>
                <div className="testimonial-author-info">
                  <div className="author-name">{t.name}</div>
                  <div className="author-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
