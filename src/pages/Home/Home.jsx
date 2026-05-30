import "./Home.css";

function Home() {
  return (
    <section className="Home">
      <header>
        <div>
          <h1 className="finlandica">Axion</h1>
          <h2 className="rubik dim">TOOLS</h2>
        </div>
        <div></div>
      </header>

      <div className="cards-wrapper">
        <div className="card">
          <div className="card-logo">
            <div></div>
          </div>
          <div className="card-info">
            <h3 className="finlandica card-title">Card Title</h3>
            <p className="dim card-description">
              A short description of the functionalities
            </p>
            <p className="card-tag">Operational</p>
          </div>
        </div>

        <div className="card">
          <div className="card-logo">
            <div></div>
          </div>
          <div className="card-info">
            <h3 className="finlandica card-title">Card Title</h3>
            <p className="dim card-description">
              A short description of the functionalities
            </p>
            <p className="card-tag">Operational</p>
          </div>
        </div>

        <div className="card">
          <div className="card-logo">
            <div></div>
          </div>
          <div className="card-info">
            <h3 className="finlandica card-title">Card Title</h3>
            <p className="dim card-description">
              A short description of the functionalities
            </p>
            <p className="card-tag">Operational</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
