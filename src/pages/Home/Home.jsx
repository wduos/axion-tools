import logoImg from "../../assets/logo.svg";
import inspectrLogoImg from "../../assets/inspectr-logo.svg";

import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";
import "./Home.css";

function Home() {
  const pageName = "Home";

  return (
    <>
      <Header currentPage={pageName} />

      <section className="Home">
        <img src={logoImg} alt="Axion's logo" />
        <div className="cards-wrp">
          <Card
            logoImg={inspectrLogoImg}
            imgAlt="Inspectr logo"
            cardDescription="More efficient inbound inspections"
            cardTag="Operational"
          />
          <Card />
        </div>
      </section>
    </>
  );
}

export default Home;
