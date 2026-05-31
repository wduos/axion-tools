import calendarImg from "../../assets/calendar.png";

import "./Card.css";

function Card({ logoImg, imgAlt, cardDescription, cardTags }) {
  if (!logoImg || !imgAlt || !cardDescription || !cardTags) {
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
      <div className="tags-wrp">
        {cardTags.map((tag, index) => (
          <p className="card-tag" key={index}>
            {tag}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Card;
