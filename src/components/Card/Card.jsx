import calendarImg from "../../assets/calendar.png";
import { Link } from "react-router-dom";
import "./Card.css";

function Card({ path, logoImg, imgAlt, cardDescription, cardTags }) {
  if (!path || !logoImg || !imgAlt || !cardDescription || !cardTags) {
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
    <Link className="Card" to={path}>
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
    </Link>
  );
}

export default Card;
