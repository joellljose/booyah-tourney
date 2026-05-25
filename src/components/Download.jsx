import { useEffect, useRef } from 'react';

export default function Download() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.2 }
    );
    const items = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    items?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="download" id="download" ref={sectionRef}>
      <div className="download-bg" />
      <div className="container">
        <div className="download-content">
          <div className="section-badge animate-on-scroll">
            <span className="badge-dot" />
            Get the App
          </div>

          <h2 className="download-title animate-on-scroll delay-1">
            Ready to Claim Your<br />
            <span className="gradient-text">Booyah?</span>
          </h2>

          <p className="download-subtitle animate-on-scroll delay-2">
            Download Booyah Tourney now and join 50,000+ Free Fire players competing in daily
            tournaments. Your next victory is one tap away.
          </p>

          <div className="download-buttons animate-on-scroll delay-3">
            <a href="/booyah-tourney.apk" className="download-btn primary-download" download>
              <span className="btn-icon">📱</span>
              <span className="btn-text">
                <span className="btn-small">Download APK</span>
                <span className="btn-large">Direct Install</span>
              </span>
            </a>

            <a href="#" className="download-btn disabled-btn" onClick={(e) => e.preventDefault()}>
              <span className="btn-icon">▶️</span>
              <span className="btn-text">
                <span className="btn-small">Coming Soon on</span>
                <span className="btn-large">Google Play</span>
              </span>
            </a>

            <a href="#" className="download-btn disabled-btn" onClick={(e) => e.preventDefault()}>
              <span className="btn-icon">🍎</span>
              <span className="btn-text">
                <span className="btn-small">Coming Soon on</span>
                <span className="btn-large">App Store</span>
              </span>
            </a>
          </div>

          <div className="download-features animate-on-scroll delay-4">
            <div className="download-feature">
              <span className="check">✓</span>
              Free to Download
            </div>
            <div className="download-feature">
              <span className="check">✓</span>
              Instant UPI Withdrawal
            </div>
            <div className="download-feature">
              <span className="check">✓</span>
              No Ads
            </div>
            <div className="download-feature">
              <span className="check">✓</span>
              24/7 Support
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
