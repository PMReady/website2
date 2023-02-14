import React from 'react';
import "./TeamCard.scss";

const TeamCard= ({ name, role, link, image }) => {
  return (
    <div className="pm__team-card">
      <div className="pm__team-card_image">
        <a href={link}><img src={image} alt={name} /></a>
        <a href={link}><h2 className='linkText'>Find Out More!</h2></a>
      </div>
      
      <p>{ name }</p>
      <p>{ role }</p>
      <p><a href={link}>LinkedIn</a></p>
    </div>

  )
}

export default TeamCard;