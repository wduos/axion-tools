import calendarImg from "../../assets/calendar.png";

import "./Card.css";

function Card({ logoImg, imgAlt, cardDescription, cardTag }) {
  if (!logoImg || !imgAlt || !cardDescription || !cardTag) {
    return (
      <div className="Card empty">
        <div>
          <img src={calendarImg} alt="Imagem de calendário" />
        </div>
        <small className="dim center">More tools coming soon</small>
      </div>
    );
  }

  return (
    <div className="Card">
      <div>
        <img src={logoImg} alt={imgAlt} />
      </div>
      <small className="dim">{cardDescription}</small>
      <p className="card-tag">{cardTag}</p>
    </div>
  );
}

export default Card;
