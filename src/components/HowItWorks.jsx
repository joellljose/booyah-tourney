import { useEffect, useRef } from 'react';

const steps = [
  {
    num: '01',
    title: 'Download & Register',
    desc: 'Download Booyah Tourney APK directly. Sign up with your Free Fire ID and verify your account in seconds.',
  },
  {
    num: '02',
    title: 'Join a Tournament',
    desc: 'Browse daily Solo, Duo & Squad tournaments. Pick your match type, map, and entry fee. Get your custom room ID & password.',
  },
  {
    num: '03',
    title: 'Drop In & Fight',
    desc: 'Enter the custom room, loot up and fight. Your kills and placement are tracked in real-time on our live leaderboard.',
  },
  {
    num: '04',
    title: 'Win & Withdraw',
    desc: 'Claim your Booyah! Rewards are credited instantly. Withdraw prizes directly to your UPI, Paytm, or bank account.',
  },
];

export default function HowItWorks() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.15 }
    );
    const items = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    items?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="how-it-works" id="how-it-works" ref={sectionRef}>
      <div className="container">
        <div className="how-it-works-header animate-on-scroll">
          <div className="section-badge">
            <span className="badge-dot" />
            Battle Plan
          </div>
          <h2 className="section-title">
            How to Start<br />
            <span className="gradient-text">Your Journey</span>
          </h2>
          <p className="section-subtitle">
            From download to Booyah in 4 simple steps. Your path to Free Fire glory starts here.
          </p>
        </div>

        <div className="steps-container">
          {steps.map((step, i) => (
            <div key={i} className={`step-item animate-on-scroll delay-${i + 1}`}>
              <div className="step-number">{step.num}</div>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
