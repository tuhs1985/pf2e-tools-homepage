import "./App.css";

export default function App() {
  return (
    <div className="app-container">
      <div className="inner-container">
        <div className="main-card">
          <h1>PF2e Tools Hub</h1>
          <div className="tool-buttons">
            <a
              className="hub-btn"
              href="https://earnincome.tuhsrpg.com"
            >
              Earn Income Tool
            </a>
            <a
              className="hub-btn"
              href="https://crafting.tuhsrpg.com"
            >
              Crafting Tool
            </a>
          </div>
          <footer>
            <a href="https://github.com/tuhs1985/pf2e-tools-homepage">
              View on GitHub / Report Issues
            </a>
          </footer>
        </div>
      </div>
    </div>
  );
}