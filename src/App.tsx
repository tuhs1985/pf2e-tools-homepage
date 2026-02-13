import "./App.css";

export default function App() {
  return (
    <div className="app-container">
      <div className="inner-container">
        <div className="main-card">
          <h1>PF2e Suite Portal</h1>
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
			            <a
              className="hub-btn"
              href="https://pb2tp.tuhsrpg.com"
            >
              Pathbuilder 2e to Tableplop exporter
            </a>
          </div>
        </div>
          <footer className="footer">
            <a href="https://github.com/tuhs1985/pf2e-tools-homepage">
              View on GitHub / Report Issues
            </a>
			          
          <p className="paizo-notice">
            This website uses trademarks and/or copyrights owned by Paizo Inc., used under Paizo's Community Use Policy (paizo.com/licenses/communityuse). 
            We are expressly prohibited from charging you to use or access this content. This website is not published, endorsed, or specifically approved by Paizo. 
            For more information about Paizo Inc. and Paizo products, visit{' '}
            <a 
              href="https://paizo.com/" 
              target="_blank"
              rel="noopener noreferrer"
            >
              paizo.com
            </a>.
          </p>
          </footer>
      </div>
    </div>
  );
}