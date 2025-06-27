import "./App.css";

export default function App() {
  return (
    <div className="app-container">
      <div className="inner-container">
        <h1>PF2e Tools Hub</h1>
        <ul style={{ fontSize: "1.15em", lineHeight: "2em", listStyle: "none", paddingLeft: 0 }}>
          <li>
            <a href="https://earnincome.tuhsrpg.com">Earn Income Tool</a>
          </li>
          <li>
            <a href="https://crafting.tuhsrpg.com">Crafting Tool</a>
          </li>
        </ul>
        <footer>
          <a
            href="https://github.com/tuhs1985/pf2e-crafting"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub / Report Issues
          </a>
        </footer>
      </div>
    </div>
  );
}