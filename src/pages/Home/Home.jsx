import logoImg from "../../assets/logo.svg";
import inspectrLogoImg from "../../assets/inspectr-logo.svg";

import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";
import "./Home.css";

function Home() {
  const pageName = "Home";
  const cards = [
    {
      cardDescription: "Reliable inbound inspections",
      logoImg: inspectrLogoImg,
      imgAlt: "Inspectr logo",
      tags: ["Operational", "Mobile Compatible"],
    },
  ];

  return (
    <>
      <Header currentPage={pageName} />

      <section className="Home">
        {cards.map((card, index) => (
          <Card
            logoImg={card.logoImg}
            imgAlt={card.imgAlt}
            cardDescription={card.cardDescription}
            cardTags={card.tags}
            key={index}
          />
        ))}
        <Card />
      </section>
    </>
  );
}

export default Home;
