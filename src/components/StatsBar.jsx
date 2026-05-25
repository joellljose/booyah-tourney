import { useEffect, useRef, useState } from 'react';

function Counter({ target, suffix = '', prefix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let t0 = null;
          const dur = 2200;
          const frame = (ts) => {
            if (!t0) t0 = ts;
            const p = Math.min((ts - t0) / dur, 1);
            const ease = 1 - Math.pow(1 - p, 4);
            setCount(Math.floor(ease * target));
            if (p < 1) requestAnimationFrame(frame);
          };
          requestAnimationFrame(frame);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
}

const stats = [
  { value: 50000, suffix: '+', label: 'Active Warriors' },
  { value: 1200, suffix: '+', label: 'Tournaments Held' },
  { value: 25, suffix: 'L+', prefix: '₹', label: 'Prizes Distributed' },
  { value: 98, suffix: '%', label: 'Fair Play Rate' },
];

export default function StatsBar() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible');
        });
      },
      { threshold: 0.2 }
    );
    const items = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    items?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="stats-bar" ref={sectionRef}>
      <div className="container">
        <div className="stats-grid">
          {stats.map((s, i) => (
            <div key={i} className={`stat-item animate-on-scroll delay-${i + 1}`}>
              <div className="stat-value">
                <Counter target={s.value} suffix={s.suffix} prefix={s.prefix || ''} />
              </div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
