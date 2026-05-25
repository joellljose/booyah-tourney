export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#" className="footer-logo">
              <div className="footer-logo-icon">🔥</div>
              <div className="footer-logo-text">Booyah Tourney</div>
            </a>
            <p className="footer-desc">
              The ultimate Free Fire tournament platform. Compete, conquer, and claim rewards.
              Built by gamers, for gamers.
            </p>
            <div className="footer-socials">
              <a href="#" className="footer-social-link" aria-label="Instagram">📸</a>
              <a href="#" className="footer-social-link" aria-label="YouTube">▶️</a>
              <a href="#" className="footer-social-link" aria-label="Discord">💬</a>
              <a href="#" className="footer-social-link" aria-label="Twitter">🐦</a>
            </div>
          </div>

          <div className="footer-column">
            <h4>Tournament</h4>
            <ul>
              <li><a href="#">Solo Matches</a></li>
              <li><a href="#">Duo Battles</a></li>
              <li><a href="#">Squad Wars</a></li>
              <li><a href="#">Custom Rooms</a></li>
              <li><a href="#">Leaderboard</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Press Kit</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Support</h4>
            <ul>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Fair Play Policy</a></li>
              <li><a href="#">Report a Bug</a></li>
              <li><a href="#">Withdrawal FAQ</a></li>
              <li><a href="#">Community</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Booyah Tourney. All rights reserved. Not affiliated with Garena or Free Fire.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
