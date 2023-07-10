// ** Header.jsx represents the top section of the page ** //
import "./Header.css";

function Header() {
  return (
    <div className="header-bg-container">
      <header className="App-header">
        <h1 className="App-title">That's rain, right?</h1>
      </header>
      <div className="description-container">
        <p><span className="no-text">No.</span> It may be a different kind of downpour if you are under a tree and feel raindrops.</p>
        <p>Insects, called sharpshooters, use super-propulsion to shoot pee droplets 💦 at extremely high speeds.</p>
        <p>Because their diet is mostly water, these thirsty sharpshooters must constantly use the bathroom.</p><p>But as strange as this skill seems, these butt flickers give scientists insights into improving our daily lives.</p>
      </div>
    </div>
  );
}

export default Header;
