import './App.css';

function App() {
  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="logo">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="#FF5C5C">
            <path d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
          </svg>
          <h1>RelieverRx</h1>
        </div>
        <div className="nav-links">
          <a href="#" className="active">Home</a>
          <a href="#">About</a>
          <a href="#">How it Works</a>
          <a href="#">Services</a>
        </div>
        <div className="auth-buttons">
          <button className="sign-in">Sign In</button>
          <button className="sign-up">Sign Up</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <h1>AI Powered Platform for<br />Reducing Drug<br />Overprescription</h1>
        <button className="get-started">Get Started</button>
      </section>

      {/* What We Do Section */}
      <section className="what-we-do">
        <h2>What We do</h2>
        <div className="features">
          <div className="feature">
            <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="#FF5C5C" strokeWidth="2">
              <rect x="4" y="4" width="16" height="12" rx="2" />
              <path d="M12 16v4M8 20h8M9 12l2-2 2 2 2-2" />
            </svg>
            <h3>AI-Powered Prescription Analysis</h3>
          </div>
          <div className="feature">
            <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="#FF5C5C" strokeWidth="2">
              <path d="M4 4h16v16H4zM4 12h16M12 4v16" />
            </svg>
            <h3>Data-Driven Insights for Doctors</h3>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
