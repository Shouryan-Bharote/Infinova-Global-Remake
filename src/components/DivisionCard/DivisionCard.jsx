import React from 'react';
import { useNavigate } from 'react-router-dom';
import './DivisionCard.css';

const DivisionCard = ({ logoSrc, logoAlt, iconSrc, iconAlt, title, description, path }) => {
  const navigate = useNavigate();

  return (
    <div className="card">
      <div
        className="division-logo-card cursor-pointer"
        onClick={() => navigate(path)}
      >
        <img
          src={logoSrc}
          alt={logoAlt}
          className="division-logo-img"
        />
      </div>

      <div className="division-info-card flex items-center flex-col">
        <img
          src={iconSrc}
          alt={iconAlt}
          className="division-info-img"
        />
        <h3 className="division-info-title">{title}</h3>
        <p className="division-info-text">{description}</p>
        <span
          className="link cursor-pointer"
          onClick={() => navigate(path)}
          style={{
            color: "#0056D2",
            fontWeight: "700"
          }}
        >
          Learn more →
        </span>
      </div>
    </div>
  );
};

export default DivisionCard;
