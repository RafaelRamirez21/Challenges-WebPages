import React from 'react';
import '../assets/styles/CardFrame.scss'

function CardChallenge({ item }) {
  return (
    <>
      <div className="card__frame">
        <iframe scrolling="no" className="card__frame--item" src={item.src} title={item.title}>
        </iframe>
        <p className="title__items">{item.title}</p>
        <a className="anchor" href={item.src}>
          <button className="button__frame">View</button>
        </a>

      </div>


    </>
  )
}

export default CardChallenge
